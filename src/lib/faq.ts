import { lessons } from "./data/lessons";
import { SITE_NAME, SITE_URL } from "./site";

/**
 * The public FAQ, rendered at `/faq` and emitted as FAQPage structured data
 * (which is eligible for the expandable Q&A rich result on Google).
 *
 * Answers are plain text with the same tiny inline syntax as the articles —
 * `[label](/path)` and `**bold**` — so the on-page renderer can add links while
 * the JSON-LD carries a clean text version.
 */

export interface FaqItem {
  question: string;
  /** On-page answer (may contain [label](/path) links and **bold**). */
  answer: string;
}

const LESSON_COUNT = lessons.length;
const CLASSIC_COUNT = lessons.filter((l) => l.collection === "classics").length;

export const FAQ: FaqItem[] = [
  {
    question: "Is SeoJae Story free?",
    answer:
      `Yes. Every one of the ${LESSON_COUNT}+ stories is free to read right now, with the full reader, translations, audio, vocabulary and comprehension checks. A Premium subscription is planned for later to unlock the full library beyond a few free stories, but nothing is behind a paywall during the current test.`,
  },
  {
    question: "Do I need an account to read?",
    answer:
      "No. During the closed test you can open any story and use every feature without signing up. Your saved words, study plan and streak are kept on your device.",
  },
  {
    question: "Which languages can I learn?",
    answer:
      "English and Korean. Each story is written in one language with a sentence-by-sentence translation into the other, and in the reader you can switch which language the story body is shown in — so a Korean speaker can learn English, and an English speaker can learn Korean, from the same story.",
  },
  {
    question: "What is a graded reader, and what do A1–B2 mean?",
    answer:
      "A graded reader is a story written so that its vocabulary and grammar stay within a set level. The levels A1, A2, B1 and B2 come from the CEFR scale used by most language courses and exams. See [CEFR levels explained](/learn/cefr-levels-explained) for what each level feels like and how to find yours.",
  },
  {
    question: "How does tap-any-word translation work?",
    answer:
      "Tap a word in the story and a short gloss appears. The dictionary behind it is hand-built and stored in the app, so a tap is instant and works with no internet connection. Nothing you tap is sent to a server.",
  },
  {
    question: "Are the translations machine-generated?",
    answer:
      "No. The sentence translations and the word glosses are written and edited in-house for the sense each graded story uses. No modern, copyrighted translation is used anywhere in the app.",
  },
  {
    question: "Is the read-aloud a real voice?",
    answer:
      "Where a story has been prepared, the Listen button and the flashcards play small pre-generated clips recorded once with a neural text-to-speech voice, then bundled with the app. For anything without a clip — your own study phrases, a brand-new story — it falls back to your browser's built-in voice. Audio is never generated at runtime from a paid service.",
  },
  {
    question: "Can I read the full, original book?",
    answer:
      "Each story is a self-contained graded chapter — a simplified retelling of a chapter or a complete short story — so you always finish something. More chapters of the longer works are being added over time. If there is a book you would like to see continued, that demand is what drives which ones we build next.",
  },
  {
    question: "Where does the content come from? Is it copyrighted?",
    answer:
      "Every story is an original simplified retelling of public-domain source material — fables, fairy tales, and classic literature old enough to be free of copyright. Each lesson ends with a note naming its source. The retellings themselves are written for SeoJae Story.",
  },
  {
    question: "Can I use it offline or install it as an app?",
    answer:
      "Yes. SeoJae Story is a progressive web app: add it to your home screen and stories you have opened, the dictionary and the audio keep working offline. A Google Play version is on the way.",
  },
  {
    question: "How do I keep track of new vocabulary?",
    answer:
      "Tap a word and add it to your study plan. Saved words become spaced-repetition flashcards with audio, and the app shows you which ones are due. You can also highlight whole sentences to keep.",
  },
  {
    question: "What is “My book club”?",
    answer:
      "A private club you own, with room for up to ten members. When you share a chapter into the club, your members can read that one chapter free while your subscription is active — a simple way to read the same story together.",
  },
  {
    question: "How many stories are there, and how often is more added?",
    answer:
      `There are ${LESSON_COUNT}+ stories today, including ${CLASSIC_COUNT} works of classic literature, spread across A1–B2. New stories and chapters are added regularly, guided by what readers ask for.`,
  },
];

/** Strip the inline `[label](href)` / `**bold**` syntax to plain text for JSON-LD. */
function toPlainText(s: string): string {
  return s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#faq`,
    url: `${SITE_URL}/faq`,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: SITE_NAME, url: `${SITE_URL}/` },
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: toPlainText(item.answer) },
    })),
  };
}
