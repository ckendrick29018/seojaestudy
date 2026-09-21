"use client";

import Link from "next/link";
import type { BookContext, BookView } from "@/lib/books";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Badge } from "@/components/ui/Badge";
import { CheckIcon, ChevronRightIcon, LockIcon } from "@/components/ui/icons";
import { fill } from "@/lib/utils";

/**
 * Small link under a lesson's title that places it in its book
 * ("Part 2 of 6 · Jane Eyre"), pointing at the book page. Renders nothing for
 * a standalone story.
 */
export function BookPartLink({ context }: { context?: BookContext }) {
  const t = useT();
  if (!context) return null;
  const { book, index } = context;

  return (
    <Link
      href={`/book/${book.id}`}
      className="mt-2 inline-flex max-w-full items-center gap-1 rounded-full bg-rose-light/40 px-3 py-1 text-xs font-medium text-rose transition hover:bg-rose-light/70"
    >
      <span className="truncate">
        {fill(t("bookPartOf"), { n: index + 1, total: book.chapters.length })} · {book.title}
      </span>
      <ChevronRightIcon className="h-3 w-3 shrink-0" aria-hidden />
    </Link>
  );
}

/**
 * End-of-lesson block for a lesson that belongs to a book: a "read the next
 * part" card (the reason readers stay), then the full part list with their
 * progress. Renders nothing for a standalone story.
 */
export function BookChapters({ context }: { context?: BookContext }) {
  const t = useT();
  const { isLessonComplete } = useProgress();
  if (!context) return null;
  const { book, index } = context;
  const next = book.chapters[index + 1];
  const total = book.chapters.length;
  const doneCount = book.chapters.filter((c) => isLessonComplete(c.slug)).length;

  return (
    <section className="border-t border-rose-light/40 px-5 py-8" aria-labelledby="book-chapters-heading">
      <div className="mb-1 flex items-baseline justify-between gap-3">
        <h2 id="book-chapters-heading" className="text-xs font-semibold uppercase tracking-widest text-rose/70">
          {t("bookInThisBook")}
        </h2>
        <Link href={`/book/${book.id}`} className="shrink-0 text-xs font-medium text-rose underline-offset-4 hover:underline">
          {t("bookBackToBook")} →
        </Link>
      </div>
      <p className="mb-4 font-serif text-lg font-semibold text-charcoal">
        {book.title} <span className="text-sm font-normal text-charcoal/50">· {fill(t("bookProgress"), { done: doneCount, total })}</span>
      </p>

      {next ? (
        <Link
          href={`/lesson/${next.slug}`}
          className="group mb-4 flex items-center gap-3 rounded-xl2 border border-rose-soft/40 bg-gradient-to-br from-rose-light/45 via-white/70 to-sage/25 p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="min-w-0 flex-1">
            <p className="mb-0.5 flex flex-wrap items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-rose/70">
              {t("continueUpNext")} · {fill(t("bookPartOf"), { n: index + 2, total })}
              {!next.isFree && (
                <Badge tone="gold">
                  <LockIcon className="h-3 w-3" /> {t("premium")}
                </Badge>
              )}
            </p>
            <p className="truncate font-serif text-lg font-semibold text-charcoal">{next.title}</p>
            <p className="truncate text-sm text-charcoal/60">
              {next.titleTranslation} · {next.readingMinutes} {t("minRead")}
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-rose px-4 py-2 text-sm font-medium text-cream shadow-soft transition group-hover:bg-rose/90">
            {t("bookReadNext")}
            <ChevronRightIcon className="h-4 w-4" aria-hidden />
          </span>
        </Link>
      ) : (
        <p className="mb-4 rounded-xl2 bg-sage/25 px-4 py-3 text-sm text-charcoal/70">
          {doneCount === total ? t("bookAllRead") : t("bookMoreComing")}
        </p>
      )}

      <BookChapterList book={book} currentIndex={index} />
    </section>
  );
}

/** The numbered part list with completion ticks; `currentIndex` highlights the part being read. */
export function BookChapterList({ book, currentIndex }: { book: BookView; currentIndex?: number }) {
  const t = useT();
  const { isLessonComplete } = useProgress();

  return (
    <ol className="divide-y divide-rose-light/30 overflow-hidden rounded-xl2 border border-rose-light/50 bg-white/60">
      {book.chapters.map((chapter, i) => {
        const current = i === currentIndex;
        const done = isLessonComplete(chapter.slug);
        return (
          <li key={chapter.slug}>
            <Link
              href={`/lesson/${chapter.slug}`}
              aria-current={current ? "page" : undefined}
              className={`flex items-center gap-3 px-4 py-3 transition hover:bg-rose-light/20 ${current ? "bg-rose-light/25" : ""}`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                  done ? "bg-sage-dark text-cream" : "bg-rose-light/60 text-rose"
                }`}
                aria-hidden
              >
                {done ? <CheckIcon className="h-3.5 w-3.5" /> : i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-charcoal">{chapter.title}</span>
                <span className="block truncate text-xs text-charcoal/50">
                  {chapter.titleTranslation} · {chapter.level} · {chapter.readingMinutes} {t("minRead")}
                </span>
              </span>
              {!chapter.isFree && <LockIcon className="h-3.5 w-3.5 shrink-0 text-gold" aria-label={t("premium")} />}
              {current && (
                <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wide text-rose">
                  {fill(t("bookPartN"), { n: i + 1 })}
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
