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
| 1 | The Yellow Wallpaper | Charlotte Perkins Gilman (1935) | 1952 | B1 | opening 2–3 journal entries (simplified retelling, 17 sentences; kept as her journal) | ☑ |
| 2 | The Story of an Hour | Kate Chopin (1904) | — | A2 | simplified retelling, 17 sentences | ☑ |
| 3 | A Pair of Silk Stockings | Kate Chopin (1904) | — | A2 | whole | ☐ |
| 4 | The Gift of the Magi | O. Henry (1910) | 7256 | B1 | simplified retelling, 13 sentences — **seed lesson for the collection** | ☑ |
| 5 | The Last Leaf | O. Henry (1910) | 2777 | A2 | whole (simplified retelling, 17 sentences) | ☑ |
| 6 | The Necklace | Guy de Maupassant (1893) | — | B1 | simplified retelling, 17 sentences | ☑ |
| 7 | The Happy Prince | Oscar Wilde (1900) | 902 | A2 | whole (simplified retelling, 17 sentences; deaths kept, resolved on the Paradise coda) | ☑ |
| 8 | The Selfish Giant | Oscar Wilde (1900) | 902 | A1 | whole (simplified retelling, 17 sentences; final scene gently softened) | ☑ |
| 9 | The Nightingale and the Rose | Oscar Wilde (1900) | 902 | B1 | whole (simplified retelling, 17 sentences) | ☑ |
| 10 | Cinderella | Brothers Grimm (1863) | 2591 | A1 | core scenes, gently softened (17 sentences) | ☑ |
| 11 | Little Red Riding Hood | Brothers Grimm (1863) | 2591 | A1 | whole (simplified retelling, 17 sentences; gently softened) | ☑ |
| 12 | Snow White | Brothers Grimm (1863) | 2591 | A2 | trimmed (simplified retelling, 17 sentences; gently softened) | ☑ |
| 13 | Rapunzel | Brothers Grimm (1863) | 2591 | A2 | whole (simplified retelling, 17 sentences; gently softened) | ☑ |
| 14 | The Frog Prince | Brothers Grimm (1863) | 2591 | A1 | whole (simplified retelling, 17 sentences; gently softened) | ☑ |
| 15 | The Little Mermaid | Hans Christian Andersen (1875) | 1597 | B1 | trimmed to 1–2 scenes (simplified retelling, 17 sentences; ends on the daughter-of-the-air coda) | ☑ |
| 16 | The Ugly Duckling | Hans Christian Andersen (1875) | 1597 | A2 | whole (simplified retelling, 17 sentences) | ☑ |
| 17 | The Emperor's New Clothes | Hans Christian Andersen (1875) | 1597 | A1 | whole (simplified retelling, 17 sentences) | ☑ |
| 18 | The Princess and the Pea | Hans Christian Andersen (1875) | 1597 | A1 | whole (simplified retelling, 17 sentences) | ☑ |
| 19 | Beauty and the Beast | Mme de Beaumont / Lang | 503 | A2 | trimmed (Blue Fairy Book) — simplified retelling, 17 sentences; gently softened | ☑ |
| 20 | East of the Sun and West of the Moon | Asbjørnsen & Moe / Lang | 503 | B1 | trimmed (simplified retelling, 17 sentences; gently softened) | ☑ |
| 21 | The Twelve Dancing Princesses | Brothers Grimm / Lang | 540 | A2 | whole (simplified retelling, 17 sentences; gently softened) — in Lang's Red Fairy Book (#540), not the Blue | ☑ |
| 22 | A Christmas Carol (Stave 1) | Charles Dickens (1870) | 46 | B1 | Stave 1 ("Marley's Ghost"), simplified retelling, 17 sentences | ☑ |
| 23 | Alice's Adventures in Wonderland (Ch. 1) | Lewis Carroll (1898) | 11 | A2 | "Down the Rabbit-Hole" | ☑ |
| 24 | The Gift of the Magi collection — pick 1 more | O. Henry (1910) | 2776 | A2/B1 | one story from *The Four Million* | ☐ |
| 25 | The Bet | Anton Chekhov (1904) | 13415 | B1 | whole (simplified retelling, 17 sentences; heavily trimmed) | ☑ |
| 26 | The Lady with the Dog | Anton Chekhov (1904) | 13415 | B2 | Part I — the meeting at Yalta, simplified retelling, 17 sentences | ☑ |

