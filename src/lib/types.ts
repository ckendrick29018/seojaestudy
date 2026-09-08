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
  /** Public-domain sourcing / attribution note, shown at the end of the lesson. */
  source: string;
  paragraphs: StorySentence[][];
  vocab: VocabTerm[];
  questions: ComprehensionQuestion[];
}
