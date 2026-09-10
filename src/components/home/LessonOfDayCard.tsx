"use client";

import Link from "next/link";
import { useDaily } from "@/components/providers/DailyProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { useT } from "@/components/providers/LanguageProvider";
import { estimateReadingTime } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { CheckIcon, StarIcon } from "@/components/ui/icons";

/**
 * The home-screen "study this today" card: one deterministic pick per day
 * (see src/lib/daily.ts), with the reading streak alongside it to make the
 * one-lesson-a-day habit visible.
 */
export function LessonOfDayCard() {
  const t = useT();
  const { lessonOfDay, streak, readToday } = useDaily();
  const { isLessonComplete } = useProgress();

  if (!lessonOfDay) return null;

  const minutes = estimateReadingTime(lessonOfDay);
  const done = isLessonComplete(lessonOfDay.slug);
  const href = `/lesson/${lessonOfDay.slug}`;

  return (
    <section className="mb-8 rounded-xl2 border border-rose-soft/40 bg-gradient-to-br from-rose-light/45 via-white/70 to-sage/25 p-5 shadow-soft">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose/70">{t("lessonOfDay")}</p>
        {streak > 0 && (
          <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2.5 py-1 text-xs font-semibold text-rose">
            <StarIcon className="h-3 w-3" aria-hidden />
            {streak} {t("dayStreak")}
          </span>
        )}
      </div>

      <Link href={href} className="group flex items-center gap-4">
        {/* The detailed book covers turn to mush at this size, so the daily
            nudge uses the lesson's emoji on a tinted tile — always crisp. */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl2 border border-rose-light/50 bg-white/70 text-[1.75rem] shadow-soft">
          {lessonOfDay.coverEmoji}
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-1.5">
            <Badge tone="rose">{lessonOfDay.topic}</Badge>
            <Badge tone="sage">{lessonOfDay.level}</Badge>
          </div>
          <h2 className="truncate font-serif text-xl font-semibold text-charcoal">{lessonOfDay.title}</h2>
          <p className="truncate text-sm text-charcoal/60">
            {lessonOfDay.titleTranslation} · {minutes} {t("minRead")}
          </p>
        </div>
      </Link>

      <div className="mt-4">
        {done ? (
          <div className="flex items-center gap-2 text-sm font-medium text-sage-dark">
            <CheckIcon className="h-4 w-4" />
            <span className="text-charcoal/60">
              {readToday ? t("lessonOfDayDoneToday") : t("lessonOfDayDone")}
            </span>
            <Link href={href} className="ml-auto text-rose underline-offset-4 hover:underline">
              {t("readAgain")}
            </Link>
          </div>
        ) : (
          <Link
            href={href}
            className="inline-flex w-full items-center justify-center rounded-full bg-rose px-5 py-2.5 text-sm font-medium text-cream shadow-soft transition hover:bg-rose/90"
          >
            {t("startTodaysLesson")}
          </Link>
        )}
      </div>
    </section>
  );
}
