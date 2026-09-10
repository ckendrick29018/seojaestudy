"use client";

import type { Lesson } from "@/lib/types";
import { LessonHero } from "./LessonHero";
import { StoryReader } from "./StoryReader";
import { ComprehensionCheck } from "./ComprehensionCheck";
import { VocabFlashcards } from "./VocabFlashcards";
import { SummaryBox } from "./SummaryBox";
import { ShareWithClub } from "./ShareWithClub";
import { ScrollProgressBar } from "./ScrollProgressBar";

/**
 * The full one-page scrolling lesson flow:
 * hero -> story (highlight-to-translate + listen) -> comprehension check ->
 * vocabulary flashcards -> free-writing summary with gentle feedback.
 */
export function LessonView({ lesson }: { lesson: Lesson }) {
  return (
    <article className="pb-16">
      <ScrollProgressBar />
      <LessonHero lesson={lesson} />
      <StoryReader lesson={lesson} />
      <ComprehensionCheck questions={lesson.questions} />
      <VocabFlashcards lesson={lesson} />
      <SummaryBox lesson={lesson} />
      <ShareWithClub lesson={lesson} />
    </article>
  );
}
