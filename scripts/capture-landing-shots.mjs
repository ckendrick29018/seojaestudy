/**
 * Re-capture the "Read your way" screenshots on the landing page.
 *
 *   npm run dev                                  # in one terminal (port 3000)
 *   node scripts/capture-landing-shots.mjs       # in another
 *
 * Drives a throw-away headless Chrome over the DevTools protocol: for each scene
 * it seeds localStorage (reading theme + finished onboarding), opens a real
 * lesson at phone size, reveals the first line's translation, taps one word so
 * the gloss is showing, and writes a WebP to `public/landing/reader-<theme>.webp`.
 *
 * Why real screenshots rather than markup: the landing page is where a visitor
 * decides whether sepia/dark actually look good, so it shows the real reader.
 * The trade-off is that they go stale when the reader's UI changes — re-run this
 * after a visual change to the lesson page and commit the three images.
 *
 * Needs Node 22+ (global WebSocket) and a local Chrome/Chromium/Edge. Override the
 * browser with CHROME_PATH and the site with BASE_URL.
 */
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(HERE, "..", "public", "landing");
const BASE_URL = (process.env.BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const VIEW = { width: 390, height: 780, dpr: 2 };

/** One shot per theme, each from a story whose mood suits it. `word` is the word tapped for its gloss. */
const SCENES = [
  { theme: "light", slug: "story-of-an-hour", word: "heart" },
  { theme: "sepia", slug: "pride-and-prejudice-letter", word: "thoughts" },
  { theme: "dark", slug: "dracula-the-castle", word: "courtyard" },
];

const ONBOARDING = { completed: true, direction: "ko-en", level: "A2", interests: [], goal: null };

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter(Boolean);
  const found = candidates.find((p) => existsSync(p));
  if (!found) throw new Error("No Chrome/Edge found — set CHROME_PATH.");
  return found;
}

async function waitForJson(url, tries = 60) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return await res.json();
    } catch {
      /* browser still starting */
    }
    await sleep(250);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

/** Minimal DevTools-protocol client over the page's WebSocket. */
function connect(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    let nextId = 0;
    const pending = new Map();
    const listeners = new Set();
    ws.onerror = () => reject(new Error("DevTools socket error"));
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id !== undefined && pending.has(msg.id)) {
        const { ok, fail } = pending.get(msg.id);
        pending.delete(msg.id);
        msg.error ? fail(new Error(`${msg.error.message}`)) : ok(msg.result);
      } else {
        for (const fn of listeners) fn(msg);
      }
    };
    ws.onopen = () =>
      resolve({
        send: (method, params = {}) =>
          new Promise((ok, fail) => {
            const id = ++nextId;
            pending.set(id, { ok, fail });
            ws.send(JSON.stringify({ id, method, params }));
          }),
        once: (eventName) =>
          new Promise((ok) => {
            const fn = (msg) => {
              if (msg.method === eventName) {
                listeners.delete(fn);
                ok(msg.params);
              }
            };
            listeners.add(fn);
          }),
        close: () => ws.close(),
      });
  });
}

const evaluate = async (client, expression) => {
  const { result, exceptionDetails } = await client.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (exceptionDetails) throw new Error(exceptionDetails.exception?.description ?? exceptionDetails.text);
  return result.value;
};

/** Runs in the page: scroll the reader into view, reveal line 1's translation, tap a word. */
const sceneScript = (word) => `(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  await document.fonts.ready;
  const first = document.querySelector('[data-sentence-id]');
  if (!first) return { ok: false, why: 'no sentences' };
  const heading = [...document.querySelectorAll('h2')].find((h) => h.textContent.trim() === 'The Story');
  const top = heading.getBoundingClientRect().top + window.scrollY;
  window.scrollTo(0, top - 84);
  await sleep(300);
  first.parentElement.querySelector('button[aria-label="Translation"]')?.click();
  await sleep(300);
  const target = [...first.querySelectorAll('span.cursor-pointer')].find(
    (s) => s.textContent.trim().toLowerCase().replace(/[^a-z]/g, '') === ${JSON.stringify(word)},
  );
  target?.click();
  await sleep(500);
  // The word sheet dims the page with a 10% black scrim; on the light theme that turns
  // the cream page grey, which misrepresents the theme, so drop it for the capture.
  document.querySelectorAll('div.fixed.inset-0').forEach((el) => { el.style.background = 'transparent'; });
  return { ok: !!target, why: target ? '' : 'word not found in sentence 1' };
})()`;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const profile = await mkdtemp(path.join(tmpdir(), "seojae-shots-"));
  const port = 9300 + Math.floor(Math.random() * 600);
  const chrome = spawn(
    findBrowser(),
    [
      "--headless=new",
      `--remote-debugging-port=${port}`,
      "--remote-allow-origins=*",
      `--user-data-dir=${profile}`,
      "--hide-scrollbars",
      "--mute-audio",
      "--no-first-run",
      "--no-default-browser-check",
      "--force-color-profile=srgb",
      "about:blank",
    ],
    { stdio: "ignore" },
  );

  try {
    const targets = await waitForJson(`http://127.0.0.1:${port}/json/list`);
    const page = targets.find((t) => t.type === "page");
    const client = await connect(page.webSocketDebuggerUrl);
    await client.send("Page.enable");
    await client.send("Runtime.enable");
    await client.send("Emulation.setDeviceMetricsOverride", {
      width: VIEW.width,
      height: VIEW.height,
      deviceScaleFactor: VIEW.dpr,
      mobile: true,
    });

    for (const scene of SCENES) {
      // Seed before any page script runs so the theme boot script and the providers see it.
      const seed = `try{localStorage.setItem("luminaread:reading-theme",${JSON.stringify(scene.theme)});localStorage.setItem("luminaread:onboarding",${JSON.stringify(
        JSON.stringify(ONBOARDING),
      )});}catch(e){}`;
      const { identifier } = await client.send("Page.addScriptToEvaluateOnNewDocument", { source: seed });

      const loaded = client.once("Page.loadEventFired");
      await client.send("Page.navigate", { url: `${BASE_URL}/lesson/${scene.slug}` });
      await loaded;
      await sleep(1200); // hydration + the lesson's client chunks

      const outcome = await evaluate(client, sceneScript(scene.word));
      if (!outcome.ok) throw new Error(`${scene.slug}: ${outcome.why}`);

      const theme = await evaluate(client, "document.documentElement.dataset.theme || 'light'");
      if (theme !== scene.theme) throw new Error(`${scene.slug}: expected ${scene.theme} theme, page is ${theme}`);

      const { data } = await client.send("Page.captureScreenshot", { format: "webp", quality: 84 });
      const file = path.join(OUT_DIR, `reader-${scene.theme}.webp`);
      await writeFile(file, Buffer.from(data, "base64"));
      console.log(`${scene.theme.padEnd(5)} ${scene.slug}  →  ${path.relative(process.cwd(), file)}  (${Math.round((data.length * 3) / 4 / 1024)} KB)`);

      await client.send("Page.removeScriptToEvaluateOnNewDocument", { identifier });
    }
    client.close();
  } finally {
    chrome.kill();
    await sleep(300);
    await rm(profile, { recursive: true, force: true }).catch(() => {});
  }
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
