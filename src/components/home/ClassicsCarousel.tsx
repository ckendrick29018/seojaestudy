"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { lessons } from "@/lib/data/lessons";
import type { Lesson } from "@/lib/types";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { estimateReadingTime } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { CheckIcon, LockIcon } from "@/components/ui/icons";

const CLASSICS = lessons.filter((lesson) => lesson.collection === "classics");
/** Keep the dashboard tidy: the rest live on `/classics`. */
const MAX_IN_CAROUSEL = 6;
const AUTO_ADVANCE_MS = 5000;

/**
 * Dashboard classics: a swipeable, gently auto-rotating strip of compact
 * cards. Swipe (touch) or tap a dot to move; auto-advance pauses while the
 * pointer or keyboard focus is inside it, and is off entirely when the
 * viewer prefers reduced motion. The full shelf is `/classics`.
 */
export function ClassicsCarousel() {
  const { isLessonComplete } = useProgress();
  const items = CLASSICS.slice(0, MAX_IN_CAROUSEL);

  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current;
    const child = track?.children[i] as HTMLElement | undefined;
    if (!track || !child) return;
    track.scrollTo({
      left: child.offsetLeft - (track.clientWidth - child.clientWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  // Keep the active dot in sync with manual swipes.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        Array.from(track.children).forEach((c, i) => {
          const el = c as HTMLElement;
          const d = Math.abs(el.offsetLeft + el.clientWidth / 2 - center);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setActive(best);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Auto-advance — skipped when paused, reduced-motion, tab hidden, or single.
  useEffect(() => {
    if (items.length < 2 || paused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setActive((a) => {
        const next = (a + 1) % items.length;
        scrollToIndex(next);
        return next;
      });
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [items.length, paused, scrollToIndex]);

  if (items.length === 0) return null;

  return (
    <div
      className="relative"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((lesson) => (
          <div key={lesson.slug} className="h-36 w-[86%] shrink-0 snap-center">
            <CarouselSlide lesson={lesson} complete={isLessonComplete(lesson.slug)} />
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {items.map((lesson, i) => (
            <button
              key={lesson.slug}
              type="button"
              onClick={() => {
                setActive(i);
                scrollToIndex(i);
              }}
              aria-label={lesson.title}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-5 bg-rose" : "w-1.5 bg-rose-light hover:bg-rose-soft"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CarouselSlide({ lesson, complete }: { lesson: Lesson; complete: boolean }) {
  const t = useT();
  const minutes = estimateReadingTime(lesson);

  return (
    <Link
      href={`/lesson/${lesson.slug}`}
      className="group flex h-full gap-4 rounded-xl2 border border-rose-light/50 bg-white/70 p-3 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative aspect-[3/4] h-full shrink-0 overflow-hidden rounded-lg bg-sage/40">
        {lesson.coverImage ? (
          // Local static asset (see public/covers); next/image would refuse the SVG and needs no optimization here.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={lesson.coverImage}
            alt=""
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl">
            {lesson.coverEmoji}
          </div>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="mb-1 flex flex-wrap items-center gap-1.5">
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
        <h3 className="line-clamp-2 font-serif text-base font-semibold leading-snug text-charcoal">
          {lesson.title}
        </h3>
        {lesson.author && <p className="mt-0.5 truncate text-xs text-charcoal/55">{lesson.author}</p>}
        <p className="mt-auto pt-1 text-xs text-charcoal/50">
          {minutes} {t("minRead")}
        </p>
      </div>
    </Link>
  );
}
