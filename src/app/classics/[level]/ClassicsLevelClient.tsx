"use client";

import Link from "next/link";
import { lessons } from "@/lib/data/lessons";
import type { CEFRLevel } from "@/lib/types";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { ClassicCard } from "@/components/home/ClassicCard";

const CLASSICS = lessons.filter((lesson) => lesson.collection === "classics");
const LEVELS: CEFRLevel[] = ["A1", "A2", "B1", "B2"];

export function ClassicsLevelClient({ level }: { level: CEFRLevel }) {
  const t = useT();
  const { isLessonComplete } = useProgress();

  const books = CLASSICS.filter((lesson) => lesson.level === level);

  return (
    <div className="px-5 py-8">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-rose/70">
        {t("classics")} · {level}
      </p>
      <h1 className="mb-2 font-serif text-2xl font-semibold text-charcoal">
        {t("classicsBrowseByLevel")} — {level}
      </h1>
      <p className="mb-4 max-w-[62ch] text-sm leading-relaxed text-charcoal/60">
        {t("classicsLevelIntro").replace(/\{level\}/g, level)}
      </p>

      <nav
        aria-label={t("classicsBrowseByLevel")}
        className="mb-6 flex flex-wrap items-center gap-1.5 text-xs"
      >
        <Link
          href="/classics"
          className="rounded-full bg-white/70 px-3 py-1 font-medium text-charcoal/60 transition hover:bg-sage/40 hover:text-charcoal"
        >
          {t("classicsAllBooks")}
        </Link>
        {LEVELS.map((lv) => (
          <Link
            key={lv}
            href={`/classics/${lv.toLowerCase()}`}
            aria-current={lv === level ? "page" : undefined}
            className={
              lv === level
                ? "rounded-full bg-rose px-3 py-1 font-medium text-cream"
                : "rounded-full bg-white/70 px-3 py-1 font-medium text-charcoal/60 transition hover:bg-sage/40 hover:text-charcoal"
            }
          >
            {lv}
          </Link>
        ))}
      </nav>

      {books.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {books.map((lesson) => (
            <ClassicCard key={lesson.slug} lesson={lesson} complete={isLessonComplete(lesson.slug)} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl2 border border-rose-light/50 bg-white/50 px-4 py-10 text-center text-sm text-charcoal/60">
          {t("classicsNoMatches")}
        </p>
      )}

      <Link
        href="/classics"
        className="mt-8 inline-block text-sm text-rose underline-offset-4 hover:underline"
      >
        {t("classicsAllBooks")}
      </Link>
    </div>
  );
}
