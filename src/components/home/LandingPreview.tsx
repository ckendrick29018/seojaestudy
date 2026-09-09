"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { lessons } from "@/lib/data/lessons";
import { useT } from "@/components/providers/LanguageProvider";
import { ChevronLeftIcon, ChevronRightIcon, GlobeIcon, SpeakerIcon } from "@/components/ui/icons";

/**
 * Two working "screens" for the landing page, built from real lesson content:
 *  1. the bilingual reader — tap a highlighted word for its meaning, or tap the
 *     globe to reveal a whole line's translation;
 *  2. an interactive vocabulary flashcard — flip it, and step through the words.
 * Rebuilt in plain markup (no raster screenshots) so it stays crisp and tracks
 * the design system. The word glosses here are a small hand-picked sample; in a
 * real lesson every word is covered by the built-in offline dictionary.
 */
const DEMO =
  lessons.find((l) => l.slug === "gift-of-the-magi") ??
  lessons.find((l) => l.collection === "classics") ??
  lessons[0];

const LINES = DEMO.paragraphs[0].slice(0, 2);
const VOCAB = DEMO.vocab;

/** Sample word → meaning pairs for the first demo line (keyed by lower-case core). */
const GLOSSES: Record<string, string> = {
  christmas: "크리스마스, 성탄절",
  dollar: "달러 (미국의 화폐 단위)",
  cents: "센트 (1달러의 100분의 1)",
};

const core = (w: string) => w.toLowerCase().replace(/[^a-z]/g, "");

const ScreenBar = ({ title, trailing }: { title: string; trailing?: ReactNode }) => (
  <div className="flex items-center justify-between gap-2 border-b border-rose-light/50 bg-white/70 px-4 py-2.5">
    <span className="truncate font-serif text-sm font-semibold text-charcoal">{title}</span>
    {trailing && <span className="shrink-0">{trailing}</span>}
  </div>
);

function ReaderScreen() {
  const t = useT();
  const [openWord, setOpenWord] = useState<number | null>(null);
  const [lineRevealed, setLineRevealed] = useState(false);

  const words = LINES[0].text.split(/(\s+)/);
  const openChunk = openWord !== null ? words[openWord] : null;
  const openGloss = openChunk ? GLOSSES[core(openChunk)] : null;

  return (
    <figure className="overflow-hidden rounded-3xl border border-rose-light/60 bg-cream shadow-soft">
      <ScreenBar
        title={DEMO.title}
        trailing={
          <span className="inline-flex items-center gap-1 rounded-full border border-rose-soft/40 bg-white px-2 py-0.5 text-[11px] font-medium text-rose">
            <SpeakerIcon className="h-3 w-3" aria-hidden /> {t("listen")}
          </span>
        }
      />
      <div className="space-y-3 px-4 py-4 font-serif text-[0.95rem] leading-8 text-charcoal">
        <p>
          {words.map((chunk, i) => {
            if (chunk.trim() === "") return <span key={i}>{chunk}</span>;
            const gloss = GLOSSES[core(chunk)];
            if (!gloss) return <span key={i}>{chunk}</span>;
            const open = openWord === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setOpenWord(open ? null : i)}
                aria-expanded={open}
                className={`rounded px-0.5 font-medium transition ${
                  open ? "bg-sage/70 text-charcoal" : "bg-sage/30 text-charcoal hover:bg-sage/50"
                }`}
              >
                {chunk}
              </button>
            );
          })}
        </p>

        {openGloss ? (
          <p
            role="status"
            className="rounded-xl2 bg-sage/30 px-3 py-1.5 font-sans text-[0.82rem] not-italic leading-6 text-charcoal/80"
          >
            <span className="font-serif font-semibold text-charcoal">{core(openChunk!)}</span>
            <span className="text-charcoal/40"> — </span>
            {openGloss}
          </p>
        ) : (
          <p className="text-xs italic text-charcoal/45">{t("landingPreviewTapHint")}</p>
        )}

        {LINES[1] && (
          <p className="border-t border-rose-light/40 pt-3 text-charcoal/85">
            {LINES[1].text}
            <button
              type="button"
              onClick={() => setLineRevealed((v) => !v)}
              aria-label={t("translationOf")}
              aria-expanded={lineRevealed}
              className={`ml-1 inline-flex h-5 w-5 -translate-y-0.5 items-center justify-center rounded-full align-middle transition ${
                lineRevealed
                  ? "bg-rose-light/50 text-rose"
                  : "text-rose-soft/70 hover:bg-rose-light/40 hover:text-rose"
              }`}
            >
              <GlobeIcon className="h-3.5 w-3.5" />
            </button>
            {lineRevealed && (
              <span className="mt-1 block rounded-xl2 bg-sage/30 px-3 py-1.5 font-sans text-[0.8rem] not-italic leading-6 text-charcoal/80">
                {LINES[1].translation}
              </span>
            )}
          </p>
        )}
      </div>
      <figcaption className="sr-only">{t("landingPreviewReadCaption")}</figcaption>
    </figure>
  );
}