### Tier 2 — novel openings / self-contained scenes (excerpt one chapter or scene)

| # | Title | Author (d.) | PG# | Level | Excerpt scope | Status |
|--|--|--|--|--|--|--|
| 27 | Pride and Prejudice | Jane Austen (1817) | 1342 | B1 | Ch. 1 — the Bennets discuss Mr. Bingley (simplified retelling, 17 sentences) | ☑ |
| 28 | Pride and Prejudice | Jane Austen (1817) | 1342 | B2 | Ch. 34 — Darcy's first proposal (simplified retelling, 17 sentences) | ☑ |
| 29 | Sense and Sensibility | Jane Austen (1817) | 21839 | B1 | Ch. 1 — the Dashwoods lose Norland (simplified retelling, 17 sentences) | ☑ |
| 30 | Emma | Jane Austen (1817) | 158 | B1 | Ch. 1 — "handsome, clever, and rich" (simplified retelling, 17 sentences) | ☑ |
| 31 | Persuasion | Jane Austen (1817) | 105 | B2 | Ch. 4 — Anne and Wentworth's broken engagement, eight years on (simplified retelling, 17 sentences) | ☑ |
| 32 | Northanger Abbey | Jane Austen (1817) | 121 | B1 | Ch. 1 — "no one would have supposed her born to be a heroine" | ☐ |
| 33 | Jane Eyre | Charlotte Brontë (1855) | 1260 | B2 | Ch. 1 — the window seat and John Reed (simplified retelling, 17 sentences) | ☑ |
| 34 | Jane Eyre | Charlotte Brontë (1855) | 1260 | B2 | Ch. 5 — arrival at Lowood | ☐ |
| 35 | Wuthering Heights | Emily Brontë (1848) | 768 | B2 | Ch. 3 — Lockwood's dream at the window, simplified retelling, 17 sentences | ☑ |
| 36 | Agnes Grey | Anne Brontë (1849) | 767 | B1 | Ch. 1 ("The Parsonage") — the lost savings, and Agnes resolves to be a governess (simplified retelling, 17 sentences) | ☑ |
| 37 | The Tenant of Wildfell Hall | Anne Brontë (1849) | 969 | B2 | Ch. 1 ("A Discovery") — the parish gossips about the widow at Wildfell (simplified retelling, 17 sentences) | ☑ |
| 38 | Villette | Charlotte Brontë (1855) | 21181 | B2 | Ch. 1 ("Bretton") — the calm house, and the motherless child Polly (simplified retelling, 17 sentences) | ☑ |
| 39 | Little Women | Louisa May Alcott (1888) | 37106 | A2 | Ch. 1 — "Christmas won't be Christmas" (simplified retelling, 17 sentences) | ☑ |
| 40 | Little Women | Louisa May Alcott (1888) | 37106 | B1 | Ch. 8 ("Jo Meets Apollyon") — the burned manuscript and the ice (simplified retelling, 17 sentences) | ☑ |
| 41 | An Old-Fashioned Girl | Louisa May Alcott (1888) | 2787 | A2 | Ch. 1 ("Polly Arrives") — plain Polly meets the fashionable Shaws (simplified retelling, 17 sentences) | ☑ |
| 42 | Rose in Bloom | Louisa May Alcott (1888) | 2804 | B1 | Ch. 1 — Rose comes home | ☐ |
| 43 | Anne of Green Gables | L. M. Montgomery (1942) | 45 | A2 | Ch. 2 — Matthew at the station (simplified retelling, 17 sentences) | ☑ |
| 44 | Anne of Green Gables | L. M. Montgomery (1942) | 45 | B1 | Ch. 3 — Marilla is astonished ("Anne with an E"; simplified retelling, 17 sentences) | ☑ |
| 45 | The Blue Castle | L. M. Montgomery (1942) | 67979 | B1 | Ch. 1 — Valancy's rainy birthday morning (simplified retelling, 17 sentences) | ☑ |
| 46 | Emily of New Moon | L. M. Montgomery (1942) | 61236 | B1 | Ch. 1 — "the house in the hollow" | ☐ |
| 47 | The Story Girl | L. M. Montgomery (1942) | 26273 | B1 | Ch. 1 — the orchard | ☐ |
| 48 | Rilla of Ingleside | L. M. Montgomery (1942) | 26265 | B2 | Ch. 1 — Glen "Notes" and gossip | ☐ |
| 49 | The Secret Garden | Frances Hodgson Burnett (1924) | 113 | A2 | Ch. 1 — "There is no one left" (simplified retelling, 17 sentences) | ☑ |
| 50 | The Secret Garden | Frances Hodgson Burnett (1924) | 113 | B1 | Ch. 4 — Martha; the robin | ☐ |
| 51 | A Little Princess | Frances Hodgson Burnett (1924) | 146 | A2 | Ch. 1 — Sara arrives at the seminary (simplified retelling, 17 sentences) | ☑ |
| 52 | A Little Princess | Frances Hodgson Burnett (1924) | 146 | B1 | Ch. 7 ("The Diamond Mines Again") — the ruin, and Sara made a servant in the attic (simplified retelling, 17 sentences) | ☑ |
| 53 | Cranford | Elizabeth Gaskell (1865) | 394 | B1 | Ch. 1 — "in possession of the Amazons" (simplified retelling, 17 sentences) | ☑ |
| 54 | The Enchanted April | Elizabeth von Arnim (1941) | 16389 | B1 | Ch. 1 — the advertisement, and Mrs. Wilkins' bold suggestion (simplified retelling, 17 sentences) | ☑ |
| 55 | Elizabeth and Her German Garden | Elizabeth von Arnim (1941) | — | B1 | opening — the garden in May | ☐ |
| 56 | A Room with a View | E. M. Forster (1970) — US PD (1908) | 2641 | B2 | Ch. 1 — "The Bertolini" | ☐ SKIP: Forster d. 1970, not PD in life+70 countries (incl. Korea) until 2041 — fails sourcing rule #1; do not build until cleared |
| 57 | Rebecca of Sunnybrook Farm | Kate Douglas Wiggin (1923) | 498 | A2 | Ch. 1 — the stagecoach ride to Riverboro (simplified retelling, 17 sentences) | ☑ |
| 58 | Pollyanna | Eleanor H. Porter (1920) | 1450 | A1 | Ch. 1 ("Miss Polly") — the letter, and Miss Polly's duty (simplified retelling, 17 sentences; re-levelled A2 → A1 to fill the thin A1 band) | ☑ |
| 59 | Daddy-Long-Legs | Jean Webster (1916) | 157 | B1 | Ch. 1 — "Blue Wednesday" (simplified retelling, 17 sentences) | ☑ |
| 60 | Anne of Avonlea | L. M. Montgomery (1942) | — | B1 | Ch. 1 — Anne, now a teacher | ☐ |

