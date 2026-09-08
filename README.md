# LuminaRead

A one-page scrolling reading-lesson app for women 20–40 learning English or
Korean through short stories — built for the **SeoJaeStory** project, headed
for the Google Play Store.

Soft, feminine, elegant aesthetic: cream backgrounds, muted rose/terracotta
accents, sage highlights, serif headings (Playfair Display / Noto Serif KR)
over a clean sans body (Inter / Noto Sans KR). Mobile-first (portrait phone
framing) with a centered card layout on desktop.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom soft/elegant theme (`tailwind.config.ts`)
- **Supabase** (Auth + Postgres) for accounts and cross-device progress sync
- **Paddle** (Merchant of Record) for the Premium subscription
- Guest mode still works with **zero setup** — signed out, progress lives in
  `localStorage` only, exactly like the first version of this app

## Running it locally

You'll need [Node.js](https://nodejs.org) 18.18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000. The app runs immediately in guest mode
with no environment variables — auth and billing quietly disable themselves
until you configure them (see below), so you can keep developing the
reading experience without setting either up first.

Other commands:

```bash
npm run build   # production build
npm start       # run the production build
npm run lint    # eslint
```

> **Note:** this project's files were generated in a sandboxed session with
> no access to the npm registry, so `npm install` / `npm run build` haven't
> been run here yet. Everything was checked for TypeScript syntax errors
> and import/export consistency by hand, but run `npm run build` after
> installing to catch anything a real compiler would. Likely first-run
> tweaks: the exact Google Fonts export names in `src/app/layout.tsx`
> (`Noto_Sans_KR` / `Noto_Serif_KR`), and confirming the `@paddle/*` /
> `@supabase/*` package versions still resolve (pinned to versions already
> working in the sibling Suneung.Ai project as of this writing).

## Setting up accounts (Google sign-in + email/password)

