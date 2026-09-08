"use client";

import type { Lesson } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { ClockIcon } from "@/components/ui/icons";
import { useT } from "@/components/providers/LanguageProvider";
import { estimateReadingTime } from "@/lib/utils";

export function LessonHero({ lesson }: { lesson: Lesson }) {
  const t = useT();
  const minutes = estimateReadingTime(lesson);

  return (
    <section className="px-5 pb-6 pt-8 text-center">
      <div className="mb-3 flex items-center justify-center gap-2">
        <Badge tone="rose">{lesson.topic}</Badge>
        <Badge tone="sage">{lesson.level}</Badge>
      </div>
      <div className="mb-2 text-4xl">{lesson.coverEmoji}</div>
      <h1 className="mb-1 font-serif text-3xl font-semibold text-charcoal">{lesson.title}</h1>
      <p className="mb-3 text-base text-charcoal/60">{lesson.titleTranslation}</p>
      <div className="inline-flex items-center gap-1.5 text-sm text-charcoal/50">
        <ClockIcon className="h-4 w-4" />
        <span>
          {minutes} {t("minRead")}
        </span>
      </div>
    </section>
  );
}
