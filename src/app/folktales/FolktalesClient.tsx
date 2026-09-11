"use client";

import Link from "next/link";
import { lessons } from "@/lib/data/lessons";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { ClassicCard } from "@/components/home/ClassicCard";

/** Every lesson curated into the "folktales" collection, in library order. */
const FOLKTALES = lessons.filter((lesson) => lesson.collection === "folktales");

export function FolktalesClient() {
  const t = useT();
  const { isLessonComplete } = useProgress();

  return (
    <div className="px-5 py-8">
      <h1 className="mb-1 font-serif text-2xl font-semibold text-charcoal">
        {t("folktalesTitle")}
      </h1>
      <p className="mb-3 text-sm text-charcoal/50">{t("folktalesSubtitle")}</p>
      <p className="mb-6 max-w-[62ch] text-sm leading-relaxed text-charcoal/60">
        {t("folktalesIntro")}
      </p>

      <div className="grid grid-cols-2 gap-3">
        {FOLKTALES.map((lesson) => (
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
