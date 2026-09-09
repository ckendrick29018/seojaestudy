import type { Lesson } from "./types";
import { SITE_NAME, SITE_URL } from "./site";

const LANGUAGE_NAME: Record<Lesson["targetLanguage"], string> = {
  en: "English",
  ko: "Korean",
};

/** Marketing/meta description for a lesson, shared by <meta> tags and JSON-LD. */
export function lessonDescription(lesson: Lesson): string {
  const language = LANGUAGE_NAME[lesson.targetLanguage];
  const byline = lesson.author ? ` by ${stripDates(lesson.author)}` : "";
  return (
    `A ${lesson.level} ${language} reading lesson: "${lesson.title}"${byline}. ` +
    "Read it sentence by sentence with instant translations, narration, vocabulary, and a comprehension check."
  );
}

/** "Jane Austen (1775–1817)" -> "Jane Austen" */
function stripDates(author: string): string {
  return author.replace(/\s*\([^)]*\)\s*$/, "").trim();
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
    inLanguage: lesson.targetLanguage,
    description: lessonDescription(lesson),
    learningResourceType: "reading passage",
    educationalUse: "self-study",
    educationalLevel: `CEFR ${lesson.level}`,
    educationalAlignment: {
      "@type": "AlignmentObject",
      alignmentType: "educationalLevel",
      educationalFramework: "Common European Framework of Reference for Languages",
      targetName: lesson.level,
    },
    teaches: `${language} reading comprehension and vocabulary`,
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
