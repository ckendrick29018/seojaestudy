"use client";

import type { ReactNode } from "react";
import { lessons } from "@/lib/data/lessons";
import { useT } from "@/components/providers/LanguageProvider";
import { GlobeIcon, SpeakerIcon } from "@/components/ui/icons";

/**
 * Two static "screens" for the landing page: the bilingual reader (an English
 * line with its Korean translation revealed) and a vocab flashcard. Rebuilt in
 * plain markup from real lesson content rather than raster screenshots, so they
 * stay crisp at any size and track the design system for free.
 */
const DEMO =
  lessons.find((l) => l.slug === "gift-of-the-magi") ??
  lessons.find((l) => l.collection === "classics") ??
  lessons[0];

const LINES = DEMO.paragraphs[0].slice(0, 2);
const CARD = DEMO.vocab[0];

const GlobeDot = () => (
  <span className="ml-1 inline-flex h-4 w-4 -translate-y-0.5 items-center justify-center rounded-full align-middle text-rose-soft/70">
    <GlobeIcon className="h-3 w-3" />
  </span>
);

const ScreenBar = ({ title, trailing }: { title: string; trailing: ReactNode }) => (
  <div className="flex items-center justify-between gap-2 border-b border-rose-light/50 bg-white/70 px-4 py-2.5">
    <span className="truncate font-serif text-sm font-semibold text-charcoal">{title}</span>
    <span className="shrink-0">{trailing}</span>
  </div>
);

export function LandingPreview() {
  const t = useT();

  return (
    <section className="border-t border-rose-light/40 bg-white/40 px-6 py-12">
      <h2 className="mb-1.5 text-center font-serif text-2xl font-semibold text-charcoal">
        {t("landingPreviewTitle")}
      </h2>
      <p className="mx-auto mb-7 max-w-[34ch] text-center text-sm leading-relaxed text-charcoal/55">
        {t("landingPreviewBody")}
      </p>

      <div className="space-y-4">
        {/* Screen 1 — the bilingual reader */}
        <figure className="overflow-hidden rounded-3xl border border-rose-light/60 bg-cream shadow-soft">
          <ScreenBar
            title={DEMO.title}
            trailing={
              <span className="inline-flex items-center gap-1 rounded-full border border-rose-soft/40 bg-white px-2 py-0.5 text-[11px] font-medium text-rose">
                <SpeakerIcon className="h-3 w-3" aria-hidden /> {t("listen")}
              </span>
            }
          />
          <div className="space-y-3 px-4 py-4 font-serif text-[0.95rem] leading-7 text-charcoal">
            <p>
              {LINES[0].text}
              <GlobeDot />
              <span className="mt-1 block rounded-xl2 bg-sage/30 px-3 py-1.5 font-sans text-[0.8rem] leading-6 text-charcoal/80">
                {LINES[0].translation}
              </span>
            </p>
            {LINES[1] && (
              <p className="text-charcoal/85">
                {LINES[1].text}
                <GlobeDot />
              </p>
            )}
          </div>
          <figcaption className="sr-only">{t("landingPreviewReadCaption")}</figcaption>
        </figure>

        {/* Screen 2 — a vocab flashcard */}
        <figure className="overflow-hidden rounded-3xl border border-rose-light/60 bg-cream shadow-soft">
          <ScreenBar
            title={t("vocabulary")}
            trailing={
              <span className="text-[11px] font-medium text-charcoal/40">1 / {DEMO.vocab.length}</span>
            }
          />
          <div className="m-4 flex flex-col gap-1.5 rounded-xl2 border border-sage-dark/30 bg-sage/25 p-5 text-center">
            <p className="text-[11px] uppercase tracking-widest text-rose/60">{CARD.partOfSpeech}</p>
            <p className="font-serif text-2xl font-semibold text-charcoal">{CARD.term}</p>
            <p className="text-[0.95rem] font-medium text-charcoal/90">{CARD.translation}</p>
            <p className="mt-1 text-[0.8rem] italic text-charcoal/60">{CARD.example}</p>
            <p className="text-[0.72rem] text-charcoal/45">{CARD.exampleTranslation}</p>
          </div>
          <figcaption className="sr-only">{t("landingPreviewCardCaption")}</figcaption>
        </figure>
      </div>
    </section>
  );
}
