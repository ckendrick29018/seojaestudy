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
  {
    slug: "god-bless-us-every-one",
    lessonSlug: "a-christmas-carol",
    workTitle: "A Christmas Carol",
    author: "Charles Dickens (1812–1870)",
    quoteEn: "God bless Us, Every One!",
    quoteKo: "우리 모두에게 신의 축복이 있기를!",
    speaker: "Tiny Tim",
    context:
      "Tiny Tim's Christmas toast, echoed by the narrator in the story's closing line as Scrooge's transformation is complete.",
    gutenbergId: "46",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
  },
  {
    slug: "were-all-mad-here",
    lessonSlug: "alice-in-wonderland",
    workTitle: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll (1832–1898)",
    quoteEn: "We're all mad here. I'm mad. You're mad.",
    quoteKo: "우리는 다 미쳤어. 나도 미쳤고, 너도 미쳤어.",
    speaker: "The Cheshire Cat",
    context:
      "The Cheshire Cat's answer when Alice protests that she doesn't want to go among mad people — Wonderland's entire logic in one line.",
    gutenbergId: "11",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
  },
  {
    slug: "handsome-clever-and-rich",
    lessonSlug: "emma",
    workTitle: "Emma",
    author: "Jane Austen (1775–1817)",
    quoteEn:
      "Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite some of the best blessings of existence; and had lived nearly twenty-one years in the world with very little to distress or vex her.",
    quoteKo:
      "엠마 우드하우스는 아름답고 영리하며 부유했다. 안락한 집과 행복한 성품까지 갖추어 인생의 가장 좋은 축복들을 두루 지닌 듯했다. 그녀는 이 세상에 태어난 지 거의 스물한 해가 되었지만, 그녀를 괴롭히는 일이나 슬프게 하는 일은 거의 없었다.",
    context:
      "The opening line of Jane Austen's novel, introducing Emma Woodhouse with the same gently ironic touch Austen gave Elizabeth Bennet and Anne Elliot.",
    gutenbergId: "158",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
  },
  {
    slug: "you-pierce-my-soul",
    lessonSlug: "persuasion",
    workTitle: "Persuasion",
    author: "Jane Austen (1775–1817)",
    quoteEn: "You pierce my soul. I am half agony, half hope.",
    quoteKo: "당신은 내 영혼을 꿰뚫습니다. 나는 반은 고통이고, 반은 희망입니다.",
    speaker: "Captain Wentworth",
    context:
      "From the letter Captain Wentworth secretly writes to Anne Elliot while pretending to attend to other business — one of the most quoted declarations in English literature.",
    gutenbergId: "105",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
  },
  {
    slug: "a-thistle-cannot-grow",
    lessonSlug: "the-secret-garden",
    workTitle: "The Secret Garden",
    author: "Frances Hodgson Burnett (1849–1924)",
    quoteEn: "Where you tend a rose, my lad, a thistle cannot grow.",
    quoteKo: "네가 장미를 돌보는 곳에는, 소년이여, 엉겅퀴가 자랄 수 없단다.",
    context:
      "A gardener's rhyme, repeated near the novel's close, as Mary and Colin's care for the secret garden mirrors the story's belief that tending to life can heal it.",
    gutenbergId: "113",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
  },
  {
    slug: "ive-got-out-at-last",
    lessonSlug: "the-yellow-wallpaper",
    workTitle: "The Yellow Wallpaper",
    author: "Charlotte Perkins Gilman (1860–1935)",
    quoteEn:
      "I've got out at last, in spite of you and Jane! And I've pulled off most of the paper, so you can't put me back!",
    quoteKo:
      "드디어 빠져나왔어요, 당신과 제인이 아무리 말려도! 벽지도 거의 다 뜯어냈으니, 이제 날 다시 가둘 수 없어요!",
    speaker: "The narrator",
    context:
      "The story's unnamed narrator, having fully descended into her delusions, confronts her husband in the story's unsettling final lines.",
    gutenbergId: "1952",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
  },
];

export function getQuote(slug: string): Quote | undefined {
  return QUOTES.find((q) => q.slug === slug);
}
