"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { CEFRLevel } from "@/lib/types";
import { EMPTY_ONBOARDING, type LearnDirection, type OnboardingData } from "@/lib/onboarding";

interface OnboardingContextValue {
  hydrated: boolean;
  data: OnboardingData;
  setDirection: (d: LearnDirection) => void;
  setLevel: (l: CEFRLevel) => void;
  toggleInterest: (id: string) => void;
  setGoal: (id: string) => void;
  complete: () => void;
  reset: () => void;
}

const OnboardingContext = createContext<OnboardingContextValue | null>(null);
const STORAGE_KEY = "luminaread:onboarding";

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OnboardingData>(EMPTY_ONBOARDING);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setData({ ...EMPTY_ONBOARDING, ...(JSON.parse(raw) as Partial<OnboardingData>) });
    } catch {
      // localStorage unavailable — onboarding will simply show again.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // best-effort persistence only
    }
  }, [data, hydrated]);

  const setDirection = useCallback((direction: LearnDirection) => setData((d) => ({ ...d, direction })), []);
  const setLevel = useCallback((level: CEFRLevel) => setData((d) => ({ ...d, level })), []);
  const setGoal = useCallback((goal: string) => setData((d) => ({ ...d, goal })), []);
  const toggleInterest = useCallback(
    (id: string) =>
      setData((d) => ({
        ...d,
        interests: d.interests.includes(id) ? d.interests.filter((i) => i !== id) : [...d.interests, id],
      })),
    [],
  );
  const complete = useCallback(() => setData((d) => ({ ...d, completed: true })), []);
  const reset = useCallback(() => setData(EMPTY_ONBOARDING), []);

  const value: OnboardingContextValue = {
    hydrated,
    data,
    setDirection,
    setLevel,
    toggleInterest,
    setGoal,
    complete,
    reset,
  };

  return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
}

export function useOnboarding(): OnboardingContextValue {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error("useOnboarding must be used within an OnboardingProvider");
  return ctx;
}
