"use client";

import Link from "next/link";
import { lessons } from "@/lib/data/lessons";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { ClassicCard } from "@/components/home/ClassicCard";

/** Every lesson curated into the "biography" collection, in library order. */
const BIOGRAPHIES = lessons.filter((lesson) => lesson.collection === "biography");

export function BiographiesClient() {
  const t = useT();
  const { isLessonComplete } = useProgress();

  return (
    <div className="px-5 py-8 lg:mx-auto lg:max-w-6xl lg:px-8 lg:py-12">
      <h1 className="mb-1 font-serif text-2xl font-semibold text-charcoal lg:text-4xl">
        {t("biographiesTitle")}
      </h1>
      <p className="mb-3 text-sm text-charcoal/50 lg:text-base">{t("biographiesSubtitle")}</p>
      <p className="mb-6 max-w-[62ch] text-sm leading-relaxed text-charcoal/60 lg:max-w-[70ch] lg:text-base">
        {t("biographiesIntro")}
      </p>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5">
        {BIOGRAPHIES.map((lesson) => (
          <ClassicCard key={lesson.slug} lesson={lesson} complete={isLessonComplete(lesson.slug)} />
        ))}
      </div>

      <Link
        href="/library"
        className="mt-8 inline-block text-sm text-rose underline-offset-4 hover:underline"
      >
        {t("backToLibrary")}
      </Link>
    </div>
  );
}
