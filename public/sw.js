// Minimal service worker: exists to make the app PWA-installable (a
// prerequisite Google's tooling checks for) and to show a friendly offline
// page when there's no connection at all.
//
// Deliberately does NOT cache pages, API responses, or Supabase/Paddle
// requests — this app depends on live auth sessions and billing state that
// must never be served stale. Only the offline fallback page itself is
// precached.
const CACHE = "seojae-story-shell-v1";
const OFFLINE_URL = "/offline.html";

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll([OFFLINE_URL])));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  // Only intercept full-page navigations; everything else (scripts, styles,
  // images, API calls) goes straight to the network untouched.
  if (event.request.mode !== "navigate") return;
  event.respondWith(fetch(event.request).catch(() => caches.match(OFFLINE_URL)));
});
