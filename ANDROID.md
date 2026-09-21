# Shipping SeoJae Story to the Google Play Store

## Current build steps (Capacitor)

The Android shell is `android/` (package `com.seojaestory.app`). It is a native
WebView pointed at the live site (`server.url` in `capacitor.config.ts`), so a
new lesson or a site fix ships with a normal Vercel deploy — **the app only
needs rebuilding/re-uploading when native things change** (icon, splash,
plugins, `versionCode`). `webDir` is the tiny `native-shell/` folder (just the
offline screen); never point it at `public/`, which bundles 300+ MB of audio.

**One-time setup (your machine):**

1. Create a [Play Console](https://play.google.com/console) developer account
   ($25). Identity verification can take days — start this first.
2. Install [Android Studio](https://developer.android.com/studio) (bundles the
   JDK and Android SDK — this machine had neither as of 2026-09-21).

**Each build:**

1. `npx cap sync android` after any change to `capacitor.config.ts` or
   `native-shell/`.
2. `npx cap open android`, let Gradle sync, and run it on a real phone or
   emulator. Check: brand icon + cream splash, header sits below the status
   bar (not under it), hardware back button, and airplane mode shows the
   "You're offline" screen.
3. Bump `versionCode` in `android/app/build.gradle` (Play rejects a repeat).
4. **Build → Generate Signed App Bundle → Android App Bundle.** First time:
   create a new keystore (this is the *upload* key) and back up the file and
   its passwords outside the repo. Keep Play App Signing enabled (the default).
5. Upload the `.aab` to **Testing → Closed testing** in Play Console, add
   the testers' Google accounts, and share the opt-in link. At least 12 must
   stay opted in for 14 continuous days before you can apply for production.

> **⚠️ Superseded (2026-09-16):** the TWA/Bubblewrap approach below has been
> replaced by a **Capacitor** wrapper as the plan going forward, mainly so
> the app can clear Google Play's "minimum functionality" bar with real
> native capabilities (push notifications, native offline handling, etc.)
> that a TWA can't provide. The Payments-policy problem described below
> (no Paddle checkout inside the Android app) still applies under Capacitor
> — `src/lib/platform.ts` has been reworked accordingly: it now exports
> `isRunningInNativeApp()`, checked via `Capacitor.isNativePlatform()`
> instead of the TWA-only `document.referrer` signal. Keeping this file for
> the policy background; treat the build steps as historical.

This app becomes an Android app via a **Trusted Web Activity (TWA)** —
Google's recommended way to publish a web app to Play with minimal native
code. A TWA is essentially your live website opened full-screen in Chrome
(no browser chrome shown); it isn't a WebView copy of your code, so once
it's installed you keep shipping updates by deploying the website, not by
re-submitting the app (except when you change native-shell things like the
icon or splash screen).

Because it's real Chrome under the hood, things that already work on the
web — Google Sign-In via Supabase, Paddle's checkout overlay — work
identically inside the installed app. No native SDKs needed for either.

## ⚠️ Read this before wiring up payments in the Android app

Google Play's Payments policy generally requires apps that sell digital
content **consumed inside the app** to use Google Play's own Billing
system, not a third-party processor like Paddle. A TWA that opened Paddle
checkout to unlock in-app reading content would likely be read as exactly
that, and risk rejection or removal.

To sidestep this, `src/lib/platform.ts` + `src/components/billing/SubscribeView.tsx`
detect when the app is running inside the Android wrapper
(`document.referrer` starts with `android-app://`) and, in that case, don't
show the Paddle checkout at all — they just point the person to subscribe
from a browser at your website instead. This is the same "reader app"–style
pattern services like Kindle have historically used on Android.

This is a real policy area, not a formality — Claude isn't a lawyer and
this isn't legal advice. Before you submit, it's worth reading Google
Play's current [Payments policy](https://support.google.com/googleplay/android-developer/answer/9858738)
yourself (or having someone who knows it well look at your specific setup),
since Google's enforcement and exceptions do shift over time. The
alternative, if you'd rather sell subscriptions inside the Android app
directly, is integrating Google Play Billing for Android specifically
(separate from the Paddle integration used on web) — a larger, separate
piece of work not included here.

## Prerequisites

- The app deployed and reachable over **HTTPS** at a real domain (Vercel's
  own `*.vercel.app` domain works for testing; a custom domain looks more
  credible to both Google Sign-In's consent screen and Play reviewers).
- [Node.js](https://nodejs.org) 18+, a JDK (17 recommended), and either
  Android Studio or just the command-line tools — [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap)
  can fetch a lightweight SDK for you if you don't have one.
- A [Google Play Console](https://play.google.com/console) developer
  account ($25 one-time fee).

## Steps

1. **Deploy first.** TWA verification needs a live, public URL — see the
   README's "Deploying" section. Note the final URL.

2. **Install Bubblewrap:**

   ```bash
   npm install -g @bubblewrap/cli
   ```

3. **Initialize the Android project** from your deployed manifest:

   ```bash
   bubblewrap init --manifest=https://yourdomain.com/manifest.json
   ```

   You'll be prompted for an Android package name (reverse-domain style,
   e.g. `com.yourcompany.seojaestory`), app name, and to generate (or point
   to) a signing keystore. **Back up that keystore and its password
   somewhere safe** — losing it means you can never update the app again
   under the same listing.

4. **Verify Digital Asset Links.** Bubblewrap's `init` prints a SHA-256
   fingerprint for your signing key. Open
   `public/.well-known/assetlinks.json` in this repo and replace the two
   placeholders with your real package name and that fingerprint, then
   redeploy. Confirm it's live at
   `https://yourdomain.com/.well-known/assetlinks.json` — this is what lets
   Chrome open the TWA with no address bar instead of falling back to a
   regular browser tab.

5. **Build the app bundle:**

   ```bash
   bubblewrap build
   ```

   This produces a signed `.aab` (Android App Bundle) file, ready to
   upload.

6. **Create the app listing** in Play Console, upload the `.aab` to the
   Internal Testing track first, and fill in the store listing — you'll
   need a feature graphic and phone screenshots (not generated by any of
   this; take a few screenshots of the running app). The icons in
   `public/icons/` are simple placeholders — commission or design a proper
   icon before a public release.

7. **Test on the Internal Testing track** (install via the opt-in link
   Play Console gives you) before promoting to Production. Specifically
   check: Google sign-in completes and returns to the app correctly, the
   free lesson reads/plays audio/saves words correctly, and the paywalled
   lesson shows the "subscribe on the website" message rather than a
   broken checkout.

## If you outgrow a TWA

A TWA can't do things like push notifications, native share sheets beyond
what the Web Share API covers, or a fully custom native UI. If you need
those later, [Capacitor](https://capacitorjs.com) is the natural next step
— it bundles the same web app with a native WebView shell and a plugin
ecosystem for native APIs, at the cost of more build tooling to maintain.
Nothing in this codebase needs to change to make that move; only the
native wrapper layer would be added alongside it.
