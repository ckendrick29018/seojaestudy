"use client";

import { useEffect } from "react";
import { App } from "@capacitor/app";
import { isRunningInNativeApp } from "@/lib/platform";

/**
 * Native Android hardware back-button handling.
 *
 * Capacitor's own default handler decides whether to go back or exit by
 * asking the WebView's `canGoBack()`, which only tracks navigations the
 * WebView itself observed. This app's routing is Next.js client-side
 * navigation (History API pushState), which Android's WebView doesn't
 * reliably register in its own back/forward list — without this listener
 * the hardware back button exits the app immediately from screens reached
 * via an in-app link, even though there's real history to go back through.
 *
 * Fix: drive it from the browser's actual History API instead of the
 * WebView's own tracking. Try going back; if the URL hasn't changed shortly
 * after (nothing left to go back to), exit the app. Registering any JS
 * listener for this event hands Capacitor's native side full control to us,
 * so its own canGoBack/exit logic never runs once this is mounted.
 */
export function NativeBackButton() {
  useEffect(() => {
    if (!isRunningInNativeApp()) return;

    let handle: { remove: () => void } | undefined;
    let cancelled = false;

    App.addListener("backButton", () => {
      const before = window.location.href;
      window.history.back();
      window.setTimeout(() => {
        if (window.location.href === before) App.exitApp();
      }, 300);
    }).then((h) => {
      if (cancelled) h.remove();
      else handle = h;
    });

    return () => {
      cancelled = true;
      handle?.remove();
    };
  }, []);

  return null;
}
