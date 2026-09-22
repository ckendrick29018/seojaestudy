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
  /**
   * Where the "Put it into practice" CTA at the end of the article sends the
   * reader. Falls back to the generic library/classics CTA when omitted —
   * used for articles (like the CEFR guide) whose own body already ends on
   * the right specific links.
   */
  practiceCta?: { href: string; label: string };
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
    practiceCta: { href: "/lesson/little-red-riding-hood", label: "Read Little Red Riding Hood (A1)" },
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
          "Pick a story whose plot you already half-know — a fairy tale, or a classic you have heard of. Familiar plot means more attention left for the language. Our [pick of classic short stories for learners](/learn/best-classic-short-stories-for-learners) is a good shortlist, and every story on SeoJae Story is free to read with no account during the current test. If you're a Korean speaker, [these four grammar patterns](/learn/common-english-mistakes-korean-speakers) are worth knowing before you start — reading fixes them faster than studying the rule does.",
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
    practiceCta: { href: "/lesson/heungbu-and-nolbu", label: "Read 흥부와 놀부 (A1)" },
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
          "For reading specifically, the level is really a promise about sentence length, how common the vocabulary is, and how much the text leans on context, idiom and tense — see [what a graded reader actually is](/learn/what-is-a-graded-reader) for how that promise gets built into a story in the first place.",
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
    practiceCta: { href: "/lesson/pride-and-prejudice", label: "Start with Pride and Prejudice (A1)" },
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
    practiceCta: { href: "/lesson/cinderella", label: "Try it in Cinderella" },
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
          "The idea behind it is the same one behind graded readers generally — [comprehensible input](/learn/comprehensible-input-explained). You learn a language fastest by understanding messages in it, slightly above what you can already produce yourself. Parallel text removes the one thing that normally breaks that process: getting stuck on a single word or sentence and losing the whole passage while you dig through a dictionary.",
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
    practiceCta: { href: "/folktales", label: "Browse Korean-origin stories" },
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

  {
    slug: "spaced-repetition-vocabulary-flashcards",
    title: "Spaced Repetition Flashcards: How to Actually Remember New Words",
    description:
      "How spaced repetition works, why cramming vocabulary fails, and how to use a simple Leitner-style flashcard system to make new words stick for good.",
    lede: "The five-minute habit that turns words you looked up once into words you actually know.",
    datePublished: "2026-09-16",
    dateModified: "2026-09-16",
    readingMinutes: 7,
    practiceCta: { href: "/lesson/snow-white", label: "Try the flashcards in Snow White" },
    keywords: [
      "spaced repetition flashcards",
      "how to remember vocabulary",
      "Leitner system",
      "vocabulary flashcards for language learners",
      "how to memorize words long term",
    ],
    sections: [
      {
        heading: "Why cramming doesn't work",
        paragraphs: [
          "You look up a word, feel a small click of understanding, and move on — and a week later it's gone. This isn't really a memory problem, it's a scheduling problem: anything reviewed only once gets treated as unimportant and starts fading almost immediately.",
          "Cramming a word list the night before a test fights this for a few hours, then loses. The fix isn't reviewing more — it's reviewing at the right moment: just as a word is about to slip away, not right after you already know it and not so late that it's already gone.",
        ],
      },
      {
        heading: "What spaced repetition actually does",
        paragraphs: [
          "Spaced repetition is a scheduling trick: instead of reviewing every word every day, you review each one right before you're likely to forget it, then push the next review further out. Each successful recall makes the word more stable, so the gap before the next review can grow — a day, then a few days, then a few weeks — while a forgotten word resets to the start.",
          "The result is that a handful of minutes a day covers far more words than one long session ever could, because you only spend time on the words actually at risk of being lost.",
        ],
      },
      {
        heading: "The Leitner box, the simple version",
        paragraphs: [
          "SeoJae Story's [study plan](/study) uses a classic version of this called a Leitner system: every flashcard sits in one of a few boxes. A new card is due immediately; each time you recall it correctly it moves up a box and its next review is pushed further out — roughly a day, then about a week, then a few weeks, then a month or more. Get it wrong, and it drops straight back to the first box.",
          "You never have to plan any of this yourself. Open the [study plan](/study) and it already knows which cards are due today — everything else stays out of sight until it needs you.",
        ],
      },
      {
        heading: "Grade yourself honestly: Again, Good, Easy",
        paragraphs: [
          "After you reveal a card, you choose one of three grades. \"Again\" means you didn't really know it — it goes back to the start, which is normal and not a failure. \"Good\" means you got it, maybe with a beat of hesitation. \"Easy\" means it took no effort at all, and pushes the next review out further still.",
          "The temptation is to grade generously so the pile of due cards feels smaller. Resist it — an honest \"again\" costs you one more short review later, but a dishonest \"good\" is exactly how a word quietly falls out of a system built to catch it.",
        ],
      },
      {
        heading: "Where the cards come from",
        paragraphs: [
          "You don't build a deck from scratch. Every lesson comes with its own vocabulary list, and any word you tap while reading can be saved straight into your [study plan](/study) with its example sentence attached — so the card always carries the context you met the word in, not just an isolated translation.",
          "That context matters more than it seems: recalling a word is much easier when the card also shows you the sentence it appeared in, rather than a bare word-and-translation pair with nothing to hang it on.",
        ],
      },
      {
        heading: "A five-minute daily habit",
        paragraphs: ["This is genuinely all it takes:"],
        list: [
          "Read one story, tapping words you don't know and saving the ones worth keeping.",
          "Open the study plan and clear whatever's due — usually a couple of minutes.",
          "Grade honestly. \"Again\" is not failure; it's the system working.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Read a story in the [library](/library), save a handful of words as you go, and check your [study plan](/study) tomorrow — that first due review, a day later, is where spaced repetition actually begins.",
        ],
      },
    ],
  },

  {
    slug: "listening-while-reading-method",
    title: "Learn a Language by Listening and Reading at the Same Time",
    description:
      "Why combining audio with text — listening while reading — builds listening comprehension faster than either skill alone, and how to practice it without zoning out.",
    lede: "Your eyes and ears are learning two different things from the same sentence — here's how to use that.",
    datePublished: "2026-09-16",
    dateModified: "2026-09-16",
    readingMinutes: 7,
    practiceCta: { href: "/lesson/the-happy-prince", label: "Listen while you read" },
    keywords: [
      "listening while reading method",
      "learn a language by listening",
      "audio and text language learning",
      "listening comprehension practice",
      "graded reader audio",
    ],
    sections: [
      {
        heading: "Two skills that don't transfer on their own",
        paragraphs: [
          "Reading and listening feel like the same skill in different clothes, but they aren't. You can often read a sentence comfortably and still fail to recognize that exact same sentence spoken aloud — connected speech drops sounds, runs words together, and moves faster than the careful, evenly-spaced version in your head.",
          "This is why a strong reader can still find real conversation exhausting: the words are all familiar, but the sound of them together is not.",
        ],
      },
      {
        heading: "Why listening and reading together closes the gap",
        paragraphs: [
          "Listening while you read gives you the correct sound for every sentence at the exact moment you're building its meaning, instead of two separate skills you have to reconcile later. Over enough sentences, your ear starts recognizing the fast, connected version directly — the one thing pure reading can never train.",
          "It also removes the usual reason listening practice stalls: losing the thread the moment one word goes by too fast. With the text right there, a glance recovers you instead of the whole sentence being lost.",
        ],
      },
      {
        heading: "How to do it without zoning out",
        paragraphs: [
          "The failure mode is letting your eyes carry all the work while the audio turns into background noise. To keep both engaged, read each sentence silently first — just ahead of or alongside the narration — rather than waiting for the audio to lead you.",
          "When a word sounds different from how you expected, stop and notice it specifically. That gap between your guess and the real sound is exactly what's being trained — don't just move past it.",
        ],
      },
      {
        heading: "How this works in the reader",
        paragraphs: [
          "Every SeoJae Story lesson has narrated audio behind the Listen control — press it, and it reads the page at a natural pace while you follow the target-language text underneath, with Pause and Resume if you need to stop and think.",
          "Because it's real narration rather than a robotic read-aloud, it carries the same natural rhythm, stress and connected speech you'd meet outside a classroom — which is the whole point of practicing this way.",
        ],
      },
      {
        heading: "A simple listen-and-read routine",
        paragraphs: ["Ten minutes, once a day:"],
        list: [
          "First pass: read the story normally, tapping words or the sentence-translation globe only when you're stuck.",
          "Second pass: press Listen and follow along with your eyes, without tapping anything — just matching sound to text.",
          "Third pass: close your eyes for one paragraph and listen only, then open them and check what you actually caught.",
        ],
      },
      {
        heading: "When to drop the text",
        paragraphs: [
          "Keep the text on for as long as it's actually helping. The moment you notice you can predict the next sentence before your eyes reach it, try that paragraph with the text hidden and the audio alone — that's the read-with-your-ears skill this method has been quietly building the whole time.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Open any story at your level in the [library](/library) and look for the Listen control in the reader. Pair it with [how to learn English by reading](/learn/learn-english-by-reading) or [how to learn Korean by reading](/learn/learn-korean-by-reading) for the fuller reading method underneath it.",
        ],
      },
    ],
  },

  {
    slug: "language-learning-book-club",
    title: "How to Start a Language-Learning Book Club",
    description:
      "Why reading the same story as a friend accelerates a language habit, and how to run a simple two-person or ten-person book club using free shared chapters.",
    lede: "Reading alone is fine. Reading the same page as someone else who'll ask you about it is what actually keeps you going.",
    datePublished: "2026-09-16",
    dateModified: "2026-09-16",
    readingMinutes: 6,
    practiceCta: { href: "/club", label: "Start a book club" },
    keywords: [
      "language learning book club",
      "start a book club online",
      "read together language learning",
      "book club for language learners",
      "share reading with friends",
    ],
    sections: [
      {
        heading: "Why a book club works better than reading alone",
        paragraphs: [
          "Most language habits die quietly — not from one bad day, but from nobody noticing when the streak breaks. A book club fixes this with the oldest trick there is: someone else is expecting you to have read the chapter.",
          "It also forces a kind of comprehension a solo reader can skip. Explaining to someone else why a character made a choice, or arguing about what a line meant, uses the language and the story in a way silent reading alone never quite does.",
        ],
      },
      {
        heading: "One person hosts, everyone else joins with a link",
        paragraphs: [
          "[My book club](/club) is built around one owner and up to ten members. The owner creates the club and gets a short invite link to send to however many friends, classmates or family members they want reading along — each person signs in with a free account to join, but nobody besides the owner needs a subscription.",
          "Two people reading the same story is already a book club. You don't need ten members for this to work — one reading partner who reads on the same day you do is often enough to change whether you actually open the app.",
        ],
      },
      {
        heading: "How sharing a chapter unlocks it for everyone",
        paragraphs: [
          "When the club owner has an active subscription, they can share any chapter with the club — and once shared, that chapter reads free for every member, whether or not they personally subscribe. It's a way to read premium chapters together without asking a group of five people to each pay for their own account.",
          "This works especially well with the classics that come in two parts on SeoJae Story: read the free opening chapter separately, then have the owner share the follow-up chapter as the club's next pick.",
        ],
      },
      {
        heading: "A weekly rhythm that doesn't rely on willpower",
        paragraphs: ["Book clubs fail when they demand a big weekly meeting. Keep it lighter than that:"],
        list: [
          "Pick one short lesson a week — check its CEFR level so nobody's stuck decoding while everyone else discusses.",
          "Agree on a day it should be read by — no live meeting required, just a shared deadline.",
          "Message each other one sentence: what surprised you, or what you'd have done differently as the main character.",
        ],
      },
      {
        heading: "Where discussion prompts come from",
        paragraphs: [
          "You don't have to invent questions. Every lesson ends with a short comprehension check, and the summary prompt above it is an open question about the story, written in your own language — both work well typed straight into a group chat, especially for a club mixing two native languages.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Open [My book club](/club), create one, and send the invite link to one person before you send it to ten — a club that starts with two committed readers outlasts one that starts with ten distracted ones. Then pick your first chapter from the [library](/library).",
        ],
      },
    ],
  },
  {
    slug: "read-a-novel-in-another-language",
    title: "How to Read a Full Novel in Another Language, One Chapter at a Time",
    description:
      "Short stories are a great start, but reading a whole novel changes how you learn. How to pick a book, pace yourself by chapter, and why the chapter numbers sometimes skip ahead.",
    lede: "Short stories build the habit. A novel is where you find out you can actually read.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 7,
    practiceCta: { href: "/book/moby-dick", label: "Start Moby Dick, chapter by chapter" },
    keywords: [
      "how to read a novel in a foreign language",
      "read a full book in English as a beginner",
      "graded reader full novel",
      "read classic novels chapter by chapter",
      "how to finish a book in a second language",
    ],
    sections: [
      {
        heading: "Why a short story stops being enough",
        paragraphs: [
          "A short story is the right place to start — one sitting, one clean arc, low risk if the level is wrong. But at some point it starts to feel thin. You finish it in ten minutes and you're back at the shelf, picking the next one, without ever living inside a book the way you do in your first language.",
          "A novel is different. You carry the same characters, the same unresolved sentence, across days. That's not just a nicer reading experience — it's more practice with the same couple hundred words, repeated across chapters, which is exactly the kind of repetition that makes a language stick.",
        ],
      },
      {
        heading: "The problem with picking up the real thing",
        paragraphs: [
          "The instinct is to open the original — the actual Pride and Prejudice, the actual Dracula — and push through. For most learners this fails fast. Nineteenth-century prose is long-sentenced even for native readers, and a beginner hits three unknown words a line and gives up by chapter two.",
          "The fix isn't a simpler book. It's the same book, written at a level you can actually read, released one chapter at a time so you don't have to translate three hundred pages before you find out if you like it.",
        ],
      },
      {
        heading: "How this works on SeoJae Story",
        paragraphs: [
          "Each classic on the [classics shelf](/classics) is a real novel, retold chapter by chapter at a [CEFR level](/learn/cefr-levels-explained) — not summarized, not abridged into a single page, but genuinely paced the way the original book is paced. A book's page shows every chapter released so far, in order, with a \"Part 2 of 6\" label so you always know where you are and how much is left.",
          "Open a book once and the app remembers you're reading it: the next unread chapter surfaces on your dashboard under Continue reading, so picking it back up tomorrow doesn't mean hunting through the library for where you left off.",
        ],
      },
      {
        heading: "Pick a book, not just a story",
        paragraphs: ["A few of the longer classics are far enough along to read as a real multi-chapter novel rather than a single excerpt:"],
        list: [
          "[Pride and Prejudice](/book/pride-and-prejudice) — 6 parts, Elizabeth and Darcy from the first ball to the proposal.",
          "[Jane Eyre](/book/jane-eyre) — 7 parts, the longest book on the shelf.",
          "[Moby Dick](/book/moby-dick) — 5 parts, opening to epilogue, complete.",
          "[Dracula](/book/dracula) — 6 parts, told through letters and journal entries.",
          "[Dr. Jekyll and Mr. Hyde](/book/dr-jekyll-and-mr-hyde) — 4 parts, complete.",
          "[The Hound of the Baskervilles](/book/the-hound-of-the-baskervilles) — 4 parts and growing.",
        ],
      },
      {
        heading: "Why the chapter numbers sometimes jump",
        paragraphs: [
          "Open a book's chapter list and you'll sometimes see Chapter 1, then Chapter 36. That's not a gap in the translation — it's a choice. Each part is picked for being a complete, satisfying scene on its own, not just the next consecutive block of the original text, so a book can jump straight from its opening to a famous later chapter instead of routing you through slower connective chapters to get there.",
          "It means every part you read stands on its own, even with chapters still missing between them. The gaps get filled over time as new chapters ship — check a book's page for the current count.",
        ],
      },
      {
        heading: "A pace that actually finishes a book",
        paragraphs: [
          "One chapter, two or three times a week, finishes most of these books in a month or two — slower than a native reader, but a real novel, genuinely read, is worth more than three abandoned ones. Resist the urge to binge every part the day a book catches your interest; the spacing does real work, letting new vocabulary resurface a few days later instead of all in one pass.",
          "If a chapter feels heavier than the last one, that's normal — books get denser as they go. Replay the previous chapter's summary prompt in your head before you start the next; it costs thirty seconds and keeps the plot from slipping.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Pick a book whose story you already roughly know — Dracula, Alice in Wonderland, Pride and Prejudice — so the plot isn't a second thing to learn alongside the language. Read its first chapter on the [classics shelf](/classics), and if a chapter feels a level too hard or too easy, remember most books span more than one point on [the CEFR range](/learn/cefr-levels-explained) as they grow.",
        ],
      },
    ],
  },

  {
    slug: "how-many-words-do-you-need-to-read",
    title: "How Many Words Do You Need to Know to Read in English or Korean?",
    description:
      "The real answer isn't a vocabulary size — it's a percentage. What 95–98% known words means, how many word families that takes at each level, and how to get there by reading.",
    lede: "The number that matters isn't how many words you know. It's how many words on the page you already know.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 7,
    practiceCta: { href: "/study", label: "Start your study plan" },
    keywords: [
      "how many words do I need to know to read English",
      "vocabulary size for reading fluency",
      "how many words to read Korean",
      "reading vocabulary coverage",
      "how many words to be fluent",
    ],
    sections: [
      {
        heading: "The question everyone asks wrong",
        paragraphs: [
          "\"How many words do I need?\" sounds like it has a clean number for an answer, so people go looking for one — 3,000 words, 5,000 words, 10,000 words. Those numbers exist and they're useful, but they answer a slightly different question than the one that actually determines whether you can read something: not how many words do you know in total, but what percentage of the words on this specific page do you already know.",
        ],
      },
      {
        heading: "The percentage that actually predicts comprehension",
        paragraphs: [
          "Reading research generally puts comfortable comprehension somewhere around 95–98% known words — one unknown word in every twenty to fifty. Below that, too many gaps appear too close together, and you spend more energy reconstructing meaning than absorbing it. Above it, almost nothing is new, which feels safe but teaches you very little.",
          "This is why the same learner can read one book easily and find another, at a similar \"level\", genuinely hard — it was never really about the book's difficulty in the abstract. It's about how much of that book's specific vocabulary happens to overlap with what they already know.",
        ],
      },
      {
        heading: "Roughly, what that takes in word families",
        paragraphs: [
          "A \"word family\" bundles a base word with its close relatives — read, reads, reading, reader count as one, not four. As a rough guide for fiction, not an exact rule:",
        ],
        list: [
          "~1,000–1,500 word families gets you through most A1–A2 graded readers comfortably.",
          "~2,500–3,000 gets you through B1 — genuine short stories, simple novels.",
          "~4,000–5,000 gets you through B2 — lightly adapted classic literature, most everyday writing.",
          "8,000+ is roughly where unabridged native fiction opens up, jokes, idiom and all.",
        ],
      },
      {
        heading: "Why this is good news, not a wall to climb",
        paragraphs: [
          "Word frequency is extremely lopsided: a small set of the most common words covers a huge share of any ordinary text, and each additional thousand words you learn buys you less coverage than the last. That front-loaded curve is exactly why starting at A1 and reading a lot of it is such an efficient use of time — the first thousand words you truly know are worth far more, page for page, than the next five thousand.",
          "It's also why a level chosen well feels almost easy: at 95–98% known words, most of what's on the page is already yours. The handful of new words are doing the actual teaching, one at a time, surrounded by things you already understand.",
        ],
      },
      {
        heading: "The shortcut: let level do the counting for you",
        paragraphs: [
          "You never actually need to count your vocabulary. A story labelled at the right [CEFR level](/learn/cefr-levels-explained) is, by construction, sitting near that 95–98% band for someone genuinely at that level — that's what the label is promising. If a page feels like a wall of unknowns, that's the level talking, not a verdict on your ability; drop down and the same story will likely read at that comfortable percentage.",
          "Watch it directly, too: if you're tapping the dictionary more than once or twice a paragraph, you're below the band for that text. If you never tap it at all, you're probably above it and could move up.",
        ],
      },
      {
        heading: "Growing the number without ever counting it",
        paragraphs: [
          "The words that move your real count are the ones you meet in context, tap once, and see again a few days later — not the ones memorized off a frequency list in isolation. Every word you tap while reading on SeoJae Story can be saved straight to your [study plan](/study), where [spaced repetition](/learn/spaced-repetition-vocabulary-flashcards) resurfaces it right before you'd otherwise forget it.",
          "Read enough stories at the right level and the count takes care of itself — you won't feel yourself crossing from 1,000 to 1,500 words, you'll just notice the next level down stops needing the dictionary at all.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "If you're not sure where your line currently sits, the two-minute check in [CEFR levels explained](/learn/cefr-levels-explained) finds it fast. Then open the [library](/library) at that level, or browse [classic stories retold at your level](/classics), and let the reading do the counting.",
        ],
      },
    ],
  },

  {
    slug: "extensive-reading-vs-intensive-reading",
    title: "Extensive Reading vs Intensive Reading: What's the Difference?",
    description:
      "Two opposite reading habits, both useful for language learning: read a lot and loosely, or read a little and closely. What each one trains, and how to do both without slowing down.",
    lede: "One habit is about reading a lot. The other is about reading closely. Language learning actually needs both.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 6,
    practiceCta: { href: "/library", label: "Start reading extensively" },
    keywords: [
      "extensive reading vs intensive reading",
      "extensive reading method",
      "intensive reading language learning",
      "difference between extensive and intensive reading",
      "extensive reading benefits",
    ],
    sections: [
      {
        heading: "Two habits with the same raw material",
        paragraphs: [
          "Extensive and intensive reading use the exact same skill — reading in your target language — pointed at two different goals. Extensive reading is about volume: read a lot, loosely, for the story. Intensive reading is about depth: read a little, closely, for the language itself. Most language courses only really teach the second one, which is part of why fluent reading can feel so far away even after years of careful study.",
        ],
      },
      {
        heading: "What intensive reading looks like",
        paragraphs: [
          "Intensive reading is what a textbook passage or a classroom translation exercise usually asks for: a short text, read slowly, where you look up every unknown word, notice the grammar, and maybe translate a sentence or two by hand. It's precise, and it's how you truly learn a specific word or structure — but it's slow, and a page of it can take longer than a whole short story read the other way.",
          "It has a real cost if it's the only mode you ever use: at one unknown word per sentence, dug into fully, a learner rarely reads more than a few pages a week — nowhere near enough raw exposure to build the pattern recognition that makes reading feel automatic.",
        ],
      },
      {
        heading: "What extensive reading looks like",
        paragraphs: [
          "Extensive reading flips the priorities: pick something easy enough that you rarely stop, read it mostly for the story, and let a few unknown words go by ungrossed. The target is usually that [95–98% known-word band](/learn/how-many-words-do-you-need-to-read) — comfortable, not effortless — so you can read a whole story in one sitting without the dictionary breaking your stride every few seconds.",
          "This is the mode graded readers are built for, and it's the one that actually builds fluency: the sheer number of sentences you get through, each one processed close to real time, is what eventually makes reading feel like reading instead of decoding.",
        ],
      },
      {
        heading: "Why extensive reading wins for fluency, not vocabulary",
        paragraphs: [
          "If the goal is speed and comfort — reading without translating in your head, following a story without effort — extensive reading is the one that gets you there, because it's the only mode that gives you enough repetitions of common words and structures to make them automatic. Nobody becomes a fast reader by reading forty pages very carefully.",
          "But extensive reading alone is a slower way to learn any single new word, because you often let it pass rather than stopping to study it. Left completely alone, it plateaus: you get very fluent at the words you already know, and new ones arrive more slowly than they could.",
        ],
      },
      {
        heading: "Running both at once, without slowing down",
        paragraphs: [
          "The two aren't rivals — the useful version of intensive reading is really just a five-second dip inside an extensive read, not a separate slow session. Read the story extensively, at pace, and reach for the dictionary only for the handful of words that actually block a sentence or keep recurring — that's [how tap-to-translate is meant to be used](/learn/parallel-text-reading-method), not as a running translation of every line.",
          "Then take the intensive step after the extensive read is done, not during it: save the few words that mattered to your [study plan](/study), where a couple of minutes of [spaced repetition](/learn/spaced-repetition-vocabulary-flashcards) does the close, careful work extensive reading skipped — on your schedule, not the story's.",
        ],
      },
      {
        heading: "A routine that uses both",
        paragraphs: ["A single story, read in two passes, gets you most of the benefit of both:"],
        list: [
          "First pass, extensive: read the whole thing at a comfortable pace, tapping the sentence translation only when truly stuck. Don't stop for single words.",
          "Second pass, lightly intensive: reread it, this time tapping 3–5 words that mattered, and save them.",
          "Everything else: read extensively, always. Save the close study for the words that earned it.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "If your instinct is to look up every unfamiliar word, that's a sign to swing toward extensive reading for a while — open the [library](/library), pick something at or slightly below your level, and read it in one sitting without stopping for the dictionary. You'll understand more of it than you expect.",
        ],
      },
    ],
  },

  {
    slug: "build-a-daily-reading-streak",
    title: "How to Build a Daily Reading Streak That Actually Sticks",
    description:
      "Why streaks work, why most of them break in the first two weeks, and how to build a daily reading habit small enough to survive a bad day.",
    lede: "A streak isn't motivation. It's a system for not needing motivation on the days you don't have any.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 6,
    practiceCta: { href: "/library", label: "Read today's lesson" },
    keywords: [
      "how to build a daily reading habit",
      "language learning streak tips",
      "daily study habit language learning",
      "how to not break a study streak",
      "language learning motivation",
    ],
    sections: [
      {
        heading: "Why a streak works better than willpower",
        paragraphs: [
          "Motivation is unreliable by nature — it's high the week you start a language and unpredictable every week after. A streak sidesteps the problem by turning \"do I feel like reading today\" into \"do I want to lose the number\", which is a much easier fight to win on a tired Tuesday. This is loss aversion doing useful work: once a streak has a few days in it, not breaking it becomes its own reason to open the app, no motivation required.",
          "That only works while the streak stays realistic to keep. The moment it demands more than a bad day can give, it stops protecting the habit and starts threatening it.",
        ],
      },
      {
        heading: "The mistake almost everyone makes on day one",
        paragraphs: [
          "Most streaks break in the first two weeks, and almost always for the same reason: day one was too big. A learner reads two chapters, feels great, and unconsciously sets that as the new minimum — so the first genuinely busy day, where even one chapter feels like too much, becomes the day the streak dies instead of just a smaller day.",
          "The fix is almost insultingly simple: make the daily minimum small enough that you could do it while sick, tired, or fifteen minutes from bed. One short story. One page. Even one flashcard review in the [study plan](/study) is enough to keep the number alive — the streak is tracking that you showed up, not how much you read.",
        ],
      },
      {
        heading: "Attach it to something that already happens every day",
        paragraphs: [
          "A habit anchored to a specific moment survives far better than one that floats loosely somewhere in \"today\". Pick an existing daily anchor — after your morning coffee, on the commute, in bed before the light goes off — and read there, at that moment, rather than \"whenever there's time\", which on a busy day quietly becomes never.",
          "The anchor matters more than the amount. A single graded story takes under ten minutes, which fits into almost any anchor you already have without needing to free up a real block of time.",
        ],
      },
      {
        heading: "Keep an easy fallback for the days that go wrong",
        paragraphs: [
          "Some days genuinely don't have ten free minutes. That's what a fallback is for: one A1 story you've already read once, kept in reserve, that you know you can get through in under three minutes even exhausted. It's not meant to teach you much — it's meant to keep the streak breathing until tomorrow, when a real session is possible again.",
          "This is the whole reason difficulty levels matter beyond comprehension — an [A1 story](/classics/a1) slightly below your level is genuinely useless for learning and genuinely useful for not breaking a streak on your worst day.",
        ],
      },
      {
        heading: "Make the progress visible",
        paragraphs: [
          "A streak that lives only as an abstract number is easy to forget about. Visible progress is stickier — SeoJae Story tracks it with a star rather than a count you have to interpret, and the reading cat on your [bookshelf](/bookshelf) visibly grows through its own stages as you finish more books, so progress is something you can actually watch happen rather than something you're told is happening.",
          "Whatever app you're using, find the version of this that exists for you and glance at it often. The point isn't vanity — it's giving your brain a concrete, visual reason the streak matters beyond the number itself.",
        ],
      },
      {
        heading: "What to do when you break it anyway",
        paragraphs: [
          "You will break a streak eventually — travel, illness, a genuinely impossible week. The habit doesn't die there; it dies in the week after, when a broken streak turns into \"well, I already ruined it\" and one missed day becomes ten. Read something the very next day no matter how short, and the break becomes a blip in the log, not the end of the habit.",
          "A useful private rule: never miss two days in a row. Missing one is life. Missing two is the start of a new, worse habit, and it's much easier to stop at one than to restart after ten.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Pick your anchor moment today, not tomorrow, and read one short story there — something at or slightly below your level, so day one doesn't accidentally set an unsustainable bar. Browse the [library](/library) for something short enough to finish in one sitting.",
        ],
      },
    ],
  },
  {
    slug: "comprehensible-input-explained",
    title: "Comprehensible Input: What It Is and Why It's the Fastest Way to Learn a Language",
    description:
      "The idea behind every method on this site, in plain terms: what comprehensible input is, why Krashen's input hypothesis holds up, and how to get more of it every day.",
    lede: "One idea explains almost everything that works in language learning — understanding messages, slightly above what you can already produce.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 7,
    practiceCta: { href: "/library", label: "Get some comprehensible input" },
    keywords: [
      "comprehensible input",
      "what is comprehensible input",
      "Krashen input hypothesis",
      "comprehensible input method",
      "i+1 language learning",
    ],
    sections: [
      {
        heading: "The one idea underneath everything else",
        paragraphs: [
          "Linguist Stephen Krashen's input hypothesis makes a simple, almost boring claim: you acquire a language by understanding messages in it — not by memorizing its rules, drilling its grammar, or forcing yourself to speak it before you're ready. Understanding comes first; the rest follows from enough of it, over enough time.",
          "It's a strange idea to sit with, because it suggests most of what looks like \"studying\" a language — flashcard grinding in isolation, grammar tables, translation drills — is at best a supporting act, not the main event. The main event is simply understanding things, again and again, slightly beyond your current level.",
        ],
      },
      {
        heading: "What \"i+1\" actually means",
        paragraphs: [
          "Krashen describes the ideal input as \"i+1\" — your current level (i), plus a small stretch (+1). Text that's exactly at your level teaches you little that's new; text far above it is just noise you can't decode. The productive zone sits close to what [95–98% known words](/learn/how-many-words-do-you-need-to-read) describes elsewhere on this site — comfortable enough to follow, new enough to grow from.",
          "This is also why comprehensible input has to be personal, not universal. A graded reader that's i+1 for a true beginner is i+0 — dull, no growth — for someone two levels up, and i+4 — incomprehensible — for someone who hasn't started yet. The level label matters more than the content.",
        ],
      },
      {
        heading: "Why comprehension has to come before production",
        paragraphs: [
          "A common instinct is to force output early — speak from day one, write full sentences before you've read many. Krashen's model suggests this gets the order backward: fluent output is what emerges after enough input, not what produces it. Reading a story you understand is quietly training the exact patterns that later show up, seemingly out of nowhere, in something you say or write.",
          "This doesn't mean output is useless — it has its own value, especially for confidence and for noticing gaps. It means input isn't a warm-up before the real learning starts. For reading specifically, it is the real learning.",
        ],
      },
      {
        heading: "Why this favors reading over almost anything else",
        paragraphs: [
          "Reading is comprehensible input you can control precisely: you choose the level, you set the pace, you can stop, reread, or look something up without anyone waiting on you. A conversation partner can't pause mid-sentence while you process; a book can. That controllability is exactly why extensive reading at the right level is one of the most efficient sources of comprehensible input there is — see [extensive reading vs intensive reading](/learn/extensive-reading-vs-intensive-reading) for how to actually do the reading part of this.",
          "Listening while reading extends the same idea to your ears — see [listening and reading together](/learn/listening-while-reading-method) — because the theory doesn't care which sense the input arrives through, only that it's understood.",
        ],
      },
      {
        heading: "How to get more of it, deliberately",
        paragraphs: ["Chasing comprehensible input on purpose comes down to three habits:"],
        list: [
          "Pick material you mostly already understand — check with the two-minute level test in [CEFR levels explained](/learn/cefr-levels-explained).",
          "Unblock the sentences you don't understand with a translation, rather than abandoning the page — see [parallel text reading](/learn/parallel-text-reading-method).",
          "Do it often. A little most days beats a lot once a week — the whole argument for [a daily reading streak](/learn/build-a-daily-reading-streak).",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Open the [library](/library), filter to a level where a page feels comfortable rather than easy or overwhelming, and read. That's the whole method — understanding one more message than you could yesterday, repeated for as long as you keep showing up.",
        ],
      },
    ],
  },

  {
    slug: "korean-particles-explained",
    title: "Korean Particles Explained: 은/는, 이/가, 을/를 and More",
    description:
      "The handful of small syllables that do most of Korean grammar's work — what each particle marks, how to tell 은/는 apart from 이/가, and how to actually learn them by reading.",
    lede: "A few small syllables carry most of Korean's grammar. Once you can spot them, sentences stop being a blur.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 8,
    practiceCta: { href: "/lesson/heungbu-and-nolbu", label: "Spot particles in 흥부와 놀부" },
    keywords: [
      "Korean particles explained",
      "은는이가 차이 difference",
      "Korean topic marker vs subject marker",
      "을를 particle Korean",
      "how to learn Korean particles",
    ],
    sections: [
      {
        heading: "Why particles matter more than word order",
        paragraphs: [
          "English leans on word order to show who's doing what — \"the dog bites the man\" and \"the man bites the dog\" mean opposite things purely because of position. Korean leans on particles instead: small syllables attached to the end of a noun that mark its grammatical role, which is why Korean word order can move around far more freely than English's.",
          "That trade-off means a handful of particles do an enormous share of the grammatical work in every sentence you read. Learn to spot them and a sentence stops being a wall of syllables — it becomes a subject, an object, a topic, each one tagged.",
        ],
      },
      {
        heading: "은/는 — the topic marker",
        paragraphs: [
          "은 follows a consonant, 는 follows a vowel; both mark what the sentence is about, setting up a frame for the sentence rather than naming who did the action. \"저는 학생이에요\" (\"as for me, [I'm] a student\") leans on 는 to introduce the topic — me — before saying something about it.",
          "It's often used for contrast, too: 는 can quietly imply \"this one, as opposed to something else\" even without a competing sentence nearby. Native speakers use it constantly; a beginner mostly just needs to recognize it as \"here's what we're talking about.\"",
        ],
      },
      {
        heading: "이/가 — the subject marker",
        paragraphs: [
          "이 follows a consonant, 가 follows a vowel; both mark the grammatical subject — literally who or what is doing something, or the focus of a new piece of information. \"고양이가 뛰어요\" is close to \"a cat is running\" — 가 marks 고양이 (cat) as the one doing the running.",
          "은/는 vs 이/가 is the single most-asked question about Korean grammar, and the honest short answer is: 는 introduces a topic and sets up context, while 가 answers a question or introduces new information. \"저는 학생이에요\" (as for me, I'm a student) reads differently from \"제가 학생이에요\" (I'm the student — emphasis on me specifically, as if answering \"who is?\"). Reading enough real sentences teaches the feel of this faster than any rule can.",
        ],
      },
      {
        heading: "을/를 — the object marker",
        paragraphs: [
          "을 follows a consonant, 를 follows a vowel; together they mark the direct object — the thing an action is being done to. \"책을 읽어요\" is \"[someone] reads a book\" — 을 marks 책 (book) as the thing being read.",
          "This is usually the easiest of the core particles to get comfortable with, because English also marks objects, just by position instead of a suffix. The habit to build is noticing 을/를 as confirmation of what verb is about to come, since Korean verbs land at the end of the sentence.",
        ],
      },
      {
        heading: "A few more worth knowing early",
        paragraphs: ["Beyond the core three, these come up constantly in graded reading:"],
        list: [
          "에 — a place or time a state exists in (\"학교에 있어요\", is at school) or a destination (\"집에 가요\", going home).",
          "에서 — where an action happens (\"학교에서 공부해요\", studies at school) or \"from\" (\"서울에서 왔어요\", came from Seoul).",
          "와/과, 랑/이랑 — \"and\" or \"with\", connecting nouns or naming who an action is done with.",
          "도 — \"also / too\", added onto a noun to include it alongside something already mentioned.",
          "로/으로 — \"by means of\", \"toward\", or \"as\", depending on context.",
        ],
      },
      {
        heading: "The fastest way to actually learn them: notice, don't memorize",
        paragraphs: [
          "A grammar table of ten particles is forgettable in isolation. What sticks is meeting 는 and 가 and 를 hundreds of times each, attached to real nouns, inside sentences whose meaning you already mostly understand — which is exactly what happens over a stack of graded stories. Tap a particle-marked word in the reader and the offline dictionary folds the particle off automatically to show you the base word, so you can watch the pattern without it blocking comprehension. See [how to learn Korean by reading](/learn/learn-korean-by-reading) for the fuller method these particles fit into.",
          "Don't aim to explain the rule before you can feel it. Most fluent speakers of any language could not state their own grammar's rules precisely — they just know what sounds right, because they've heard and read it thousands of times. Particles are learned the same way.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Open a short story on the [Korean folktales shelf](/folktales) or the [Korean classics](/classics), and for one page, just notice every 은/는/이/가/을/를 you see — don't translate the whole sentence, just spot the particle and guess its job. That single habit, repeated across a few stories, teaches more than any table.",
        ],
      },
    ],
  },

  {
    slug: "korean-folktales-for-language-learners",
    title: "Korean Folktales for Language Learners: Where to Start",
    description:
      "Traditional Korean stories — not translations of Western tales — retold in simple Korean and English. Why folktales make excellent reading practice, and eight worth starting with.",
    lede: "Before there was a Korean Cinderella retold for learners, there was 콩쥐팥쥐 — the real thing, older and stranger and worth reading on its own terms.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 8,
    practiceCta: { href: "/folktales", label: "Browse Korean folktales" },
    keywords: [
      "Korean folktales for beginners",
      "traditional Korean stories in English",
      "learn Korean through folktales",
      "Korean fairy tales reading practice",
      "Korean folk stories retold",
    ],
    sections: [
      {
        heading: "Real Korean stories, not translations of Western ones",
        paragraphs: [
          "Most \"Korean reading practice\" material for learners is secretly Western: Cinderella or Snow White, translated into Korean so you can read something familiar. That's a legitimate starting point — [it's covered elsewhere](/learn/best-classic-novels-to-learn-korean) — but it also means you never actually meet the stories Korean children grow up on.",
          "Traditional Korean folktales are a different, older tradition: tiger spirits, dutiful stepdaughters, clever peasants outwitting greedy landlords, moral lessons wrapped in stories retold for centuries before anyone wrote them down. Reading them is reading practice and a small window into the culture at the same time.",
        ],
      },
      {
        heading: "Why folktales make unusually good reading practice",
        paragraphs: [
          "Folktales share a set of traits that happen to be exactly what a language learner wants: short, self-contained, built from repeating patterns (three brothers, three tasks, three wishes), concrete everyday vocabulary, and endings that resolve cleanly. Nothing is left ambiguous the way literary fiction sometimes is — you always know, by the last line, whether the greedy brother got what was coming to him.",
          "That repetition is a genuine teaching tool, not just a storytelling habit. When a tale repeats the same phrase three times with small variations, you're getting the same vocabulary and grammar pattern three times in one short story — close to free spaced repetition built into the text itself.",
        ],
      },
      {
        heading: "1. 흥부와 놀부 (Heungbu and Nolbu) — A2",
        paragraphs: [
          "Two brothers, one kind and poor, one greedy and rich, and a swallow whose broken leg changes both their fortunes. Simple, repetitive structure, and one of the most famous stories in Korea — the natural first folktale to read. [Read it](/lesson/heungbu-and-nolbu).",
        ],
      },
      {
        heading: "2. Tokgabi and the Kind Maid — A1",
        paragraphs: [
          "A dokkaebi — Korea's mischievous, magical folklore spirit, not quite a goblin and not quite a ghost — rewards a maid's kindness. The gentlest entry point on the shelf, and a good introduction to a creature that turns up across Korean folklore. [Read it](/lesson/tokgabi-and-the-kind-maid).",
        ],
      },
      {
        heading: "3. 콩쥐와 팥쥐 (Kongjwi and Patjwi) — A2",
        paragraphs: [
          "A kind stepdaughter, a cruel stepmother, and a magical helper who gets her to the festival after all — Korea's own version of a story shape you already know, with its own distinct details. [Read it](/lesson/kongjwi-and-patjwi).",
        ],
      },
      {
        heading: "4. 해와 달이 된 오누이 (The Sun and the Moon) — A2",
        paragraphs: [
          "Two siblings hide from a tiger disguised as their mother, then escape up a rope from the sky and become the sun and the moon. Vivid, a little frightening, and one of the best-known origin tales in Korea. [Read it](/lesson/the-sun-and-the-moon).",
        ],
      },
      {
        heading: "5. The Unmannerly Tiger — A2",
        paragraphs: [
          "A tiger claims he's owed respect as the forest's elder, and a clever rabbit humbles him instead. Korean folklore's tigers are constantly being outwitted by smaller animals — this is a classic of that pattern. [Read it](/lesson/the-unmannerly-tiger).",
        ],
      },
      {
        heading: "6. 심청전 (Sim Cheong) — B1",
        paragraphs: [
          "A blind father, a daughter who sells herself to sailors to pay for his cure, and a king who falls in love with her after the sea returns her. One of Korea's most famous stories of filial devotion, originally a sung pansori narrative before it was ever written down. [Read it](/lesson/sim-cheong).",
        ],
      },
      {
        heading: "7. 춘향전 (Chunhyang) — B1",
        paragraphs: [
          "A magistrate's son and a low-born woman fall in love in secret, tested when a corrupt new official demands she become his. Korea's best-known classical love story, still adapted into film and opera today. [Read it](/lesson/chunhyang).",
        ],
      },
      {
        heading: "8. 홍길동전 (Hong Gildong) — B1",
        paragraphs: [
          "An illegitimate son, forbidden from even calling his own father \"father,\" becomes an outlaw leader who steals from corrupt officials. Traditionally credited as the first Korean novel written in Hangul rather than Chinese characters — literary history as well as a good story. [Read it](/lesson/hong-gildong).",
        ],
      },
      {
        heading: "How to read them, the same way as any graded story",
        paragraphs: [
          "Nothing changes about the method here — read the tale straight through for the story first, switch the language toggle to 한국어 to read it in Korean directly, and tap the globe on a sentence only when it truly blocks you. See [how to learn Korean by reading](/learn/learn-korean-by-reading) for the fuller version of this, and [Korean particles explained](/learn/korean-particles-explained) for the small grammar markers that show up constantly in this kind of storytelling.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Start with [흥부와 놀부](/lesson/heungbu-and-nolbu) even if A1 feels almost too easy — the point of a first folktale is to get the flavor of how these stories are told, not to be challenged by the vocabulary. Then browse the [full folktales shelf](/folktales) for what's been added since.",
        ],
      },
    ],
  },

  {
    slug: "how-long-to-learn-a-language-by-reading",
    title: "How Long Does It Take to Learn a Language by Reading?",
    description:
      "A realistic timeline for reading fluency at each CEFR level, why the honest answer depends more on consistency than talent, and how to set a pace you'll actually keep.",
    lede: "Not as long as you think for the first real payoff — and longer than you'd like for the last one.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 7,
    practiceCta: { href: "/classics/a1", label: "Start at A1 today" },
    keywords: [
      "how long to learn a language by reading",
      "how long to become fluent",
      "language learning timeline",
      "how long to reach B1 B2",
      "realistic language learning expectations",
    ],
    sections: [
      {
        heading: "The honest short answer: it depends on the target, not on you",
        paragraphs: [
          "\"How long will this take\" is really three different questions wearing one sentence: how long until reading stops being exhausting (weeks), how long until you can read real short stories comfortably (months), and how long until you can pick up an unabridged novel (longer, and it varies a lot by language and how close it is to one you already know). Nobody can give you one number for \"fluent\" because fluent means something different at every one of those points.",
          "What research on language acquisition does agree on is that consistency predicts outcomes far better than raw hours logged in one sitting, or any notion of natural talent. Twenty minutes a day for a year comfortably beats ten hours crammed into one weekend a month, even though the total time is similar.",
        ],
      },
      {
        heading: "A rough timeline by CEFR level",
        paragraphs: [
          "These are wide ranges, not promises — closely related languages move faster than distant ones, and daily minutes matter more than any calendar figure. As a rough shape, reading twenty to thirty minutes most days:",
        ],
        list: [
          "A1, first steps — a few weeks. Short, direct sentences stop feeling like decoding.",
          "A2, everyday language — a couple of months in. Simple stories read at a real pace, not word by word.",
          "B1, the turning point — several months to about a year. Whole short stories, following motive and feeling, not just plot.",
          "B2, reading for real — a year or more. Lightly adapted classic literature, where tone and irony land, not just the surface story.",
        ],
      },
      {
        heading: "Why the plateau in the middle is normal",
        paragraphs: [
          "Progress from A1 to A2 feels fast because almost everything you meet is new — every session is visibly, measurably easier than the last. Somewhere in B1, that feeling fades: sessions stop feeling like breakthroughs and start feeling like maintenance, even though real growth is still happening underneath. This is usually where learners quietly quit, mistaking a plateau in felt progress for an actual stall.",
          "The fix isn't a different method — it's noticing the plateau for what it is and reading through it anyway. Rereading an old story from a few months back, one you remember struggling with, is the fastest way to see past the plateau: what used to take real effort now reads almost by itself, even if today's new material still feels hard.",
        ],
      },
      {
        heading: "What actually moves the timeline",
        paragraphs: ["Three things shorten it more than anything else:"],
        list: [
          "Consistency over intensity — daily short sessions beat occasional long ones, for the reasons behind [a daily reading streak](/learn/build-a-daily-reading-streak).",
          "Reading at the right level — too hard and you're decoding, not acquiring; see [how to find your level](/learn/cefr-levels-explained).",
          "Volume — the single best predictor. A learner who finishes fifty short graded stories has simply met the common words far more times than one who reads five long, hard ones.",
        ],
      },
      {
        heading: "What doesn't move it, no matter how it feels",
        paragraphs: [
          "Grammar study in isolation feels productive — you can point at what you learned — but it rarely shortens the timeline to comfortable reading the way volume does, because [comprehensible input](/learn/comprehensible-input-explained), not rule memorization, is what the acquisition process actually runs on. A little explicit grammar helps you notice patterns faster; it's not a substitute for meeting those patterns in real sentences, repeatedly.",
          "Neither does switching methods every few weeks looking for a faster one. The honest bottleneck for almost every learner isn't which method they're using — it's whether they're still doing it in three months.",
        ],
      },
      {
        heading: "Setting a pace you'll actually keep",
        paragraphs: [
          "Pick a daily amount you could sustain even on a bad week — one short story, most days — rather than the ambitious pace you can manage this particular motivated week. The timeline above assumes you're still reading in six months; an intense week followed by a two-month gap resets more than it seems to save.",
          "If you want a number to aim at rather than just a range: read one story almost every day for three months, and check your comprehension against a story you couldn't get through on day one. That comparison, not a calendar, is the real answer to \"how long.\"",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "If you're not reading daily yet, that's the entire lever — not level, not method, just consistency. Start at [A1](/classics/a1) even if you suspect you're past it; finishing something easily on day one is worth more than struggling through something impressive.",
        ],
      },
    ],
  },

  {
    slug: "common-english-mistakes-korean-speakers",
    title: "Common English Mistakes Korean Speakers Make — and How Reading Fixes Them",
    description:
      "Why articles, prepositions, plurals and word order trip up Korean English learners specifically, and how extensive reading corrects each one without grammar drills.",
    lede: "These aren't careless errors — they're exactly where Korean and English grammar disagree.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 8,
    practiceCta: { href: "/learn/comprehensible-input-explained", label: "Read: how comprehensible input works" },
    keywords: [
      "common English mistakes Korean speakers make",
      "Korean English learner mistakes",
      "English grammar mistakes for Korean speakers",
      "article usage a an the mistakes",
      "Korean speakers English prepositions",
    ],
    sections: [
      {
        heading: "Why these particular mistakes, and not others",
        paragraphs: [
          "Every language pair has its own predictable error list, and it comes from wherever the two grammars disagree, not from carelessness or a weak vocabulary. Korean and English disagree in a few specific, well-documented places: Korean has no articles, marks plurals only when it needs to, uses particles instead of prepositions, and orders a sentence subject–object–verb instead of English's subject–verb–object. A fluent, careful Korean speaker of English will still trip on these exact points long after their vocabulary is large, because the mistake isn't about knowing the word — it's about a grammatical habit that Korean simply never built.",
          "That's actually good news for how to fix them. A gap like this responds far better to meeting the correct pattern hundreds of times in real sentences than to memorizing the rule that explains it — which is the whole case for reading over drilling, covered in more depth in [how comprehensible input works](/learn/comprehensible-input-explained).",
        ],
      },
      {
        heading: "1. Articles: a, an, the",
        paragraphs: [
          "Korean has no equivalent of \"a\" or \"the\" at all — a noun is just a noun, and whether it's specific or general is usually clear from context or left unmarked. English leans on articles to carry that same information, so Korean speakers often drop them (\"I bought book\") or use \"the\" everywhere out of caution (\"I bought the book\" for any book, not a specific one already mentioned).",
          "The core rule is simpler than most textbooks make it sound: use \"the\" when both you and the listener already know which one you mean — because it was just mentioned, or there's only one — and \"a/an\" the first time you introduce something countable and unspecific. Reading is where this actually sinks in, because a story constantly re-uses the same noun first with \"a\" and then with \"the\" a sentence later (\"a fox appeared... the fox looked at her\"), which is the exact pattern a rule can describe but only repeated exposure makes automatic.",
        ],
      },
      {
        heading: "2. Prepositions: in, on, at, and the rest",
        paragraphs: [
          "Korean expresses location and direction with particles (에, 에서, 로) that don't map cleanly onto English's much larger set of prepositions, so a single Korean particle can correspond to three or four different English choices depending on the verb and noun involved. That's why \"I'm interested in music\" and \"I'm interested on music\" both feel equally plausible to a Korean speaker translating from 에 — the particle gives no clue which preposition English wants.",
          "There's no shortcut rule that resolves this the way the article rule does; prepositions in English are largely a matter of which word usually goes with which, not logic. That makes them a nearly perfect case for reading over memorizing a list: the phrase \"interested in\" simply looks and sounds right after you've met it enough times, the same way a native speaker never consciously learned the rule either.",
        ],
      },
      {
        heading: "3. Dropping the plural -s",
        paragraphs: [
          "Korean doesn't require plural marking when the number is already clear — \"세 마리 개\" (three dog) is completely normal Korean, where English insists on \"three dogs\" even though \"three\" already says how many. Because the Korean sentence structure never forces the marking, it's easy to carry that habit into English and produce \"I have two cat\" or \"there were many people in the room, everyone was talking\" without the plural noun.",
          "This one usually clears up fastest with reading, simply because the -s is highly frequent and highly visible on the page in a way it can slide past in fast speech — seeing \"dogs\", \"cats\", \"stories\" over and over does more than being told the rule once.",
        ],
      },
      {
        heading: "4. Word order in longer sentences",
        paragraphs: [
          "Korean builds a sentence subject–object–verb, with the verb arriving last no matter how long the sentence gets (\"나는 어제 시장에서 산 사과를 먹었어요\" — literally \"I yesterday market-at bought apple ate\"). English wants the verb much earlier, right after the subject, with everything else trailing behind it. Under time pressure — speaking quickly, or writing a first draft — it's common for a Korean speaker to reach for the Korean order and produce something like \"I yesterday at the market bought apple ate\", especially in longer sentences with a relative clause.",
          "This is the hardest of the four to fix through explanation, because \"where does the verb go\" isn't really a rule you apply sentence by sentence — it's closer to a rhythm you internalize. Reading builds exactly that rhythm: a graded story puts a correctly-ordered English sentence in front of you every few seconds, which trains the ear (and the inner voice) to notice when an English sentence sounds off, long before you could explain why.",
        ],
      },
      {
        heading: "Why reading fixes what grammar study explains",
        paragraphs: [
          "Notice the pattern across all four: in every case, knowing the rule and applying it under real pressure are two different skills, and only the second one is what actually shows up in your English. Grammar explanations are useful for the first ten seconds of noticing a mistake — they're a poor tool for making the correct form automatic, because automaticity comes from repetition in context, not from understanding.",
          "That's the entire case for reading a lot of comfortably-easy material rather than studying grammar rules in isolation: every sentence you read correctly is one more repetition of a native pattern, landing exactly where the mistake would otherwise have been. [Tap-any-word](/learn/learn-english-by-reading) makes the vocabulary side effortless, so the sentence structure is the only thing left to absorb.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Pick a level where you're not fighting for every word — [browse graded stories by CEFR level](/classics) — and read a little every day. You'll start noticing these four patterns (articles, prepositions, plurals, word order) landing correctly in your own writing within a few weeks, usually well before you could recite the rule that explains why.",
        ],
      },
    ],
  },

  {
    slug: "what-is-a-graded-reader",
    title: "What Is a Graded Reader? A Complete Guide for Language Learners",
    description:
      "What graded readers are, how CEFR-based grading actually works, how they differ from authentic texts and textbooks, and how to pick your first one.",
    lede: "The single most effective, least discussed tool in language learning — here's what it actually is.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 7,
    practiceCta: { href: "/classics", label: "Browse graded readers by level" },
    keywords: [
      "what is a graded reader",
      "graded reader definition",
      "graded readers for language learners",
      "graded readers vs authentic texts",
      "CEFR graded reading",
    ],
    sections: [
      {
        heading: "The problem graded readers exist to solve",
        paragraphs: [
          "Pick up a real, unadapted novel in a language you're learning, and the odds are stacked against you long before the plot gets interesting: unfamiliar words on every line, sentence structures a textbook never taught, and cultural references that need their own footnote. Most learners who try this either give up within a chapter or read so slowly, dictionary in hand, that the story itself is lost. It's not a discipline problem — the text is simply calibrated for a native reader, not a learner.",
          "A graded reader is a text deliberately written or rewritten to sit inside a learner's actual vocabulary and grammar range, so the story stays intact but the language is no longer the obstacle. The idea isn't new — it's been standard practice in English-as-a-second-language teaching for decades — but it's still the tool most self-taught learners never discover, because a bookstore's foreign-language shelf is mostly authentic novels and phrasebooks, with graded readers as a niche in between.",
        ],
      },
      {
        heading: "How the \"grading\" actually works",
        paragraphs: [
          "Grading means controlling two things at once: vocabulary and sentence complexity. A well-graded text at a given level sticks to a defined word list (or a level's expected vocabulary size) and avoids grammar the learner hasn't met yet — no third-conditional clauses at A2, no rare idioms at A1. The [CEFR scale](/learn/cefr-levels-explained) (A1 through C2) is the most common yardstick, and it's less about difficulty in the abstract than about a specific, learnable target: at B1, a reader can follow the main points of a clear text on familiar matters, and a well-graded B1 story is written to sit exactly there.",
          "The target for comfortable reading is roughly 95–98% known vocabulary — enough unfamiliar words to keep growing, not so many that you're decoding instead of reading. That's the number a good grading process is actually aiming for, whether or not the label says so explicitly.",
        ],
      },
      {
        heading: "Graded readers vs. the alternatives",
        paragraphs: [
          "It helps to place graded readers next to the two things learners usually reach for instead:",
        ],
        list: [
          "Authentic texts (real novels, news articles) — the real language, but calibrated for a native speaker's vocabulary and background knowledge, not a learner's. Best once you're already comfortable at B2 and above.",
          "Textbook dialogues — carefully controlled language, but usually short, plot-free, and written to teach a specific grammar point rather than to be worth reading for its own sake, so there's little pull to keep going.",
          "Graded readers — controlled language like a textbook, but built around an actual story with a beginning, middle and end, which is what makes finishing one (and wanting to start the next) so much easier.",
        ],
      },
      {
        heading: "What separates a good graded reader from a mediocre one",
        paragraphs: [
          "Vocabulary control alone doesn't make a graded reader worth reading — plenty of simplified texts are technically at the right level and still a chore to get through, because the story itself was thinned out along with the language. The best graded readers keep real narrative tension: a reason to turn the page that has nothing to do with practicing English.",
          "On SeoJae Story, every story is a genuine retelling of a public-domain classic or an original piece, not a summary — full scenes, real dialogue, an actual ending — simplified in language but not gutted in substance. Every sentence has a Korean translation beside it, native-voice audio narration, tap-to-translate on any word, and a short comprehension check at the end, so the grading extends past just the vocabulary list into the whole reading experience.",
        ],
      },
      {
        heading: "How to pick your first one",
        paragraphs: [
          "Start one level lower than you think you need. The instinct is to pick something that looks appropriately challenging; the better strategy is to pick something you can finish in one sitting without reaching for a dictionary more than two or three times, because finishing — and feeling capable while doing it — is what makes you come back for the next one. [Browse by CEFR level](/classics) and start at A1 or A2 unless you're already reading full novels comfortably.",
          "Once a level starts feeling easy rather than merely manageable, move up. There's no test to pass first — if you're breezing through, the story will tell you.",
        ],
      },
    ],
  },

  {
    slug: "english-pronunciation-tips-korean-speakers",
    title: "English Pronunciation Tips for Korean Speakers",
    description:
      "Why L/R, F/V, final consonants and English stress patterns are specifically hard for Korean speakers, and a practical shadowing routine using audio narration.",
    lede: "The sounds that give you away aren't random — Korean's sound system just doesn't have them.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 7,
    practiceCta: { href: "/classics/a1", label: "Read and listen to an A1 story" },
    keywords: [
      "English pronunciation tips for Korean speakers",
      "Korean speakers English pronunciation",
      "L and R pronunciation Korean",
      "English pronunciation practice Korean learners",
      "shadowing practice language learning",
    ],
    sections: [
      {
        heading: "Why pronunciation is its own separate skill",
        paragraphs: [
          "It's entirely possible to read and write English well while still finding certain sounds genuinely difficult to produce and even to hear — pronunciation runs on a different part of language ability than vocabulary or grammar. The specific sounds that are hard depend heavily on your first language, because your ear was trained from childhood to hear the sound categories Korean actually uses, and it takes real, deliberate practice to hear (not just produce) a distinction Korean never asked you to notice.",
          "None of the patterns below are a sign of a weak ear or a bad accent — they're exactly where Korean's sound system and English's disagree, the same way the grammar mistakes covered in [common English mistakes Korean speakers make](/learn/common-english-mistakes-korean-speakers) come from where the two grammars disagree.",
        ],
      },
      {
        heading: "L and R",
        paragraphs: [
          "Korean has one sound (ㄹ) that shifts between an L-like and an R-like pronunciation depending on its position in a word, but never contrasts the two the way English does — \"light\" and \"right\" are two completely different English words, built on a distinction Korean's sound system doesn't require you to track. That's why this pair is the single most-cited pronunciation challenge for Korean English learners, and why it takes real listening practice, not just repetition, to fix: you have to train your ear to hear the difference before your mouth can reliably produce it.",
        ],
      },
      {
        heading: "F/P and V/B",
        paragraphs: [
          "Korean has ㅍ (roughly a P sound) but no true F, and ㅂ (roughly a B) but no true V — both English sounds are made by air passing through a narrow gap between teeth and lip, a manner of articulation Korean doesn't use at all. The result is a natural tendency to substitute the closest Korean sound: \"coffee\" leaning toward \"coppy\", \"very\" leaning toward \"berry\". Feeling your top teeth lightly touch your bottom lip — rather than closing your lips completely, as for P or B — is the physical adjustment that fixes both pairs at once.",
        ],
      },
      {
        heading: "Final consonants and consonant clusters",
        paragraphs: [
          "Korean syllables are built to end cleanly — on a vowel, or on one of a small set of consonants — and never stack two or three consonants together at the end of a syllable the way English constantly does (\"strengths\", \"asked\", \"desks\"). The instinctive fix, carried over from Korean's syllable shape, is to insert a small vowel sound to break the cluster up — \"strike\" edging toward \"seu-teu-rai-keu\" — which is exactly the pattern behind the stereotype of a heavy accent on English loanwords borrowed into Korean.",
          "The fix isn't to somehow eliminate every trace of accent — it's to practice holding a consonant sound at the very end of a breath without adding a vowel after it, which is a physical habit, not a vocabulary problem, and one that responds well to slow, deliberate repetition.",
        ],
      },
      {
        heading: "Rhythm: why English sounds 'choppy' or 'sing-song' either way",
        paragraphs: [
          "Korean is syllable-timed — each syllable gets roughly equal time and weight, which gives Korean its even, steady rhythm. English is stress-timed instead: stressed syllables land at roughly even intervals, and everything in between gets compressed or swallowed to make room. That's why a Korean speaker reading English aloud syllable-by-syllable can sound clipped or overly even to a native ear, even with every individual sound pronounced correctly — the rhythm, not the sounds, is what's off.",
          "This is genuinely hard to fix through explanation, because rhythm is closer to music than to vocabulary — you don't really learn it, you absorb it by hearing enough of it modeled correctly and trying to match it.",
        ],
      },
      {
        heading: "A practical shadowing routine",
        paragraphs: [
          "Shadowing — listening to a short line and immediately repeating it aloud, trying to match the rhythm and sounds as closely as possible — is the most effective practice for all of the above, because it trains ear and mouth together instead of one at a time. Every SeoJae Story lesson has native-voice audio narration built for exactly this: play a sentence with the **Listen** button, pause, repeat it aloud from memory, then play it again and compare.",
        ],
        list: [
          "Pick a story at a level where you already understand the words — pronunciation practice works better once meaning isn't also a struggle.",
          "Play one sentence at a time. Repeat it aloud immediately, trying to match rhythm as much as individual sounds.",
          "Play it again right after your attempt, and notice the gap — don't judge it, just notice it.",
          "Do this for five or ten sentences a day rather than a whole story at once; the habit matters more than the volume here.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "Start with an [A1 story](/classics/a1) so the words themselves are no obstacle, and shadow it a sentence at a time using the built-in audio. The sounds above won't fix themselves overnight, but they respond reliably to this kind of short, repeated, attentive practice — far more than to being told the rule once.",
        ],
      },
    ],
  },

  {
    slug: "toeic-toefl-reading-practice",
    title: "TOEIC and TOEFL Reading Practice: How Extensive Reading Helps Your Score",
    description:
      "Why vocabulary lists alone don't move TOEIC or TOEFL reading scores, what the reading sections actually measure, and how daily graded reading builds those skills.",
    lede: "The reading sections don't test vocabulary you've memorized — they test reading you can actually do, fast.",
    datePublished: "2026-09-22",
    dateModified: "2026-09-22",
    readingMinutes: 7,
    practiceCta: { href: "/classics/b1", label: "Build reading speed at B1" },
    keywords: [
      "TOEIC reading practice",
      "TOEFL reading practice",
      "how to improve TOEIC reading score",
      "extensive reading for TOEIC",
      "TOEIC TOEFL vocabulary reading",
    ],
    sections: [
      {
        heading: "What the reading sections actually measure",
        paragraphs: [
          "TOEIC's reading section (Parts 5–7) and TOEFL's reading passages both look, on the surface, like vocabulary and grammar tests — but the real bottleneck for most test-takers isn't knowing individual words, it's reading fast enough, under time pressure, to finish and still understand what you read. TOEFL gives you a set number of minutes per passage regardless of how carefully you'd like to read it; TOEIC's Part 7 reading passages are famous for running out the clock on test-takers who know the grammar perfectly well but simply can't process the passages fast enough to reach the last few questions.",
          "That single fact reframes what \"studying for the reading section\" should actually mean. A study plan built entirely around vocabulary lists and grammar drills prepares you for a test with no clock. The real test has one.",
        ],
      },
      {
        heading: "Why vocabulary lists plateau",
        paragraphs: [
          "Memorized word lists are real, measurable progress — you can point at exactly what you learned — but they train recognition of a word in isolation, not the speed of pulling its meaning out of a full sentence you're reading under pressure. That gap between \"I know this word on a flashcard\" and \"I read this word instantly inside a sentence, without breaking stride\" is exactly what separates a test-taker who has studied a lot of vocabulary from one who reads quickly and accurately — and it's the second skill the test actually scores.",
          "This is the same distinction covered in [comprehensible input explained](/learn/comprehensible-input-explained): meeting language in context, repeatedly, at a level you can mostly follow, is what turns \"recognized\" into \"instant\" — and instant is what a timed test rewards.",
        ],
      },
      {
        heading: "What extensive reading actually trains",
        paragraphs: [
          "Reading a lot of comfortably-easy material — well below the difficulty of the test itself — builds exactly the two things timed reading tests measure: raw reading speed (because fluent reading only comes from doing a lot of it) and the ability to infer an unfamiliar word's meaning from context without stopping (because that's what a graded story constantly asks of you, one level below where the test operates). Neither of these shows up on a vocabulary quiz, and neither is optional once you're facing a 20-minute time limit on a page of dense text.",
          "This is also why B1–B2 level material is the sweet spot for TOEIC/TOEFL prep specifically, even though the tests themselves often sit closer to B2–C1: reading below the test's difficulty, but a lot of it, builds the underlying speed and inference skill faster than reading at-level, slowly, with a dictionary open.",
        ],
      },
      {
        heading: "A practical prep routine",
        paragraphs: ["A combined routine, four to six weeks out from a test date:"],
        list: [
          "Daily (15–20 min): read one graded story straight through at a comfortable level — [B1](/classics/b1) is a reasonable default for most intermediate test-takers — timing yourself loosely but not stopping to look up every word.",
          "2–3× a week: take a short, official timed practice passage at the test's real difficulty, and review only the questions you got wrong, not the whole passage.",
          "Weekly: reread a story from two or three weeks ago and notice how much faster it goes — that's the speed gain the test will actually reward.",
        ],
      },
      {
        heading: "What this doesn't replace",
        paragraphs: [
          "None of this replaces learning the test's own format — question types, timing per section, how TOEIC Part 6 differs from Part 7 — which is genuinely test-specific knowledge worth studying directly from official materials. Extensive reading builds the underlying reading ability the test measures; it isn't a substitute for knowing what the test is actually going to ask you to do with that ability.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "If your reading feels accurate but slow under a timer, that's the extensive-reading gap specifically — start a daily story at [B1](/classics/b1) today, several weeks before your test date, since reading speed builds gradually rather than overnight.",
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
