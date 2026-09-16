import type { CapacitorConfig } from '@capacitor/cli';

// This app is a dynamic Next.js site (SSR, API routes, Supabase auth) —
// not a static export — so the Android shell can't bundle it as local
// assets the way a typical Capacitor app does. Instead `server.url` points
// the native WebView straight at the live production site, so shipping an
// update is still "deploy the website," not "resubmit the app" — the same
// property the earlier TWA plan relied on (see ANDROID.md). `webDir` above
// is required by the CLI but effectively unused at runtime because of this.
const config: CapacitorConfig = {
  appId: 'com.seojaestory.app',
  appName: 'SeoJae Story',
  webDir: 'public',
  server: {
    url: 'https://www.seojaestory.app',
    cleartext: false,
  },
};

export default config;
