# Content backlog — "Classics"

A working list of public-domain literary works to adapt into SeoJae Story
lessons. Skewed toward the app's core audience (adult learners of Korean/English
reading short literary fiction — a readership that leans female), curated from
Project Gutenberg's popularity data:

- Top 100 (updated daily): <https://www.gutenberg.org/browse/scores/top>
- Top 1000: <https://www.gutenberg.org/browse/scores/top1000.php>

Pride and Prejudice is currently #1 site-wide; Little Women, Jane Eyre,
The Blue Castle, Middlemarch, Anne of Green Gables and Cranford are all in the
current Top 100.

---

## Sourcing rules (unchanged)

1. **Source work must be public domain.** Everything below is PD in the US and in
   life+70 countries (latest author death year: L. M. Montgomery, 1942).
2. **Write our own translation.** Never paste a modern copyrighted translation.
   Korean text is written fresh for each lesson; English is our own simplified
   retelling of the PD original.
3. **Attribution** goes in `Lesson.source`, naming the PD original and stating
   the retelling + translation are original to SeoJae Story (see the two
   existing lessons in `src/lib/data/lessons.ts` for the pattern).
4. Prefer Gutenberg plain-text (`https://www.gutenberg.org/ebooks/<id>`), Korean
   Wikisource, or 공유마당 for source text.

---

## The "Classics" library section — SHIPPED

A grouped shelf on the home page (`src/app/page.tsx`), rendered below the leveled
lesson list, showing only lessons in this collection with a book-cover image
instead of the emoji tile.

**Schema** (`src/lib/types.ts`, `Lesson`) — implemented:

```ts
/** Library grouping. Absent = the default leveled "Library" list. */
collection?: "classics";
/** Path under /public (e.g. "/covers/gift-of-the-magi.svg"). Falls back to coverEmoji. */
coverImage?: string;
/** Original author + dates, shown on the Classics card and lesson hero. */
author?: string;
```

**Rendering — implemented:**

- `src/components/home/ClassicsSection.tsx` + `ClassicsCarousel.tsx`: on the
  dashboard, a swipeable, gently auto-rotating strip of up to 6 compact cards
  (cover thumb + title + author + badges) with dot indicators and a "See all"
  link. Auto-advance pauses on pointer/focus-within and is off under
  `prefers-reduced-motion`. Renders nothing until a lesson opts in with
  `collection: "classics"` (so it ships ahead of the backlog).
- `src/app/classics/page.tsx`: the full shelf — a 2-col grid of portrait
  `ClassicCard`s (`src/components/home/ClassicCard.tsx`, shared): cover
  `aspect-[3/4]` + title + author + level/premium/complete badges + minutes.
  Also reachable from the slide-over menu.
- `src/app/page.tsx`: classics are filtered *out* of the leveled list so they
  only appear on the shelf.
- `LessonCard`, `LessonHero` and `LessonOfDayCard`: if `coverImage` is set,
  render a plain `<img>` (local static asset — `next/image` refuses SVG and adds
  nothing here); else the `coverEmoji` tile as before. In the small square tiles
  (`LessonCard`, `LessonOfDayCard`) the portrait cover is `object-cover`
  cropped; `LessonHero` shows it whole at `aspect-[3/4]`.

**Cover images — what we do:**

