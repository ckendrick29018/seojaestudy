"use client";

import Link from "next/link";
import { lessons } from "@/lib/data/lessons";
import { useProgress } from "@/components/providers/ProgressProvider";
import { useT } from "@/components/providers/LanguageProvider";
import { SpeakerIcon } from "@/components/ui/icons";
import { narrate, useSpeechSupported } from "@/lib/speech";
import type { LangCode } from "@/lib/types";

export default function SavedWordsPage() {
  const { savedWords, removeWord } = useProgress();
  const t = useT();
  const speechAvailable = useSpeechSupported();

  function lessonTargetLang(slug: string): LangCode {
    return lessons.find((l) => l.slug === slug)?.targetLanguage ?? "en";
  }

  return (
    <div className="px-5 py-8">
      <h1 className="mb-1 font-serif text-2xl font-semibold text-charcoal">{t("savedWords")}</h1>
      <p className="mb-6 text-sm text-charcoal/50">
        {savedWords.length} {t("wordCount")}
      </p>

      {savedWords.length === 0 ? (
        <p className="rounded-xl2 border border-dashed border-rose-light/60 p-6 text-center text-sm text-charcoal/50">
          {t("noSavedWords")}
        </p>
      ) : (
        <ul className="space-y-3">
          {savedWords.map((word) => (
            <li key={word.id} className="flex items-start justify-between gap-3 rounded-xl2 border border-rose-light/50 bg-white/60 p-4">
              <div className="min-w-0">
                <p className="font-serif text-lg font-semibold text-charcoal">{word.term}</p>
                <p className="text-sm text-charcoal/60">{word.translation}</p>
                <p className="mt-1 truncate text-xs italic text-charcoal/40">{word.example}</p>
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                {speechAvailable && (
                  <button
                    onClick={() => narrate([word.term], lessonTargetLang(word.lessonSlug))}
                    className="rounded-full p-2 text-rose transition hover:bg-rose-light/30"
                    aria-label={t("listen")}
                  >
                    <SpeakerIcon className="h-4 w-4" />
                  </button>
                )}
                <button
                  onClick={() => removeWord(word.id)}
                  className="rounded-full px-2.5 py-1 text-xs text-charcoal/40 transition hover:bg-sage/30"
                >
                  {t("removeWord")}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <Link href="/" className="mt-8 inline-block text-sm text-rose underline-offset-4 hover:underline">
        {t("backToLibrary")}
      </Link>
    </div>
  );
}