function FlashcardScreen() {
  const t = useT();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const term = VOCAB[index];

  const go = (delta: number) => {
    setFlipped(false);
    setIndex((i) => (i + delta + VOCAB.length) % VOCAB.length);
  };

  return (
    <figure className="overflow-hidden rounded-3xl border border-rose-light/60 bg-cream shadow-soft">
      <ScreenBar
        title={t("vocabulary")}
        trailing={
          <span className="text-[11px] font-medium text-charcoal/40">
            {index + 1} / {VOCAB.length}
          </span>
        }
      />
      <div className="p-4">
        <div
          className={`flip-card relative mx-auto h-52 w-full cursor-pointer select-none ${flipped ? "flipped" : ""}`}
          onClick={() => setFlipped((f) => !f)}
          role="button"
          tabIndex={0}
          aria-label={t("flipCard")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setFlipped((f) => !f);
            }
          }}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front absolute inset-0 flex flex-col items-center justify-center rounded-xl2 border border-rose-light/50 bg-white p-6 text-center shadow-soft">
              <p className="mb-1 text-[11px] uppercase tracking-widest text-rose/60">{term.partOfSpeech}</p>
              <p className="font-serif text-2xl font-semibold text-charcoal">{term.term}</p>
              {term.reading && <p className="mt-1 text-sm text-charcoal/40">{term.reading}</p>}
            </div>
            <div className="flip-card-back absolute inset-0 flex flex-col items-center justify-center gap-1.5 rounded-xl2 border border-sage-dark/40 bg-sage/30 p-5 text-center">
              <p className="text-[0.98rem] font-medium text-charcoal">{term.translation}</p>
              <p className="text-[0.8rem] italic text-charcoal/60">{term.example}</p>
              <p className="text-[0.72rem] text-charcoal/45">{term.exampleTranslation}</p>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            className="rounded-full border border-rose-light/50 p-2 text-charcoal/60 transition hover:bg-sage/20"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <span className="text-xs text-charcoal/40">{t("landingPreviewFlashcardHint")}</span>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            className="rounded-full border border-rose-light/50 p-2 text-charcoal/60 transition hover:bg-sage/20"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <figcaption className="sr-only">{t("landingPreviewCardCaption")}</figcaption>
    </figure>
  );
}

export function LandingPreview() {
  const t = useT();

  return (
    <section className="border-t border-rose-light/40 bg-white/40 px-6 py-12">
      <h2 className="mb-1.5 text-center font-serif text-2xl font-semibold text-charcoal">
        {t("landingPreviewTitle")}
      </h2>
      <p className="mx-auto mb-7 max-w-[36ch] text-center text-sm leading-relaxed text-charcoal/55">
        {t("landingPreviewBody")}
      </p>

      <div className="space-y-4">
        <ReaderScreen />
        <FlashcardScreen />
      </div>
    </section>
  );
}
