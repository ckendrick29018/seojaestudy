/**
 * A fixed snapshot of "The Gift of the Magi"'s opening lines + vocab, used only
 * by the landing-page reader/flashcard preview (LandingPreview.tsx). Kept as
 * its own tiny module instead of importing the full `lessons.ts` — that file
 * is ~1.4MB of story content for 150+ lessons, and the landing preview only
 * ever needs these few lines for one lesson. A static snapshot is fine here:
 * this is a fixed marketing demo, not meant to track future edits to the real
 * "gift-of-the-magi" lesson.
 */
import type { StorySentence, VocabTerm } from "@/lib/types";

export const LANDING_DEMO_TITLE = "The Gift of the Magi";

export const LANDING_DEMO_LINES: StorySentence[] = [
  {
    id: "gm-1",
    text: "It was the day before Christmas, and Della had only one dollar and eighty-seven cents.",
    translation: "크리스마스 전날이었고, 델라에게는 단돈 1달러 87센트밖에 없었어요.",
  },
  {
    id: "gm-2",
    text: "She wanted to buy a present for her husband, Jim, but it was not nearly enough.",
    translation: "델라는 남편 짐에게 선물을 사 주고 싶었지만, 그 돈으로는 턱없이 부족했어요.",
  },
];

export const LANDING_DEMO_VOCAB: VocabTerm[] = [
  {
    id: "gm-v1",
    term: "treasure",
    partOfSpeech: "noun",
    translation: "보물, 소중한 것",
    example: "Each of them owned one treasure.",
    exampleTranslation: "두 사람에게는 각자 보물이 하나씩 있었어요.",
  },
  {
    id: "gm-v2",
    term: "platinum",
    partOfSpeech: "noun",
    translation: "백금",
    example: "She bought a plain platinum chain for the watch.",
    exampleTranslation: "델라는 시계에 어울리는 소박한 백금 시곗줄을 샀어요.",
  },
  {
    id: "gm-v3",
    term: "nervous",
    partOfSpeech: "adjective",
    translation: "불안한, 초조한",
    example: "She waited at home, nervous about her short hair.",
    exampleTranslation: "델라는 짧아진 머리가 걱정되어 초조하게 집에서 기다렸어요.",
  },
  {
    id: "gm-v4",
    term: "stare",
    partOfSpeech: "verb",
    translation: "빤히 쳐다보다",
    example: "Jim stopped and stared at her.",
    exampleTranslation: "짐은 걸음을 멈추고 델라를 빤히 바라보았어요.",
  },
  {
    id: "gm-v5",
    term: "wise",
    partOfSpeech: "adjective",
    translation: "지혜로운",
    example: "These two were the wisest of all.",
    exampleTranslation: "이 두 사람이 가장 지혜로웠어요.",
  },
];
