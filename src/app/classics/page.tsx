"use client";

import Link from "next/link";
import { lessons } from "@/lib/data/lessons";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { ClassicCard } from "@/components/home/ClassicCard";

/** Every lesson curated into the "Classics" collection, in library order. */
const classics = lessons.filter((lesson) => lesson.collection === "classics");

export default function ClassicsPage() {
  const t = useT();
  const { isLessonComplete } = useProgress();

  return (
    <div className="px-5 py-8">
      <h1 className="mb-1 font-serif text-2xl font-semibold text-charcoal">{t("classics")}</h1>
      <p className="mb-6 text-sm text-charcoal/50">{t("classicsSubtitle")}</p>

      <div className="grid grid-cols-2 gap-3">
        {classics.map((lesson) => (
          <ClassicCard
            key={lesson.slug}
            lesson={lesson}
            complete={isLessonComplete(lesson.slug)}
          />
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
