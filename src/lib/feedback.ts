import type { Lesson } from "./types";

export interface FeedbackResult {
  message: string;
  tip: string;
  tone: "encouraging" | "needsWork";
}

/**
 * Heuristic "gentle feedback" generator for the story-summary writing task.
 *
 * This is a lightweight, offline stand-in for a real AI evaluation call —
 * it never leaves the browser and needs no API key, so the app is fully
 * usable out of the box. To wire up genuine AI feedback later, replace the
 * body of this function with a call to your model of choice (for example
 * OpenAI's chat completions API), sending the lesson's `title`, the story
 * text from `paragraphs`, and the learner's `userSummary`, and asking for
 * 2-3 sentences of warm, specific feedback in `lesson.nativeLanguage`.
 * Keep the same return shape so the calling component (SummaryBox) doesn't
 * need to change.
 */
export function generateFeedback(lesson: Lesson, userSummary: string): FeedbackResult {
  const trimmed = userSummary.trim();
  const lang = lesson.nativeLanguage;

  if (trimmed.length === 0) {
    return {
      tone: "needsWork",
      message: lang === "ko" ? "아직 요약을 쓰지 않았어요." : "You haven't written a summary yet.",
      tip:
        lang === "ko"
          ? "이야기에서 가장 기억에 남는 순간을 한 문장으로 적어보세요."
          : "Try writing one sentence about the moment you remember best.",
    };
  }

  const wordCount = trimmed.split(/\s+/).filter(Boolean).length;

  // A loose signal that the learner engaged with the target-language
  // vocabulary — not a real correctness check, just something to react to.
  const storyWords = new Set(
    lesson.paragraphs
      .flat()
      .map((sentence) => sentence.text.toLowerCase())
      .join(" ")
      .split(/[^a-z가-힣0-9']+/i)
      .filter((word) => word.length > 1)
  );
  const summaryWords = trimmed
    .toLowerCase()
    .split(/[^a-z가-힣0-9']+/i)
    .filter(Boolean);
  const overlap = summaryWords.filter((word) => storyWords.has(word)).length;

  const minWords = lang === "ko" ? 4 : 5;
  if (wordCount < minWords) {
    return {
      tone: "needsWork",
      message: lang === "ko" ? "좋은 시작이에요! 조금만 더 자세히 써볼까요?" : "Nice start! Can you add a little more detail?",
      tip: lang === "ko" ? "누가, 무엇을 했는지 함께 적어보세요." : "Try including who did what, and what happened as a result.",
    };
  }

  const encouragements =
    lang === "ko"
      ? ["요약을 아주 명확하게 잘 썼어요.", "이야기의 핵심을 잘 짚었어요.", "표현이 자연스러워요."]
      : ["That's a clear, natural summary.", "You captured the heart of the story well.", "Your sentence flows nicely."];

  const tip =
    overlap > 0
      ? lang === "ko"
        ? "이야기 속 단어를 직접 사용한 점이 좋아요. 다음에는 '왜냐하면 ~' 같은 이유를 한 절 덧붙여보세요."
        : "Nice use of vocabulary straight from the story. Next time, try adding a 'because...' clause to explain why."
      : lang === "ko"
        ? "이야기에 나온 핵심 단어를 하나 넣어서 다시 써보면 더 좋아질 거예요."
        : "Try weaving in one key word from the story to make it even stronger.";

  return {
    tone: "encouraging",
    message: encouragements[wordCount % encouragements.length],
    tip,
  };
}
