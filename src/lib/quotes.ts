/**
 * Bilingual famous-quote landing pages (`/quotes`, `/quote/[slug]`).
 *
 * Unlike a lesson, the English text here is **verbatim from the public-domain
 * original** (never our own simplified retelling) — these pages exist to
 * catch searches for the actual famous line, in English or in Korean
 * translation. Only the Korean translation and the `context` blurb are
 * original text written for SeoJae Story.
 *
 * Sourcing rules (same spirit as CONTENT_BACKLOG.md, see QUOTES_BACKLOG.md):
 *  - Quote text must be re-verified against the actual Project Gutenberg
 *    plain-text source before adding it here — never typed from memory only.
 *  - `lessonSlug` links to an existing lesson for that same work so readers
 *    have somewhere to go next; the quote does not need to fall inside that
 *    lesson's specific excerpt.
 */

export interface Quote {
  slug: string;
  /** Existing `Lesson.slug` for this work, linked from the CTA. */
  lessonSlug: string;
  workTitle: string;
  /** Same format as `Lesson.author`, e.g. "Jane Austen (1775–1817)". */
  author: string;
  /** Verbatim from the public-domain original. */
  quoteEn: string;
  /** Fresh, original Korean translation of quoteEn — never a published translation. */
  quoteKo: string;
  /** Who says this line, when it's dialogue (omitted for narration). */
  speaker?: string;
  /** 1–2 sentence blurb of what's happening here, our own words. */
  context: string;
  /** Project Gutenberg ebook id the quote was verified against. */
  gutenbergId: string;
  datePublished: string;
  dateModified: string;
}

export const QUOTES: Quote[] = [
  {
    slug: "truth-universally-acknowledged",
    lessonSlug: "pride-and-prejudice",
    workTitle: "Pride and Prejudice",
    author: "Jane Austen (1775–1817)",
    quoteEn:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.",
    quoteKo:
      "상당한 재산을 가진 독신 남자에게는 반드시 아내가 필요하다는 것은 누구나 인정하는 진리이다.",
    context:
      "The opening line of Jane Austen's novel — a wry, ironic statement of the social assumption that drives the entire plot.",
    gutenbergId: "1342",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
  },
  {
    slug: "boats-against-the-current",
    lessonSlug: "the-great-gatsby",
    workTitle: "The Great Gatsby",
    author: "F. Scott Fitzgerald (1896–1940)",
    quoteEn: "So we beat on, boats against the current, borne back ceaselessly into the past.",
    quoteKo: "그리하여 우리는 물살을 거스르는 배처럼 나아가지만, 끊임없이 과거로 떠밀려간다.",
    speaker: "Nick Carraway",
    context:
      "The final line of the novel, as narrator Nick Carraway reflects on Gatsby's doomed hope of reclaiming the past.",
    gutenbergId: "64317",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
  },
  {
    slug: "tomorrow-is-a-new-day",
    lessonSlug: "anne-of-green-gables",
    workTitle: "Anne of Green Gables",
    author: "L. M. Montgomery (1874–1942)",
    quoteEn: "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
    quoteKo: "내일은 아직 아무 실수도 없는 새로운 하루라고 생각하면 참 멋지지 않아요?",
    speaker: "Anne Shirley",
    context:
      "Anne Shirley, incurably hopeful even after a day full of small disasters, says this to her guardian Marilla.",
    gutenbergId: "45",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
  },
  {
    slug: "not-afraid-of-storms",
    lessonSlug: "little-women",
    workTitle: "Little Women",
    author: "Louisa May Alcott (1832–1888)",
    quoteEn: "I'm not afraid of storms, for I'm learning how to sail my ship.",
    quoteKo: "나는 폭풍이 두렵지 않아요. 내 배를 항해하는 법을 배우고 있으니까요.",
    speaker: "Amy March",
    context:
      "Grown up and newly married, Amy March reassures her mother she can weather whatever comes — one of the book's most quoted lines.",
    gutenbergId: "514",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
  },
  {
    slug: "i-am-no-bird",
    lessonSlug: "jane-eyre",
    workTitle: "Jane Eyre",
    author: "Charlotte Brontë (1816–1855)",
    quoteEn: "I am no bird; and no net ensnares me; I am a free human being with an independent will.",
    quoteKo:
      "나는 새가 아니에요. 그 어떤 그물도 나를 가두지 못해요. 나는 자유의지를 가진 자유로운 인간이에요.",
    speaker: "Jane Eyre",
    context:
      "Jane's declaration of independence to Mr. Rochester — one of the most famous statements of personal freedom in English literature.",
    gutenbergId: "1260",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
  },
  {
    slug: "whatever-our-souls-are-made-of",
    lessonSlug: "wuthering-heights",
    workTitle: "Wuthering Heights",
    author: "Emily Brontë (1818–1848)",
    quoteEn: "Whatever our souls are made of, his and mine are the same.",
    quoteKo: "우리의 영혼이 무엇으로 이루어졌든, 그의 영혼과 내 영혼은 같아요.",
    speaker: "Catherine Earnshaw",
    context:
      "Catherine Earnshaw, describing her bond with Heathcliff to her housekeeper Nelly — one of literature's most intense declarations of love.",
    gutenbergId: "768",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
  },
  {
    slug: "they-are-the-magi",
    lessonSlug: "gift-of-the-magi",
    workTitle: "The Gift of the Magi",
    author: "O. Henry (1862–1910)",
    quoteEn: "Of all who give and receive gifts, such as they are wisest. Everywhere they are wisest. They are the magi.",
    quoteKo:
      "선물을 주고받는 모든 이들 중에서, 이 두 사람이야말로 가장 지혜로운 사람들이다. 어디서나 그들이 가장 지혜롭다. 그들이 바로 동방박사이다.",
    context:
      "The closing lines of O. Henry's short story, revealing why two poor young lovers who each gave up their most precious possession for the other were, in fact, the wisest gift-givers of all.",
    gutenbergId: "2776",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
  },
  {
    slug: "great-and-sudden-change",
    lessonSlug: "frankenstein",
    workTitle: "Frankenstein",
    author: "Mary Shelley (1797–1851)",
    quoteEn: "Nothing is so painful to the human mind as a great and sudden change.",
    quoteKo: "인간의 마음에 크고 갑작스러운 변화만큼 고통스러운 것은 없다.",
    speaker: "Victor Frankenstein",
    context:
      "Victor Frankenstein reflects on grief and the fragility of happiness after tragedy strikes his family.",
    gutenbergId: "84",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
  },
];

export function getQuote(slug: string): Quote | undefined {
  return QUOTES.find((q) => q.slug === slug);
}
