# Product backlog

Non-content work that isn't scheduled yet. Content adaptations live in
`CONTENT_BACKLOG.md`.

---

## Full texts / reading more of a book

**Status:** requested by testers 2026-09-11 ("would love to read more of the
book"). Not started. Direction below is a recommendation, not a decision.

Today each lesson is one self-contained graded chapter (a simplified retelling
of a chapter, or a whole short story). Readers want to keep going past that.

**Recommended: hybrid, fast path first.**

1. **"Continue in the original" reader (fast win).** Attach the actual
   public-domain Project Gutenberg text of each classic as an optional,
   unsimplified "read the original (English)" mode, chapterised, lazy-loaded per
   book (like the dictionary chunk). Keep tap-any-word (the offline dictionary
   scales fine); no sentence-by-sentence translation on this mode (a full KO
   translation would be a huge in-house job and modern ones are copyrighted) —
   the graded chapter still covers the translated version. Audio: browser TTS
   only for original mode; keep pre-generated clips for graded chapters.
   `StoryReader` already has a language toggle and per-sentence structure to
   build on; add a mode where the globe/translation is hidden but word-tap
   stays. Gutenberg texts are US public domain and fine to redistribute with the
   attribution already on each lesson.
2. **Full multi-chapter graded versions for the most-requested titles.** Keep
   writing simplified retellings, but extend a work to Ch.1…Ch.N so KO readers
   get full coverage too. Demand-driven (per `seojae-content-categories`).
3. **Model it as a `book`.** A `book` groups `chapters: (gradedSlug |
   originalOnly)[]`; add a Book page, cross-chapter reading progress, and a
   "Continue reading" row on the dashboard.

**SEO bonus (ties into the `/learn` + FAQ work):** full-text chapter pages are a
large, legitimate long-tail surface ("<book title> chapter 4 full text read
online").

---

## Story audio player — pause + a control that follows the reader

**Status:** shipped 2026-09-11. Both problems below are fixed.

1. **No pause — only stop (fixed).** `speech.ts` now exposes real
   `pauseSpeaking()` / `resumeSpeaking()`: the pre-generated-clip path
   (`audio.ts` / `playClips`) pauses/resumes the underlying `<audio>` element
   in place (it keeps its own `currentTime`); the browser-voice fallback uses
   `speechSynthesis.pause()/.resume()`. `StoryReader` tracks a 3-state
   `playback: "idle" | "playing" | "paused"` — the header control is now
   Listen → Pause/Resume + a separate Stop button.
2. **The control scrolled out of reach (fixed).** While narration is active,
   Pause/Resume + Stop render in the site header itself (`SiteHeader`, next to
   the streak badge and menu button) rather than anywhere in the story body —
   the header is already sticky and already where a reader's eyes return to,
   so it stays reachable for as long as any part of the lesson page is open,
   with zero extra UI added to the reading column.
   **Revision history, both same day (2026-09-11):**
   - *v1:* a full-width pill sitting directly on top of the first lines of
     text — reported as "distracting" on mobile.
   - *v2:* replaced the pill with two small (36px/28px) round buttons
     docked to the top-right corner of the story instead of a full-width bar.
     Still reported as changing the text layout / not looking as good as
     before.
   - *v3 (current):* moved the controls out of the story entirely and into
     `SiteHeader`, via a new `NowPlayingProvider` context — `StoryReader`
     publishes `{ playback, onPauseResume, onStop }` while narration is
     active (and clears it on stop / unmount), and the header renders them
     when present. No sticky bar, no reserved gutter, no layout shift in the
     story at all; see `src/components/providers/NowPlayingProvider.tsx`.

**Not done — left for a follow-up if wanted:** the "ideally show the current
sentence" nice-to-have, and tap-a-sentence-to-start-narration-there +
highlighting the sentence currently being spoken. Both need per-segment
playback-position tracking, which the current sentence-queue implementation in
`speech.ts`/`audio.ts` doesn't expose yet.

---

## Premium / pricing rework

**Status:** planned — not started. Depends on the deferred Paddle billing work
(`.env.local` Paddle keys + approved-domain list; see `seojae-domain-deploy`
memory).

### During Beta

- **Remove the premium gate entirely.** Every user gets the full library and all
  premium features while Beta testing is running.
- Every lesson currently has `isFree: true` (`heungbu-and-nolbu` was flipped free
  for Beta on 2026-09-09). When Beta ends, re-gating means either setting
  `isFree: false` on the premium set again or putting the paywall check in
  `src/app/lesson/[slug]/page.tsx` / `LessonPaywall` behind a "beta" flag so it's
  a one-line revert.

### After Beta

- **3-day free premium trial for every new member.** On sign-up, grant full
  premium access for 3 days; after that, premium features require an active
  subscription.
- **Free tier = 3 classic stories.** Exactly 3 lessons from the `classics`
  collection stay readable without premium (pick them deliberately — they're the
  shop window); every other lesson, classic or not, is premium-only.
  Implementation: set `isFree: true` on just those 3 classics and `false` on the
  rest, and make sure `/classics` + the library list show a clear premium badge
  (the badge slot already exists on `ClassicCard`).

### Pricing

| Plan | KRW | USD |
| --- | --- | --- |
| Monthly | ₩4,990 / mo | $4.99 / mo |
| Yearly — early-bird launch price | ₩29,000 / yr | $19.99 / yr |

- "Early-bird" yearly is a launch promotion — plan for a later standard yearly
  price and a way to honour the early-bird rate for people who took it.
- **Localised currency:** the price shown and charged should follow the user's
  location, not a hard-coded currency. Paddle (Merchant of Record) can localise
  automatically via its price-country overrides / purchase-power parity settings
  — configure per-country prices in the Paddle catalog rather than converting in
  app code. Keep KRW and USD as the two anchor prices.

---

## Book clubs ("My book club")

**Status:** v1 shipped 2026-09-10. A subscriber owns one private club (owner +
up to 10 members). From the bottom of any lesson the owner shares that chapter
into the club; while the owner's subscription is active, members can open that
one shared chapter free even if it's premium. Menu → "My book club" → `/club`
manages the roster + invite link. Schema + RLS + the paywall exception live in
`supabase/migrations/20260910000000_book_clubs.sql`
(`public.user_has_club_unlock`), wired into `src/app/lesson/[slug]/page.tsx`.
Invites are link-only (native share sheet / copy) — the app never sends messages
itself. Creating a club and sharing are NOT subscription-gated (usable during
Beta); only the free-unlock checks the owner's subscription.

**Fast-follow — per-chapter club discussion.** The lesson CTA says "discuss it
together" but there's no in-app thread yet. Add a `chapter_comments` table
(`club_id`, `lesson_slug`, `user_id`, `body`, `created_at`, `deleted_at`),
RLS/server-action-gated to club members, and a small thread under
`ShareWithClub` + a tab on `/club`.

**Before the Play Store submission** (see `ANDROID.md` + the
`seojae-play-store-launch` plan): granting premium chapters to 10 people outside
Google Play Billing is an entitlement-outside-billing question. Sharing within a
club you own reads more like family sharing than circumventing billing, but the
Android build must not frame it as "invite friends to skip paying" — put it on
the pre-submission policy review list. Web is unaffected.

**Known v1 limitations:** one club per user (leave to switch); only the owner can
share chapters; no owner transfer (owner deletes the club instead); the free
unlock hard-flips off the moment the owner's subscription lapses (no grace
window on already-shared chapters).
