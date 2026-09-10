# Product backlog

Non-content work that isn't scheduled yet. Content adaptations live in
`CONTENT_BACKLOG.md`.

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
