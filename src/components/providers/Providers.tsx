"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "./LanguageProvider";
import { PreferencesProvider } from "./PreferencesProvider";
import { AuthProvider } from "./AuthProvider";
import { ProgressProvider } from "./ProgressProvider";
import { StudyPlanProvider } from "./StudyPlanProvider";
import { OnboardingProvider } from "./OnboardingProvider";
import { DailyProvider } from "./DailyProvider";
import { ClubProvider } from "./ClubProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <PreferencesProvider>
        <AuthProvider>
          <OnboardingProvider>
            <ProgressProvider>
              <StudyPlanProvider>
                <DailyProvider>
                  <ClubProvider>{children}</ClubProvider>
                </DailyProvider>
              </StudyPlanProvider>
            </ProgressProvider>
          </OnboardingProvider>
        </AuthProvider>
      </PreferencesProvider>
    </LanguageProvider>
  );
}
