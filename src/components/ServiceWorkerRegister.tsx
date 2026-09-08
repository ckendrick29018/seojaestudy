"use client";

import { useEffect } from "react";

/** Registers public/sw.js once the app has loaded. No-ops silently in
 *  browsers/WebViews without service worker support. */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch((err) => {
      console.warn("Service worker registration failed", err);
    });
  }, []);

  return null;
}
