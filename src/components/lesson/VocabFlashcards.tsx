"use client";

import { useRef, useState } from "react";
import type { TouchEvent } from "react";
import type { Lesson } from "@/lib/types";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookmarkIcon, SpeakerIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import { speak, isSpeechSupported } from "@/lib/speech";

export function VocabFlashcards({ lesson }: { lesson: Lesson }) {
  const t = useT();
  const { saveWord, removeWord, isWordSaved } = useProgress();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const speechAvailable = isSpeechSupported();

  const term = lesson.vocab[index];
  const saved = isWordSaved(term.id);

  function goTo(newIndex: number) {
    setFlipped(false);
    setIndex((newIndex + lesson.vocab.length) % lesson.vocab.length);
  }

  function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(e: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      goTo(delta > 0 ? index - 1 : index + 1);
    }
    touchStartX.current = null;
  }

  function toggleSave() {
    if (saved) removeWord(term.id);
    else saveWord(term, lesson.slug);
  }

  return (
    <section className="border-t border-rose-light/40 px-5 py-8">
      <SectionHeading title={t("vocabulary")} />
      <div className="mb-3 flex items-center justify-between text-xs text-charcoal/40">
        <span>
          {index + 1} / {lesson.vocab.length}
        </span>
        <span>{t("flipCard")}</span>
      </div>

      <div
        className={`flip-card relative mx-auto h-56 w-full max-w-sm cursor-pointer select-none ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped((f) => !f)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front absolute inset-0 flex flex-col items-center justify-center rounded-xl2 border border-rose-light/50 bg-white p-6 text-center shadow-soft">
            <p className="mb-1 text-xs uppercase tracking-widest text-rose/60">{term.partOfSpeech}</p>
            <p className="font-serif text-3xl font-semibold text-charcoal">{term.term}</p>
            {term.reading && <p className="mt-1 text-sm text-charcoal/40">{term.reading}</p>}
          </div>
          <div className="flip-card-back absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl2 border border-sage-dark/40 bg-sage/30 p-6 text-center">
            <p className="text-lg font-medium text-charcoal">{term.translation}</p>
            <p className="text-sm italic text-charcoal/60">{term.example}</p>
            <p className="text-xs text-charcoal/50">{term.exampleTranslation}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={() => goTo(index - 1)}
          className="rounded-full border border-rose-light/50 p-2 text-charcoal/60 transition hover:bg-sage/20"
          aria-label="Previous card"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        {speechAvailable && (
          <button
            onClick={() => speak(term.term, lesson.targetLanguage)}
            className="rounded-full border border-rose-soft/40 p-2.5 text-rose transition hover:bg-rose-light/30"
            aria-label={t("listen")}
          >
            <SpeakerIcon className="h-4 w-4" />
          </button>
        )}
        <button
          onClick={toggleSave}
          className={`rounded-full border p-2.5 transition ${
            saved ? "border-gold bg-gold/20 text-gold" : "border-rose-light/50 text-charcoal/50 hover:bg-sage/20"
          }`}
          aria-label={t("save")}
        >
          <BookmarkIcon className="h-4 w-4" filled={saved} />
        </button>
        <button
          onClick={() => goTo(index + 1)}
          className="rounded-full border border-rose-light/50 p-2 text-charcoal/60 transition hover:bg-sage/20"
          aria-label="Next card"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
