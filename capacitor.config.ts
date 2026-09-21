import type { CapacitorConfig } from '@capacitor/cli';

// This app is a dynamic Next.js site (SSR, API routes, Supabase auth) —
// not a static export — so the Android shell can't bundle it as local
// assets the way a typical Capacitor app does. Instead `server.url` points
// the native WebView straight at the live production site, so shipping an
// update is still "deploy the website," not "resubmit the app" — the same
// property the earlier TWA plan relied on (see ANDROID.md).
//
// `webDir` is therefore just a tiny folder (`native-shell/`) holding the
// offline fallback page. It must NOT be `public/`: that copied 300+ MB of
// audio and covers into the app bundle, none of which is used at runtime.
const config: CapacitorConfig = {
  appId: 'com.seojaestory.app',
  appName: 'SeoJae Story',
  webDir: 'native-shell',
  backgroundColor: '#FDFBF7',
  server: {
    url: 'https://www.seojaestory.app',
    cleartext: false,
    // Shown from the app bundle when the live site can't be reached.
    errorPath: 'offline.html',
  },
  plugins: {
    // Cream status/nav bars with dark icons, matching the site's light theme.
    SystemBars: {
      style: 'LIGHT',
    },
  },
};

export default config;
