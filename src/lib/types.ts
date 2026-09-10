export type LangCode = "en" | "ko";

export type CEFRLevel = "A1" | "A2" | "B1" | "B2";

export interface StorySentence {
  id: string;
  /** Text in the lesson's target (learning) language. */
  text: string;
  /** Translation into the lesson's native (support) language. */
  translation: string;
}

export interface VocabTerm {
  id: string;
  /** The vocabulary term in the target language. */
  term: string;
  /** Optional pronunciation hint / romanization, mainly useful for Korean terms. */
  reading?: string;
  partOfSpeech: string;
  translation: string;
  example: string;
  exampleTranslation: string;
}

export interface ComprehensionQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  /**
   * Korean rendering of `prompt` / `options` / `explanation`, so the reader can
   * take the check in their own language (see the toggle in ComprehensionCheck).
   * `optionsKo` is index-aligned with `options`, so `correctIndex` is shared.
   * Sourced from `data/comprehension-ko.ts` and merged in when `lessons` loads;
   * absent only if that lesson has no translation yet.
   */
  promptKo?: string;
  optionsKo?: string[];
  explanationKo?: string;
}

/** A reader's highlight, one per story sentence. */
export interface Highlight {
  /** `${lessonSlug}::${sentenceId}` */
  id: string;
  lessonSlug: string;
  sentenceId: string;
  /** The sentence text at the time it was highlighted (target language). */
  text: string;
  createdAt: number;
}

export interface Lesson {
  slug: string;
  title: string;
  titleTranslation: string;
  /** The language the learner is reading and practicing. */
  targetLanguage: LangCode;
  /** The language translations and UI support are given in. */
  nativeLanguage: LangCode;
  topic: string;
  level: CEFRLevel;
  /** Whether this lesson is readable without a subscription. */
  isFree: boolean;
  /** Instructions shown above the free-writing summary box, in nativeLanguage. */
  summaryPrompt: string;
  coverEmoji: string;
  /**
   * Library grouping. Absent = the default leveled "Library" list; "classics"
   * pulls the lesson into the home-page Classics shelf instead.
   */
  collection?: "classics";
  /**
   * Path to a cover image under /public (e.g. "/covers/gift-of-the-magi.svg").
   * When absent, the UI falls back to `coverEmoji`.
   */
  coverImage?: string;
  /** Original author + dates, shown on the Classics card and lesson hero. */
  author?: string;
  /** Public-domain sourcing / attribution note, shown at the end of the lesson. */
  source: string;
  paragraphs: StorySentence[][];
  vocab: VocabTerm[];
  questions: ComprehensionQuestion[];
}
