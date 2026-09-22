import type { Lesson, LessonLight } from "./types";
import type { Quote } from "./quotes";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./site";
import { estimateReadingTime } from "./utils";

const LANGUAGE_NAME: Record<Lesson["targetLanguage"], string> = {
  en: "English",
  ko: "Korean",
};

const LANGUAGE_NAME_KO: Record<Lesson["targetLanguage"], string> = {
  en: "영어",
  ko: "한국어",
};

/** The support language a lesson translates into (the opposite of the target). */
function nativeLanguageName(lesson: LessonLight): string {
  return LANGUAGE_NAME[lesson.nativeLanguage];
}

function nativeLanguageNameKo(lesson: LessonLight): string {
  return LANGUAGE_NAME_KO[lesson.nativeLanguage];
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
export function lessonMetaTitle(lesson: LessonLight): string {
  const target = LANGUAGE_NAME[lesson.targetLanguage];
  const native = nativeLanguageName(lesson);
  const byline = lesson.author ? ` by ${stripDates(lesson.author)}` : "";
  return `${lesson.title}${byline} — ${target}–${native} Graded Reader (${lesson.level})`;
}

/** Marketing/meta description for a lesson, shared by <meta> tags and JSON-LD. */
export function lessonDescription(lesson: LessonLight): string {
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
 * `lesson.title` is already in the target language — for a Korean-target
 * lesson (a folktale) that's already Korean, so no gloss is needed. For an
 * English-target lesson, lead with the Korean `titleTranslation` (what a
 * Korean searcher recognizes) with the English original in parentheses.
 */
function koHeadline(lesson: LessonLight): string {
  return lesson.targetLanguage === "ko" ? lesson.title : `${lesson.titleTranslation}(${lesson.title})`;
}

/** Korean-phrased counterpart to {@link lessonMetaTitle}, for the `/ko` route tree. */
export function lessonMetaTitleKo(lesson: LessonLight): string {
  const target = LANGUAGE_NAME_KO[lesson.targetLanguage];
  const native = nativeLanguageNameKo(lesson);
  const byline = lesson.author ? ` (${stripDates(lesson.author)})` : "";
  return `${koHeadline(lesson)}${byline} — ${native} 번역이 있는 쉬운 ${target} 원서 (${lesson.level})`;
}

/** Korean-phrased counterpart to {@link lessonDescription}. */
export function lessonDescriptionKo(lesson: LessonLight): string {
  const target = LANGUAGE_NAME_KO[lesson.targetLanguage];
  const native = nativeLanguageNameKo(lesson);
  const byline = lesson.author ? ` (${stripDates(lesson.author)})` : "";
  return (
    `${koHeadline(lesson)}${byline}를 ${lesson.level} 단계 대역 리더로 무료로 읽어보세요. ` +
    `쉬운 ${target} 원문에 문장별 ${native} 번역, 원어민 음성 낭독, 어휘 플래시카드, 이해도 확인 문제가 함께 제공됩니다.`
  );
}

/** "B1" or "B1–B2" across a book's parts. */
function levelRange(parts: LessonLight[]): string {
  const order = ["A1", "A2", "B1", "B2"];
  const ranks = parts.map((p) => order.indexOf(p.level)).filter((r) => r >= 0);
  if (ranks.length === 0) return "";
  const lo = order[Math.min(...ranks)];
  const hi = order[Math.max(...ranks)];
  return lo === hi ? lo : `${lo}–${hi}`;
}

/** The <title> for a book page. `parts` are the book's lessons in reading order. */
export function bookMetaTitle(title: string, parts: LessonLight[]): string {
  const first = parts[0];
  const byline = first?.author ? ` by ${stripDates(first.author)}` : "";
  const langs = first ? `${LANGUAGE_NAME[first.targetLanguage]}–${nativeLanguageName(first)} ` : "";
  return `${title}${byline} — ${langs}Graded Reader in ${parts.length} Chapters`;
}

/** Marketing/meta description for a book page. */
export function bookDescription(title: string, parts: LessonLight[]): string {
  const first = parts[0];
  const byline = first?.author ? ` by ${stripDates(first.author)}` : "";
  const target = first ? LANGUAGE_NAME[first.targetLanguage] : "English";
  const native = first ? nativeLanguageName(first) : "Korean";
  const levels = levelRange(parts);
  return (
    `Read "${title}"${byline} chapter by chapter as a bilingual graded reader: ${parts.length} parts retold ` +
    `in simple ${target}${levels ? ` (CEFR ${levels})` : ""}, each with a sentence-by-sentence ${native} translation, ` +
    `audio narration, vocabulary flashcards, and a comprehension check. Start free.`
  );
}

/** Korean-phrased counterpart to {@link bookMetaTitle}. `titleTranslation` is the book's Korean title. */
export function bookMetaTitleKo(title: string, titleTranslation: string, parts: LessonLight[]): string {
  const first = parts[0];
  const byline = first?.author ? ` (${stripDates(first.author)})` : "";
  const target = first ? LANGUAGE_NAME_KO[first.targetLanguage] : "영어";
  return `${titleTranslation}(${title})${byline} — 챕터별로 읽는 ${target} 대역 리더 (총 ${parts.length}장)`;
}

/** Korean-phrased counterpart to {@link bookDescription}. */
export function bookDescriptionKo(title: string, titleTranslation: string, parts: LessonLight[]): string {
  const first = parts[0];
  const byline = first?.author ? ` (${stripDates(first.author)})` : "";
  const target = first ? LANGUAGE_NAME_KO[first.targetLanguage] : "영어";
  const native = first ? nativeLanguageNameKo(first) : "한국어";
  const levels = levelRange(parts);
  return (
    `${titleTranslation}(${title})${byline}를 챕터별로 읽는 무료 대역 리더예요. 쉬운 ${target}로 다시 쓴 ${parts.length}개 챕터` +
    `${levels ? ` (CEFR ${levels})` : ""}에 문장별 ${native} 번역, 음성 낭독, 어휘 플래시카드, 이해도 확인 문제가 함께 제공돼요.`
  );
}

/**
 * Long-tail keyword set for a lesson page. Google reads the visible copy, but a
 * focused `keywords` list still helps some engines and is cheap to emit.
 */
export function lessonKeywords(lesson: LessonLight): string[] {
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

/** Korean-phrased counterpart to {@link lessonKeywords} — real Korean search phrasing, not a translation of the English list. */
export function lessonKeywordsKo(lesson: LessonLight): string[] {
  const target = LANGUAGE_NAME_KO[lesson.targetLanguage];
  const native = nativeLanguageNameKo(lesson);
  const koTitle = lesson.targetLanguage === "ko" ? lesson.title : lesson.titleTranslation;
  const author = lesson.author ? stripDates(lesson.author) : null;

  const list = [
    koTitle,
    `${koTitle} ${target} 원서`,
    `${koTitle} 쉬운 ${target}`,
    `${koTitle} 대역`,
    `${lesson.level} ${target} 원서`,
    `${lesson.level} ${target} 리딩`,
    `${target} 단편소설 무료`,
    `${target} 원서 읽기`,
    `쉬운 ${target} 소설`,
    `${native} 번역 ${target} 소설`,
  ];
  if (author) list.push(`${author} ${target} 원서`);
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
  const isBiography = lesson.collection === "biography";

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
    : isBiography
      ? { name: "Biographies", item: `${SITE_URL}/biographies` }
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
  lessons: LessonLight[];
  /** Optional intermediate breadcrumb, e.g. { name: "Classics", path: "/classics" }. */
  parent?: { name: string; path: string };
}) {
  const url = `${SITE_URL}${opts.path}`;

  const crumbs = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    ...(opts.parent
      ? [{ "@type": "ListItem", position: 2, name: opts.parent.name, item: `${SITE_URL}${opts.parent.path}` }]
      : []),
    { "@type": "ListItem", position: opts.parent ? 3 : 2, name: opts.name, item: url },
  ];

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
        itemListElement: crumbs,
      },
    ],
  };
}

