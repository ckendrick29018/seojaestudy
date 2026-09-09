"use client";

import { useMemo } from "react";
import Link from "next/link";
import { lessons } from "@/lib/data/lessons";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { useOnboarding } from "@/components/providers/OnboardingProvider";
import { ClassicsCarousel } from "./ClassicsCarousel";

const CLASSICS = lessons.filter((lesson) => lesson.collection === "classics");
const LEVEL_RANK: Record<string, number> = { A1: 0, A2: 1, B1: 2, B2: 3 };

/**
 * Fresh recommendations for a returning reader: classics they have not opened
 * yet, ordered by nearness to their chosen level. Renders nothing until they
 * have finished at least one story (before that, ClassicsSection is enough).
 */
export function NewForYouSection() {
  const t = useT();
  const { completedLessons, isLessonComplete } = useProgress();
  const { data } = useOnboarding();

  const picks = useMemo(() => {
    const unread = CLASSICS.filter((lesson) => !isLessonComplete(lesson.slug));
    if (!data.completed || !data.level) return unread;
    const target = LEVEL_RANK[data.level] ?? 0;
    return unread
      .map((lesson, i) => ({ lesson, i, d: Math.abs((LEVEL_RANK[lesson.level] ?? 0) - target) }))
      .sort((a, b) => a.d - b.d || a.i - b.i)
      .map((x) => x.lesson);
    // isLessonComplete's identity already changes with completedLessons.
  }, [isLessonComplete, data.completed, data.level]);

  if (completedLessons.length === 0 || picks.length === 0) return null;

  return (
    <section className="mt-8">
      <div className="mb-1 flex items-baseline justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose/70">
          {t("newForYouTitle")}
        </p>
        <Link
          href="/classics"
          className="shrink-0 text-xs font-medium text-rose underline-offset-4 hover:underline"
        >
          {t("classicsSeeAll")} →
        </Link>
      </div>
      <p className="mb-4 text-sm text-charcoal/60">{t("newForYouBody")}</p>
      <ClassicsCarousel lessons={picks} />
    </section>
  );
}
