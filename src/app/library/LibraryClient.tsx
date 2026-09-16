"use client";

import { LessonOfDayCard } from "@/components/home/LessonOfDayCard";
import { BookshelfPreview } from "@/components/home/BookshelfPreview";
import { SavedForLaterSection } from "@/components/home/SavedForLaterSection";
import { NewForYouSection } from "@/components/home/NewForYouSection";
import { FablesSection } from "@/components/home/FablesSection";
import { ClassicsSection } from "@/components/home/ClassicsSection";
import { BiographiesSection } from "@/components/home/BiographiesSection";
import { FolktalesSection } from "@/components/home/FolktalesSection";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { useOnboarding } from "@/components/providers/OnboardingProvider";
import { LEVELS, GOALS, labelFor } from "@/lib/onboarding";

export function LibraryClient() {
  const t = useT();
  const { lang } = useLanguage();
  const { data } = useOnboarding();

  const personalized =
    data.completed && data.level
      ? [
          labelFor(
            LEVELS.map((l) => ({ id: l.id, en: l.en, ko: l.ko })),
            data.level,
            lang,
          ),
          labelFor(GOALS, data.goal, lang),
        ]
          .filter(Boolean)
          .join(" · ")
      : null;

  return (
    <div className="px-5 py-8 lg:mx-auto lg:max-w-5xl lg:px-8 lg:py-12">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-rose/70">
        {personalized ? t("forYou") : t("library")}
      </p>
      <h1 className="mb-2 font-serif text-3xl font-semibold text-charcoal lg:text-4xl">{t("appName")}</h1>
      <p className="mb-3 text-sm text-charcoal/60 lg:text-base">{personalized ?? t("tagline")}</p>
      {!personalized && (
        <p className="mb-4 max-w-[62ch] text-sm leading-relaxed text-charcoal/55 lg:max-w-[70ch] lg:text-base">
          {t("libraryIntro")}
        </p>
      )}
      <p className="mb-8 inline-block rounded-full bg-sage/25 px-3.5 py-1.5 text-xs font-medium text-charcoal/70">
        {t("libraryGoalNote")}
      </p>
      <LessonOfDayCard />
      <BookshelfPreview />
      <SavedForLaterSection />
      <NewForYouSection />
      <FablesSection />
      <ClassicsSection />
      <BiographiesSection />
      <FolktalesSection />
    </div>
  );
}
