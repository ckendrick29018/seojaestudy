import { SITE_NAME, SITE_URL } from "./site";

/**
 * Cornerstone articles under `/learn`.
 *
 * These are hand-written guides aimed at real search intent ("learn English by
 * reading", "CEFR levels explained", "best short stories for language
 * learners"). They exist to bring readers in from search and route them into
 * the library, so every article links to the relevant reading pages.
 *
 * Body model: a list of sections, each a heading plus paragraphs. Paragraphs
 * are plain text with a tiny inline syntax the renderer understands —
 * `[label](/path)` for a link and `**text**` for bold. No raw HTML, so nothing
 * here can inject markup.
 */

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  list?: string[];
}

export interface Article {
  slug: string;
  title: string;
  /** Meta description + card blurb. Keep ~150–160 chars. */
  description: string;
  /** One-line hook shown under the title on the article page. */
  lede: string;
  datePublished: string;
  dateModified: string;
  /** ~ minutes, shown on the card and in JSON-LD. */
  readingMinutes: number;
  keywords: string[];
  sections: ArticleSection[];
}

export const ARTICLES: Article[] = [
  {
    slug: "learn-english-by-reading",
    title: "How to Learn English by Reading Short Stories",
    description:
      "A simple, proven method for learning English through reading: pick the right level, read for meaning, look up sparingly, and reread. With free graded stories.",
    lede: "Reading is the quietest way to build real English — here is how to do it well.",
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    readingMinutes: 7,
    keywords: [
      "learn English by reading",
      "how to learn English through stories",
      "graded readers English",
      "extensive reading English",
      "English reading practice for beginners",
    ],
    sections: [
      {
        heading: "Why reading works",
        paragraphs: [
          "When you read a story you meet the same words again and again, each time in a slightly different sentence. That repetition — in context, at your own pace — is how vocabulary and grammar move from \"I have seen this\" to \"I can use this\". Speaking and listening matter too, but reading is the part you can do alone, anywhere, for ten quiet minutes.",
          "The catch is level. A page that is too hard becomes a decoding exercise: you look up every third word, lose the thread, and stop. The method below is really just a way of keeping the text comfortable enough that you keep going.",
        ],
      },
      {
        heading: "Step 1 — Read at the right level",
        paragraphs: [
          "Aim for a page where you understand most sentences on the first read and can guess one or two unknown words from context. That is roughly 95–98% known words. If you are hunting for the dictionary constantly, drop a level; if nothing is new, go up.",
          "Graded readers are written for exactly this. On SeoJae Story every story is labelled A1, A2, B1 or B2 on the [CEFR scale](/learn/cefr-levels-explained), so you can start where the reading feels light. Browse them all in the [library](/library), or jump straight to [classic stories retold at your level](/classics).",
        ],
      },
      {
        heading: "Step 2 — Read for the story first",
        paragraphs: [
          "On the first pass, read the whole story (or chapter) straight through for meaning. Do not stop for every unknown word. Let some things stay fuzzy. The goal is to follow what happens and feel the shape of the sentences.",
          "If a whole sentence blocks you, that is when a translation earns its place. In the reader you can tap the globe on any line to see it in your other language, then keep going.",
        ],
      },
      {
        heading: "Step 3 — Look up sparingly, then save",
        paragraphs: [
          "On a second read, tap the few words that matter — the ones that keep coming back, or that carry the sentence. SeoJae Story's tap-any-word glosses are an offline, hand-built dictionary, so a tap is instant and works on a plane.",
          "Add the keepers to your study plan. A word you met in a story you enjoyed, then reviewed a few times as a flashcard, is a word you will recognise next week. Don't try to save everything — five good words per story beats fifty you never look at again.",
        ],
      },
      {
        heading: "Step 4 — Reread, and read a lot",
        paragraphs: [
          "Rereading a story you already understand is not wasted time — it is where fluency comes from. The second and third reads are faster, smoother, and almost effortless, which is exactly the feeling you are training for.",
          "Then read the next story. Volume matters more than any single technique: a learner who finishes thirty short graded stories will have seen the top few thousand words dozens of times each, which no vocabulary list can match.",
        ],
      },
      {
        heading: "A 15-minute daily routine",
        paragraphs: ["If you only have a quarter of an hour a day, this works:"],
        list: [
          "Minutes 0–8: read a new story straight through, tapping the globe only when a whole sentence blocks you.",
          "Minutes 8–12: reread it, tapping 3–5 words to check, and add the best ones to your study plan.",
          "Minutes 12–15: run the flashcards that are due, and take the short comprehension check.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Pick a story whose plot you already half-know — a fairy tale, or a classic you have heard of. Familiar plot means more attention left for the language. Our [pick of classic short stories for learners](/learn/best-classic-short-stories-for-learners) is a good shortlist, and every story on SeoJae Story is free to read with no account during the current test.",
        ],
      },
    ],
  },

  {
    slug: "learn-korean-by-reading",
    title: "How to Learn Korean by Reading: A Beginner's Guide",
    description:
      "Learn Korean by reading real stories: get comfortable with Hangul, start with graded readers, use tap-to-translate, and read the same story in both languages.",
    lede: "Once you can sound out Hangul, stories are the fastest way to make Korean stick.",
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    readingMinutes: 8,
    keywords: [
      "learn Korean by reading",
      "how to learn Korean through stories",
      "Korean graded readers",
      "Korean reading practice for beginners",
      "read Korean stories with translation",
    ],
    sections: [
      {
        heading: "First, get Hangul out of the way",
        paragraphs: [
          "Hangul, the Korean alphabet, is designed to be learned in a weekend. It is about 24 basic letters that combine into syllable blocks, and the shapes are regular. You do not need to be fast yet — you just need to be able to sound a word out slowly. Reading practice will do the rest, because you will see the same syllables thousands of times.",
          "Until sounding-out is automatic, keep a romanization crutch nearby but try not to lean on it. Every time you decode 사람 as \"sa-ram\" yourself, the alphabet gets a little more automatic.",
        ],
      },
      {
        heading: "Start with graded readers, not the news",
        paragraphs: [
          "Native Korean articles, dramas and webtoons are full of contractions, slang and long sentences that will bury a beginner. Graded readers are written so that the grammar and vocabulary grow slowly. On SeoJae Story, Korean stories are labelled A1–B2 on the [CEFR scale](/learn/cefr-levels-explained); start at A1 even if it feels easy, and move up when a page reads smoothly.",
          "Browse the [full library](/library) for the leveled list, or read [classic stories retold in simple Korean](/classics).",
        ],
      },
      {
        heading: "Read the story in Korean, check in your language",
        paragraphs: [
          "In the reader you can switch the story body to Korean and read it directly. When a whole sentence stops you, tap the globe on that line to see the English, understand it, and switch your attention back to the Korean. The point is to spend most of your time looking at Korean, using the translation only to unblock.",
          "This \"read in the target language, peek to unblock\" habit is the single biggest difference between learners who progress and learners who stall on translation.",
        ],
      },
      {
        heading: "Tap words — but expect Korean to fight back a little",
        paragraphs: [
          "Korean is agglutinative: a word you tap is usually a stem plus a string of endings and particles — 말했어요 is 말하다 (\"to say\") plus past tense plus a polite ending. SeoJae Story's tap-to-translate tries to fold those forms back to the dictionary word for you, offline, with no lookups sent anywhere.",
          "When a rare inflected form has no gloss yet, the line translation is still one tap away, so you are never stuck. Save the useful stems — not every inflected form — to your study plan.",
        ],
      },
      {
        heading: "Use particles as anchors, not obstacles",
        paragraphs: [
          "A handful of particles do most of the grammatical work: 은/는 (topic), 이/가 (subject), 을/를 (object), 에 (place/time), 에서 (from/at), 로/으로 (by/toward). You do not need to study them in a table. Notice them in the stories, tap them a few times, and the pattern settles in on its own.",
        ],
      },
      {
        heading: "A weekly rhythm that works",
        paragraphs: ["Little and often beats a long session once a week:"],
        list: [
          "Most days: one short story in Korean, globe on to unblock sentences, 5 words saved.",
          "Twice a week: reread two earlier stories with the translation hidden the whole time.",
          "Once a week: take the comprehension checks for the stories you read, in Korean.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Fairy tales and short fables are ideal first Korean reading: the plots are familiar, the sentences are short, and the vocabulary repeats. Open the [library](/library), filter to A1, and read three in a row. Everything is free to read with no account during the current test.",
        ],
      },
    ],
  },

  {
    slug: "cefr-levels-explained",
    title: "CEFR Levels Explained: A1, A2, B1 and B2 for Readers",
    description:
      "What A1, A2, B1 and B2 actually mean when you are choosing something to read — with plain descriptions, example sentences, and how to pick your level.",
    lede: "The six-letter scale on every graded reader, in plain language — and how to find your level.",
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    readingMinutes: 6,
    keywords: [
      "CEFR levels explained",
      "A1 A2 B1 B2 reading",
      "what does CEFR mean",
      "how to find my reading level",
      "graded reader levels",
    ],
    sections: [
      {
        heading: "What CEFR is",
        paragraphs: [
          "CEFR — the Common European Framework of Reference for Languages — is a shared scale for describing how much of a language you can use. It runs A1, A2 (basic), B1, B2 (independent), C1, C2 (proficient). Almost every language course, exam and graded reader is mapped to it, which is why SeoJae Story labels every story A1–B2.",
          "For reading specifically, the level is really a promise about sentence length, how common the vocabulary is, and how much the text leans on context, idiom and tense.",
        ],
      },
      {
        heading: "A1 — first steps",
        paragraphs: [
          "Very short, direct sentences. High-frequency words only. Present tense and simple past. One idea per sentence, and the pictures or the plot carry a lot of the meaning.",
          "Feels like: \"The fox was hungry. She saw the grapes. She jumped, but she could not reach them.\"",
        ],
      },
      {
        heading: "A2 — everyday language",
        paragraphs: [
          "Short paragraphs about familiar things — family, home, daily events. Common connectors (because, but, so, then). Past and future tenses used naturally. You can follow a simple story without help, and guess a few new words.",
          "Feels like: \"She had wanted a red dress for the party, but there was no money for one, so she borrowed a necklace from a rich friend instead.\"",
        ],
      },
      {
        heading: "B1 — the turning point",
        paragraphs: [
          "Longer sentences with more than one clause. Feelings, opinions and reasons, not just events. Some figurative language. You can read a whole short story and follow the plot and the characters' motives, looking up only a handful of words.",
          "Feels like: \"He told himself the gift would be generous enough, and tried not to think about how small it would look beside everything he had just inherited.\"",
        ],
      },
      {
        heading: "B2 — reading for real",
        paragraphs: [
          "Dense paragraphs, subordinate clauses, irony, and vocabulary that is precise rather than merely common. You can read lightly adapted classic literature and follow tone and implication, not just the surface story.",
          "Feels like: \"There was something old and half-magical about her, as if she kept knowledge that had been handed down, quietly, for a very long time.\"",
        ],
      },
      {
        heading: "How to find your level in two minutes",
        paragraphs: [
          "Open a story one level below where you think you are and read the first page.",
        ],
        list: [
          "You understood everything and nothing was new → go up a level.",
          "You understood the page and met 1–3 new words you could guess → this is your level. Stay here.",
          "You had to stop and look up several words per paragraph → go down a level.",
        ],
      },
      {
        heading: "Pick a level and read",
        paragraphs: [
          "On SeoJae Story you can jump straight to a level: [A1](/classics/a1), [A2](/classics/a2), [B1](/classics/b1) or [B2](/classics/b2) for the classics, or browse the whole [library](/library) by level. It is normal to read across two neighbouring levels at once — easier stories for fluency, harder ones for growth.",
        ],
      },
    ],
  },

  {
    slug: "best-classic-short-stories-for-learners",
    title: "The Best Free Classic Short Stories for Language Learners",
    description:
      "Ten public-domain classics that make excellent reading practice — with why each one works for learners, its CEFR level, and a link to read it free.",
    lede: "Familiar plots, strong writing, and just enough length — the classics worth reading first.",
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    readingMinutes: 9,
    keywords: [
      "best classic short stories for language learners",
      "free classic stories to read online",
      "classic short stories for English learners",
      "public domain short stories graded",
      "easy classic literature for learners",
    ],
    sections: [
      {
        heading: "Why classics make good practice",
        paragraphs: [
          "A classic short story gives you three things at once: a plot you may already half-know (so more of your attention is free for the language), writing that repays a second read, and a natural stopping point. Because these works are in the public domain, they can be adapted and read for free.",
          "Every story below is on SeoJae Story as an original simplified retelling — not a modern translation — with a sentence-by-sentence translation, audio, vocabulary and a comprehension check. Levels are on the [CEFR scale](/learn/cefr-levels-explained); see [how to learn English by reading](/learn/learn-english-by-reading) for the method.",
        ],
      },
      {
        heading: "1. The Gift of the Magi — O. Henry (A2)",
        paragraphs: [
          "A young couple, each too poor to buy the other a Christmas present, each sell their most prized possession. Short, warm, and built on one clean twist — an ideal first \"real\" story. [Read it](/lesson/gift-of-the-magi).",
        ],
      },
      {
        heading: "2. The Fox and the Grapes — Aesop (A1)",
        paragraphs: [
          "The shortest possible complete story, and the origin of \"sour grapes\". Perfect for an absolute beginner who wants the satisfaction of finishing something. [Read it](/lesson/fox-and-grapes).",
        ],
      },
      {
        heading: "3. The Story of an Hour — Kate Chopin (B1)",
        paragraphs: [
          "In one hour, a woman hears that her husband has died and feels something she did not expect. A masterclass in saying a lot in very few words. [Read it](/lesson/story-of-an-hour).",
        ],
      },
      {
        heading: "4. The Necklace — Guy de Maupassant (A2–B1)",
        paragraphs: [
          "A borrowed diamond necklace, one lost evening, and ten years of consequences. The plot pulls you through, and the vocabulary of clothes, money and work is genuinely useful. [Read it](/lesson/the-necklace).",
        ],
      },
      {
        heading: "5. Pride and Prejudice, chapter 1 — Jane Austen (B1–B2)",
        paragraphs: [
          "Almost pure dialogue between Mr and Mrs Bennet about a rich new neighbour. Great for hearing how English carries irony and character in speech. [Read it](/lesson/pride-and-prejudice).",
        ],
      },
      {
        heading: "6. A Christmas Carol, Stave One — Charles Dickens (B1)",
        paragraphs: [
          "Scrooge, the cold counting-house, and Marley's ghost. Rich descriptive language, but the story is so well known that you can lean on the plot. [Read it](/lesson/a-christmas-carol).",
        ],
      },
      {
        heading: "7. The Bremen Town Musicians — Brothers Grimm (A1–A2)",
        paragraphs: [
          "Four old animals leave their farms to become musicians and frighten off some robbers. Repetitive structure, concrete vocabulary, and a happy ending. [Read it](/lesson/bremen-town-musicians).",
        ],
      },
      {
        heading: "8. The Nightingale and the Rose — Oscar Wilde (B1–B2)",
        paragraphs: [
          "A nightingale gives her life to make one red rose for a student who does not deserve it. Lyrical and a little bitter — good for readers ready for tone and irony. [Read it](/lesson/the-nightingale-and-the-rose).",
        ],
      },
      {
        heading: "9. Anne of Green Gables, chapter 2 — L. M. Montgomery (A2–B1)",
        paragraphs: [
          "Matthew drives to the station expecting a boy and comes home with a talkative red-haired girl. Warm, funny, and full of everyday conversation. [Read it](/lesson/anne-of-green-gables).",
        ],
      },
      {
        heading: "10. The Cop and the Anthem — O. Henry (B1)",
        paragraphs: [
          "A homeless man tries hard to get arrested so he can spend winter in a warm cell, and fails every time — until he stops trying. Wry, structured, and very re-readable. [Read it](/lesson/the-cop-and-the-anthem).",
        ],
      },
      {
        heading: "How to read the list",
        paragraphs: [
          "Start with one whose plot you know, at or just below your level. Read it once for the story, once for the words, and take the check. Then browse the [full classics collection](/classics) — there are many more, from fairy tales to Frankenstein.",
        ],
      },
    ],
  },

  {
    slug: "parallel-text-reading-method",
    title: "Parallel Text Reading: Learn a Language with Side-by-Side Translation",
    description:
      "What parallel text reading is, why it works for language learners, and the one rule that keeps translation a bridge into a language instead of a crutch.",
    lede: "Read in your target language with your own language one tap away — an old trick, done in a way that actually builds fluency.",
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    readingMinutes: 7,
    keywords: [
      "parallel text reading",
      "side by side translation method",
      "interlinear reading",
      "bilingual reading method",
      "read in two languages at once",
    ],
    sections: [
      {
        heading: "What parallel text reading is",
        paragraphs: [
          "Parallel text reading means reading a passage in the language you're learning with a translation available right next to it — historically printed side by side on facing pages, today usually one tap away. It's one of the oldest language-learning methods there is, and one of the few that lets you read real, complete sentences from day one instead of textbook dialogue built around a grammar point.",
          "It has a bad reputation in some corners of language learning, and the criticism is fair when it's misused: if you read the translation first and the target language second, your eyes are doing the target language but your brain is doing your native language. The method only works if the order is right.",
        ],
      },
      {
        heading: "Why it works when you do it right",
        paragraphs: [
          "The idea behind it is the same one behind graded readers generally — comprehensible input. You learn a language fastest by understanding messages in it, slightly above what you can already produce yourself. Parallel text removes the one thing that normally breaks that process: getting stuck on a single word or sentence and losing the whole passage while you dig through a dictionary.",
          "Used well, the translation is a safety net, not a script. Most of your reading time is spent in the target language, guessing, half-understanding, and pattern-matching — exactly the effortful process that builds real comprehension. The translation just stops a single hard sentence from ending the session.",
        ],
      },
      {
        heading: "The rule that keeps it useful: read first, translate second",
        paragraphs: [
          "Always read the target-language sentence first, in full, before you look at any translation. Try to get the gist — who is doing what to whom — even if several words are unclear. Only then check the translation, and only for the sentences that actually blocked you, not every line.",
          "This small ordering rule is the entire difference between parallel text as a learning tool and parallel text as a way to read your native language with extra steps. If you notice yourself translating before you've really tried the original, that's the signal to slow down, not to abandon the method.",
        ],
      },
      {
        heading: "How this looks in a reading app",
        paragraphs: [
          "This is exactly what the tap-to-translate design in SeoJae Story is built around. The story text is always in your target language first; nothing is shown pre-translated. Tap any single word for its meaning without leaving the page, or tap the small globe at the end of a sentence to reveal that one sentence's full translation when a word-by-word guess isn't enough — see [how to learn English by reading](/learn/learn-english-by-reading) and [how to learn Korean by reading](/learn/learn-korean-by-reading) for the fuller method each language needs.",
          "Nothing is translated until you ask for it, which keeps the reading order right by default: you read the original, and only pull the safety net when you actually need it.",
        ],
      },
      {
        heading: "A simple parallel-reading routine",
        paragraphs: ["Ten to fifteen minutes, once a day, is enough:"],
        list: [
          "Read a whole sentence in the target language. Guess its meaning before tapping anything.",
          "If it clicked, keep going. If it didn't, tap the sentence's translation once, understand it, then reread the original sentence with that meaning in mind.",
          "Tap individual words only for the ones that keep recurring across the story — not every unfamiliar word.",
          "At the end, reread the whole passage once more with translation hidden, to feel how much moved from 'looked up' to 'just knew'.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Pick something with a plot you can predict — a fairy tale or a well-known classic — so guessing before translating feels natural rather than stressful. Browse the [library](/library) by level, or start with a [classic story retold for learners](/classics) in either English or Korean.",
        ],
      },
    ],
  },

  {
    slug: "best-classic-novels-to-learn-korean",
    title: "The Best Classic Novels to Read in Korean for Language Learners",
    description:
      "Ten classic novels and stories, retold in clear Korean for learners — why each one works for reading practice, its level, and a link to read it free.",
    lede: "Familiar Western classics, retold in plain Korean — reading practice that doesn't feel like a textbook.",
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    readingMinutes: 8,
    keywords: [
      "best classic novels to learn Korean",
      "read Korean literature for beginners",
      "Korean reading practice books",
      "Korean classics for language learners",
      "beginner Korean short stories",
    ],
    sections: [
      {
        heading: "Why Western classics work for Korean reading practice",
        paragraphs: [
          "The hardest part of early Korean reading isn't usually the grammar — it's that most beginner material is either a textbook dialogue about ordering coffee, or a native text written for native speakers. A classic novel most readers already half-know in their own language sits in between: the plot isn't a mystery, so your attention is free for the Korean itself, and the writing is still real prose, not a grammar drill wearing a story's clothes.",
          "Every title below is on SeoJae Story as a fresh Korean translation written for learners — not a reused, copyrighted modern translation of the original. Switch the story's language to 한국어 with the toggle in the reader, and the same tap-to-translate and full-sentence translation tools work in Korean exactly as they do in English; see [how to learn Korean by reading](/learn/learn-korean-by-reading) for the full method and [CEFR levels explained](/learn/cefr-levels-explained) for what A1–B2 mean here.",
        ],
      },
      {
        heading: "1. Cinderella (A1)",
        paragraphs: [
          "About as familiar as a plot gets, told in short, simple sentences — a good first try at reading real Korean prose instead of a phrasebook. [Read it](/lesson/cinderella).",
        ],
      },
      {
        heading: "2. The Happy Prince — Oscar Wilde (A2)",
        paragraphs: [
          "A statue and a swallow give away everything they have to help a city's poor. Concrete, visual language and a gentle emotional arc that's easy to follow in Korean. [Read it](/lesson/the-happy-prince).",
        ],
      },
      {
        heading: "3. Little Women, chapter 1 — Louisa May Alcott (A2)",
        paragraphs: [
          "Four sisters complain about a Christmas without presents, then decide to be grateful anyway. Mostly dialogue, which is genuinely useful — you see how Korean sentence endings shift with who's speaking to whom. [Read it](/lesson/little-women).",
        ],
      },
      {
        heading: "4. The Secret Garden, chapter 1 — Frances Hodgson Burnett (A2)",
        paragraphs: [
          "A sickly, unloved girl is sent to live with a stranger after her parents die. Darker in tone than the fairy tales, and a good bridge toward longer, more descriptive Korean sentences. [Read it](/lesson/the-secret-garden).",
        ],
      },
      {
        heading: "5. A Little Princess, chapter 1 — Frances Hodgson Burnett (A2)",
        paragraphs: [
          "Sara Crewe arrives at a London boarding school as its richest, most spoiled-by-fortune student — a setup Korean readers of the later chapters (elsewhere on the shelf) will want to keep reading past. [Read it](/lesson/a-little-princess).",
        ],
      },
      {
        heading: "6. The Little Mermaid — Hans Christian Andersen (B1)",
        paragraphs: [
          "The real, considerably sadder Andersen original, not the simplified version most readers know. Longer, more emotional sentences than the A1–A2 fairy tales, a natural next step up. [Read it](/lesson/the-little-mermaid).",
        ],
      },
      {
        heading: "7. Anne of Green Gables: Anne with an E — L. M. Montgomery (B1)",
        paragraphs: [
          "Marilla is quietly astonished by the talkative orphan girl who has landed in her house by mistake. Character-driven and funny, with dialogue that rewards a second, translation-hidden read. [Read it](/lesson/anne-of-green-gables-with-an-e).",
        ],
      },
      {
        heading: "8. Daddy-Long-Legs, chapter 1 — Jean Webster (B1)",
        paragraphs: [
          "An orphan learns, in one chaotic morning, that a mysterious benefactor will send her to college. Brisk and conversational, closer to how a modern novel reads. [Read it](/lesson/daddy-long-legs).",
        ],
      },
      {
        heading: "9. Jane Eyre, chapter 1 — Charlotte Brontë (B2)",
        paragraphs: [
          "A window seat, a hidden book, and a cousin's cruelty — the opening of one of English literature's most famous novels, in Korean prose dense enough to genuinely stretch a B2 reader. [Read it](/lesson/jane-eyre).",
        ],
      },
      {
        heading: "10. Wuthering Heights, chapter 3 — Emily Brontë (B2)",
        paragraphs: [
          "A stormy night, a locked room, and a ghost at the window — atmospheric, unsettling, and a good test of whether B2 Korean reading has stopped feeling like effort. [Read it](/lesson/wuthering-heights).",
        ],
      },
      {
        heading: "How to read the list",
        paragraphs: [
          "Start at A1 even if it feels too easy at first — the point is to read Korean fluently, not slowly decode it. Read each story once with the language toggle on 한국어 and translation only a tap away, then once more with it hidden. The [full classics shelf](/classics) has many more at every level, and the [library](/library) covers everything else.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

/** schema.org structured data for one article: an Article + a BreadcrumbList. */
export function articleJsonLd(article: Article) {
  const url = `${SITE_URL}/learn/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        url,
        headline: article.title,
        description: article.description,
        inLanguage: "en",
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        wordCount: article.sections
          .flatMap((s) => [...s.paragraphs, ...(s.list ?? [])])
          .join(" ")
          .split(/\s+/).length,
        timeRequired: `PT${article.readingMinutes}M`,
        keywords: article.keywords.join(", "),
        articleSection: "Language learning",
        isAccessibleForFree: true,
        author: { "@type": "Organization", "@id": `${SITE_URL}/#org`, name: SITE_NAME, url: `${SITE_URL}/` },
        publisher: { "@type": "Organization", "@id": `${SITE_URL}/#org`, name: SITE_NAME, url: `${SITE_URL}/` },
        isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: SITE_NAME, url: `${SITE_URL}/` },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Learn", item: `${SITE_URL}/learn` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };
}
