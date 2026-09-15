# Content backlog — "Famous Quotes"

A working list for `/quotes` + `/quote/[slug]` (`src/lib/quotes.ts`): famous,
verbatim lines from the public-domain classics already live in the library,
paired with a fresh Korean translation. Companion doc to `CONTENT_BACKLOG.md`
— same sourcing discipline, same batch-at-a-time rhythm as building a lesson.

---

## Sourcing rules

1. **Quote text is verbatim from the public-domain original — never our own
   simplified retelling.** These pages exist to catch searches for the actual
   famous line, in English or in Korean translation; a paraphrase defeats the
   purpose. Every quote must be re-verified against the real Project
   Gutenberg plain-text source before it's added (`curl` the source, `grep`
   for the passage) — not typed from memory, even when the line is
   well-known. Misquoting a "verbatim famous line" page is worse than not
   having the page.
2. **The Korean translation is fresh, original text**, same rule as
   `CONTENT_BACKLOG.md` #2 — never a published translation.
3. **`lessonSlug` links to an existing lesson for that same work.** The quote
   does not need to fall inside that lesson's specific excerpted scene —
   curation optimizes for how famous/searched the line is, not for which
   scene we happened to adapt. The CTA copy ("This line is from *{title}*.
   Read a free graded excerpt...") is worded to stay honest about that.
4. Every new quote's English and Korean text must resolve through the offline
   dictionary (`src/lib/dictionary`) — same tap-word requirement as a lesson.
   There's no dedicated `dict:check`-style script for quotes (they're a
   handful of standalone sentences, not a whole lesson), so check manually: a
   small one-off script importing `QUOTES` + `lookupEnKo`/`lookupKoEn` and
   diffing against the dictionary tables, same logic as
   `scripts/check-dictionary.ts`. Add any missing head words to
   `en-ko.ts`/`ko-en.ts` before shipping.
5. Source work must already be public domain and already live as a lesson in
   `lessons.ts` (`collection: "classics"` or `"folktales"`) — this backlog
   only draws from what's already sourced and cleared, never a new work.

---

## Built (8 — seed batch, 2026-09-15)

| Slug | Work | Line (opening words) | Lesson slug |
|---|---|---|---|
| `truth-universally-acknowledged` | Pride and Prejudice | "It is a truth universally acknowledged..." | `pride-and-prejudice` |
| `boats-against-the-current` | The Great Gatsby | "So we beat on, boats against the current..." | `the-great-gatsby` |
| `tomorrow-is-a-new-day` | Anne of Green Gables | "Isn't it nice to think that tomorrow..." | `anne-of-green-gables` |
| `not-afraid-of-storms` | Little Women | "I'm not afraid of storms..." (Amy March) | `little-women` |
| `i-am-no-bird` | Jane Eyre | "I am no bird; and no net ensnares me..." | `jane-eyre` |
| `whatever-our-souls-are-made-of` | Wuthering Heights | "Whatever our souls are made of..." (Catherine) | `wuthering-heights` |
| `they-are-the-magi` | The Gift of the Magi | "...They are the magi." (closing line) | `gift-of-the-magi` |
| `great-and-sudden-change` | Frankenstein | "Nothing is so painful to the human mind..." | `frankenstein` |

---

## Good next candidates (title only — exact line still needs sourcing + verification)

High-value picks, chosen for likely search volume; not yet verified against
source text, so treat the "known" line below as a starting hypothesis to
confirm, not a citation:

- **A Christmas Carol** (Dickens) — several strong candidates: the "Marley
  was dead" opening, "Bah! Humbug!", or Tiny Tim's "God bless us, every one!"
- **Alice's Adventures in Wonderland** (Carroll) — "We're all mad here" or
  "Curiouser and curiouser!"
- **Emma** (Austen) — the opening line ("Emma Woodhouse, handsome, clever,
  and rich...")
- **Persuasion** (Austen) — Captain Wentworth's letter ("You pierce my
  soul...") — very high romance-reader search volume
- **Middlemarch** (Eliot) — the famous closing line about "unhistoric acts"
- **The Secret Garden** (Burnett) — "Where you tend a rose, my lad, a thistle
  cannot grow"
- **The Yellow Wallpaper** (Gilman) — the narrator's closing lines

## Remaining live classics (general pool, unbuilt)

Every other classic currently live in `lessons.ts` is a candidate — pull from
here when the shortlist above runs out. Not prioritized/vetted:

The Story of an Hour · The Ugly Duckling · Cinderella · The Selfish Giant ·
The Necklace · The Lady with the Dog · The Emperor's New Clothes · The Happy
Prince · The Princess and the Pea · Little Red Riding Hood · Sense and
Sensibility · The Age of Innocence · The Frog Prince · Snow White · The
Nightingale and the Rose · The Last Leaf · The Little Mermaid · Beauty and
the Beast · Rapunzel · The Awakening · The House of Mirth · Ethan Frome ·
East of the Sun and West of the Moon · The Twelve Dancing Princesses · The
Bet · The Country of the Pointed Firs · Cranford · A Little Princess · North
and South · Silas Marner · The Blue Castle · Daddy-Long-Legs · The Mysteries
of Udolpho · The Mill on the Floss · Pollyanna · Rebecca of Sunnybrook Farm ·
An Old-Fashioned Girl · Agnes Grey · The Enchanted April · The Tenant of
Wildfell Hall · Wives and Daughters · Villette · Persuasion · A Pair of Silk
Stockings · The Tale of Peter Rabbit · Anne of Avonlea · The Tale of Mrs.
Tiggy-Winkle · The Tale of Benjamin Bunny · The Tale of Two Bad Mice · The
Elves and the Shoemaker · Thumbelina · The Steadfast Tin Soldier · After
Twenty Years · The Bremen Town Musicians · The Cop and the Anthem · Emily of
New Moon · Sweet Porridge · The Golden Goose · The Skylight Room · Rilla of
Ingleside · Mother Holle · The Golden Key · The Fir Tree · A White Heron ·
The Star Money · The Wild Swans · Northanger Abbey · Rose in Bloom · The
Story Girl · Elizabeth and Her German Garden · The Lifted Veil · Summer ·
The Snow Queen

(Several titles above are multi-lesson works with more than one excerpt live
— e.g. Pride and Prejudice, Jane Eyre, Anne of Green Gables, Little Women, A
Little Princess — any lesson slug for that work is a valid `lessonSlug`
target; prefer whichever excerpt is most complete/central.)

## Notes

- Folktales (Griffis / Korean-origin, tracked in `CONTENT_BACKLOG.md`) are a
  weaker fit for this format — they're adapted retellings of oral legends,
  not textually "famous" in the way a Dickens or Austen line is quoted. Skip
  unless a specific line turns out to be genuinely well-known.
- No fixed batch size — build however many fit a session, same as lessons.
