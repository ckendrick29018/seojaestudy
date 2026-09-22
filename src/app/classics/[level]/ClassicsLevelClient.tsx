"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lessonIndex as lessons } from "@/lib/data/lessons-index.generated";
import type { CEFRLevel } from "@/lib/types";
import { groupBookChapters } from "@/lib/books";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { localizePath } from "@/lib/locale-path";
import { ClassicCard } from "@/components/home/ClassicCard";

const CLASSICS = groupBookChapters(lessons.filter((lesson) => lesson.collection === "classics"));
const LEVELS: CEFRLevel[] = ["A1", "A2", "B1", "B2"];

export function ClassicsLevelClient({ level }: { level: CEFRLevel }) {
  const t = useT();
  const pathname = usePathname();
  const { isLessonComplete } = useProgress();

  const books = CLASSICS.filter((lesson) => lesson.level === level);

  return (
    <div className="px-5 py-8 lg:mx-auto lg:max-w-6xl lg:px-8 lg:py-12">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-rose/70">
        {t("classics")} · {level}
      </p>
      <h1 className="mb-2 font-serif text-2xl font-semibold text-charcoal lg:text-4xl">
        {t("classicsBrowseByLevel")} — {level}
      </h1>
      <p className="mb-4 max-w-[62ch] text-sm leading-relaxed text-charcoal/60 lg:max-w-[70ch] lg:text-base">
        {t("classicsLevelIntro").replace(/\{level\}/g, level)}
      </p>

      <nav
        aria-label={t("classicsBrowseByLevel")}
        className="mb-6 flex flex-wrap items-center gap-1.5 text-xs"
      >
        <Link
          href={localizePath("/classics", pathname)}
          className="rounded-full bg-white/70 px-3 py-1 font-medium text-charcoal/60 transition hover:bg-sage/40 hover:text-charcoal"
        >
          {t("classicsAllBooks")}
        </Link>
        {LEVELS.map((lv) => (
          <Link
            key={lv}
            href={localizePath(`/classics/${lv.toLowerCase()}`, pathname)}
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
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5">
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
        href={localizePath("/classics", pathname)}
        className="mt-8 inline-block text-sm text-rose underline-offset-4 hover:underline"
      >
        {t("classicsAllBooks")}
      </Link>
    </div>
  );
}
