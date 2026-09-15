"use client";

import { useEffect, useState } from "react";
import { dictionaryReady, loadDictionary, lookupWordSync } from "@/lib/dictionary/lazy";

/** Strips leading/trailing punctuation so a tapped chunk can match the glossary. */
function normalizeWord(raw: string): string {
  return raw.toLowerCase().replace(/[^a-z가-힣0-9']/gi, "");
}

/**
 * A single English quote, rendered word-by-word so any word can be tapped for
 * an offline gloss — the same "tap any word" dictionary the full lesson
 * reader uses (via the lazy-loaded chunk in `dictionary/lazy`), but without
 * StoryReader's audio/highlight/study-plan machinery: just a read-only gloss.
 */
export function QuoteTapText({ text, className = "" }: { text: string; className?: string }) {
  const [ready, setReady] = useState(dictionaryReady());
  const [active, setActive] = useState<{ word: string; gloss: string | null } | null>(null);

  useEffect(() => {
    if (ready) return;
    let cancelled = false;
    void loadDictionary().then(() => {
      if (cancelled) return;
      setReady(true);
      // Re-resolve a popup opened before the dictionary chunk finished loading.
      setActive((cur) => (cur && cur.gloss === null ? { ...cur, gloss: lookupWordSync(normalizeWord(cur.word), "en") } : cur));
    });
    return () => {
      cancelled = true;
    };
  }, [ready]);

  function handleTap(chunk: string) {
    const word = normalizeWord(chunk);
    if (!word) return;
    setActive({ word: chunk, gloss: lookupWordSync(word, "en") });
  }

  return (
    <span className={className}>
      {text.split(/(\s+)/).map((chunk, i) =>
        chunk.trim() === "" ? (
          <span key={i}>{chunk}</span>
        ) : (
          <span
            key={i}
            onClick={() => handleTap(chunk)}
            className="cursor-pointer rounded px-0.5 transition hover:bg-sage/50 active:bg-sage/70"
          >
            {chunk}
          </span>
        ),
      )}

      {active && (
        <>
          <div className="fixed inset-0 z-30 bg-charcoal/10" onClick={() => setActive(null)} />
          <div
            role="dialog"
            className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-app animate-fade-in rounded-t-xl2 border border-rose-light/60 bg-white p-5 shadow-soft"
          >
            <div className="mb-1 flex items-start justify-between gap-3">
              <span className="font-serif text-lg font-semibold text-charcoal">{active.word}</span>
              <button
                onClick={() => setActive(null)}
                className="shrink-0 text-sm text-charcoal/40 hover:text-charcoal"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            {active.gloss ? (
              <p className="text-charcoal/70">{active.gloss}</p>
            ) : ready ? (
              <p className="text-sm text-charcoal/50">No dictionary entry for this word yet.</p>
            ) : (
              <p className="text-sm text-charcoal/50">Loading dictionary…</p>
            )}
          </div>
        </>
      )}
    </span>
  );
}
