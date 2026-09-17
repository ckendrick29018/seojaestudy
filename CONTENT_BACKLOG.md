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
   life+70 countries (latest author death year: Beatrix Potter, 1943 —
   PD in life+70 countries since 2014).
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
| 3 | A Pair of Silk Stockings | Kate Chopin (1904) | — | A2 | whole (simplified retelling, 17 sentences) | ☑ |
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
| 24 | The Four Million — pick 1 more | O. Henry (1910) | 2776 | A2 | "After Twenty Years" — whole (simplified retelling, 17 sentences); the twist kept intact | ☑ |
| 25 | The Bet | Anton Chekhov (1904) | 13415 | B1 | whole (simplified retelling, 17 sentences; heavily trimmed) | ☑ |
| 26 | The Lady with the Dog | Anton Chekhov (1904) | 13415 | B2 | Part I — the meeting at Yalta, simplified retelling, 17 sentences | ☑ |
| 74 | The Tale of Peter Rabbit | Beatrix Potter (1943) | 14838 | A1 | whole (simplified retelling, 17 sentences; peril kept light) — new A1 row to thicken the thinnest band; Potter has more (Benjamin Bunny #14407, Jemima Puddle-Duck, Mrs. Tiggy-Winkle) | ☑ |
| 75 | The Tale of Mrs. Tiggy-Winkle | Beatrix Potter (1943) | 15137 | A1 | whole (simplified retelling, 17 sentences; no peril — Lucie, the lost handkerchiefs, and the hedgehog washerwoman) | ☑ |
| 76 | The Tale of Benjamin Bunny | Beatrix Potter (1943) | 14407 | A1 | whole (simplified retelling, 17 sentences; sequel to Peter Rabbit — the cat-and-basket peril kept light, the whipping dropped) | ☑ |
| 77 | The Tale of Two Bad Mice | Beatrix Potter (1943) | — | A1 | whole (simplified retelling, 17 sentences; no peril — Tom Thumb & Hunca Munca wreck the doll's house, then make amends) | ☑ |
| 78 | The Elves and the Shoemaker | Brothers Grimm (1863) | 2591 | A1 | whole (simplified retelling, 17 sentences; "Die Wichtelmänner" — the first, kind tale; no softening needed) | ☑ |
| 79 | Thumbelina | Hans Christian Andersen (1875) | 1597 | A2 | trimmed (simplified retelling, 17 sentences; toad → river → field mouse → mole → the rescued swallow → the flower-prince) | ☑ |
| 80 | The Steadfast Tin Soldier | Hans Christian Andersen (1875) | 1597 | A2 | whole (simplified retelling, 17 sentences; ending gently softened — the little tin heart and the dancer's star kept together) | ☑ |
| 81 | The Bremen Town Musicians | Brothers Grimm (1863) | 2591 | A1 | whole (simplified retelling, 18 sentences; "Die Bremer Stadtmusikanten" — donkey, dog, cat, rooster scare off the robbers; no peril to the animals) — new A1 row that is *not* Potter | ☑ |
| 82 | The Cop and the Anthem | O. Henry (1910) | 2776 | A2 | whole (simplified retelling, 18 sentences; Soapy's failed attempts to be jailed for the winter, then the O. Henry twist at the church) — a second *Four Million* pick, adds a crime/irony tone to A2 | ☑ |
| 83 | Sweet Porridge | Brothers Grimm (1863) | 2591 | A1 | whole (simplified retelling, 15 sentences; "Der süße Brei" — the magic pot, the forgotten word, the porridge flood; no peril) — diversifies A1 away from Potter | ☑ |
| 84 | The Golden Goose | Brothers Grimm (1863) | 2591 | A1 | whole (simplified retelling, 18 sentences; "Die goldene Gans" — Simpleton shares his food, the golden goose, the chain of stuck people, the princess who never laughed) — a second non-Potter A1 in this batch | ☑ |
| 85 | The Skylight Room | O. Henry (1910) | 2776 | A2 | whole (simplified retelling, 18 sentences; Miss Leeson's attic room, the star she names Billy Jackson, and the ambulance-doctor twist) — a third *Four Million* pick for A2 | ☑ |
| 86 | Mother Holle | Brothers Grimm (1863) | 2591 | A1 | whole (simplified retelling, 18 sentences; "Frau Holle" — the dropped spindle, the bread and apple tree, the feather-bed snow, gold for the kind girl and pitch for the lazy one; no softening needed) — non-Potter A1 | ☑ |
| 87 | The Golden Key | Brothers Grimm (1863) | 2591 | A1 | whole (simplified retelling, 14 sentences; "Der goldene Schlüssel" — the boy in the snow, the key, the iron box; the tale's famous open ending is kept) — the shortest lesson on the shelf | ☑ |
| 88 | The Fir Tree | Hans Christian Andersen (1875) | 1597 | A2 | trimmed (simplified retelling, 17 sentences; "Grantræet" — the little tree that only ever wants what comes next, then the dark attic; the bleak burning finale is softened to the withered tree and the kept gold star) | ☑ |
| 89 | A White Heron | Sarah Orne Jewett (1909) | — | B2 | trimmed (simplified retelling, 18 sentences; the hunter's ten-dollar offer, Sylvia's dawn climb up the great pine, and her choice to keep the heron's nest a secret) — fresh B2 prose pick | ☑ |
| 91 | The Star Money | Brothers Grimm (1863) | 2591 | A1 | whole (simplified retelling, 17 sentences; "Die Sterntaler" — the orphan girl who gives away her bread and every piece of clothing, then stars fall as silver coins; no softening needed, no peril at all) — non-Potter A1 | ☑ |
| 92 | A Bridegroom for Miss Mole | William E. Griffis (1928) | 67180 | A2 | whole (simplified retelling, 17 sentences; a traditional Korean folktale — a proud mole father asks Sky, Sun, Cloud, and Wind to marry his daughter, each naming something mightier, until Miryek the stone statue names a small mole digging at his feet; no peril, no softening needed) — first Korean-*origin* lesson, `collection: "folktales"` not `"classics"` | ☑ |
| 93 | The Wild Swans | Hans Christian Andersen (1875) | 1597 | A2 | trimmed (simplified retelling, 18 sentences; "De vilde Svaner" — Elisa's eleven brothers turned to swans, the silent nettle-shirt task, and the near witch-trial; the stake is softened to a generic "led away to be punished") — fresh A2 Andersen pick | ☑ |
| 102 | The Snow Queen | Hans Christian Andersen (1875) | 1597 | A2 | whole tale compressed (simplified retelling, 17 sentences; "Sneedronningen" — the goblin's shattering mirror, the splinter of glass that turns Kai's heart cold, the Snow Queen's sleigh, and Gerda's search through river, forest, and reindeer country to reach the palace of ice, where her warm tears melt the glass and bring Kai home; the seven-part original is condensed to Gerda's key steps) — the Andersen companion to Fir Tree / Wild Swans flagged in "Good next lessons to build" | ☑ |
| 94 | The Unmannerly Tiger | William E. Griffis (1928) | 67180 | A2 | whole (simplified retelling, 18 sentences; a traditional Korean folktale — the boastful tiger "Mountain Uncle," the priest he threatens after being freed from a hunters' pit, and the toad who tricks him back into it; the original ending — the tiger clawing himself to death — is softened to the tiger being freed at dawn on the promise of good behavior) — second Korean-*origin* lesson, `collection: "folktales"` | ☑ |
| 95 | Tokgabi and the Kind Maid | William E. Griffis (1928) | 67180 | A1 | original narrative built around "Tokgabi and His Pranks" (simplified retelling, 16 sentences; the source chapter describes the mischievous house-spirit Tokgabi's traits and customs rather than telling one plotted story, so this is an original tale built around them — a hardworking kitchen maid secretly rewarded, a lazy one pranked into working, and the real Korean folk custom of red clothing, silver, and spotless white keeping his mischief away) — third Korean-*origin* lesson, `collection: "folktales"`; new non-Potter A1 | ☑ |
| 96 | The Sneezing Colossus | William E. Griffis (1928) | 67180 | A1 | whole (simplified retelling, 14 sentences; a traditional Korean folktale — a lazy farmer named Kim is sent up the mountain by his wife to find food, climbs a giant stone Buddha statue to reach a ripe pear near its nose, and is launched into the air by a tremendous sneeze; no peril, no softening needed) — fourth Korean-*origin* lesson, `collection: "folktales"` | ☑ |
| 97 | Cat-kin and the Queen Mother | William E. Griffis (1928) | 67180 | A2 | opening scene, whole (simplified retelling, 17 sentences; a traditional Korean folktale — a girl named for a pussy-willow catkin calls the earth-spirit beneath a persimmon tree and is invited into the sky by the Western Heavenly Queen Mother; the source text cuts off mid-scene, so the closing sentence — Cat-kin climbing into the jade chariot and villagers still seeing a new star by the moon — is an original conclusion in the same spirit) — fifth Korean-*origin* lesson, `collection: "folktales"` | ☑ |
| 98 | Prince Sandalwood, the Father of Korea | William E. Griffis (1928) | 67180 | A2 | whole (simplified retelling, 17 sentences; Korea's own founding myth — a bear and a tiger both pray to become human, the tiger gives up after eleven days but the bear endures the full twenty-one eating only garlic in a dark cave, becomes a woman, marries the sky-prince Whanung, and their son Tan-gun is hailed by the people as the first king of Korea) — sixth Korean-*origin* lesson, `collection: "folktales"`; Ch. 4 of the Griffis book, well within the confirmed-reachable range | ☑ |
| 100 | The Rabbit's Eyes | William E. Griffis (1928) | 67180 | A2 | whole (simplified retelling, 17 sentences; a traditional Korean trickster tale — the Dragon King is choked by a fisherman's hook, his doctor turtle is sent to fetch a rabbit's eyes for the cure, and the clever rabbit talks his way back to shore by claiming his real eyes are precious crystal ones left safely at home) — seventh Korean-*origin* lesson, `collection: "folktales"`; Ch. 5 of the Griffis book, within the confirmed-reachable range | ☑ |
| 103 | East Light and the Bridge of Fishes | William E. Griffis (1928) | 67180 | A2 | the escape scene only (simplified retelling, 18 sentences; a founding legend of ancient Korea — East Light, a gifted young archer, grows into a threat the jealous king wants gone; he flees south with three companions to an impassable river, and when he cries out to the sky, hundreds of fish rise and form a bridge with their backs, letting the four men cross before the king's horsemen arrive) — eighth Korean-*origin* lesson, `collection: "folktales"`; Ch. 3 of the Griffis book | ☑ |
| 104 | Topknots and Crockery Hats | William E. Griffis (1928) | 67180 | A2 | whole (simplified retelling, 18 sentences; an etiological legend — the sage Kija leads five thousand followers east to found Cho-sen, orders the topknot law to make men look dignified, then — when men only use it to grab each other in fights — invents giant baked-clay hats so quarrels crack pottery instead of skulls, turning street fights into silent contests of ugly faces; ends on why Korea is remembered as "the land of hats") — ninth Korean-*origin* lesson, `collection: "folktales"`; Ch. 6 of the Griffis book | ☑ |
| 105 | Fancha and the Magpie | William E. Griffis (1928) | 67180 | A2 | whole (simplified retelling, 18 sentences; a Manchu dynastic-origin legend framed as a story told to a Chinese emperor's court — three heavenly sisters bathe in a lake below the Ever White Mountains, a sacred magpie drops a red fruit that lets the youngest conceive a heaven-born son, and generations later his descendant Fancha escapes pursuers in a forest when a magpie lands on his head and they mistake him for a dead stump) — tenth Korean-*origin* lesson, `collection: "folktales"`; Ch. 7 of the Griffis book | ☑ |
| 106 | Old White Whiskers and Mr. Bunny | William E. Griffis (1928) | 67180 | A2 | whole (simplified retelling, 18 sentences; a trickster tale — the proud, man-eating tiger Old White Whiskers meets a clever rabbit on the ice, who tricks him into lying still inside a ring of dry grass, then sets it alight; the tiger barely escapes with singed fur and a burned paw and loses the other tigers' respect) — eleventh Korean-*origin* lesson, `collection: "folktales"`; Ch. 10 of the Griffis book | ☑ |
| 107 | The King of the Flowers | William E. Griffis (1928) | 67180 | A2 | the flower-court fable only, whole (simplified retelling, 18 sentences; King Peony neglects his ministers for the flashy Cinnamon Rose until a ragged old flower, Old Man, warns him that a king who forgets his duties for beauty alone will watch his garden fall — the king takes the lesson to heart and rules wisely again; Griffis's human framing, where the scholar Sul Chong tells this story to a real king, is left out to keep the tale self-contained) — twelfth Korean-*origin* lesson, `collection: "folktales"`; Ch. 11 of the Griffis book | ☑ |
| 108 | Why Cats and Dogs Don't Get Along | William E. Griffis (1928) | 67180 | A1 | whole (simplified retelling, 18 sentences; an original title for Griffis's "Tokgabi's Menagerie" — a mountain spirit's magic stone keeps a kind old man's wine bottle full until it vanishes; his cat and dog track it down with the mice's help, but lose it in the river when children's laughter makes the cat laugh too, dropping the stone forever — the source's pony-kick injury and near-drowning peril are left out) — thirteenth Korean-*origin* lesson, `collection: "folktales"`; Ch. 12 of the Griffis book; a third non-Potter A1, diversifying the folktales shelf's level spread | ☑ |
| 109 | Hans in Luck | Brothers Grimm (1863) | 2591 | A1 | whole (simplified retelling, 18 sentences; "Hans im Glück" — seven trades, each one worse than the last, ending with Hans losing everything and feeling luckier than ever; no peril, no softening needed) — a fifth non-Potter A1, and the next kind Grimm tale flagged in "Good next lessons to build" | ☑ |
| 110 | The Brief Début of Tildy | O. Henry (1910) | 2776 | A2 | whole (simplified retelling, 18 sentences; the closing story of *The Four Million* — the overlooked waitress Tildy, a customer's drunken kiss she mistakes for real romance, and his sober apology three days later; gently handled, closing on Aileen's quiet kindness) — a fourth *Four Million* pick, the next non-Andersen A2 flagged in "Good next lessons to build" | ☑ |

### Tier 2 — novel openings / self-contained scenes (excerpt one chapter or scene)

| # | Title | Author (d.) | PG# | Level | Excerpt scope | Status |
|--|--|--|--|--|--|--|
| 27 | Pride and Prejudice | Jane Austen (1817) | 1342 | B1 | Ch. 1 — the Bennets discuss Mr. Bingley (simplified retelling, 17 sentences) | ☑ |
| 28 | Pride and Prejudice | Jane Austen (1817) | 1342 | B2 | Ch. 34 — Darcy's first proposal (simplified retelling, 17 sentences) | ☑ |
| 29 | Sense and Sensibility | Jane Austen (1817) | 21839 | B1 | Ch. 1 — the Dashwoods lose Norland (simplified retelling, 17 sentences) | ☑ |
| 30 | Emma | Jane Austen (1817) | 158 | B1 | Ch. 1 — "handsome, clever, and rich" (simplified retelling, 17 sentences) | ☑ |
| 31 | Persuasion | Jane Austen (1817) | 105 | B2 | Ch. 4 — Anne and Wentworth's broken engagement, eight years on (simplified retelling, 17 sentences) | ☑ |
| 32 | Northanger Abbey | Jane Austen (1817) | 121 | B1 | Ch. 1 — "no one would have supposed her born to be a heroine" (simplified retelling, 17 sentences) | ☑ |
| 33 | Jane Eyre | Charlotte Brontë (1855) | 1260 | B2 | Ch. 1 — the window seat and John Reed (simplified retelling, 17 sentences) | ☑ |
| 34 | Jane Eyre | Charlotte Brontë (1855) | 1260 | B2 | Ch. 5 — the fifty-mile ride, the burnt porridge, and meeting Helen Burns (simplified retelling, 18 sentences) | ☑ |
| 35 | Wuthering Heights | Emily Brontë (1848) | 768 | B2 | Ch. 3 — Lockwood's dream at the window, simplified retelling, 17 sentences | ☑ |
| 36 | Agnes Grey | Anne Brontë (1849) | 767 | B1 | Ch. 1 ("The Parsonage") — the lost savings, and Agnes resolves to be a governess (simplified retelling, 17 sentences) | ☑ |
| 37 | The Tenant of Wildfell Hall | Anne Brontë (1849) | 969 | B2 | Ch. 1 ("A Discovery") — the parish gossips about the widow at Wildfell (simplified retelling, 17 sentences) | ☑ |
| 38 | Villette | Charlotte Brontë (1855) | 21181 | B2 | Ch. 1 ("Bretton") — the calm house, and the motherless child Polly (simplified retelling, 17 sentences) | ☑ |
| 39 | Little Women | Louisa May Alcott (1888) | 37106 | A2 | Ch. 1 — "Christmas won't be Christmas" (simplified retelling, 17 sentences) | ☑ |
| 40 | Little Women | Louisa May Alcott (1888) | 37106 | B1 | Ch. 8 ("Jo Meets Apollyon") — the burned manuscript and the ice (simplified retelling, 17 sentences) | ☑ |
| 41 | An Old-Fashioned Girl | Louisa May Alcott (1888) | 2787 | A2 | Ch. 1 ("Polly Arrives") — plain Polly meets the fashionable Shaws (simplified retelling, 17 sentences) | ☑ |
| 42 | Rose in Bloom | Louisa May Alcott (1888) | 2804 | B1 | Ch. 1 — Rose comes home (simplified retelling, 17 sentences) | ☑ |
| 43 | Anne of Green Gables | L. M. Montgomery (1942) | 45 | A2 | Ch. 2 — Matthew at the station (simplified retelling, 17 sentences) | ☑ |
| 44 | Anne of Green Gables | L. M. Montgomery (1942) | 45 | B1 | Ch. 3 — Marilla is astonished ("Anne with an E"; simplified retelling, 17 sentences) | ☑ |
| 45 | The Blue Castle | L. M. Montgomery (1942) | 67979 | B1 | Ch. 1 — Valancy's rainy birthday morning (simplified retelling, 17 sentences) | ☑ |
| 46 | Emily of New Moon | L. M. Montgomery (1942) | 61236 | B2 | Ch. 1 — the house in the hollow, "the flash," and Ellen Greene's blunt news (simplified retelling, 19 sentences; re-levelled B1 → B2, as B1 is full) | ☑ |
| 47 | The Story Girl | L. M. Montgomery (1942) | 5342 | B1 | Ch. 1 — the orchard (simplified retelling, 17 sentences) | ☑ |
| 48 | Rilla of Ingleside | L. M. Montgomery (1942) | 26265 | B2 | Ch. 1 — the veranda at Ingleside, Rilla longing for her first dance, and the far-off news from Sarajevo (simplified retelling, 19 sentences) | ☑ |
| 49 | The Secret Garden | Frances Hodgson Burnett (1924) | 113 | A2 | Ch. 1 — "There is no one left" (simplified retelling, 17 sentences) | ☑ |
| 50 | The Secret Garden | Frances Hodgson Burnett (1924) | 113 | B1 | Ch. 4 — Martha; the robin (built as "The Secret Garden: Martha" — Martha's family, Dickon, and the story of the locked garden; the robin itself deferred to a later excerpt; simplified retelling, 17 sentences) | ☑ |
| 51 | A Little Princess | Frances Hodgson Burnett (1924) | 146 | A2 | Ch. 1 — Sara arrives at the seminary (simplified retelling, 17 sentences) | ☑ |
| 52 | A Little Princess | Frances Hodgson Burnett (1924) | 146 | B1 | Ch. 7 ("The Diamond Mines Again") — the ruin, and Sara made a servant in the attic (simplified retelling, 17 sentences) | ☑ |
| 53 | Cranford | Elizabeth Gaskell (1865) | 394 | B1 | Ch. 1 — "in possession of the Amazons" (simplified retelling, 17 sentences) | ☑ |
| 54 | The Enchanted April | Elizabeth von Arnim (1941) | 16389 | B1 | Ch. 1 — the advertisement, and Mrs. Wilkins' bold suggestion (simplified retelling, 17 sentences) | ☑ |
| 55 | Elizabeth and Her German Garden | Elizabeth von Arnim (1941) | 1327 | B1 | opening entry — the wild garden, the gray stone house, and the Man of Wrath's visit (simplified retelling, 17 sentences) | ☑ |
| 56 | A Room with a View | E. M. Forster (1970) — US PD (1908) | 2641 | B2 | Ch. 1 — "The Bertolini" | ☐ SKIP: Forster d. 1970, not PD in life+70 countries (incl. Korea) until 2041 — fails sourcing rule #1; do not build until cleared |
| 57 | Rebecca of Sunnybrook Farm | Kate Douglas Wiggin (1923) | 498 | A2 | Ch. 1 — the stagecoach ride to Riverboro (simplified retelling, 17 sentences) | ☑ |
| 58 | Pollyanna | Eleanor H. Porter (1920) | 1450 | A1 | Ch. 1 ("Miss Polly") — the letter, and Miss Polly's duty (simplified retelling, 17 sentences; re-levelled A2 → A1 to fill the thin A1 band) | ☑ |
| 59 | Daddy-Long-Legs | Jean Webster (1916) | 157 | B1 | Ch. 1 — "Blue Wednesday" (simplified retelling, 17 sentences) | ☑ |
| 60 | Anne of Avonlea | L. M. Montgomery (1942) | 47 | B1 | Ch. 1 ("An Irate Neighbor") — Anne, now a teacher, quarrels with the new neighbour Mr. Harrison over the Jersey cow (simplified retelling, 17 sentences) | ☑ |

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
| 90 | The Great Gatsby | F. Scott Fitzgerald (1940) | 64317 | B2 | close of Ch. 1 — the dinner at the Buchanans', then Nick sees Gatsby reaching toward the green light across the bay (simplified retelling, 18 sentences) — built on direct reader demand; PD in the US since 2021 and in life+70 countries since 2011 | ☑ |
| 99 | The Lifted Veil | George Eliot (1880) | 2165 | B2 | opening of Ch. 1 — Latimer's premonition of his own death, his visions of the future, and his involuntary insight into other people's thoughts (simplified retelling, 17 sentences) — the fresh B2 pick flagged in "Good next lessons to build" | ☑ |
| 101 | Summer | Edith Wharton (1937) | 166 | B2 | Ch. 1 — Charity Royall, the bored village librarian of North Dormer, and the stranger (an architect) who walks in one June afternoon asking about old local houses (simplified retelling, 17 sentences) — a fourth Wharton pick; a rural New England village novel, a tonal companion to Ethan Frome and distinct from the two Old-New-York picks (Age of Innocence, House of Mirth) | ☑ |
| 111 | The Reef | Edith Wharton (1937) | 283 | B2 | Ch. 1 — the diplomat George Darrow, disappointed by Anna Leath's second vague telegram, meets Sophy Viner on the windy pier at Dover and impulsively escorts her to Paris instead (simplified retelling, 18 sentences) — a fifth Wharton pick, the "good next lessons" B2 flagged | ☑ |
| 112 | The Tell-Tale Heart | Edgar Allan Poe (1849) | 2148 | B2 | whole (simplified retelling, 15 sentences; violence kept implicit, not graphic) — first Poe on the shelf, opens up gothic horror as its own tone alongside the existing ghost-story/dark-Gothic picks (A Christmas Carol, Frankenstein, Wuthering Heights) | ☑ |
| 113 | A Scandal in Bohemia | Arthur Conan Doyle (1930) | 1661 | B2 | whole (simplified retelling, 18 sentences; the King's photograph, the fire-alarm trick, Irene Adler outwitting Holmes) — first Sherlock Holmes story on the shelf; opens up the "Crime & mystery" category flagged below | ☑ |
| 114 | The Cask of Amontillado | Edgar Allan Poe (1849) | 1063 | B2 | whole (simplified retelling, 15 sentences; the immurement is kept but Fortunato's suffering is not dwelt on — his voice simply fades into silence) — a second Poe pick | ☑ |
| 115 | The Red-Headed League | Arthur Conan Doyle (1930) | 1661 | B2 | whole (simplified retelling, 18 sentences; the absurd copying job, the sign that reads "dissolved," and the bank-vault tunnel underneath) — a second Sherlock Holmes story | ☑ |
| 116 | The Celebrated Jumping Frog of Calaveras County | Mark Twain (1910) | 3189 | B1 | whole (simplified retelling, 17 sentences; trimmed of the framing narrator's digressions to focus on Smiley's bet and the stranger's trick with the frog) — first Twain fiction on the shelf | ☑ |
| 117 | Dr. Heidegger's Experiment | Nathaniel Hawthorne (1864) | 508 | B1 | whole (simplified retelling, 17 sentences; the four friends briefly made young again by a magic elixir, and what they choose to do once its effect fades) — first Hawthorne on the shelf | ☑ |

---

## Notes

- Titles without a `PG#` just need a 30-second lookup on gutenberg.org — left
  blank rather than guessed.
- Tiers are by adaptation effort, not literary difficulty: Tier 1 works fit a
  lesson almost as-is; Tier 2/3 need a scene chosen and trimmed.
- **Live now (134 — 104 classics + 22 folktales + 8 biographies; plus 5
  Aesop's fables on the plain Library list, `topic: "Fables"`, no
  `collection`):** Four new lessons are the newest additions (2026-09-17),
  directly fulfilling two "Good next lessons to build" picks below plus two
  fresh Korean folktale originals: **The Golden Bird** (A1, classics) —
  Brothers Grimm's "Der goldene Vogel" (PG#2591), the fox who helps a kind
  youngest son past two jealous, greedy older brothers to win a golden bird,
  a golden horse, and a princess, ending on the fox transforming once
  treated kindly (the tale's darker turn — the brothers' betrayal and the
  fox's request to be killed — is left out); **The Custom of the Country**
  (B2, classics) — the opening chapter of Edith Wharton's novel (PG#11052,
  her sixth pick on the shelf), Undine Spragg's demand and her father's
  quiet, worried compliance; **The Old Man with the Lump** (B1, folktales) —
  혹부리 영감 (Hokburi Yeonggam), the classic tale of two old men, a lump each,
  and the goblins who reward kindness and punish greed; and **The Snail
  Bride** (B1, folktales) — 우렁각시 (Ureong Gaksi), told with the gentler
  traditional ending where the farmer and the snail-bride outwit the greedy
  magistrate and stay together. Before that: two more biographies and two more Korean-*origin*
  folktale originals are the newest additions (2026-09-16). Biographies:
  *Narrative of the Life of Frederick Douglass*, retold as "Learning to
  Read" (Mrs. Auld teaching him the alphabet, Mr. Auld forbidding it, and
  Douglass secretly teaching himself by trading bread for lessons and
  copying letters from shipyard timbers) and Elizabeth Gaskell's *The Life
  of Charlotte Brontë*, retold as "The Twelve Soldiers" (the box of wooden
  toy soldiers that sparked the Brontë children's invented kingdoms of
  Angria and Gondal, and the throughline to Jane Eyre). Folktales, both
  `targetLanguage: "ko"` originals needing no English PD source: Janghwa
  and Hongryeon (장화홍련전, the classic ghost story of two wronged sisters,
  softened per the app's convention) and Hong Gildong-jeon (홍길동전, the
  opening of Korea's first vernacular novel — a talented but low-status son
  who resolves to carve out his own destiny). Before that, an earlier
  same-day batch had gone undocumented here until this pass: two more
  biographies, Mark Twain's *Life on the Mississippi* and Marie Curie's
  *Pierre Curie*; two more classics, row 116 The Celebrated Jumping Frog of
  Calaveras County (Twain's first fiction on the shelf) and row 117 Dr.
  Heidegger's Experiment (Hawthorne's first); and two more Korean-*origin*
  folktale originals, Kongjwi and Patjwi and Sim Cheong (see the folktales
  note below). Before that: The Cask
  of Amontillado (row 114, classics — Poe's second story: Montresor lures
  Fortunato into the catacombs with a cask of rare wine and walls him up
  alive, his voice fading to silence) and The Red-Headed League (row 115,
  classics — a second Sherlock Holmes story: the absurd encyclopedia-copying
  job that turns out to be cover for a bank-vault tunnel). Before that,
  Booker T. Washington's *Up
  From Slavery* (his childhood in a slave cabin, teaching himself the
  alphabet from a Webster's speller, and giving himself the surname
  "Washington" on his first day of school) and Charles Darwin's own
  autobiography, retold as "The Boy Who Loved Beetles" (his father's famous
  scolding, and the day he popped a beetle in his mouth to free a hand for a
  third one), plus Seonnyeo and the Woodcutter (a
  celestial fairy's robe is hidden by a lonely woodcutter, and — in the
  gentler of the tale's traditional endings — he is reunited with his wife
  and children in the sky via the water-bucket lowered each night from
  heaven) and The Sun and the Moon (a brother and sister escape a
  tiger disguised as their mother by climbing to heaven on a golden rope,
  becoming the sun and moon; the traditional version's graphic harm to the
  mother is left offstage, per the app's softening convention). Before
  that: The Reef (row 111,
  classics — Edith Wharton's Ch. 1: the diplomat George Darrow, stung by a
  second vague postponement from Anna Leath, meets Sophy Viner on the
  windy Dover pier and impulsively escorts her to Paris instead), The
  Brief Début of Tildy (row 110, classics — O. Henry's closing story from
  *The Four Million*: the overlooked waitress Tildy mistakes a customer's
  drunken kiss for real romance, then is heartbroken by his sober apology,
  gently handled and closing on her friend Aileen's quiet kindness), and
  Hans in Luck (row 109, classics — the Brothers Grimm tale of seven
  trades, each one worse than the last, ending with Hans losing
  everything and feeling luckier than ever) are the newest additions.
  Before that: Old White Whiskers and
  Mr. Bunny (row 106, folktales — the proud tiger Old White Whiskers is
  tricked by a clever rabbit into lying still inside a ring of dry grass,
  which the rabbit then sets alight), The King of the Flowers (row 107,
  folktales — King Peony neglects his duties for the flashy Cinnamon Rose
  until a ragged old flower warns him a king who forgets his duties for
  beauty alone will watch his garden fall), and Why Cats and Dogs Don't Get
  Along (row 108, folktales — a cat and dog lose a mountain spirit's magic
  stone in the river when the cat can't help laughing at children on the
  bank) are the newest additions — all three from chapters 10–12 of the
  Griffis book, closing out its confirmed-reachable range. Before that:
  Fancha and the Magpie
  (row 105, folktales — a Manchu dynastic-origin legend told to a Chinese
  emperor's court: three heavenly sisters, a sacred magpie's red fruit, and a
  descendant named Fancha who escapes pursuers when a magpie lands on his head
  and they mistake him for a dead stump) is the newest addition. Before that:
  Topknots and Crockery Hats
  (row 104, folktales — Kija's founding of Cho-sen, the topknot law, and the
  giant crockery hats that turned street fights into silent contests of ugly
  faces). Before that: East Light and the Bridge
  of Fishes (row 103, folktales — a founding legend of ancient Korea: a
  gifted young archer flees a jealous king to an impassable river, and
  hundreds of fish rise to form a bridge with their backs). Before that: The Snow Queen (row 102,
  classics — Andersen's goblin mirror and Gerda's search for Kai, compressed
  to a single A2 arc). Before that: The Rabbit's Eyes
  (row 100, folktales — the Dragon King's fisherman's-hook cure and the
  rabbit's crystal-eyes trick) and Summer (row 101, classics — Edith
  Wharton's North Dormer library scene). Before
  that: Prince Sandalwood, the
  Father of Korea (row 98, folktales — Korea's own founding myth, Tan-gun)
  and The Lifted Veil (row 99, a fresh B2 classics pick, George Eliot).
  Before that: Northanger Abbey Ch. 1
  (row 32), The Wild Swans (row 93), The Unmannerly Tiger (row 94,
  folktales), Tokgabi and the Kind Maid (row 95, folktales), The Sneezing
  Colossus (row 96, folktales), Cat-kin and the Queen Mother (row 97,
  folktales) — plus Rose in Bloom Ch. 1 (row 42), The
  Story Girl Ch. 1 (row 47), The Secret Garden: Martha (row 50), and
  Elizabeth and Her German Garden (row 55), which finish out the Tier 2
  backlog entirely — only the poem (row 73, a different lesson
  shape) remains open — Tier 1, Tier 2, and Tier 3 prose rows are all
  built. Plus, from before this batch: Mother Holle (row 86), The Golden Key (row 87),
  The Fir Tree (row 88), A White Heron (row 89), The Great Gatsby — Ch. 1
  close (row 90), The Star Money (row 91), Sweet Porridge (row 83), The Golden Goose (row 84),
  The Skylight Room (row 85), Rilla of Ingleside Ch. 1 (row 48),
  The Bremen Town Musicians (row 81), The Cop and the
  Anthem (row 82), Jane Eyre Ch. 5 — Lowood (row 34), Emily of New Moon
  Ch. 1 (row 46), The Gift of the Magi (row 4), The Last Leaf (row 5),
  The Story of an Hour (row 2), A Pair of Silk Stockings (row 3),
  The Tale of Peter Rabbit (row 74),
  The Tale of Mrs. Tiggy-Winkle (row 75), The Tale of Benjamin Bunny
  (row 76), The Tale of Two Bad Mice (row 77), The Elves and the
  Shoemaker (row 78), Thumbelina (row 79), The Steadfast Tin Soldier
  (row 80), After Twenty Years (row 24), Anne of Avonlea Ch. 1 (row 60),
  The Bet (row 25), The Awakening Ch. 1
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
  `src/lib/audio-manifest.json` (see `scripts/README.md`). Card/listing pages
  (home, classics, library, club, folktales, biographies, bookshelf) read a
  generated lightweight index, not `lessons.ts` directly — after adding or
  editing a lesson, also run `npm run lessons:index` and commit
  `src/lib/data/lessons-index.generated.ts`, or the new lesson won't show up
  on those pages (see `scripts/build-lesson-index.ts`).
- Levels on the shelf now: A1 ×19 (Cinderella, The Selfish Giant, The
  Emperor's New Clothes, The Princess and the Pea, Little Red Riding Hood,
  The Frog Prince, Pollyanna Ch. 1, The Tale of Peter Rabbit,
  The Tale of Mrs. Tiggy-Winkle, The Tale of Benjamin Bunny, The Tale of
  Two Bad Mice, The Elves and the Shoemaker, The Bremen Town Musicians,
  Sweet Porridge, The Golden Goose, Mother Holle, The Golden Key,
  The Star Money, Hans in Luck),
  A2 ×22 (Story of an Hour,
  Anne Ch. 2, Little Women, Ugly Duckling, The Secret Garden, Alice in
  Wonderland Ch. 1, The Happy Prince, Snow White, The Last Leaf, Beauty
  and the Beast, Rapunzel, The Twelve Dancing Princesses, A Little
  Princess Ch. 1, Rebecca of Sunnybrook Farm Ch. 1, An Old-Fashioned Girl
  Ch. 1, A Pair of Silk Stockings, Thumbelina, The Steadfast Tin Soldier,
  After Twenty Years, The Cop and the Anthem, The Skylight Room, The Brief
  Début of Tildy), B1 ×22
  (Gift of the Magi, Pride and Prejudice Ch. 1, The Necklace, A Christmas
  Carol, Anne of Green Gables Ch. 3, Sense and Sensibility Ch. 1, The
  Yellow Wallpaper, Emma, The Nightingale and the Rose, The Little Mermaid,
  Ethan Frome prologue, East of the Sun and West of the Moon, The Bet,
  Cranford Ch. 1, Silas Marner Ch. 12, The Blue Castle Ch. 1,
  Daddy-Long-Legs Ch. 1, Agnes Grey Ch. 1, The Enchanted April Ch. 1,
  Little Women Ch. 8, A Little Princess Ch. 7, Anne of Avonlea Ch. 1),
  B2 ×23 (Jane Eyre, Jane Eyre: Lowood, Emily of New Moon,
  Rilla of Ingleside, The
  Lady with the Dog, Wuthering
  Heights, Pride and Prejudice Ch. 34, Frankenstein Letter 1, The Age of
  Innocence Ch. 1, Middlemarch, The Awakening Ch. 1, The House of Mirth
  Bk 1 Ch. 1, The Country of the Pointed Firs Ch. 1–2, North and South
  Ch. 1, The Mysteries of Udolpho Vol. 1 Ch. 1, The Mill on the Floss Bk 1
  Ch. 5, The Tenant of Wildfell Hall Ch. 1, Wives and Daughters Ch. 1,
  Villette Ch. 1, Persuasion Ch. 4, A White Heron, The Great Gatsby —
  Ch. 1 close, The Star Money, Northanger Abbey Ch. 1, The Wild Swans,
  Rose in Bloom Ch. 1, The Story Girl Ch. 1, The Secret Garden: Martha,
  The Reef),
  plus Elizabeth and Her German Garden (row 55, B1), The Lifted Veil
  (row 99, B2), Summer (row 101, B2), and The Snow Queen (row 102, A2).
  Classics-shelf bands are now
  A1 ×20 (+The Golden Bird), A2 ×25, B1 ×27, B2 ×26 (+The Custom of the
  Country) — 98 live; add the folktales shelf
  (A1 ×3, A2 ×10, B1 ×2 — A Bridegroom for Miss Mole, The Unmannerly Tiger,
  Tokgabi and the Kind Maid, The Sneezing Colossus, Cat-kin and the Queen
  Mother, Prince Sandalwood the Father of Korea, The Rabbit's Eyes, East
  Light and the Bridge of Fishes, Topknots and Crockery Hats, Fancha and
  the Magpie, Old White Whiskers and Mr. Bunny, The King of the Flowers,
  Why Cats and Dogs Don't Get Along, The Old Man with the Lump, The Snail
  Bride) for
  113 lessons across both shelves. B1 and B2 are now
  the largest classics bands; pick the level a new story genuinely fits
  rather than chasing a band.
  Sept 2026 batch: Mother Holle (A1), The Golden Key (A1), The Fir Tree
  (A2), A White Heron (B2), The Great Gatsby / Ch. 1 close (B2), The Star
  Money (A1). Gatsby went in on direct reader demand — it is PD in the US
  since 2021 and in life+70 countries since 2011 (Fitzgerald d. 1940), so
  it clears sourcing rule #1.
  Within A2, the non-(fairy-tale / gentle-domestic) entries are now Alice
  in Wonderland and After Twenty Years (crime / twist) — still the two
  odd ones out; more tonal variety there would help.
  A1 still has four Potter tales (Peter Rabbit, Mrs. Tiggy-Winkle,
  Benjamin Bunny, Two Bad Mice — 4 of 18); every non-Potter A1 add since
  (Bremen Town Musicians, Sweet Porridge, The Golden Goose, Mother Holle,
  The Golden Key, The Star Money) was deliberate — keep it that way.
- Good next lessons to build — four bands now sit at 19–27; pick by fit:
  - B2: **The Lifted Veil** (George Eliot), **Summer** (Edith Wharton,
    her fourth pick), **The Reef** (Wharton's fifth pick — Ch. 1,
    Darrow and Sophy Viner on the Dover pier), and now **The Custom of
    the Country** (Wharton's sixth pick — Ch. 1, Undine Spragg's demand)
    are live. A further B2 needs a fresh pick — a second Eliot scene
    (e.g. from *Scenes of Clerical Life*), or a seventh Wharton if the
    well isn't dry yet. Row 73 (Sonnet 43) is a poem, a different
    lesson shape.
  - A1 (keep diversifying away from Potter): **Mother Holle**, **The
    Golden Key**, **The Star Money**, **Hans in Luck** (seven trades),
    and now **The Golden Bird** (the fox, the golden horse, and the
    princess) are live. Next: another kind non-peril Grimm (e.g. **The
    Fisherman and His Wife** trimmed, or **The Goose Girl**), or re-level
    a gentle A2 tale.
  - A2: **The Fir Tree**, **The Wild Swans**, **The Snow Queen**
    (row 102), and now **The Brief Début of Tildy** (a fourth *Four
    Million* pick, row 110 — the overlooked waitress Tildy, gently
    handled) are live. Next: a non-Andersen, non-O.-Henry A2 pick for
    further variety.
  - B1: **The Secret Garden: Martha** (row 50) and **Elizabeth and Her
    German Garden** (row 55) are now live — Tier 2 is fully built.
  - Folktales shelf (15 live: A Bridegroom for Miss Mole, The Unmannerly
    Tiger, Tokgabi and the Kind Maid, The Sneezing Colossus, Cat-kin and
    the Queen Mother, Prince Sandalwood the Father of Korea, The Rabbit's
    Eyes, East Light and the Bridge of Fishes, Topknots and Crockery
    Hats, Fancha and the Magpie, Old White Whiskers and Mr. Bunny, The
    King of the Flowers, Why Cats and Dogs Don't Get Along, The Old Man
    with the Lump, The Snail Bride — plus Heungbu
    and Nolbu on the plain Library list below, tagged
    `collection: "folktales"` so it now also shows on the shelf): chapters
    10–12 of the Griffis book (Old White Whiskers and Mr. Bunny, The King
    of the Flowers, Tokgabi's Menagerie) are now all built, which closes
    out the entire confirmed-reachable range (roughly chapters 1–13 of 26
    — see the fetch-depth caveat below). Deeper chapters — "The Magic
    Peach" (Ch. 14) and "The Voice of the Bell" (Ch. 24) — still run too
    far into the source book for our fetch tooling to verify reliably;
    do not build those without first re-testing whether they've become
    reachable. Kongjwi and
    Patjwi (a Korean Cinderella parallel), Sim Cheong, Seonnyeo and the
    Woodcutter, and The Sun and the Moon are now all live too — these four
    are `targetLanguage: "ko"` originals written directly from the oral
    tradition, not translated from an English PD source like the Griffis
    tales, so no PG lookup was needed for them (see the "Dictionary
    coverage" section below for the check-dictionary.ts blind spot this
    surfaced: the script assumes `text`=English/`translation`=Korean, so a
    lesson's real KO→EN tap-path for these four had to be verified with a
    one-off direction-aware script instead). Two more `targetLanguage: "ko"`
    originals are now live (2026-09-16): Janghwa and Hongryeon (장화홍련전,
    B1) — the classic ghost story of two devoted sisters wronged by a
    jealous stepmother; softened per the app's convention, the sisters
    "vanish near a pond and never return" rather than depicting their
    deaths directly, and the tale keeps its just, hopeful resolution (a
    fearless magistrate hears their spirits out, uncovers the stepmother's
    scheme, and the sisters are reborn as twin daughters in a new family) —
    and Hong Gildong-jeon (홍길동전, B1), the opening of Korea's first
    vernacular novel: the talented but low-status Gildong, born to a
    servant woman, cannot even call his own father "Father" under the
    era's strict status rules, and resolves to leave home and carve out
    his own destiny (the source's later assassination plot against him is
    kept only as a vague, offstage danger).
  Note:
  row 56 (A Room with a View) is **not**
  clear to build — Forster died 1970, so it is not public domain in
  life+70 countries (including Korea) until 2041.
- **Great Gatsby-style reader demand:** log requests here. Standing:
  The Great Gatsby (done). Watch for **Tender Is the Night** (Fitzgerald,
  1934 — US PD 2030, so *not* clear yet), **The Sun Also Rises**
  (Hemingway, 1926 — US PD since 2022, Hemingway d. 1961 so life+70 not
  until 2032; **fails rule #1**, do not build).

## Dictionary coverage is part of "done"

Every word a lesson puts on screen must be tappable in **both** directions
(EN→KO from `en-ko.ts`, KO→EN from `ko-en.ts` + the `ko-stem.ts` stemmer).
After adding a lesson, run `npm run dict:check <slug>` and drive both
directions to **0** before considering it shipped — add head-word / `-다`
forms where the stemmer can fold to them, verbatim inflected forms where it
can't. The Sept 2026 batch did this; the two prior batches (rows 74–85) did
not, so a KO→EN back-log remains on the older lessons — `npm run dict:check`
with no args shows the count. Do not add to it.

**2026-09-11 sweep (1580 → 757):** `ko-stem.ts` was missing two whole
inflection patterns — the future/volitional `겠` infix (가겠다고, 되겠습니다…)
and the contracted honorific past `셨` (말씀하셨습니다…) — so those got fixed at
the stemmer level first (free coverage, no dictionary entries needed). Then
~700 head-word entries were added for the most common remaining nouns/verbs/
adjectives across the older lessons; because the stemmer folds many inflected
surface forms onto one head word, that batch closed more than 2 gaps per
entry. ~760 KO→EN gaps remain, mostly one-off vocabulary and character names
scattered thinly across almost every pre-Sept-2026 lesson — `npm run
dict:check` with no args shows the live count.

## Future categories (beyond Classics fiction)

Requested expansion of the shelf past short literary fiction. All must still
clear sourcing rule #1 (PD in the US **and** life+70). Project Gutenberg has
strong PD material in each:

- **Biography / memoir — now live, its own shelf at `/biographies`.**
  *The Story of My Life* (Helen Keller, 1903, PG#2397, B1 — the water-pump
  scene where "water" spelled into her hand unlocks language) and
  *The Autobiography of Benjamin Franklin* (1791, PG#148, B2 — his
  self-taught writing method and the "Silence Dogood" letters), both
  2026-09-16. New light-blue cover palette (vs. the classics' warm cream)
  visually marks the category. Not in the Tier 1–3 tables above since
  those are scoped to the Classics fiction shelf; these ship with
  `topic: "Biography"` and **`collection: "biography"`** (its own value,
  not `"classics"`) — a dedicated dashboard carousel, `/biographies` grid
  page, nav entry, and sitemap row, mirroring how Classics and Folktales
  work. Two more biographies are now live (2026-09-16): Booker T.
  Washington's *Up From Slavery* (1901, PG#2376, B2 — his birth in a slave
  cabin, teaching himself the alphabet from a Webster's blue-back speller,
  and giving himself the surname "Washington" on his first day of school —
  handled with the same restraint as Keller/Franklin, no graphic content)
  and Charles Darwin's own autobiography (1876/1887, PG#2010, B1 — retold
  as "The Boy Who Loved Beetles": his father's scolding over his collecting
  hobby, and the beetle-in-the-mouth anecdote). Two more were added the same
  day in an earlier batch that went undocumented here until this note: Mark
  Twain's *Life on the Mississippi* (1883, PG#245, B1 — his apprenticeship
  as a steamboat pilot under Mr. Bixby, and what he lost as well as gained
  once he could "read" the river like a book) and Marie Curie's own memoir
  *Pierre Curie* (1923 English translation, PG#69617, B2 — the converted
  shed where she and Pierre isolated radium, retold as "Pierre Curie").
  Two more are now live (2026-09-16): *Narrative of the Life of Frederick
  Douglass* (1845, PG#23, B2 — retold as "Learning to Read": Mrs. Auld
  teaching him the alphabet, Mr. Auld forbidding it, and Douglass secretly
  teaching himself by trading bread for lessons and copying letters from
  shipyard timbers; the realities of slavery are stated plainly but never
  shown graphically) and Elizabeth Gaskell's *The Life of Charlotte Brontë*
  (1857, PG#1827, B1 — retold as "The Twelve Soldiers": the box of wooden
  toy soldiers that sparked the Brontë children's invented kingdoms of
  Angria and Gondal, tiny hand-sewn books, and the throughline to Jane
  Eyre). Eight biographies now live. Still open: Gaskell's *Life of
  Charlotte Brontë* has more chapters to draw on for a second lesson;
  Mark Twain has more autobiographical sketches too.
- **Philosophy, plain** — Marcus Aurelius, *Meditations* (short numbered
  passages fit a lesson almost as-is); Epictetus, *Enchiridion*.
- **Travel writing** — *Innocents Abroad* / *A Tramp Abroad* (Twain),
  *Travels with a Donkey* (Stevenson), Isabella Bird's letters.
- **Sociology / social reportage** — *How the Other Half Lives* (Riis),
  *The Souls of Black Folk* (Du Bois), *London Labour and the London Poor*
  (Mayhew) excerpts.
- **Business / self-improvement** — *The Richest Man in Babylon* (1926, US
  PD), *Self-Help* (Samuel Smiles), *The Art of Money Getting* (P. T.
  Barnum).
- **Crime & mystery — now live.** *A Scandal in Bohemia* (Doyle, 1891,
  PG#1661, B2 — row 113) and *The Red-Headed League* (Doyle, 1891, PG#1661,
  B2 — row 115, 2026-09-16) are the first two Sherlock Holmes stories on the
  shelf; *The Tell-Tale Heart* (Poe, 1843, PG#2148, B2 — row 112) and *The
  Cask of Amontillado* (Poe, 1846, PG#1063, B2 — row 114, 2026-09-16) lean
  more gothic-horror than crime but share the shelf. Still open: more
  *Adventures of Sherlock Holmes* stories (1892), *The Moonstone*
  (Collins), more Poe (*The Black Cat*, *The Pit and the Pendulum*),
  Father Brown (early collections only — check each story's date).
- **Plays** — Shakespeare (*Hamlet*, *Macbeth*, a scene each), Wilde
  (*The Importance of Being Earnest*), Chekhov (*The Cherry Orchard*),
  Ibsen (*A Doll's House*). **NB:** dialogue needs a different lesson
  template than the prose `StorySentence[][]` shape — speaker labels, and
  comprehension that turns on who says what. Design that before building
  the first play.
- **Poetry** — already flagged (Sonnet 43, row 73); a poem is its own
  shape too.
- **Korean-origin folklore — now its own shelf, not Classics.** Every
  Classics lesson is a Western work translated *into* Korean; this is the
  other direction. First live: **row 92, A Bridegroom for Miss Mole** (A2),
  adapted from *Korean Fairy Tales* (William Elliot Griffis, 1911,
  PG#67180) — Griffis (d. 1928) is PD in the US and in life+70 countries
  since 1998. It's his own English retelling of Korean folklore, not a
  translation of a Korean-language original, but that's fine under rule #2
  the same way Andrew Lang's fairy-book retellings already source the
  European tales — still write our own simplified English retelling and a
  fresh Korean translation from it, never paste Griffis's text directly.
  Given `collection: "folktales"` (`src/lib/types.ts`) instead of
  `"classics"` — a deliberately separate shelf (home-page
  `FolktalesSection`, `/folktales`) with its own light-red-tinted covers so
  it reads as distinct from the cream/gold Classics shelf at a glance.
  `FablesSection` was narrowed to `collection === undefined` so lessons
  don't double up across shelves. Two more Griffis tales are now live:
  **row 94, The Unmannerly Tiger** (A2) — the violent original ending
  (the ungrateful tiger clawing himself to death after a toad's trick)
  is softened to the tiger being freed at dawn on a promise of good
  behavior; and **row 95, Tokgabi and the Kind Maid** (A1) — Griffis's
  chapter on the mischievous house-spirit Tokgabi is descriptive rather
  than a single plotted story, so this is an original narrative built
  around his traits (rewarding a hardworking kitchen maid, pranking a
  lazy one) and the real Korean folk custom of red clothing, silver, and
  spotless white warding off his tricks. Two more are now live: **row 96,
  The Sneezing Colossus** (A1) — Kim the lazy farmer, the giant Buddha
  statue, the pear, and the tremendous sneeze; and **row 97, Cat-kin and
  the Queen Mother** (A2) — a girl named for a pussy-willow catkin calls
  the earth-spirit beneath a persimmon tree and is invited into the sky
  by the Western Heavenly Queen Mother. The Griffis book runs to 26
  chapters and our source-fetch tooling could only verify text reliably
  through roughly the first half, so Cat-kin's chapter is confirmed only
  up to the Queen Mother's invitation — the closing sentence (Cat-kin
  climbing into the jade chariot, and villagers still seeing a new star
  by the moon) is an original conclusion in the same spirit, not
  confirmed against Griffis's actual ending. "The Magic Peach" and "The
  Voice of the Bell" sit deeper in the book and hit the same fetch-depth
  limit — see "Good next lessons to build" above. A sixth Griffis tale is
  now live: **row 98, Prince Sandalwood, the Father of Korea** (A2) —
  Korea's own founding myth (Ch. 4 of the book, well inside the
  confirmed-reachable range): a bear and a tiger both pray to become
  human, the tiger gives up after eleven days but the bear endures the
  full twenty-one eating only garlic in a dark cave, becomes a woman,
  marries the sky-prince Whanung, and their son Tan-gun is hailed by the
  gathered people as the first king of Korea. Fetching the book's full
  table of contents (2026-09-14) confirmed the chapter list — 1 The
  Unmannerly Tiger, 2 Tokgabi and His Pranks, 3 East Light and the Bridge
  of Fishes, 4 Prince Sandalwood, 5 The Rabbit's Eyes, 6 Topknots and
  Crockery Hats, 7 Fancha and the Magpie, 8 The Sneezing Colossus, 9 A
  Bridegroom for Miss Mole, 10 Old White Whiskers and Mr. Bunny, 11 The
  King of the Flowers, 12 Tokgabi's Menagerie, 13 Cat-kin and the Queen
  Mother, 14 The Magic Peach, ... 24 The Voice of the Bell, ... 26 (last)
  — so chapters 3, 5, 6, 7, 10, 11, and 12 were still unbuilt at that
  point. A seventh Griffis tale is now live: **row 100, The Rabbit's
  Eyes** (A2, Ch. 5) — the Dragon King is choked by a fisherman's hook,
  his doctor turtle is sent ashore to fetch a rabbit's eyes for the cure,
  and the clever rabbit talks his way back to shore by claiming his real
  eyes are precious crystal ones left safely at home on a shelf, escaping
  the moment his feet touch the sand. An eighth Griffis tale is now live:
  **row 103, East Light and the Bridge of Fishes** (A2, Ch. 3) — a
  founding legend of ancient Korea (the Jumong/Dongmyeong myth): a
  gifted young archer's growing fame turns the king against him, and
  when he flees south with three companions to an impassable river,
  he calls out to the sky and shoots arrows into the water; hundreds of
  fish rise and pack together, their backs forming a bridge that lets
  the four men cross just ahead of the king's horsemen, dissolving the
  moment they reach dry land. Only the birth/exile prologue and the
  founding-of-Fuyu coda from Griffis's full chapter were left out — the
  escape scene is the self-contained core, matching the single-scene
  shape used for the other Tier 1 lessons. A ninth Griffis tale is now
  live: **row 104, Topknots and Crockery Hats** (A2, Ch. 6) — an
  etiological legend: the sage Kija leads five thousand followers east
  from China, founds the city of Cho-sen, and first orders every married
  man to wear a topknot, hoping it will make men look dignified; when
  quarrelsome men instead use it to grab each other in fights, he tries
  something stranger — huge hats of baked clay that crack instead of
  skulls when men fight, so expensive to replace that street brawls turn
  into silent contests of glaring and ugly faces, and the whole land
  grows calmer and famed for politeness. A tenth Griffis tale is now
  live: **row 105, Fancha and the Magpie** (A2, Ch. 7) — a Manchu
  dynastic-origin legend told as a story-within-a-story: worried that
  common people will remember their nobles' humble desert past, a
  Chinese emperor summons an ancient storyteller, Mrs. Crinkles, who
  tells of three heavenly sisters bathing in a lake below the Ever
  White Mountains; a sacred magpie drops a red fruit onto the youngest
  sister's robe, and she conceives a heaven-born son who becomes chief
  of warring tribes. Generations later his descendant, also named
  Fancha, is chased into a forest by enemies; a magpie lands on his
  motionless head and his pursuers mistake him for a dead stump, letting
  him escape — and Mrs. Crinkles reveals that this Fancha was the
  emperor's own ancestor. Chapters 10, 11, and 12 — the last three inside
  the confirmed-reachable 1–13 range — are now built too, closing that
  range out entirely: **row 106, Old White Whiskers and Mr. Bunny** (A2,
  Ch. 10) — a trickster tale in which the proud, man-eating tiger Old
  White Whiskers meets a small, clever rabbit on a frozen river; the
  rabbit talks his way out of being eaten by promising to drive a whole
  herd of game to the tiger's paws, has him lie down and shut his eyes
  inside a ring of dry grass "for the magic to work," then sets the
  grass alight and escapes up the hill, leaving the tiger to burn a paw
  and singe his fur breaking free — after that, the other tigers laugh
  at him and the Mountain Spirit no longer trusts him with any
  important task. **Row 107, The King of the Flowers** (A2, Ch. 11) — a
  fable of a royal flower court: King Peony, sovereign of the garden,
  falls for the flashy, confident Cinnamon Rose and stops seeing his
  ministers for days at a time, until a ragged old flower called Old
  Man arrives, compares honest advice to plain medicine for a sick man,
  and warns that a king who forgets his duties for beauty alone will
  watch his garden fall while one who keeps wise company grows strong;
  the king takes the warning to heart and returns to ruling wisely.
  Griffis's chapter frames this fable as a story the scholar Sul Chong
  told a real king to warn him against neglecting the throne for palace
  dancing girls — the lesson keeps only the flower-court fable itself,
  self-contained, and leaves that human framing out. **Row 108, Why Cats
  and Dogs Don't Get Along** (A1, Ch. 12) — Griffis titles this chapter
  "Tokgabi's Menagerie," but the lesson uses an original, more
  descriptive title for the single pourquoi tale inside it: a mountain
  spirit, Tokgabi, rewards a kind old wine-seller, Tip Pul, with a magic
  stone that keeps his bottle forever full; when the stone vanishes, his
  cat and dog track it to a locked box, strike a bargain with the house
  mice to gnaw it open, and the dog swims the stone across a river in
  the cat's mouth — until children on the bank laugh at the pair, the
  cat can't help laughing too, and the stone drops and is lost forever,
  which the old stories say is why cats and dogs have not been friends
  since. The source chapter's harsher details — a pony's hoof injuring
  the dog for a week, and a real risk of drowning in the river — are
  left out for the A1 level, the third non-Potter A1 lesson on the
  shelf. All three re-verified against the actual Project Gutenberg
  plain text (not built from memory), closing out the Griffis book's
  entire confirmed-reachable range (chapters 1–13 of 26). The remaining
  non-Griffis Korean folktales — Heungbu and Nolbu, Kongjwi and Patjwi,
  Sim Cheong, Seonnyeo and the Woodcutter, and The Sun and the Moon — are
  all live now too, written as `targetLanguage: "ko"` originals straight
  from the oral tradition rather than translated from an English PD text,
  so no PG source hunt was needed for them. Two more are now live
  (2026-09-17): The Old Man with the Lump (혹부리 영감, B1) and The Snail
  Bride (우렁각시, B1, told with the gentler traditional ending) — both
  `targetLanguage: "ko"` originals in the same vein.
