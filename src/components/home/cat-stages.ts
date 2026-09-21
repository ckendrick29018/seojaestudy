export type CatStageId =
  | "asleep"
  | "curious"
  | "bookworm"
  | "reader"
  | "scholar"
  | "tea"
  | "graduate"
  | "professor"
  | "wizard"
  | "legend";

export interface CatStage {
  id: CatStageId;
  /** Completed books needed to reach this stage. */
  min: number;
  name: { en: string; ko: string };
  blurb: { en: string; ko: string };
}

/**
 * The shelf cat's growth path, in order. A reader's stage is the last one whose
 * `min` they have reached; the first stage is always 0 so every count has one.
 */
export const CAT_STAGES: CatStage[] = [
  {
    id: "asleep",
    min: 0,
    name: { en: "Sleepy Kitten", ko: "잠꾸러기 아기 고양이" },
    blurb: {
      en: "Curled up and dreaming of stories. Finish one to wake it.",
      ko: "이야기를 꿈꾸며 웅크리고 있어요. 하나를 완독하면 깨어나요.",
    },
  },
  {
    id: "curious",
    min: 1,
    name: { en: "Curious Kitten", ko: "호기심 많은 아기 고양이" },
    blurb: {
      en: "Wide awake and sniffing out the next story.",
      ko: "눈을 반짝이며 다음 이야기를 찾고 있어요.",
    },
  },
  {
    id: "bookworm",
    min: 3,
    name: { en: "Little Bookworm", ko: "꼬마 책벌레" },
    blurb: {
      en: "Made a bookworm friend and a small pile of favourites.",
      ko: "책벌레 친구가 생겼고, 좋아하는 책도 쌓였어요.",
    },
  },
  {
    id: "reader",
    min: 6,
    name: { en: "Cozy Reader", ko: "책 읽는 고양이" },
    blurb: {
      en: "Settled in with a book of its very own.",
      ko: "자기만의 책을 펼치고 자리를 잡았어요.",
    },
  },
  {
    id: "scholar",
    min: 10,
    name: { en: "Scholar", ko: "학자 고양이" },
    blurb: {
      en: "Reading glasses on, nose in the pages.",
      ko: "안경을 쓰고 책 속에 푹 빠졌어요.",
    },
  },
  {
    id: "tea",
    min: 15,
    name: { en: "Tea-Time Reader", ko: "티타임 독서가" },
    blurb: {
      en: "A warm scarf, a hot cup, and a long afternoon of reading.",
      ko: "따뜻한 목도리와 차 한 잔, 느긋한 독서의 오후예요.",
    },
  },
  {
    id: "graduate",
    min: 25,
    name: { en: "Graduate", ko: "졸업생 고양이" },
    blurb: {
      en: "Cap on and diploma in paw: a graduate of the reading life.",
      ko: "학사모를 쓰고 졸업장을 든, 독서 생활의 졸업생이에요.",
    },
  },
  {
    id: "professor",
    min: 40,
    name: { en: "Professor", ko: "교수 고양이" },
    blurb: {
      en: "Bow tie, a tall stack of books, and opinions on every chapter.",
      ko: "나비넥타이에 책 더미까지, 모든 챕터에 할 말이 있어요.",
    },
  },
  {
    id: "wizard",
    min: 60,
    name: { en: "Book Wizard", ko: "책 마법사" },
    blurb: {
      en: "Books float around it now. Nobody is quite sure how.",
      ko: "이제 책이 저절로 둥둥 떠다녀요. 아무도 이유를 몰라요.",
    },
  },
  {
    id: "legend",
    min: 100,
    name: { en: "Grand Librarian", ko: "전설의 대사서" },
    blurb: {
      en: "Crowned keeper of the great library. A true legend.",
      ko: "거대한 도서관을 지키는 왕관 쓴 수호자, 전설이 되었어요.",
    },
  },
];

/** Completed-book count → the shelf cat's current stage. */
export function catStageFor(count: number): CatStage {
  let stage = CAT_STAGES[0];
  for (const s of CAT_STAGES) if (count >= s.min) stage = s;
  return stage;
}

/** The next stage still to unlock, or undefined once the cat is fully grown. */
export function nextCatStage(count: number): CatStage | undefined {
  return CAT_STAGES.find((s) => s.min > count);
}

/** 0–1 progress from the current stage toward the next (1 when fully grown). */
export function catStageProgress(count: number): number {
  const stage = catStageFor(count);
  const next = nextCatStage(count);
  if (!next) return 1;
  return Math.min(1, Math.max(0, (count - stage.min) / (next.min - stage.min)));
}
