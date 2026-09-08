"use client";

import { useState } from "react";
import type { Lesson } from "@/lib/types";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { generateFeedback, type FeedbackResult } from "@/lib/feedback";
import { CheckIcon } from "@/components/ui/icons";

export function SummaryBox({ lesson }: { lesson: Lesson }) {
  const t = useT();
  const { markLessonComplete, isLessonComplete } = useProgress();
  const [value, setValue] = useState("");
  const [feedback, setFeedback] = useState<FeedbackResult | null>(null);
  const complete = isLessonComplete(lesson.slug);

  return (
    <section className="border-t border-rose-light/40 px-5 py-8">
      <SectionHeading title={t("writeSummary")} />
      <p className="mb-3 text-sm text-charcoal/60">{lesson.summaryPrompt}</p>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={3}
        placeholder={t("summaryPromptDefault")}
        className="w-full resize-none rounded-xl2 border border-rose-light/50 bg-white/70 p-4 text-sm leading-6 text-charcoal outline-none transition focus:border-rose-soft focus:ring-2 focus:ring-rose-light/50"
      />
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Button variant="outline" onClick={() => setFeedback(generateFeedback(lesson, value))} disabled={value.trim().length === 0}>
          {t("getFeedback")}
        </Button>
        <Button variant={complete ? "ghost" : "primary"} onClick={() => markLessonComplete(lesson.slug)} disabled={complete}>
          {complete ? (
            <>
              <CheckIcon className="h-4 w-4" /> {t("completed")}
            </>
          ) : (
            t("markComplete")
          )}
        </Button>
      </div>

      {feedback && (
        <div
          className={`mt-4 animate-fade-in rounded-xl2 border p-4 text-sm ${
            feedback.tone === "encouraging"
              ? "border-sage-dark/40 bg-sage/25 text-charcoal/80"
              : "border-rose-light/50 bg-rose-light/20 text-charcoal/80"
          }`}
        >
          <p className="mb-1 font-medium">{feedback.message}</p>
          <p className="text-charcoal/60">{feedback.tip}</p>
        </div>
      )}

      <p className="mt-6 border-t border-rose-light/30 pt-4 text-[11px] leading-5 text-charcoal/35">
        {t("sourceNote")}: {lesson.source}
      </p>
    </section>
  );
}
