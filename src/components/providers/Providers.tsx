"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "./LanguageProvider";
import { AuthProvider } from "./AuthProvider";
import { ProgressProvider } from "./ProgressProvider";
import { StudyPlanProvider } from "./StudyPlanProvider";
import { OnboardingProvider } from "./OnboardingProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <AuthProvider>
        <OnboardingProvider>
          <ProgressProvider>
            <StudyPlanProvider>{children}</StudyPlanProvider>
          </ProgressProvider>
        </OnboardingProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
