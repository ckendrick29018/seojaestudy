"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { lessons } from "@/lib/data/lessons";
import type { CEFRLevel } from "@/lib/types";
import { estimateReadingTime } from "@/lib/utils";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { ClassicCard } from "@/components/home/ClassicCard";
import { XIcon } from "@/components/ui/icons";

/** Every lesson curated into the "Classics" collection, in library order. */
const CLASSICS = lessons.filter((lesson) => lesson.collection === "classics");

const LEVELS: CEFRLevel[] = ["A1", "A2", "B1", "B2"];
const LEVEL_RANK: Record<string, number> = { A1: 0, A2: 1, B1: 2, B2: 3 };

type SortKey = "default" | "title" | "level" | "shortest";

export function ClassicsClient() {
  const t = useT();
  const { isLessonComplete } = useProgress();

  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<CEFRLevel | "all">("all");
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>("default");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = CLASSICS.map((lesson, i) => ({ lesson, i }));

    if (q) {
      list = list.filter(
        ({ lesson }) =>
          lesson.title.toLowerCase().includes(q) ||
          (lesson.author ?? "").toLowerCase().includes(q) ||
          lesson.titleTranslation.toLowerCase().includes(q),
      );
    }
    if (level !== "all") list = list.filter(({ lesson }) => lesson.level === level);
    if (unreadOnly) list = list.filter(({ lesson }) => !isLessonComplete(lesson.slug));

    const sorted = [...list];
    if (sort === "title") {
      sorted.sort((a, b) => a.lesson.title.localeCompare(b.lesson.title) || a.i - b.i);
    } else if (sort === "level") {
      sorted.sort(
        (a, b) =>
          (LEVEL_RANK[a.lesson.level] ?? 0) - (LEVEL_RANK[b.lesson.level] ?? 0) || a.i - b.i,
      );
    } else if (sort === "shortest") {
      sorted.sort(
        (a, b) => estimateReadingTime(a.lesson) - estimateReadingTime(b.lesson) || a.i - b.i,
      );
    }
    return sorted.map((x) => x.lesson);
  }, [query, level, unreadOnly, sort, isLessonComplete]);

  const hasFilters = query.trim() !== "" || level !== "all" || unreadOnly || sort !== "default";
  const clearAll = () => {
    setQuery("");
    setLevel("all");
    setUnreadOnly(false);
    setSort("default");
  };

  const pill = (active: boolean) =>
    `rounded-full px-3 py-1 text-xs font-medium transition ${
      active ? "bg-rose text-cream" : "bg-white/70 text-charcoal/60 hover:bg-sage/40"
    }`;

  return (
    <div className="px-5 py-8">
      <h1 className="mb-1 font-serif text-2xl font-semibold text-charcoal">{t("classics")}</h1>
      <p className="mb-3 text-sm text-charcoal/50">{t("classicsSubtitle")}</p>
      <p className="mb-4 max-w-[62ch] text-sm leading-relaxed text-charcoal/60">
        {t("classicsIntro")}
      </p>

      {/* Crawlable per-level landing pages — also a quick jump for readers. */}
      <nav aria-label={t("classicsBrowseByLevel")} className="mb-5 flex flex-wrap items-center gap-1.5 text-xs">
        <span className="text-charcoal/45">{t("classicsBrowseByLevel")}:</span>
        {LEVELS.map((lv) => (
          <Link
            key={lv}
            href={`/classics/${lv.toLowerCase()}`}
            className="rounded-full bg-white/70 px-3 py-1 font-medium text-charcoal/60 transition hover:bg-sage/40 hover:text-charcoal"
          >
            {lv}
          </Link>
        ))}
      </nav>

      {/* Search / filter / sort — sticks below the header while the shelf scrolls. */}
      <div className="sticky top-[52px] z-20 -mx-5 mb-5 border-b border-rose-light/50 bg-cream/95 px-5 pb-3 pt-1 backdrop-blur">
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("classicsSearchPlaceholder")}
            aria-label={t("classicsSearchPlaceholder")}
            className="w-full rounded-full border border-rose-light/60 bg-white/80 px-4 py-2 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-rose-soft/60 focus:outline-none focus:ring-2 focus:ring-rose-light/50"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={t("close")}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-charcoal/40 hover:bg-sage/40 hover:text-charcoal"
            >
              <XIcon className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <button type="button" onClick={() => setLevel("all")} className={pill(level === "all")}>
            {t("classicsAllLevels")}
          </button>
          {LEVELS.map((lv) => (
            <button
              key={lv}
              type="button"
              onClick={() => setLevel((cur) => (cur === lv ? "all" : lv))}
              className={pill(level === lv)}
            >
              {lv}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setUnreadOnly((v) => !v)}
            aria-pressed={unreadOnly}
            className={`${pill(unreadOnly)} ml-1`}
          >
            {t("classicsUnreadOnly")}
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <label className="flex items-center gap-2 text-xs text-charcoal/50">
            {t("classicsSort")}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-full border border-rose-light/60 bg-white/80 px-2.5 py-1 text-xs font-medium text-charcoal/70 focus:outline-none focus:ring-2 focus:ring-rose-light/50"
            >
              <option value="default">{t("classicsSortDefault")}</option>
              <option value="title">{t("classicsSortTitle")}</option>
              <option value="level">{t("classicsSortLevel")}</option>
              <option value="shortest">{t("classicsSortShortest")}</option>
            </select>
          </label>
          <span className="text-xs text-charcoal/40">
            {t("classicsResultCount")
              .replace("{shown}", String(filtered.length))
              .replace("{total}", String(CLASSICS.length))}
          </span>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((lesson) => (
            <ClassicCard
              key={lesson.slug}
              lesson={lesson}
              complete={isLessonComplete(lesson.slug)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl2 border border-rose-light/50 bg-white/50 px-4 py-10 text-center">
          <p className="text-sm text-charcoal/60">{t("classicsNoMatches")}</p>
          {hasFilters && (
            <button
              type="button"
              onClick={clearAll}
              className="mt-3 text-sm font-medium text-rose underline-offset-4 hover:underline"
            >
              {t("classicsClearFilters")}
            </button>
          )}
        </div>
      )}

      {filtered.length > 0 && hasFilters && (
        <button
          type="button"
          onClick={clearAll}
          className="mt-6 block text-sm font-medium text-rose underline-offset-4 hover:underline"
        >
          {t("classicsClearFilters")}
        </button>
      )}

      <Link
        href="/library"
        className="mt-8 inline-block text-sm text-rose underline-offset-4 hover:underline"
      >
        {t("backToLibrary")}
      </Link>
    </div>
  );
}
