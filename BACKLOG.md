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
- Today only `heungbu-and-nolbu` has `isFree: false`; flipping the gate off means
  either forcing all lessons free or short-circuiting the paywall check in
  `src/app/lesson/[slug]/page.tsx` / `LessonPaywall` behind a "beta" flag so it's
  a one-line revert when Beta ends.

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
