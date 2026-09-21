"use client";

import { useMemo } from "react";
import Link from "next/link";
import { lessonIndex } from "@/lib/data/lessons-index.generated";
import { BOOK_VIEWS, type BookChapterView, type BookView } from "@/lib/books";
import { findBookForLesson, nextUnfinishedIndex } from "@/lib/data/books";
import { useReadingLog } from "@/lib/reading-log";
import { fill } from "@/lib/utils";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Badge } from "@/components/ui/Badge";
import { ChevronRightIcon, LockIcon } from "@/components/ui/icons";

/** How many cards the dashboard shows; anything further down is one tap away in the library. */
const MAX_CARDS = 3;
/**
 * A standalone story opened longer ago than this and never finished is stale,
 * not "continue". Kept short because "complete" is a button the reader has to
 * press, so plenty of finished stories look unfinished here.
 */
const STANDALONE_WINDOW_MS = 14 * 24 * 60 * 60 * 1000;

interface Entry {
  key: string;
  /** "resume": opened but not finished. "next": the part after the last one finished. */
  kind: "resume" | "next";
  slug: string;
  title: string;
  detail: string;
  emoji: string;
  isFree: boolean;
  book?: BookView;
  /** 0-based index of `slug` within `book`. */
  part?: number;
  doneCount?: number;
  /** Sort key, newest first: last-opened epoch ms, or (when only completion is known) a small ordinal. */
  at: number;
}

/**
 * Dashboard row for picking a book back up. One card per book in progress —
 * the part they left open, else the part after the last one they finished —
 * plus any standalone story they opened recently and never completed. Renders
 * nothing for a brand-new reader.
 */
export function ContinueReadingSection() {
  const t = useT();
  const log = useReadingLog();
  const { completedLessons, isLessonComplete } = useProgress();

  const entries = useMemo(() => {
    const doneOrder = new Map(completedLessons.map((slug, i) => [slug, i]));
    const now = Date.now();
    const out: Entry[] = [];

    for (const book of BOOK_VIEWS) {
      const chapters = book.chapters;
      const done = chapters.filter((c) => isLessonComplete(c.slug));
      if (done.length === chapters.length) continue;

      const open = chapters
        .filter((c) => !isLessonComplete(c.slug) && log[c.slug])
        .sort((a, b) => (log[b.slug] ?? 0) - (log[a.slug] ?? 0))[0];
      if (done.length === 0 && !open) continue;

      const nextIndex = nextUnfinishedIndex(chapters.map((c) => c.slug), isLessonComplete);
      const target: BookChapterView | undefined = open ?? (nextIndex === undefined ? undefined : chapters[nextIndex]);
      if (!target) continue;

      const lastOpened = Math.max(0, ...chapters.map((c) => log[c.slug] ?? 0));
      const lastFinished = Math.max(-1, ...done.map((c) => doneOrder.get(c.slug) ?? -1));
      out.push({
        key: `book:${book.id}`,
        kind: open ? "resume" : "next",
        slug: target.slug,
        title: book.title,
        detail: target.title,
        emoji: book.coverEmoji,
        isFree: target.isFree,
        book,
        part: chapters.indexOf(target),
        doneCount: done.length,
        at: lastOpened || lastFinished,
      });
    }

    for (const lesson of lessonIndex) {
      const openedAt = log[lesson.slug];
      if (!openedAt || now - openedAt > STANDALONE_WINDOW_MS) continue;
      if (findBookForLesson(lesson.slug) || isLessonComplete(lesson.slug)) continue;
      out.push({
        key: `lesson:${lesson.slug}`,
        kind: "resume",
        slug: lesson.slug,
        title: lesson.title,
        detail: lesson.author ?? lesson.topic,
        emoji: lesson.coverEmoji,
        isFree: lesson.isFree,
        at: openedAt,
      });
    }

    return out.sort((a, b) => b.at - a.at).slice(0, MAX_CARDS);
    // isLessonComplete's identity already changes with completedLessons.
  }, [log, completedLessons, isLessonComplete]);

  if (entries.length === 0) return null;

  return (
    <section className="mb-8" aria-labelledby="continue-reading-heading">
      <p id="continue-reading-heading" className="mb-3 text-xs font-semibold uppercase tracking-widest text-rose/70 lg:text-sm">
        {t("continueReadingTitle")}
      </p>
      <ul className="grid gap-3 lg:grid-cols-3 lg:gap-4">
        {entries.map((entry) => (
          <li key={entry.key}>
            <Link
              href={`/lesson/${entry.slug}`}
              className="group flex h-full items-center gap-4 rounded-xl2 border border-rose-soft/40 bg-white/70 p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl2 border border-rose-light/50 bg-rose-light/25 text-2xl">
                {entry.emoji}
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-0.5 flex flex-wrap items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-rose/70">
                  {entry.kind === "resume" ? t("continueResume") : t("continueUpNext")}
                  {entry.book && entry.part !== undefined && (
                    <> · {fill(t("bookPartOf"), { n: entry.part + 1, total: entry.book.chapters.length })}</>
                  )}
                  {!entry.isFree && (
                    <Badge tone="gold">
                      <LockIcon className="h-3 w-3" /> {t("premium")}
                    </Badge>
                  )}
                </p>
                <h3 className="truncate font-serif text-lg font-semibold text-charcoal">{entry.title}</h3>
                <p className="truncate text-sm text-charcoal/60">{entry.detail}</p>
                {entry.book && entry.doneCount !== undefined && (
                  <div
                    className="mt-2 flex gap-1"
                    role="img"
                    aria-label={fill(t("bookProgress"), { done: entry.doneCount, total: entry.book.chapters.length })}
                  >
                    {entry.book.chapters.map((c) => (
                      <span
                        key={c.slug}
                        className={`h-1.5 flex-1 rounded-full ${isLessonComplete(c.slug) ? "bg-sage-dark" : "bg-rose-light/70"}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              <ChevronRightIcon className="h-4 w-4 shrink-0 text-charcoal/30 transition group-hover:translate-x-0.5 group-hover:text-rose" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
