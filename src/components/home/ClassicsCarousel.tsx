"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { lessons } from "@/lib/data/lessons";
import type { Lesson } from "@/lib/types";
import { useProgress } from "@/components/providers/ProgressProvider";
import { ClassicCard } from "./ClassicCard";

const CLASSICS = lessons.filter((lesson) => lesson.collection === "classics");
/** Keep the dashboard tidy: the rest live on `/classics`. */
const MAX_IN_CAROUSEL = 6;
const AUTO_ADVANCE_MS = 5000;

/**
 * Dashboard classics: a swipeable, gently auto-rotating strip of portrait
 * cover cards — a preview of the full `/classics` shelf. Swipe (touch) or
 * tap a dot to move; auto-advance pauses while the pointer or keyboard
 * focus is inside it, and is off entirely under `prefers-reduced-motion`.
 */
export function ClassicsCarousel({ lessons: source }: { lessons?: Lesson[] } = {}) {
  const { isLessonComplete } = useProgress();
  const items = (source ?? CLASSICS).slice(0, MAX_IN_CAROUSEL);

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
      <div className="relative">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-0.5 pb-2 pt-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((lesson) => (
            <div
              key={lesson.slug}
              className="w-[64%] max-w-[230px] shrink-0 snap-center"
            >
              <ClassicCard lesson={lesson} complete={isLessonComplete(lesson.slug)} />
            </div>
          ))}
        </div>

        {/* Soften the peeking neighbours so the strip reads as intentional. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-cream to-transparent" />
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
