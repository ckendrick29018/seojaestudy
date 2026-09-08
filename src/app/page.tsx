"use client";

import { lessons } from "@/lib/data/lessons";
import { LessonCard } from "@/components/home/LessonCard";
import { useT } from "@/components/providers/LanguageProvider";

export default function HomePage() {
  const t = useT();

  return (
    <div className="px-5 py-8">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-rose/70">{t("library")}</p>
      <h1 className="mb-2 font-serif text-3xl font-semibold text-charcoal">{t("appName")}</h1>
      <p className="mb-8 text-sm text-charcoal/60">{t("tagline")}</p>
      <div className="space-y-3">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.slug} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
