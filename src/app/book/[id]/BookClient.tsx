"use client";

import Link from "next/link";
import type { BookView } from "@/lib/books";
import { nextUnfinishedIndex } from "@/lib/data/books";
import { fill } from "@/lib/utils";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Badge } from "@/components/ui/Badge";
import { BookChapterList } from "@/components/lesson/BookChapters";

export function BookClient({ book }: { book: BookView }) {
  const t = useT();
  const { isLessonComplete } = useProgress();

  const total = book.chapters.length;
  const doneCount = book.chapters.filter((c) => isLessonComplete(c.slug)).length;
  const nextIndex = nextUnfinishedIndex(book.chapters.map((c) => c.slug), isLessonComplete);
  const cta =
    doneCount === 0
      ? { index: 0, label: t("bookStartReading") }
      : nextIndex === undefined
        ? { index: 0, label: t("readAgain") }
        : { index: nextIndex, label: fill(t("bookContinueWithPart"), { n: nextIndex + 1 }) };
  const levels = Array.from(new Set(book.chapters.map((c) => c.level)));

  return (
    <div className="px-5 py-8 lg:mx-auto lg:max-w-3xl lg:px-8 lg:py-12">
      <div className="flex items-start gap-4 lg:gap-6">
        {book.coverImage ? (
          // Local static asset (see public/covers); next/image would refuse the SVG and needs no optimization here.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={book.coverImage}
            alt={book.author ? `${book.title} by ${book.author}` : book.title}
            className="h-36 w-auto shrink-0 rounded-lg border border-rose-light/60 shadow-soft lg:h-48"
          />
        ) : (
          <div className="text-5xl">{book.coverEmoji}</div>
        )}
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-1.5">
            <Badge tone="rose">{fill(t("bookPartsCount"), { n: total })}</Badge>
            {levels.map((level) => (
              <Badge key={level} tone="sage">
                {level}
              </Badge>
            ))}
          </div>
          <h1 className="font-serif text-2xl font-semibold text-charcoal lg:text-4xl">{book.title}</h1>
          <p className="text-sm text-charcoal/60 lg:text-base">{book.titleTranslation}</p>
          {book.author && <p className="mt-0.5 text-sm text-charcoal/45">{book.author}</p>}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
        <Link
          href={`/lesson/${book.chapters[cta.index].slug}`}
          className="inline-flex items-center justify-center rounded-full bg-rose px-6 py-2.5 text-sm font-medium text-cream shadow-soft transition hover:bg-rose/90 lg:text-base"
        >
          {cta.label}
        </Link>
        {doneCount > 0 && (
          <span className="text-sm text-charcoal/60">{fill(t("bookProgress"), { done: doneCount, total })}</span>
        )}
      </div>

      <div className="mt-8">
        <BookChapterList book={book} />
      </div>

      <Link href="/library" className="mt-8 inline-block text-sm text-rose underline-offset-4 hover:underline">
        {t("backToLibrary")}
      </Link>
    </div>
  );
}
