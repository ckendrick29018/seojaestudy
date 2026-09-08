"use client";

import { useMemo } from "react";
import { lessons } from "@/lib/data/lessons";
import { LessonCard } from "@/components/home/LessonCard";
import { LessonOfDayCard } from "@/components/home/LessonOfDayCard";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { useOnboarding } from "@/components/providers/OnboardingProvider";
import { LEVELS, GOALS, labelFor } from "@/lib/onboarding";

/** CEFR ordering, so "near my level" can be measured as a distance. */
const LEVEL_RANK: Record<string, number> = { A1: 0, A2: 1, B1: 2, B2: 3 };

export default function HomePage() {
  const t = useT();
  const { lang } = useLanguage();
  const { data } = useOnboarding();

  const ordered = useMemo(() => {
    if (!data.completed || !data.level) return lessons;
    const target = LEVEL_RANK[data.level] ?? 0;
    // Stable sort: closest to the learner's level first, original order within a tie.
    return lessons
      .map((lesson, i) => ({ lesson, i, d: Math.abs((LEVEL_RANK[lesson.level] ?? 0) - target) }))
      .sort((a, b) => a.d - b.d || a.i - b.i)
      .map((x) => x.lesson);
  }, [data.completed, data.level]);

  const personalized =
    data.completed && data.level
      ? [
          labelFor(
            LEVELS.map((l) => ({ id: l.id, en: l.en, ko: l.ko })),
            data.level,
            lang,
          ),
          labelFor(GOALS, data.goal, lang),
        ]
          .filter(Boolean)
          .join(" · ")
      : null;

  return (
    <div className="px-5 py-8">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-rose/70">
        {personalized ? t("forYou") : t("library")}
      </p>
      <h1 className="mb-2 font-serif text-3xl font-semibold text-charcoal">{t("appName")}</h1>
      <p className="mb-8 text-sm text-charcoal/60">{personalized ?? t("tagline")}</p>
      <LessonOfDayCard />
      <div className="space-y-3">
        {ordered.map((lesson) => (
          <LessonCard key={lesson.slug} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
