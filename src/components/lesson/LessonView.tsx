"use client";

import { useEffect } from "react";
import type { Lesson } from "@/lib/types";
import type { BookContext } from "@/lib/books";
import { recordLessonOpened } from "@/lib/reading-log";
import { LessonHero } from "./LessonHero";
import { StoryReader } from "./StoryReader";
import { ComprehensionCheck } from "./ComprehensionCheck";
import { VocabFlashcards } from "./VocabFlashcards";
import { SummaryBox } from "./SummaryBox";
import { ShareWithClub } from "./ShareWithClub";
import { ScrollProgressBar } from "./ScrollProgressBar";
import { FamousQuoteCallout } from "./FamousQuoteCallout";
import { BookChapters } from "./BookChapters";

/**
 * The full one-page scrolling lesson flow:
 * hero -> story (highlight-to-translate + listen) -> comprehension check ->
 * vocabulary flashcards -> free-writing summary with gentle feedback ->
 * (for a lesson that's part of a book) the next part and the chapter list.
 */
export function LessonView({ lesson, bookContext }: { lesson: Lesson; bookContext?: BookContext }) {
  // Feeds the dashboard's "Continue reading" row. Only an unlocked lesson gets
  // here (the paywall renders instead otherwise), so a locked one is never logged.
  useEffect(() => {
    recordLessonOpened(lesson.slug);
  }, [lesson.slug]);

  return (
    <article className="pb-16">
      <ScrollProgressBar />
      <LessonHero lesson={lesson} bookContext={bookContext} />
      <StoryReader lesson={lesson} />
      <ComprehensionCheck questions={lesson.questions} />
      <VocabFlashcards lesson={lesson} />
      <SummaryBox lesson={lesson} />
      <BookChapters context={bookContext} />
      <FamousQuoteCallout lessonSlug={lesson.slug} />
      <ShareWithClub lesson={lesson} />
    </article>
  );
}
