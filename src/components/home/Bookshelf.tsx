"use client";

import { useMemo } from "react";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Lesson } from "@/lib/types";
import { lessons } from "@/lib/data/lessons";
import { useProgress } from "@/components/providers/ProgressProvider";

/** Muted, on-palette spine colours; picked per book from its slug. */
const SPINE_COLORS = ["#C57B57", "#B7C296", "#C9A66B", "#8CA3B8", "#A6614F", "#7C6A58"];

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i += 1) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

/** Completed lessons, as full Lesson objects, in library order. */
export function useCompletedBooks(): Lesson[] {
  const { completedLessons } = useProgress();
  return useMemo(() => {
    const done = new Set(completedLessons);
    return lessons.filter((lesson) => done.has(lesson.slug));
  }, [completedLessons]);
}

/**
 * One book on the shelf, seen spine-out. Sizes and colour are derived from
 * the slug so a given book always looks the same. `interactive` links to the
 * lesson; turn it off when the spine sits inside another link (the dashboard
 * preview card).
 */
export function BookSpine({
  lesson,
  index,
  interactive = true,
  compact = false,
}: {
  lesson: Lesson;
  index: number;
  interactive?: boolean;
  /** Smaller spines for the dashboard preview strip. */
  compact?: boolean;
}) {
  const h = hashSlug(lesson.slug);
  const height = compact ? 50 + (h % 3) * 5 : 74 + (h % 4) * 6; // 50–60 / 74–92px
  const width = compact ? 15 + ((h >> 3) % 3) * 3 : 20 + ((h >> 3) % 3) * 4; // 15–21 / 20–28px
  const leans = index % 7 === 6;

  const style: CSSProperties = {
    height,
    width,
    backgroundColor: SPINE_COLORS[h % SPINE_COLORS.length],
    transform: leans ? "rotate(4deg)" : undefined,
  };
  const cls =
    "group relative flex shrink-0 items-center justify-center overflow-hidden rounded-t-[3px] rounded-b-[1px] shadow-[inset_-3px_0_6px_rgba(0,0,0,0.18)]";

  const label = (
    <span
      className={`max-h-[82%] truncate px-0.5 font-semibold uppercase tracking-wide text-cream/95 [writing-mode:vertical-rl] ${
        compact ? "text-[7px]" : "text-[9px]"
      }`}
    >
      {lesson.title}
    </span>
  );
  const band = (
    <span className={`pointer-events-none absolute inset-x-0 h-px bg-cream/25 ${compact ? "top-1" : "top-1.5"}`} />
  );

  if (!interactive) {
    return (
      <span title={lesson.title} style={style} className={cls}>
        {band}
        {label}
      </span>
    );
  }
  return (
    <Link
      href={`/lesson/${lesson.slug}`}
      title={lesson.title}
      style={style}
      className={`${cls} transition hover:-translate-y-1`}
    >
      {band}
      {label}
    </Link>
  );
}

/** A wooden shelf holding a row of spines. */
export function Shelf({ books, startIndex = 0 }: { books: Lesson[]; startIndex?: number }) {
  return (
    <div>
      <div className="flex items-end gap-[3px] overflow-hidden rounded-t-sm px-3 pt-8">
        {books.map((book, i) => (
          <BookSpine key={book.slug} lesson={book} index={startIndex + i} />
        ))}
      </div>
      <div className="h-3 rounded-sm bg-gradient-to-b from-[#b98c63] to-[#a2744c] shadow-[0_6px_10px_rgba(44,44,44,0.18)]" />
    </div>
  );
}
