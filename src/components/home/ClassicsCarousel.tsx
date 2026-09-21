"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { lessonIndex as lessons } from "@/lib/data/lessons-index.generated";
import type { LessonMeta } from "@/lib/types";
import { useT } from "@/components/providers/LanguageProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { ClassicCard } from "./ClassicCard";

const CLASSICS = lessons.filter((lesson) => lesson.collection === "classics");
/** Keep the dashboard tidy: the rest live on `/classics`. */
const MAX_IN_CAROUSEL = 6;
const AUTO_ADVANCE_MS = 5000;

/**
 * Dashboard classics: a swipeable, gently auto-rotating strip of portrait
 * cover cards — a preview of the full `/classics` shelf. Swipe (touch), use
 * the arrow buttons (mouse), or tap a dot to move; auto-advance pauses while
 * the pointer or keyboard focus is inside it, and is off entirely under
 * `prefers-reduced-motion`.
 */
export function ClassicsCarousel({ lessons: source }: { lessons?: LessonMeta[] } = {}) {
  const t = useT();
  const { isLessonComplete } = useProgress();
  const items = (source ?? CLASSICS).slice(0, MAX_IN_CAROUSEL);

  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [edge, setEdge] = useState({ start: true, end: false });

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current;
    const child = track?.children[i] as HTMLElement | undefined;
    if (!track || !child) return;
    track.scrollTo({
      left: child.offsetLeft - (track.clientWidth - child.clientWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  /** One card-width step, so scroll-snap lands on the next card rather than snapping back. */
  const step = useCallback((dir: -1 | 1) => {
    const track = trackRef.current;
    const first = track?.children[0] as HTMLElement | undefined;
    if (!track || !first) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: dir * (first.clientWidth + gap), behavior: "smooth" });
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
        const start = track.scrollLeft <= 2;
        const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
        setEdge((e) => (e.start === start && e.end === end ? e : { start, end }));
      });
    };
    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
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
      {/* No edge fade over the peeking neighbours: a gradient there washes the covers into
          blurry-looking slivers in every theme, which reads as a rendering glitch. */}
      {items.length > 1 && (
        <>
          {/* Arrow buttons for mouse users, who can't swipe. Only on hover-capable devices, so
              touch layouts stay clean; opaque (no blur) and hidden at the ends of the strip. */}
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label={t("carouselPrev")}
            disabled={edge.start}
            className="absolute left-1 top-[42%] z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-rose-light bg-white text-charcoal shadow-md transition hover:bg-cream-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose disabled:pointer-events-none disabled:opacity-0 [@media(hover:hover)]:flex"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label={t("carouselNext")}
            disabled={edge.end}
            className="absolute right-1 top-[42%] z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-rose-light bg-white text-charcoal shadow-md transition hover:bg-cream-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose disabled:pointer-events-none disabled:opacity-0 [@media(hover:hover)]:flex"
          >
            <ChevronIcon direction="right" />
          </button>
        </>
      )}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-0.5 pb-2 pt-0.5 lg:gap-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((lesson) => (
          <div
            key={lesson.slug}
            className="w-[64%] max-w-[230px] shrink-0 snap-center lg:w-[220px] lg:max-w-[260px]"
          >
            <ClassicCard lesson={lesson} complete={isLessonComplete(lesson.slug)} />
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <div className="mt-2 flex items-center justify-center gap-1.5">
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

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}