/**
 * Real reciprocal hreflang for `alternates.languages`, used by both `sitemap.ts`
 * and every page's own `generateMetadata`. Replaces the old `bilingual()`
 * no-op, which pointed every language at the identical URL — hreflang only
 * means something when it maps between genuinely distinct URLs. Pass
 * `hasKo: false` for the many pages that don't have a `/ko` counterpart yet
 * (still emits a correct, if uninteresting, English self-reference).
 */
export function localeAlternates(path: string, hasKo: boolean): { languages: Record<string, string> } {
  const en = `${SITE_URL}${path}`;
  if (!hasKo) return { languages: { en, "x-default": en } };
  const ko = `${SITE_URL}${path === "/" ? "/ko" : `/ko${path}`}`;
  return { languages: { en, ko, "x-default": en } };
}

/**
 * WebSite/Organization/WebApplication JSON-LD for the homepage, one call per
 * locale — used by `src/app/page.tsx` and `src/app/ko/page.tsx`. The
 * Organization entity (`#org`) is a single canonical entity shared by both
 * locales; only the WebSite/WebApplication urls, `hasPart`, and `inLanguage`
 * actually vary.
 */
export function landingJsonLd(locale: "en" | "ko") {
  const homeUrl = locale === "ko" ? `${SITE_URL}/ko` : `${SITE_URL}/`;
  const hasPart =
    locale === "ko"
      ? [{ "@id": `${SITE_URL}/ko/classics#page` }, { "@id": `${SITE_URL}/ko/biographies#page` }]
      : [
          { "@id": `${SITE_URL}/classics#page` },
          { "@id": `${SITE_URL}/library#page` },
          { "@id": `${SITE_URL}/folktales#page` },
          { "@id": `${SITE_URL}/learn#page` },
        ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${homeUrl}#website`,
        url: homeUrl,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: locale,
        publisher: { "@id": `${SITE_URL}/#org` },
        hasPart,
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/icons/icon-512.png`,
      },
      {
        "@type": "WebApplication",
        name: SITE_NAME,
        url: homeUrl,
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web, Android",
        inLanguage: locale,
        description: SITE_DESCRIPTION,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free first lessons; optional Premium subscription unlocks the full library.",
        },
      },
    ],
  };
}

/** The <title> for a quote page — leads with the line itself (the term people search). */
export function quoteMetaTitle(quote: Quote): string {
  const excerpt = quote.quoteEn.length > 60 ? `${quote.quoteEn.slice(0, 57)}...` : quote.quoteEn;
  return `"${excerpt}" — ${quote.workTitle} Quote in English & Korean`;
}

/** Marketing/meta description for a quote page, shared by <meta> tags and JSON-LD. */
export function quoteDescription(quote: Quote): string {
  const author = stripDates(quote.author);
  return (
    `The famous line "${quote.quoteEn}" from ${quote.workTitle} by ${author}, ` +
    `with a Korean translation, context, and a tap-to-translate English reading.`
  );
}

/**
 * schema.org structured data for a quote page: a Quotation from the original
 * work, plus a BreadcrumbList. Rendered as a <script type="application/ld+json">
 * in the quote route.
 */
export function quoteJsonLd(quote: Quote) {
  const url = `${SITE_URL}/quote/${quote.slug}`;
  const author = stripDates(quote.author);

  const quotation: Record<string, unknown> = {
    "@type": "Quotation",
    "@id": `${url}#quote`,
    url,
    text: quote.quoteEn,
    inLanguage: "en",
    isPartOf: {
      "@type": "Book",
      name: quote.workTitle,
      author: { "@type": "Person", name: author },
    },
    creator: { "@type": "Person", name: author },
    publisher: { "@type": "Organization", "@id": `${SITE_URL}/#org`, name: SITE_NAME, url: `${SITE_URL}/` },
  };
  if (quote.speaker) quotation.spokenByCharacter = { "@type": "Person", name: quote.speaker };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Quotes", item: `${SITE_URL}/quotes` },
      { "@type": "ListItem", position: 3, name: quote.workTitle, item: url },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [quotation, breadcrumb],
  };
}
