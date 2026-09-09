"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useStudyPlan } from "@/components/providers/StudyPlanProvider";
import { useT } from "@/components/providers/LanguageProvider";
import { lessons } from "@/lib/data/lessons";
import type { Highlight, StorySentence } from "@/lib/types";
import { isDue, MAX_BOX, type StudyGrade, type StudyItem } from "@/lib/study";
import { narrate, useSpeechSupported } from "@/lib/speech";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon, SpeakerIcon, TrashIcon } from "@/components/ui/icons";

export default function StudyPage() {
  const t = useT();
  const { hydrated, items, dueItems, streak, removeItem, gradeItem, highlights, removeHighlight } = useStudyPlan();
  const speechAvailable = useSpeechSupported();

  const [reviewing, setReviewing] = useState(false);
  const [queue, setQueue] = useState<string[]>([]);
  const [pos, setPos] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);

  const sorted = useMemo(
    () =>
      [...items].sort((a, b) => {
        const ad = isDue(a);
        const bd = isDue(b);
        if (ad !== bd) return ad ? -1 : 1;
        return a.dueAt - b.dueAt;
      }),
    [items],
  );

  const remainingIds = queue.slice(pos).filter((id) => items.some((it) => it.id === id));
  const current = remainingIds.length > 0 ? items.find((it) => it.id === remainingIds[0]) ?? null : null;

  function startReview() {
    setQueue(dueItems.map((it) => it.id));
    setPos(0);
    setRevealed(false);
    setReviewedCount(0);
    setReviewing(true);
  }

  function grade(g: StudyGrade) {
    if (!current) return;
    gradeItem(current.id, g);
    if (g === "again") setQueue((q) => [...q, current.id]);
    setPos((p) => p + 1);
    setRevealed(false);
    setReviewedCount((c) => c + 1);
  }

  return (
    <div className="px-5 py-8">
      <h1 className="mb-1 font-serif text-2xl font-semibold text-charcoal">{t("studyPlan")}</h1>
      <p className="mb-6 text-sm text-charcoal/50">{t("studyPlanSubtitle")}</p>

      <div className="mb-6 grid grid-cols-3 gap-3">
        <Stat value={items.length} label={t("totalCards")} />
        <Stat value={dueItems.length} label={t("dueToday")} tone={dueItems.length > 0 ? "rose" : "muted"} />
        <Stat value={streak} label={t("dayStreak")} />
      </div>

      {reviewing ? (
        <ReviewPanel
          item={current}
          revealed={revealed}
          reviewedCount={reviewedCount}
          onReveal={() => setRevealed(true)}
          onGrade={grade}
          onExit={() => setReviewing(false)}
          speechAvailable={speechAvailable}
          labels={{
            tapToReveal: t("tapToReveal"),
            again: t("again"),
            good: t("good"),
            easy: t("easy"),
            caughtUp: t("reviewCaughtUp"),
            done: t("reviewDone"),
            listen: t("listen"),
          }}
        />
      ) : (
        dueItems.length > 0 && (
          <Button className="mb-6 w-full" onClick={startReview}>
            {t("startReview")} · {dueItems.length}
          </Button>
        )
      )}

      {hydrated && items.length === 0 ? (
        <p className="rounded-xl2 border border-dashed border-rose-light/60 p-6 text-center text-sm text-charcoal/50">
          {t("noStudyItems")}
        </p>
      ) : (
        <ul className="space-y-2.5">
          {sorted.map((item) => (
            <li
              key={item.id}
              className="flex items-start justify-between gap-3 rounded-xl2 border border-rose-light/50 bg-white/60 p-4"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-serif text-base font-semibold text-charcoal">{item.front}</p>
                  {isDue(item) && (
                    <span className="rounded-full bg-rose-light/60 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-rose">
                      {t("dueToday")}
                    </span>
                  )}
                </div>
                <p className="text-sm text-charcoal/60">{item.back}</p>
                {item.example && <p className="mt-1 truncate text-xs italic text-charcoal/40">{item.example}</p>}
                <BoxMeter box={item.box} />
              </div>
              <div className="flex shrink-0 items-center gap-1">
                {speechAvailable && (
                  <button
                    onClick={() => narrate([item.front], item.targetLanguage)}
                    className="rounded-full p-2 text-rose transition hover:bg-rose-light/30"
                    aria-label={t("listen")}
                  >
                    <SpeakerIcon className="h-4 w-4" />
                  </button>
                )}
                <button
                  onClick={() => removeItem(item.id)}
                  className="rounded-full p-2 text-charcoal/40 transition hover:bg-sage/30 hover:text-charcoal/70"
                  aria-label={t("removeWord")}
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {highlights.length > 0 && (
        <div className="mt-10">
          <SectionHeading title={t("yourHighlights")} />
          <HighlightList highlights={highlights} onRemove={removeHighlight} openLessonLabel={t("openLesson")} />
        </div>
      )}

      <Link href="/library" className="mt-10 inline-block text-sm text-rose underline-offset-4 hover:underline">
        {t("backToLibrary")}
      </Link>
    </div>
  );
}

function Stat({ value, label, tone = "default" }: { value: number; label: string; tone?: "default" | "rose" | "muted" }) {
  const valueClass = tone === "rose" ? "text-rose" : tone === "muted" ? "text-charcoal/30" : "text-charcoal";
  return (
    <div className="rounded-xl2 border border-rose-light/50 bg-white/60 px-2 py-3 text-center">
      <p className={`font-serif text-2xl font-semibold ${valueClass}`}>{value}</p>
      <p className="mt-0.5 text-[11px] uppercase tracking-wide text-charcoal/40">{label}</p>
    </div>
  );
}

function BoxMeter({ box }: { box: number }) {
  return (
    <div className="mt-2 flex gap-1" aria-hidden>
      {Array.from({ length: MAX_BOX }, (_, i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${i < box ? "bg-sage-dark" : "bg-rose-light/60"}`}
        />
      ))}
    </div>
  );
}

function ReviewPanel({
  item,
  revealed,
  reviewedCount,
  onReveal,
  onGrade,
  onExit,
  speechAvailable,
  labels,
}: {
  item: StudyItem | null;
  revealed: boolean;
  reviewedCount: number;
  onReveal: () => void;
  onGrade: (g: StudyGrade) => void;
  onExit: () => void;
  speechAvailable: boolean;
  labels: {
    tapToReveal: string;
    again: string;
    good: string;
    easy: string;
    caughtUp: string;
    done: string;
    listen: string;
  };
}) {
  if (!item) {
    return (
      <div className="mb-8 rounded-xl2 border border-sage-dark/40 bg-sage/25 p-6 text-center">
        <CheckIcon className="mx-auto mb-2 h-6 w-6 text-sage-dark" />
        <p className="mb-4 text-sm text-charcoal/70">{labels.caughtUp}</p>
        <Button variant="outline" onClick={onExit}>
          {labels.done}
        </Button>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between text-xs text-charcoal/40">
        <span>{reviewedCount} ✓</span>
        <button onClick={onExit} className="hover:text-charcoal/70">
          {labels.done}
        </button>
      </div>

      <div
        onClick={() => !revealed && onReveal()}
        className={`flex min-h-[13rem] flex-col items-center justify-center gap-2 rounded-xl2 border p-6 text-center ${
          revealed ? "border-sage-dark/40 bg-sage/25" : "cursor-pointer border-rose-light/50 bg-white shadow-soft"
        }`}
      >
        <p className="font-serif text-2xl font-semibold text-charcoal">{item.front}</p>
        {item.reading && <p className="text-sm text-charcoal/40">{item.reading}</p>}

        {revealed ? (
          <>
            <p className="mt-2 text-lg font-medium text-charcoal">{item.back}</p>
            {item.example && <p className="text-sm italic text-charcoal/55">{item.example}</p>}
            {item.exampleTranslation && <p className="text-xs text-charcoal/45">{item.exampleTranslation}</p>}
          </>
        ) : (
          <p className="mt-2 text-xs italic text-charcoal/40">{labels.tapToReveal}</p>
        )}
      </div>

      {speechAvailable && (
        <div className="mt-2 flex justify-center">
          <button
            onClick={() => narrate([item.front], item.targetLanguage)}
            className="rounded-full border border-rose-soft/40 p-2 text-rose transition hover:bg-rose-light/30"
            aria-label={labels.listen}
          >
            <SpeakerIcon className="h-4 w-4" />
          </button>
        </div>
      )}

      {revealed && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          <button
            onClick={() => onGrade("again")}
            className="rounded-full border border-rose/40 bg-rose-light/30 py-2.5 text-sm font-medium text-rose transition hover:bg-rose-light/50"
          >
            {labels.again}
          </button>
          <button
            onClick={() => onGrade("good")}
            className="rounded-full border border-sage-dark/50 bg-sage/40 py-2.5 text-sm font-medium text-charcoal/70 transition hover:bg-sage/60"
          >
            {labels.good}
          </button>
          <button
            onClick={() => onGrade("easy")}
            className="rounded-full border border-sage-dark/40 py-2.5 text-sm font-medium text-charcoal/60 transition hover:bg-sage/30"
          >
            {labels.easy}
          </button>
        </div>
      )}
    </div>
  );
}

function HighlightList({
  highlights,
  onRemove,
  openLessonLabel,
}: {
  highlights: Highlight[];
  onRemove: (id: string) => void;
  openLessonLabel: string;
}) {
  const groups = useMemo(() => {
    const map = new Map<string, Highlight[]>();
    for (const h of highlights) {
      const list = map.get(h.lessonSlug) ?? [];
      list.push(h);
      map.set(h.lessonSlug, list);
    }
    return Array.from(map.entries());
  }, [highlights]);

  return (
    <div className="space-y-5">
      {groups.map(([slug, list]) => {
        const lesson = lessons.find((l) => l.slug === slug);
        const sentences = new Map<string, StorySentence>(
          lesson ? lesson.paragraphs.flat().map((s) => [s.id, s] as const) : [],
        );
        return (
          <div key={slug}>
            <div className="mb-2 flex items-baseline justify-between gap-2">
              <p className="font-serif text-sm font-semibold text-charcoal/80">{lesson?.title ?? slug}</p>
              {lesson && (
                <Link href={`/lesson/${slug}`} className="text-xs text-rose underline-offset-4 hover:underline">
                  {openLessonLabel}
                </Link>
              )}
            </div>
            <ul className="space-y-2">
              {list.map((h) => (
                <li
                  key={h.id}
                  className="flex items-start justify-between gap-3 rounded-xl2 border border-gold/40 bg-gold/10 p-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm text-charcoal/80">{h.text}</p>
                    {sentences.get(h.sentenceId)?.translation && (
                      <p className="mt-0.5 text-xs text-charcoal/45">{sentences.get(h.sentenceId)!.translation}</p>
                    )}
                  </div>
                  <button
                    onClick={() => onRemove(h.id)}
                    className="shrink-0 rounded-full p-1.5 text-charcoal/40 transition hover:bg-white/60 hover:text-charcoal/70"
                    aria-label="Remove"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
