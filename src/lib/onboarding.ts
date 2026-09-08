import type { CEFRLevel, LangCode } from "./types";

/**
 * First-run onboarding answers. Stored locally (see OnboardingProvider), and
 * used to set the interface language, order the library, and personalise copy.
 * Structured flat so it can later sync to a `profiles` row unchanged.
 */

/** "ko-en" = speaks Korean, learning English. "en-ko" = the reverse. */
export type LearnDirection = "ko-en" | "en-ko";

export interface OnboardingData {
  completed: boolean;
  direction: LearnDirection | null;
  level: CEFRLevel | null;
  interests: string[];
  goal: string | null;
}

export const EMPTY_ONBOARDING: OnboardingData = {
  completed: false,
  direction: null,
  level: null,
  interests: [],
  goal: null,
};

/** The language the learner reads/practices, given their direction. */
export function targetLanguageFor(direction: LearnDirection): LangCode {
  return direction === "ko-en" ? "en" : "ko";
}

/** The language the app's chrome should default to, given their direction. */
export function uiLanguageFor(direction: LearnDirection): LangCode {
  return direction === "ko-en" ? "ko" : "en";
}

interface BiLabel {
  id: string;
  en: string;
  ko: string;
}

interface LevelOption {
  id: CEFRLevel;
  en: string;
  enHint: string;
  ko: string;
  koHint: string;
}

export const LEVELS: LevelOption[] = [
  { id: "A1", en: "Beginner", enHint: "I'm just starting out", ko: "입문", koHint: "이제 막 시작했어요" },
  { id: "A2", en: "Elementary", enHint: "I know some basics", ko: "초급", koHint: "기초는 조금 알아요" },
  { id: "B1", en: "Intermediate", enHint: "I can hold a simple conversation", ko: "중급", koHint: "간단한 대화는 할 수 있어요" },
  { id: "B2", en: "Upper intermediate", enHint: "I read and speak fairly comfortably", ko: "중상급", koHint: "읽기·말하기가 꽤 편해요" },
];

export const INTERESTS: BiLabel[] = [
  { id: "folktales", en: "Folktales & fables", ko: "설화와 우화" },
  { id: "romance", en: "Romance", ko: "로맨스" },
  { id: "daily", en: "Everyday life", ko: "일상 이야기" },
  { id: "travel", en: "Travel", ko: "여행" },
  { id: "food", en: "Food & cooking", ko: "음식과 요리" },
  { id: "culture", en: "Culture & history", ko: "문화와 역사" },
  { id: "work", en: "Work & business", ko: "일과 비즈니스" },
  { id: "news", en: "News & current events", ko: "뉴스와 시사" },
  { id: "pop", en: "Film, music & pop culture", ko: "영화·음악·대중문화" },
];

export const GOALS: BiLabel[] = [
  { id: "travel", en: "Travel with confidence", ko: "자신 있게 여행하기" },
  { id: "conversation", en: "Talk with friends & family", ko: "친구·가족과 대화하기" },
  { id: "exam", en: "Prepare for an exam (TOPIK, TOEFL…)", ko: "시험 준비 (TOPIK, TOEFL 등)" },
  { id: "media", en: "Enjoy books, film & music", ko: "책·영화·음악 즐기기" },
  { id: "living", en: "Live or work abroad", ko: "해외 생활·취업" },
  { id: "fun", en: "Just for the joy of it", ko: "그저 즐거움을 위해" },
];

export function labelFor(list: BiLabel[], id: string | null, lang: LangCode): string | null {
  if (!id) return null;
  const found = list.find((o) => o.id === id);
  return found ? found[lang] : null;
}
