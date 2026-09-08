"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Lesson } from "@/lib/types";
import { lessons } from "@/lib/data/lessons";
import { dayKey } from "@/lib/study";
import {
  EMPTY_DAILY,
  addReadDay,
  currentStreak,
  hasReadToday,
  longestStreak,
  mergeDays,
  pickLessonOfDay,
  totalReadDays,
  type DailyProgress,
} from "@/lib/daily";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "./AuthProvider";
import { useOnboarding } from "./OnboardingProvider";

interface DailyContextValue {
  hydrated: boolean;
  /** Every local calendar day the learner has finished a lesson, ascending. */
  readDays: string[];
  /** Consecutive days up to today (or yesterday while today is still pending). */
  streak: number;
  /** Best streak the learner has ever reached. */
  longestStreakEver: number;
  /** Total distinct days a lesson was completed. */
  totalDays: number;
  /** Has a lesson already been completed today? */
  readToday: boolean;
  /** Record that a lesson was completed today. Idempotent within a day. */
  recordReadDay: () => void;
  /** The deterministic "study this today" pick, personalised from onboarding. */
  lessonOfDay: Lesson | null;
}

const DailyContext = createContext<DailyContextValue | null>(null);
const STORAGE_KEY = "luminaread:daily";

function readLocal(): DailyProgress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_DAILY;
    const parsed = JSON.parse(raw) as Partial<DailyProgress>;
    const days = Array.isArray(parsed.days) ? parsed.days.filter((d): d is string => typeof d === "string") : [];
    return { days: [...new Set(days)].sort() };
  } catch {
    return EMPTY_DAILY;
  }
}

function writeLocal(p: DailyProgress) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    // best-effort persistence only
  }
}

/**
 * Daily-habit state: a reading streak plus the "lesson of the day".
 *
 * Storage mirrors ProgressProvider:
 *  - Signed out (or Supabase not configured yet): the set of days a lesson was
 *    completed lives in localStorage only, on this device.
 *  - Signed in: the `reading_days` table is the source of truth and follows the
 *    learner across devices. Any local-only days are pushed up once on sign-in
 *    so a guest streak is never lost.
 *
 * The streak is *derived* from that day set (see src/lib/daily.ts), so there's
 * nothing extra to sync — one row per active day, and the count falls out of
 * it. The lesson of the day is pure (date + onboarding), stored nowhere.
 */
export function DailyProvider({ children }: { children: ReactNode }) {
  const { user, loading: authLoading, authAvailable } = useAuth();
  const { data: onboarding } = useOnboarding();
  const [progress, setProgress] = useState<DailyProgress>(EMPTY_DAILY);
  const [hydrated, setHydrated] = useState(false);
  const hydratedForGuest = useRef(false);
  const mergedForUserId = useRef<string | null>(null);

  // Guest path: hydrate from localStorage once we know there's no user, and
  // keep local changes persisted.
  useEffect(() => {
    if (authLoading || user) return;
    if (hydratedForGuest.current) return;
    hydratedForGuest.current = true;
    setProgress(readLocal());
    setHydrated(true);
  }, [authLoading, user]);

  useEffect(() => {
    if (authLoading || user) return;
    if (!hydratedForGuest.current) return;
    writeLocal(progress);
  }, [progress, authLoading, user]);

  // Signed-in path: merge any local guest days into Supabase once, then treat
  // Supabase as the source of truth.
  useEffect(() => {
    if (!authAvailable || !user) return;
    if (mergedForUserId.current === user.id) return;
    mergedForUserId.current = user.id;

    (async () => {
      const supabase = createClient();
      const localDays = readLocal().days;

      const { data: rows, error } = await supabase
        .from("reading_days")
        .select("day")
        .eq("user_id", user.id);
      if (error) throw error;

      const remoteDays = (rows ?? []).map((r) => r.day);
      const remoteSet = new Set(remoteDays);
      const toPush = localDays.filter((d) => !remoteSet.has(d));

      if (toPush.length > 0) {
        const { error: upErr } = await supabase
          .from("reading_days")
          .upsert(
            toPush.map((day) => ({ user_id: user.id, day })),
            { onConflict: "user_id,day" },
          );
        if (upErr) console.error("daily: failed to merge local reading days into Supabase", upErr);
      }

      setProgress({ days: mergeDays(remoteDays, toPush) });
      setHydrated(true);
    })().catch((err) => {
      console.error("daily: failed to load Supabase reading days", err);
      // Fall back to whatever's local so the streak still renders.
      setProgress(readLocal());
      setHydrated(true);
    });
  }, [user, authAvailable]);

  const recordReadDay = useCallback(() => {
    const today = dayKey();
    setProgress((prev) => addReadDay(prev, today));
    if (user) {
      createClient()
        .from("reading_days")
        .upsert({ user_id: user.id, day: today }, { onConflict: "user_id,day" })
        .then(({ error }) => {
          if (error) console.error("daily: failed to record reading day", error);
        });
    }
  }, [user]);

  const lessonOfDay = useMemo(
    () =>
      pickLessonOfDay({
        lessons,
        level: onboarding.level,
        interests: onboarding.interests,
        direction: onboarding.direction,
      }),
    [onboarding.level, onboarding.interests, onboarding.direction],
  );

  const streak = useMemo(() => currentStreak(progress), [progress]);
  const longestStreakEver = useMemo(() => longestStreak(progress), [progress]);
  const totalDays = useMemo(() => totalReadDays(progress), [progress]);
  const readToday = useMemo(() => hasReadToday(progress), [progress]);

  const value: DailyContextValue = {
    hydrated,
    readDays: progress.days,
    streak,
    longestStreakEver,
    totalDays,
    readToday,
    recordReadDay,
    lessonOfDay,
  };

  return <DailyContext.Provider value={value}>{children}</DailyContext.Provider>;
}

export function useDaily(): DailyContextValue {
  const ctx = useContext(DailyContext);
  if (!ctx) throw new Error("useDaily must be used within a DailyProvider");
  return ctx;
}
