import type { Lesson } from "./types";
import { SITE_NAME, SITE_URL } from "./site";
import { estimateReadingTime } from "./utils";

const LANGUAGE_NAME: Record<Lesson["targetLanguage"], string> = {
  en: "English",
  ko: "Korean",
};

/** The support language a lesson translates into (the opposite of the target). */
function nativeLanguageName(lesson: Lesson): string {
  return LANGUAGE_NAME[lesson.nativeLanguage];
}

/** "Jane Austen (1775–1817)" -> "Jane Austen" */
function stripDates(author: string): string {
  return author.replace(/\s*\([^)]*\)\s*$/, "").trim();
}

/** Total words in the target-language passage — used for meta copy and JSON-LD. */
function storyWordCount(lesson: Lesson): number {
  return lesson.paragraphs
    .flat()
    .reduce((sum, s) => sum + s.text.trim().split(/\s+/).filter(Boolean).length, 0);
}

/**
 * The <title> for a lesson page (the site name is appended by the metadata
 * template). Leads with the work's title — the term people actually search —
 * then the signal that this is a free, bilingual, graded version to read online.
 */
export function lessonMetaTitle(lesson: Lesson): string {
  const target = LANGUAGE_NAME[lesson.targetLanguage];
  const native = nativeLanguageName(lesson);
  const byline = lesson.author ? ` by ${stripDates(lesson.author)}` : "";
  return `${lesson.title}${byline} — ${target}–${native} Graded Reader (${lesson.level})`;
}

/** Marketing/meta description for a lesson, shared by <meta> tags and JSON-LD. */
export function lessonDescription(lesson: Lesson): string {
  const target = LANGUAGE_NAME[lesson.targetLanguage];
  const native = nativeLanguageName(lesson);
  const byline = lesson.author ? ` by ${stripDates(lesson.author)}` : "";

  return (
    `Read "${lesson.title}"${byline} online free as a ${lesson.level} graded reader. ` +
    `Simplified ${target} with a sentence-by-sentence ${native} translation, ` +
    `audio narration, vocabulary flashcards, and a comprehension check.`
  );
}

/**
 * Long-tail keyword set for a lesson page. Google reads the visible copy, but a
 * focused `keywords` list still helps some engines and is cheap to emit.
 */
export function lessonKeywords(lesson: Lesson): string[] {
  const target = LANGUAGE_NAME[lesson.targetLanguage];
  const native = nativeLanguageName(lesson);
  const author = lesson.author ? stripDates(lesson.author) : null;

  const list = [
    lesson.title,
    `${lesson.title} in simple ${target}`,
    `${lesson.title} ${native} translation`,
    `${lesson.title} bilingual text`,
    `${lesson.title} graded reader`,
    `${lesson.title} read online`,
    `${lesson.level} ${target} graded reader`,
    `${lesson.level} ${target} reading practice`,
    `bilingual ${target} ${native} short stories`,
    `learn ${target} through stories`,
  ];
  if (author) {
    list.push(`${author} ${target} learner`, `${author} simplified`);
  }
  return list;
}

/**
 * schema.org structured data for a lesson page: a LearningResource describing
 * the graded-reading exercise, plus a BreadcrumbList. Rendered as a
 * <script type="application/ld+json"> in the lesson route.
 */
export function lessonJsonLd(lesson: Lesson) {
  const url = `${SITE_URL}/lesson/${lesson.slug}`;
  const language = LANGUAGE_NAME[lesson.targetLanguage];
  const isClassic = lesson.collection === "classics";

  const learningResource: Record<string, unknown> = {
    "@type": ["LearningResource", "Article"],
    "@id": `${url}#lesson`,
    url,
    name: lesson.title,
    headline: lessonMetaTitle(lesson),
    inLanguage: lesson.targetLanguage,
    description: lessonDescription(lesson),
    learningResourceType: ["reading passage", "graded reader"],
    educationalUse: "self-study",
    educationalLevel: `CEFR ${lesson.level}`,
    educationalAlignment: {
      "@type": "AlignmentObject",
      alignmentType: "educationalLevel",
      educationalFramework: "Common European Framework of Reference for Languages",
      targetName: lesson.level,
    },
    teaches: `${language} reading comprehension and vocabulary`,
    about: lesson.topic,
    wordCount: storyWordCount(lesson),
    timeRequired: `PT${estimateReadingTime(lesson)}M`,
    typicalAgeRange: "13-",
    isFamilyFriendly: true,
    isAccessibleForFree: lesson.isFree,
    author: { "@type": "Organization", "@id": `${SITE_URL}/#org`, name: SITE_NAME, url: `${SITE_URL}/` },
    publisher: { "@type": "Organization", "@id": `${SITE_URL}/#org`, name: SITE_NAME, url: `${SITE_URL}/` },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
  };
  if (lesson.titleTranslation) {
    learningResource.alternateName = lesson.titleTranslation;
  }
  if (lesson.author) {
    learningResource.isBasedOn = {
      "@type": "CreativeWork",
      name: lesson.title,
      genre: lesson.topic,
      author: { "@type": "Person", name: stripDates(lesson.author) },
    };
  }

  const secondCrumb = isClassic
    ? { name: "Classics", item: `${SITE_URL}/classics` }
    : { name: "Library", item: `${SITE_URL}/library` };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: secondCrumb.name, item: secondCrumb.item },
      { "@type": "ListItem", position: 3, name: lesson.title, item: url },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [learningResource, breadcrumb],
  };
}

/**
 * schema.org structured data for a listing page (`/classics`, `/library`): a
 * CollectionPage whose `mainEntity` is an ordered ItemList of the lessons on
 * it. Gives Google an explicit map of the catalogue and each work's level,
 * author, and URL.
 */
export function collectionPageJsonLd(opts: {
  path: string;
  name: string;
  description: string;
  lessons: Lesson[];
}) {
  const url = `${SITE_URL}${opts.path}`;

  const itemList = {
    "@type": "ItemList",
    name: opts.name,
    numberOfItems: opts.lessons.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: opts.lessons.map((lesson, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/lesson/${lesson.slug}`,
      name: lesson.author
        ? `${lesson.title} by ${stripDates(lesson.author)} (${lesson.level})`
        : `${lesson.title} (${lesson.level})`,
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: opts.name,
        description: opts.description,
        inLanguage: ["en", "ko"],
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: {
          "@type": "Thing",
          name: "Graded readers for English and Korean language learners",
        },
        mainEntity: itemList,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: opts.name, item: url },
        ],
      },
    ],
  };
}
