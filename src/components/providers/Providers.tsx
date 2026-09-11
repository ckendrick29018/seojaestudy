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
import { NowPlayingProvider } from "./NowPlayingProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <PreferencesProvider>
        <AuthProvider>
          <OnboardingProvider>
            <ProgressProvider>
              <StudyPlanProvider>
                <DailyProvider>
                  <ClubProvider>
                    <NowPlayingProvider>{children}</NowPlayingProvider>
                  </ClubProvider>
                </DailyProvider>
              </StudyPlanProvider>
            </ProgressProvider>
          </OnboardingProvider>
        </AuthProvider>
      </PreferencesProvider>
    </LanguageProvider>
  );
}
