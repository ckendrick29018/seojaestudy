"use client";

import { useMemo } from "react";
import { lessonIndex as lessons } from "@/lib/data/lessons-index.generated";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { ClassicsCarousel } from "./ClassicsCarousel";

/**
 * Dashboard strip for lessons the reader has bookmarked with "Add to
 * library" but not finished yet. Renders nothing until at least one lesson
 * is saved, and drops a lesson the moment it's completed (it belongs on the
 * bookshelf then, not here).
 */
export function SavedForLaterSection() {
  const t = useT();
  const { savedLessons, isLessonComplete } = useProgress();

  const picks = useMemo(() => {
    const saved = new Set(savedLessons);
    return lessons.filter((lesson) => saved.has(lesson.slug) && !isLessonComplete(lesson.slug));
  }, [savedLessons, isLessonComplete]);

  if (picks.length === 0) return null;

  return (
    <section className="mt-8 lg:mt-12">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-rose/70 lg:text-sm">
        {t("savedForLaterTitle")}
      </p>
      <p className="mb-4 text-sm text-charcoal/60 lg:mb-5 lg:text-base">{t("savedForLaterBody")}</p>
      <ClassicsCarousel lessons={picks} />
    </section>
  );
}