Gutenberg exposes a cover for most books at
`https://www.gutenberg.org/cache/epub/<id>/pg<id>.cover.medium.jpg`, but for many
older texts (e.g. #7256) it's an auto-generated green placeholder — off-brand and
not worth vendoring. So: **hand-make a typographic SVG cover in the app palette**
at `public/covers/<slug>.svg` (see `gift-of-the-magi.svg` — cream gradient, rose
double frame, serif title, gold ornament, "SEOJAE STORY · CLASSICS" footer). SVG
is tiny, sharp at any size, and needs no CSP/remote-image config. If a real book
has a genuine period cover/illustration in the public domain, download that into
`public/covers/<slug>.jpg` instead. No image → `coverEmoji` tile.
(If we ever want remote loading: add `images.remotePatterns` for
`www.gutenberg.org` in `next.config.mjs` and use `next/image`.)

---

## Adaptation workflow (per lesson)

1. Open the Gutenberg text; pick one **250–500 word** self-contained passage
   (an opening, a single scene). For very short stories, use the whole thing.
2. Simplify the English to the target CEFR level; keep sentences short, one idea
   each. Split into `paragraphs: StorySentence[][]`, one entry per sentence.
3. Write the Korean translation sentence-by-sentence (`translation`).
4. Pull **5 vocab terms** (`vocab`) — the words a learner at that level would
   stumble on — with `partOfSpeech`, `reading` (for Korean), `translation`,
   `example`, `exampleTranslation`.
5. Write **3 comprehension questions** (`questions`) and one `summaryPrompt`.
6. Add `source`, `coverImage`, `author`, `collection: "classics"`, `topic`,
   `level`, `isFree`, `coverEmoji` (fallback).
7. Drop the cover into `public/covers/<slug>.jpg`.

---

## Backlog

`PG#` = Project Gutenberg ebook id (blank = look it up on gutenberg.org).
`Status`: ☐ not started · ◐ drafting · ☑ live.

### Tier 1 — short stories & tales (one lesson each; whole text or a single excerpt)

| # | Title | Author (d.) | PG# | Level | Excerpt scope | Status |
|--|--|--|--|--|--|--|
| 1 | The Yellow Wallpaper | Charlotte Perkins Gilman (1935) | 1952 | B1 | opening 2–3 journal entries | ☐ |
| 2 | The Story of an Hour | Kate Chopin (1904) | — | A2 | simplified retelling, 17 sentences | ☑ |
| 3 | A Pair of Silk Stockings | Kate Chopin (1904) | — | A2 | whole | ☐ |
| 4 | The Gift of the Magi | O. Henry (1910) | 7256 | B1 | simplified retelling, 13 sentences — **seed lesson for the collection** | ☑ |
| 5 | The Last Leaf | O. Henry (1910) | — | A2 | whole | ☐ |
| 6 | The Necklace | Guy de Maupassant (1893) | — | B1 | simplified retelling, 17 sentences | ☑ |
| 7 | The Happy Prince | Oscar Wilde (1900) | 902 | A2 | whole | ☐ |
| 8 | The Selfish Giant | Oscar Wilde (1900) | 902 | A1 | whole (simplified retelling, 17 sentences; final scene gently softened) | ☑ |
| 9 | The Nightingale and the Rose | Oscar Wilde (1900) | 902 | B1 | whole | ☐ |
| 10 | Cinderella | Brothers Grimm (1863) | 2591 | A1 | core scenes, gently softened (17 sentences) | ☑ |
| 11 | Little Red Riding Hood | Brothers Grimm (1863) | 2591 | A1 | whole | ☐ |
| 12 | Snow White | Brothers Grimm (1863) | 2591 | A2 | trimmed | ☐ |
| 13 | Rapunzel | Brothers Grimm (1863) | 2591 | A2 | whole | ☐ |
| 14 | The Frog Prince | Brothers Grimm (1863) | 2591 | A1 | whole | ☐ |
| 15 | The Little Mermaid | Hans Christian Andersen (1875) | 1597 | B1 | trimmed to 1–2 scenes | ☐ |
| 16 | The Ugly Duckling | Hans Christian Andersen (1875) | 1597 | A2 | whole (simplified retelling, 17 sentences) | ☑ |
| 17 | The Emperor's New Clothes | Hans Christian Andersen (1875) | 1597 | A1 | whole | ☐ |
| 18 | The Princess and the Pea | Hans Christian Andersen (1875) | 1597 | A1 | whole | ☐ |
| 19 | Beauty and the Beast | Mme de Beaumont / Lang | 503 | A2 | trimmed (Blue Fairy Book) | ☐ |
| 20 | East of the Sun and West of the Moon | Asbjørnsen & Moe / Lang | 503 | B1 | trimmed | ☐ |
| 21 | The Twelve Dancing Princesses | Brothers Grimm / Lang | 503 | A2 | whole | ☐ |
| 22 | A Christmas Carol (Stave 1) | Charles Dickens (1870) | 46 | B1 | Stave 1 ("Marley's Ghost"), simplified retelling, 17 sentences | ☑ |
| 23 | Alice's Adventures in Wonderland (Ch. 1) | Lewis Carroll (1898) | 11 | A2 | "Down the Rabbit-Hole" | ☐ |
| 24 | The Gift of the Magi collection — pick 1 more | O. Henry (1910) | 2776 | A2/B1 | one story from *The Four Million* | ☐ |
| 25 | The Bet | Anton Chekhov (1904) | — | B1 | whole | ☐ |
| 26 | The Lady with the Dog | Anton Chekhov (1904) | 13415 | B2 | Part I | ☐ |

### Tier 2 — novel openings / self-contained scenes (excerpt one chapter or scene)

| # | Title | Author (d.) | PG# | Level | Excerpt scope | Status |
|--|--|--|--|--|--|--|
| 27 | Pride and Prejudice | Jane Austen (1817) | 1342 | B1 | Ch. 1 — the Bennets discuss Mr. Bingley (simplified retelling, 17 sentences) | ☑ |
| 28 | Pride and Prejudice | Jane Austen (1817) | 1342 | B2 | Ch. 34 — Darcy's first proposal | ☐ |
| 29 | Sense and Sensibility | Jane Austen (1817) | 21839 | B1 | Ch. 1 — the Dashwoods lose Norland | ☐ |
| 30 | Emma | Jane Austen (1817) | 158 | B1 | Ch. 1 — "handsome, clever, and rich" | ☐ |
| 31 | Persuasion | Jane Austen (1817) | 105 | B2 | Ch. 4 — Anne and Wentworth's history | ☐ |
| 32 | Northanger Abbey | Jane Austen (1817) | 121 | B1 | Ch. 1 — "no one would have supposed her born to be a heroine" | ☐ |
| 33 | Jane Eyre | Charlotte Brontë (1855) | 1260 | B2 | Ch. 1 — the window seat and John Reed (simplified retelling, 17 sentences) | ☑ |
| 34 | Jane Eyre | Charlotte Brontë (1855) | 1260 | B2 | Ch. 5 — arrival at Lowood | ☐ |
| 35 | Wuthering Heights | Emily Brontë (1848) | 768 | B2 | Ch. 3 — Lockwood's dream at the window | ☐ |
| 36 | Agnes Grey | Anne Brontë (1849) | 767 | B1 | Ch. 1 — "the beginning" | ☐ |
| 37 | The Tenant of Wildfell Hall | Anne Brontë (1849) | 969 | B2 | Ch. 1 — the stranger at Wildfell | ☐ |
| 38 | Villette | Charlotte Brontë (1855) | 21181 | B2 | Ch. 1 — Bretton | ☐ |
| 39 | Little Women | Louisa May Alcott (1888) | 37106 | A2 | Ch. 1 — "Christmas won't be Christmas" (simplified retelling, 17 sentences) | ☑ |
| 40 | Little Women | Louisa May Alcott (1888) | 37106 | B1 | Ch. 8 — Amy and the limes / the burned manuscript | ☐ |
| 41 | An Old-Fashioned Girl | Louisa May Alcott (1888) | 2787 | A2 | Ch. 1 — Polly arrives in the city | ☐ |
| 42 | Rose in Bloom | Louisa May Alcott (1888) | 2804 | B1 | Ch. 1 — Rose comes home | ☐ |
| 43 | Anne of Green Gables | L. M. Montgomery (1942) | 45 | A2 | Ch. 2 — Matthew at the station (simplified retelling, 17 sentences) | ☑ |
| 44 | Anne of Green Gables | L. M. Montgomery (1942) | 45 | B1 | Ch. 3 — Marilla is astonished | ☐ |
| 45 | The Blue Castle | L. M. Montgomery (1942) | 67979 | B1 | Ch. 1 — Valancy's rainy birthday morning | ☐ |
| 46 | Emily of New Moon | L. M. Montgomery (1942) | 61236 | B1 | Ch. 1 — "the house in the hollow" | ☐ |
| 47 | The Story Girl | L. M. Montgomery (1942) | 26273 | B1 | Ch. 1 — the orchard | ☐ |
| 48 | Rilla of Ingleside | L. M. Montgomery (1942) | 26265 | B2 | Ch. 1 — Glen "Notes" and gossip | ☐ |
| 49 | The Secret Garden | Frances Hodgson Burnett (1924) | 113 | A2 | Ch. 1 — "There is no one left" | ☐ |
| 50 | The Secret Garden | Frances Hodgson Burnett (1924) | 113 | B1 | Ch. 4 — Martha; the robin | ☐ |
| 51 | A Little Princess | Frances Hodgson Burnett (1924) | 146 | A2 | Ch. 1 — Sara arrives at the seminary | ☐ |
| 52 | A Little Princess | Frances Hodgson Burnett (1924) | 146 | B1 | Ch. 7 — the diamond mines / the fall | ☐ |
| 53 | Cranford | Elizabeth Gaskell (1865) | 394 | B1 | Ch. 1 — "in possession of the Amazons" | ☐ |
| 54 | The Enchanted April | Elizabeth von Arnim (1941) | — | B1 | Ch. 1 — the advertisement | ☐ |
| 55 | Elizabeth and Her German Garden | Elizabeth von Arnim (1941) | — | B1 | opening — the garden in May | ☐ |
| 56 | A Room with a View | E. M. Forster (1970) — US PD (1908) | 2641 | B2 | Ch. 1 — "The Bertolini" | ☐ |
| 57 | Rebecca of Sunnybrook Farm | Kate Douglas Wiggin (1923) | — | A2 | Ch. 1 — the stagecoach ride | ☐ |
| 58 | Pollyanna | Eleanor H. Porter (1920) | — | A2 | Ch. 1 — Miss Polly takes her in | ☐ |
| 59 | Daddy-Long-Legs | Jean Webster (1916) | — | B1 | Ch. 1 — "Blue Wednesday" | ☐ |
| 60 | Anne of Avonlea | L. M. Montgomery (1942) | — | B1 | Ch. 1 — Anne, now a teacher | ☐ |

### Tier 3 — advanced / longer (B1–B2, later)

| # | Title | Author (d.) | PG# | Level | Excerpt scope | Status |
|--|--|--|--|--|--|--|
| 61 | Middlemarch | George Eliot (1880) | 145 | B2 | "Prelude" + Ch. 1 — Dorothea | ☐ |
| 62 | Silas Marner | George Eliot (1880) | — | B1 | Ch. 12 — the child at the hearth | ☐ |
| 63 | The Mill on the Floss | George Eliot (1880) | — | B2 | Bk 1 Ch. 5 — Tom comes home | ☐ |
| 64 | North and South | Elizabeth Gaskell (1865) | — | B2 | Ch. 1 — "Haste to the Wedding" | ☐ |
| 65 | Wives and Daughters | Elizabeth Gaskell (1865) | — | B2 | Ch. 1 — the "old rigmarole of childhood" | ☐ |
| 66 | The Age of Innocence | Edith Wharton (1937) | 541 | B2 | Ch. 1 — the opera | ☐ |
| 67 | The House of Mirth | Edith Wharton (1937) | 284 | B2 | Bk 1 Ch. 1 — Lily Bart at the station | ☐ |
| 68 | Ethan Frome | Edith Wharton (1937) | 4517 | B1 | the prologue — the narrator sees Ethan | ☐ |
| 69 | The Awakening | Kate Chopin (1904) | 160 | B2 | Ch. 1 — Grand Isle | ☐ |
| 70 | The Country of the Pointed Firs | Sarah Orne Jewett (1909) | — | B2 | Ch. 1–2 — arriving at Dunnet Landing | ☐ |
| 71 | Frankenstein | Mary Shelley (1851) | 84 | B2 | Letter 1 — Walton to his sister | ☐ |
| 72 | The Mysteries of Udolpho | Ann Radcliffe (1823) | — | B2 | Vol. 1 Ch. 1 — La Vallée | ☐ |
| 73 | Sonnets from the Portuguese | Elizabeth Barrett Browning (1861) | — | B2 | Sonnet 43 — "How do I love thee" | ☐ |

---

## Notes

- Titles without a `PG#` just need a 30-second lookup on gutenberg.org — left
  blank rather than guessed.
- Tiers are by adaptation effort, not literary difficulty: Tier 1 works fit a
  lesson almost as-is; Tier 2/3 need a scene chosen and trimmed.
- **Live now (11):** The Gift of the Magi (row 4), The Story of an Hour
  (row 2), Anne of Green Gables Ch. 2 (row 43), Little Women Ch. 1 (row 39),
  The Ugly Duckling (row 16), Cinderella (row 10), Pride and Prejudice Ch. 1
  (row 27), Jane Eyre Ch. 1 (row 33), The Selfish Giant (row 8), The Necklace
  (row 6), A Christmas Carol Stave 1 (row 22). Follow their shape in
  `src/lib/data/lessons.ts`.
- Levels on the shelf now: A1 ×2 (Cinderella, The Selfish Giant), A2 ×4
  (Story of an Hour, Anne, Little Women, Ugly Duckling), B1 ×4 (Gift of the
  Magi, Pride and Prejudice, The Necklace, A Christmas Carol), B2 ×1
  (Jane Eyre). B2 is clearly the thin end now — the next builds should feed it.
- Good next lessons to build: **The Lady with the Dog Part I** (row 26, B2 —
  shores up the thin B2 end), **Wuthering Heights Ch. 3** (row 35, B2),
  **The Secret Garden Ch. 1** (row 49, A2 — a non-fairy-tale A2),
  **The Emperor's New Clothes** (row 17, A1). All short, famous, and easy
  to level.
