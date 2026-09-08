"use client";

import Link from "next/link";
import type { Lesson } from "@/lib/types";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { estimateReadingTime } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { CheckIcon, LockIcon } from "@/components/ui/icons";

export function LessonCard({ lesson }: { lesson: Lesson }) {
  const t = useT();
  const { isLessonComplete } = useProgress();
  const minutes = estimateReadingTime(lesson);
  const complete = isLessonComplete(lesson.slug);

  return (
    <Link
      href={`/lesson/${lesson.slug}`}
      className="group flex items-center gap-4 rounded-xl2 border border-rose-light/50 bg-white/60 p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl2 bg-sage/50 text-2xl">
        {lesson.coverImage ? (
          // Local static asset (see public/covers); next/image would refuse the SVG and needs no optimization here.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={lesson.coverImage} alt="" className="h-full w-full object-cover" />
        ) : (
          lesson.coverEmoji
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-1.5">
          <Badge tone="rose">{lesson.topic}</Badge>
          <Badge tone="sage">{lesson.level}</Badge>
          {!lesson.isFree && (
            <Badge tone="gold">
              <LockIcon className="h-3 w-3" /> {t("premium")}
            </Badge>
          )}
          {complete && (
            <Badge tone="gold">
              <CheckIcon className="h-3 w-3" /> {t("completed")}
            </Badge>
          )}
        </div>
        <h3 className="truncate font-serif text-lg font-semibold text-charcoal">{lesson.title}</h3>
        <p className="truncate text-sm text-charcoal/60">
          {lesson.titleTranslation} · {minutes} {t("minRead")}
        </p>
      </div>
    </Link>
  );
}
