"use client";

import { useMemo, useState } from "react";
import type { Lesson, StorySentence } from "@/lib/types";
import { useT } from "@/components/providers/LanguageProvider";
import { speak, stopSpeaking, isSpeechSupported } from "@/lib/speech";
import { SpeakerIcon, StopIcon, GlobeIcon } from "@/components/ui/icons";

/** Strips leading/trailing punctuation so a tapped chunk can match the glossary. */
function normalizeWord(raw: string): string {
  return raw.toLowerCase().replace(/[^a-z가-힣0-9']/gi, "");
}

function buildWordGlossary(lesson: Lesson): Map<string, string> {
  const map = new Map<string, string>();
  for (const term of lesson.vocab) {
    map.set(normalizeWord(term.term), term.translation);
  }
  return map;
}

interface ActiveWord {
  display: string;
  translation: string | null;
}

export function StoryReader({ lesson }: { lesson: Lesson }) {
  const t = useT();
  const [speaking, setSpeaking] = useState(false);
  const [openSentenceId, setOpenSentenceId] = useState<string | null>(null);
  const [activeWord, setActiveWord] = useState<ActiveWord | null>(null);
  const glossary = useMemo(() => buildWordGlossary(lesson), [lesson]);
  const speechAvailable = isSpeechSupported();

  const fullText = useMemo(() => lesson.paragraphs.flat().map((s) => s.text).join(" "), [lesson]);

  function handleListen() {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
      return;
    }
    speak(fullText, lesson.targetLanguage);
    setSpeaking(true);
    // The Web Speech API's onend event isn't reliable enough across browsers
    // to depend on here, so we clear the "speaking" state after a rough
    // estimate based on text length. Tapping the button again always stops
    // playback immediately regardless of this timer.
    const approxDurationMs = Math.min(20000, fullText.length * 60);
    window.setTimeout(() => setSpeaking(false), approxDurationMs);
  }

  function handleWordTap(rawWord: string) {
    const key = normalizeWord(rawWord);
    if (!key) return;
    setActiveWord({ display: rawWord.replace(/[^a-z가-힣0-9']/gi, ""), translation: glossary.get(key) ?? null });
  }

  function toggleSentence(sentence: StorySentence) {
    setOpenSentenceId((current) => (current === sentence.id ? null : sentence.id));
  }

  return (
    <section className="px-5 py-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-2xl font-semibold text-charcoal">{t("story")}</h2>
        {speechAvailable && (
          <button
            onClick={handleListen}
            className="inline-flex items-center gap-1.5 rounded-full border border-rose-soft/40 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-rose transition hover:bg-rose-light/30"
          >
            {speaking ? <StopIcon className="h-3.5 w-3.5" /> : <SpeakerIcon className="h-3.5 w-3.5" />}
            {speaking ? t("stop") : t("listen")}
          </button>
        )}
      </div>

      <p className="mb-5 text-xs italic text-charcoal/40">{t("tapWordHint")}</p>

      <div className="space-y-4 font-serif text-[1.05rem] leading-8 text-charcoal">
        {lesson.paragraphs.map((paragraph, pIndex) => (
          <p key={pIndex}>
            {paragraph.map((sentence) => (
              <span key={sentence.id} className="mr-1">
                {sentence.text.split(/(\s+)/).map((chunk, i) =>
                  chunk.trim() === "" ? (
                    <span key={i}>{chunk}</span>
                  ) : (
                    <span
                      key={i}
                      onClick={() => handleWordTap(chunk)}
                      className="cursor-pointer rounded px-0.5 transition hover:bg-sage/50 active:bg-sage/70"
                    >
                      {chunk}
                    </span>
                  )
                )}
                <button
                  onClick={() => toggleSentence(sentence)}
                  aria-label={t("translationOf")}
                  className="ml-1 inline-flex h-5 w-5 -translate-y-0.5 items-center justify-center rounded-full align-middle text-rose-soft/70 transition hover:bg-rose-light/40 hover:text-rose"
                >
                  <GlobeIcon className="h-3.5 w-3.5" />
                </button>
                {openSentenceId === sentence.id && (
                  <span className="mt-1 block rounded-xl2 bg-sage/30 px-3 py-2 font-sans text-sm not-italic leading-6 text-charcoal/80">
                    {sentence.translation}
                  </span>
                )}
              </span>
            ))}
          </p>
        ))}
      </div>

      {activeWord && (
        <>
          <div className="fixed inset-0 z-30 bg-charcoal/10" onClick={() => setActiveWord(null)} />
          <div
            role="dialog"
            className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-app animate-fade-in rounded-t-xl2 border border-rose-light/60 bg-white p-5 shadow-soft"
          >
            <div className="mb-1 flex items-center justify-between">
              <span className="font-serif text-lg font-semibold text-charcoal">{activeWord.display}</span>
              <button onClick={() => setActiveWord(null)} className="text-sm text-charcoal/40 hover:text-charcoal" aria-label="Close">
                ✕
              </button>
            </div>
            <p className="text-charcoal/70">{activeWord.translation ?? t("translationOf")}</p>
          </div>
        </>
      )}
    </section>
  );
}
