"use client";

import Link from "next/link";
import { lessons } from "@/lib/data/lessons";
import type { Lesson } from "@/lib/types";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { estimateReadingTime } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { CheckIcon, LockIcon } from "@/components/ui/icons";

/** Lessons curated into the "Classics" collection, in library order. */
const classics = lessons.filter((lesson) => lesson.collection === "classics");

/**
 * Home-page shelf for public-domain literary adaptations. Renders nothing
 * until at least one lesson opts in with `collection: "classics"`, so it can
 * ship ahead of the rest of the backlog (see CONTENT_BACKLOG.md).
 */
export function ClassicsSection() {
  const t = useT();
  const { isLessonComplete } = useProgress();

  if (classics.length === 0) return null;

  return (
    <section className="mt-10">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-rose/70">
        {t("classics")}
      </p>
      <p className="mb-4 text-sm text-charcoal/60">{t("classicsSubtitle")}</p>
      <div className="grid grid-cols-2 gap-3">
        {classics.map((lesson) => (
          <ClassicCard
            key={lesson.slug}
            lesson={lesson}
            complete={isLessonComplete(lesson.slug)}
          />
        ))}
      </div>
    </section>
  );
}

function ClassicCard({ lesson, complete }: { lesson: Lesson; complete: boolean }) {
  const t = useT();
  const minutes = estimateReadingTime(lesson);

  return (
    <Link
      href={`/lesson/${lesson.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl2 border border-rose-light/50 bg-white/60 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-sage/40">
        {lesson.coverImage ? (
          // Local static asset (see public/covers); next/image would refuse the SVG and needs no optimization here.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={lesson.coverImage}
            alt=""
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-5xl">
            {lesson.coverEmoji}
          </div>
        )}
        <div className="absolute left-2 top-2 flex flex-wrap gap-1">
          <Badge tone="sage">{lesson.level}</Badge>
          {!lesson.isFree && (
            <Badge tone="gold">
              <LockIcon className="h-3 w-3" /> {t("premium")}
            </Badge>
          )}
        </div>
        {complete && (
          <div className="absolute right-2 top-2">
            <Badge tone="gold">
              <CheckIcon className="h-3 w-3" /> {t("completed")}
            </Badge>
          </div>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5 p-3">
        <h3 className="line-clamp-2 font-serif text-base font-semibold leading-snug text-charcoal">
          {lesson.title}
        </h3>
        {lesson.author && <p className="truncate text-xs text-charcoal/55">{lesson.author}</p>}
        <p className="mt-0.5 text-xs text-charcoal/50">
          {minutes} {t("minRead")}
        </p>
      </div>
    </Link>
  );
}
