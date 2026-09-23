import { Share } from "@capacitor/share";
import { isRunningInNativeApp } from "@/lib/platform";

/**
 * Share a link, preferring each platform's real share sheet.
 *
 * Inside the Android app, Capacitor's WebView doesn't reliably implement the
 * Web Share API the way a modern mobile browser does, so `navigator.share`
 * can silently fail or simply not exist there — this is the "minimum
 * functionality" native touch Play review expects instead of a bare WebView.
 * On the regular website, `navigator.share` already works fine (mobile
 * Safari/Chrome), so it stays the first choice there.
 *
 * Falls back to clipboard, then to just returning the url so the caller can
 * show it directly, exactly like the callers already did before this helper.
 */
export async function shareUrl(options: { title: string; text?: string; url: string }): Promise<"shared" | "copied" | "shown"> {
  const { title, text, url } = options;

  try {
    if (isRunningInNativeApp()) {
      await Share.share({ title, text, url });
      return "shared";
    }
    if (typeof navigator !== "undefined" && navigator.share) {
      await navigator.share({ title, text, url });
      return "shared";
    }
  } catch {
    // user dismissed the share sheet — fall through to copy
  }

  try {
    await navigator.clipboard.writeText(url);
    return "copied";
  } catch {
    return "shown";
  }
}