### Tier 3 — advanced / longer (B1–B2, later)

| # | Title | Author (d.) | PG# | Level | Excerpt scope | Status |
|--|--|--|--|--|--|--|
| 61 | Middlemarch | George Eliot (1880) | 145 | B2 | "Prelude" + Ch. 1 — Dorothea (simplified retelling, 17 sentences) | ☑ |
| 62 | Silas Marner | George Eliot (1880) | 550 | B1 | Ch. 12 — the child at the hearth (simplified retelling, 17 sentences; gently softened) | ☑ |
| 63 | The Mill on the Floss | George Eliot (1880) | 6688 | B2 | Bk 1 Ch. 5 — Tom comes home (simplified retelling, 17 sentences; gently softened) | ☑ |
| 64 | North and South | Elizabeth Gaskell (1865) | 4276 | B2 | Ch. 1 — "Haste to the Wedding" (simplified retelling, 17 sentences) | ☑ |
| 65 | Wives and Daughters | Elizabeth Gaskell (1865) | 4274 | B2 | Ch. 1 ("The Dawn of a Gala Day") — Molly's overwhelming first day at the Towers (simplified retelling, 17 sentences) | ☑ |
| 66 | The Age of Innocence | Edith Wharton (1937) | 541 | B2 | Ch. 1 — the opera (simplified retelling, 17 sentences) | ☑ |
| 67 | The House of Mirth | Edith Wharton (1937) | 284 | B2 | Bk 1 Ch. 1 — Lily Bart at the station (simplified retelling, 17 sentences) | ☑ |
| 68 | Ethan Frome | Edith Wharton (1937) | 4517 | B1 | the prologue — the narrator sees Ethan (simplified retelling, 17 sentences; kept as the narrator's frame) | ☑ |
| 69 | The Awakening | Kate Chopin (1904) | 160 | B2 | Ch. 1 — Grand Isle (simplified retelling, 17 sentences) | ☑ |
| 70 | The Country of the Pointed Firs | Sarah Orne Jewett (1909) | 367 | B2 | Ch. 1–2 — arriving at Dunnet Landing (simplified retelling, 17 sentences) | ☑ |
| 71 | Frankenstein | Mary Shelley (1851) | 84 | B2 | Letter 1 — Walton to his sister (simplified retelling, 17 sentences; kept as Walton's letter) | ☑ |
| 72 | The Mysteries of Udolpho | Ann Radcliffe (1823) | 3268 | B2 | Vol. 1 Ch. 1 — La Vallée (simplified retelling, 17 sentences) | ☑ |
| 73 | Sonnets from the Portuguese | Elizabeth Barrett Browning (1861) | — | B2 | Sonnet 43 — "How do I love thee" | ☐ |

---

## Notes

- Titles without a `PG#` just need a 30-second lookup on gutenberg.org — left
  blank rather than guessed.
- Tiers are by adaptation effort, not literary difficulty: Tier 1 works fit a
  lesson almost as-is; Tier 2/3 need a scene chosen and trimmed.
- **Live now (60):** The Gift of the Magi (row 4), The Last Leaf (row 5),
  The Story of an Hour (row 2), The Bet (row 25), The Awakening Ch. 1
  (row 69), The House of Mirth Bk 1 Ch. 1 (row 67), Ethan Frome prologue
  (row 68), The Country of the Pointed Firs Ch. 1–2 (row 70), Cranford
  Ch. 1 (row 53), North and South Ch. 1 (row 64), Silas Marner Ch. 12
  (row 62), A Little Princess Ch. 1 (row 51), East of the Sun and West of
  the Moon (row 20), The Twelve
  Dancing Princesses (row 21), Anne of Green Gables Ch. 2 (row 43), Anne of
  Green Gables Ch. 3 (row 44), Little Women Ch. 1 (row 39), Middlemarch
  (row 61), The Yellow Wallpaper (row 1), The Ugly Duckling (row 16),
  Cinderella (row 10), Snow White (row 12), Beauty
  and the Beast (row 19), Rapunzel (row 13), Pride and Prejudice Ch. 1
  (row 27), Pride and Prejudice Ch. 34 (row 28), Sense and Sensibility
  Ch. 1 (row 29), Emma (row 30), Jane Eyre Ch. 1 (row 33), Frankenstein
  Letter 1 (row 71), The Age of Innocence Ch. 1 (row 66), The Selfish
  Giant (row 8), The Nightingale and the Rose (row 9), The Little Mermaid
  (row 15), The Necklace (row 6), A Christmas Carol Stave 1 (row 22), The
  Lady with the Dog Part I (row 26), Wuthering Heights Ch. 3 (row 35), The
  Secret Garden Ch. 1 (row 49), The Emperor's New Clothes (row 17),
  Alice's Adventures in Wonderland Ch. 1 (row 23), The Happy Prince
  (row 7), The Princess and the Pea (row 18), Little Red Riding Hood
  (row 11), The Frog Prince (row 14), The Blue Castle Ch. 1 (row 45),
  Daddy-Long-Legs Ch. 1 (row 59), The Mysteries of Udolpho Vol. 1 Ch. 1
  (row 72), The Mill on the Floss Bk 1 Ch. 5 (row 63), Pollyanna Ch. 1
  (row 58), Rebecca of Sunnybrook Farm Ch. 1 (row 57), An Old-Fashioned
  Girl Ch. 1 (row 41), Agnes Grey Ch. 1 (row 36), The Enchanted April
  Ch. 1 (row 54), Little Women Ch. 8 (row 40), The Tenant of Wildfell Hall
  Ch. 1 (row 37), Wives and Daughters Ch. 1 (row 65), Villette Ch. 1
  (row 38), Persuasion Ch. 4 (row 31), A Little Princess Ch. 7 (row 52).
  Follow their shape in
  `src/lib/data/lessons.ts`. Every live
  lesson also has pre-generated narration audio — after adding one, run
  `npm run audio -- --lesson <slug>` and commit `public/audio/` +
  `src/lib/audio-manifest.json` (see `scripts/README.md`).
- Levels on the shelf now: A1 ×7 (Cinderella, The Selfish Giant, The
  Emperor's New Clothes, The Princess and the Pea, Little Red Riding Hood,
  The Frog Prince, Pollyanna Ch. 1), A2 ×15 (Story of an Hour, Anne Ch. 2,
  Little Women, Ugly Duckling, The Secret Garden, Alice in Wonderland
  Ch. 1, The Happy Prince, Snow White, The Last Leaf, Beauty and the
  Beast, Rapunzel, The Twelve Dancing Princesses, A Little Princess Ch. 1,
  Rebecca of Sunnybrook Farm Ch. 1, An Old-Fashioned Girl Ch. 1), B1 ×21
  (Gift of the Magi, Pride and Prejudice Ch. 1, The Necklace, A Christmas
  Carol, Anne of Green Gables Ch. 3, Sense and Sensibility Ch. 1, The
  Yellow Wallpaper, Emma, The Nightingale and the Rose, The Little Mermaid,
  Ethan Frome prologue, East of the Sun and West of the Moon, The Bet,
  Cranford Ch. 1, Silas Marner Ch. 12, The Blue Castle Ch. 1,
  Daddy-Long-Legs Ch. 1, Agnes Grey Ch. 1, The Enchanted April Ch. 1,
  Little Women Ch. 8, A Little Princess Ch. 7), B2 ×17 (Jane Eyre, The
  Lady with the Dog, Wuthering
  Heights, Pride and Prejudice Ch. 34, Frankenstein Letter 1, The Age of
  Innocence Ch. 1, Middlemarch, The Awakening Ch. 1, The House of Mirth
  Bk 1 Ch. 1, The Country of the Pointed Firs Ch. 1–2, North and South
  Ch. 1, The Mysteries of Udolpho Vol. 1 Ch. 1, The Mill on the Floss Bk 1
  Ch. 5, The Tenant of Wildfell Hall Ch. 1, Wives and Daughters Ch. 1,
  Villette Ch. 1, Persuasion Ch. 4). Bands are now A1 ×7, A2 ×15, B1 ×21,
  B2 ×17 — A1 is still the thinnest.
  Within A2, Alice in Wonderland is still the only entry that is neither a
  fairy tale nor gentle domestic fiction.
- Good next lessons to build: **Anne of Avonlea Ch. 1** (row 60, B1 —
  Anne, now a teacher), **Northanger Abbey Ch. 1** (row 32, B1 — Austen,
  "born to be a heroine"), **The Story Girl Ch. 1** (row 47, B1 — the
  orchard). A1 (7) is still behind and the backlog has no
  more A1 rows — re-level a gentle A2
  tale down to A1 (e.g.
  The Twelve Dancing Princesses or Rapunzel), or add new A1 rows.
  Note:
  row 56 (A Room with a View) is **not**
  clear to build — Forster died 1970, so it is not public domain in
  life+70 countries (including Korea) until 2041.