1. Create a [Supabase](https://supabase.com) project.
2. Run the SQL in `supabase/migrations/` (in order) via the Supabase SQL
   editor, or `supabase db push` if you use the CLI. This creates `profiles`
   (subscription state), `saved_words`, and `completed_lessons`, all with
   row-level security so a user can only ever read/write their own rows.
3. In Supabase's dashboard: **Authentication → Providers → Google** — you'll
   need a Google Cloud OAuth client (Client ID + Secret); Supabase's docs
   walk through this. Email/password sign-in needs no extra setup, but
   Supabase's built-in mailer is rate-limited, so configure custom SMTP
   there before real users start signing up.
4. Copy `.env.local.example` → `.env.local` and fill in
   `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and
   `SUPABASE_SERVICE_ROLE_KEY` from Project Settings → API.

Kakao/Naver-style local providers were deliberately left out — Google plus
email/password covers a global, bilingual audience without the extra setup
Pulja/Suneung.Ai needed for a Korea-only user base.

## Setting up billing (Paddle)

1. Create a [Paddle](https://www.paddle.com) account and, in **Catalog**,
   a monthly subscription product/price. Use Paddle's **sandbox** account
   for development — sandbox and live are entirely separate accounts.
2. Copy the client-side token, API key, and monthly price id into
   `.env.local` (see the Paddle section of `.env.local.example`).
3. Add a webhook destination in Paddle pointing at
   `https://yourdomain.com/api/webhooks/paddle`, subscribed to
   `subscription.*` and `adjustment.*` events, and copy its signing secret
   into `PADDLE_WEBHOOK_SECRET`.
4. Test with a [Paddle sandbox card](https://developer.paddle.com/concepts/payment-methods/credit-debit-card#sandbox-testing-card-numbers)
   before going live.

v1 ships **one** plan (monthly subscription, gating everything past the
first free lesson) — no annual pass, gift codes, or promo discounts, unlike
the more elaborate Pulja/Suneung.Ai billing setup. `src/lib/pricing.ts` and
`src/lib/paddle.ts` say where to extend it if you want those later.

**Before shipping the Android app, read the payments-policy note in
`ANDROID.md`** — Google Play generally requires its own billing for digital
content sold inside an app, so the Android build intentionally doesn't show
the Paddle checkout (see `src/lib/platform.ts`).

## What's implemented

- **Header/context** — topic badge, CEFR level (A1–B2), estimated reading
  time (`src/components/lesson/LessonHero.tsx`)
- **Story section** — tap any word for an instant translation bottom sheet;
  tap the 🌐 icon at the end of a sentence to reveal its full translation
  inline; a **Listen** button narrates the whole story using the browser's
  built-in Web Speech API (no API key, works offline) — see
  `src/components/lesson/StoryReader.tsx` and `src/lib/speech.ts`
- **Comprehension check** — 2–3 multiple-choice questions per lesson with
  immediate right/wrong feedback and an explanation
- **Vocabulary flashcards** — tap-to-flip cards with audio pronunciation and
  a save-to-deck bookmark, synced to Supabase when signed in (localStorage
  when not) — see the **Saved Words** page
- **Summary & feedback** — a free-writing textarea plus a "Get Feedback"
  button with gentle, constructive feedback, and a "Mark Lesson Complete"
  button
- **Bilingual UI** — an EN/한국어 toggle in the header switches all interface
  chrome (`src/lib/i18n.ts`); each lesson's own reading/translation language
  is independent of this toggle
- **Accounts** — Google sign-in + email/password via Supabase
  (`src/app/login`, `src/components/auth/`), with sessions kept fresh by
  `src/middleware.ts`. Signing in merges any progress made as a guest into
  the account once, then Supabase becomes the source of truth
  (`src/components/providers/ProgressProvider.tsx`)
- **Premium subscription** — the first lesson is free; the rest are gated
  behind a Paddle subscription (`src/lib/data/lessons.ts`'s `isFree` flag,
  enforced server-side in `src/app/lesson/[slug]/page.tsx`). Checkout,
  webhook handling, and cancellation live under `src/components/billing/`,
  `src/app/subscribe/`, and `src/app/api/webhooks/paddle/`
- **Play Store–ready** — a PWA manifest, icons, and a minimal offline-aware
  service worker (`public/manifest.json`, `public/sw.js`) so the app can be
  wrapped as a Trusted Web Activity; see `ANDROID.md` for the full path to
  a Play Store listing

## The "AI feedback" is currently a smart placeholder

`src/lib/feedback.ts` generates feedback with local heuristics (length,
vocabulary overlap with the story) — no network call, no API key needed.
It's written so a real AI call is a one-function swap: send the lesson's
story text and the learner's summary to your model of choice and keep the
same `{ message, tip, tone }` return shape.

## Content & copyright

Both sample lessons are original text written for this app, based on
material that is in the public domain:

- **"The Fox and the Grapes"** retells a fable attributed to Aesop
  (~6th century BCE, public domain). English text and Korean translation
  are original, written for LuminaRead. Free to read.
- **"흥부와 놀부" (Heungbu and Nolbu)** retells *Heungbu-jeon* (흥부전), an
  anonymous traditional Korean folktale from the late Joseon era, also
  public domain. Korean text and English translation are original. Gated
  behind the Premium subscription, as a demo of the paywall.

When adding more lessons, keep sourcing from public-domain material (e.g.
[Project Gutenberg](https://www.gutenberg.org) for English,
[Korean Wikisource](https://ko.wikisource.org) or Gongyumadang for Korean)
and write your own translations rather than reusing an existing modern
translation, to avoid translation-copyright issues.

## Project structure

```
src/
  app/
    layout.tsx              root layout: fonts, providers, PWA meta, phone-frame shell
    page.tsx                 library / lesson list
    lesson/[slug]/page.tsx    one-page scrolling lesson (or paywall, if gated)
    saved/page.tsx            saved vocabulary words
    login/page.tsx            Google + email/password sign-in
    auth/callback/route.ts    OAuth / email-confirmation callback
    subscribe/                paywall page, thanks page, server actions
    api/webhooks/paddle/      Paddle webhook handler
  components/
    providers/                Language/Auth/Progress providers
    layout/                   SiteHeader
    home/                     LessonCard
    lesson/                   LessonHero, StoryReader, ComprehensionCheck,
                              VocabFlashcards, SummaryBox, LessonView,
                              LessonPaywall, ...
    auth/                     GoogleSignInButton, EmailAuthForm, SignOutButton
    billing/                  PaddleCheckout, SubscribeView, CancelSubscriptionButton
    ui/                       Badge, Button, SectionHeading, icons
  lib/
    types.ts                  Lesson / VocabTerm / ComprehensionQuestion types
    data/lessons.ts            the two sample lessons (add more here)
    i18n.ts                    UI string dictionary (EN/KO)
    feedback.ts                heuristic "AI" feedback (swap for a real call)
    speech.ts                  Web Speech API helpers
    platform.ts                Android-TWA detection (for the payments-policy workaround)
    pricing.ts, paddle.ts, paddle-provisioning.ts, subscription.ts   billing
    supabase/                  client.ts, server.ts, middleware.ts, admin.ts, database.types.ts
supabase/migrations/           SQL for profiles / saved_words / completed_lessons + RLS
public/
  manifest.json, sw.js, offline.html, icons/, .well-known/assetlinks.json
```

## Going further

- **New lessons**: add another object to the `lessons` array in
  `src/lib/data/lessons.ts` — set `isFree` as needed. No other code changes.
- **Real AI feedback**: replace the body of `generateFeedback` in
  `src/lib/feedback.ts` with an API call.
- **More subscription plans**: `src/lib/pricing.ts` + `src/lib/paddle.ts` +
  `src/lib/paddle-provisioning.ts` are where Pulja/Suneung.Ai's annual pass
  and gift-code features live, if you want to add the equivalents here.
- **Real icons**: `public/icons/` are placeholders generated for this
  build — swap in a designed icon set before a public release.
- **Deploying**: push to a Git repo and import it in
  [Vercel](https://vercel.com/new). Set the same environment variables
  from `.env.local` in the Vercel project settings.
- **Android**: see `ANDROID.md` — including a payments-policy note worth
  reading before you wire up the Play Store listing.
