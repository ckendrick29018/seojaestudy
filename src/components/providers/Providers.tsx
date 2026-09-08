"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "./LanguageProvider";
import { AuthProvider } from "./AuthProvider";
import { ProgressProvider } from "./ProgressProvider";
import { StudyPlanProvider } from "./StudyPlanProvider";
import { OnboardingProvider } from "./OnboardingProvider";
import { DailyProvider } from "./DailyProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <AuthProvider>
        <OnboardingProvider>
          <ProgressProvider>
            <StudyPlanProvider>
              <DailyProvider>{children}</DailyProvider>
            </StudyPlanProvider>
          </ProgressProvider>
        </OnboardingProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
