"use client";

import type { Lesson } from "@/lib/types";
import type { BookContext } from "@/lib/books";
import { Badge } from "@/components/ui/Badge";
import { ClockIcon } from "@/components/ui/icons";
import { useT } from "@/components/providers/LanguageProvider";
import { estimateReadingTime } from "@/lib/utils";
import { BookPartLink } from "./BookChapters";

export function LessonHero({ lesson, bookContext }: { lesson: Lesson; bookContext?: BookContext }) {
  const t = useT();
  const minutes = estimateReadingTime(lesson);

  return (
    <section className="px-5 pb-6 pt-8 text-center">
      <div className="mb-3 flex items-center justify-center gap-2">
        <Badge tone="rose">{lesson.topic}</Badge>
        <Badge tone="sage">{lesson.level}</Badge>
      </div>
      {lesson.coverImage ? (
        // Local static asset (see public/covers); next/image would refuse the SVG and needs no optimization here.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={lesson.coverImage}
          alt={lesson.author ? `${lesson.title} by ${lesson.author}` : lesson.title}
          className="mx-auto mb-3 h-40 w-auto rounded-xl2 border border-rose-light/60 shadow-soft"
        />
      ) : (
        <div className="mb-2 text-4xl">{lesson.coverEmoji}</div>
      )}
      <h1 className="mb-1 font-serif text-3xl font-semibold text-charcoal">{lesson.title}</h1>
      <p className="text-base text-charcoal/60">{lesson.titleTranslation}</p>
      {lesson.author && <p className="mt-0.5 text-sm text-charcoal/45">{lesson.author}</p>}
      <BookPartLink context={bookContext} />
      <div className="mt-3 inline-flex items-center gap-1.5 text-sm text-charcoal/50">
        <ClockIcon className="h-4 w-4" />
        <span>
          {minutes} {t("minRead")}
        </span>
      </div>
    </section>
  );
}
