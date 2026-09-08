import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * edge-tts backend — Microsoft Edge's free "Read Aloud" neural voices.
 *
 *   pip install edge-tts
 *   pip install truststore   # optional: fixes TLS errors behind a corp proxy
 *
 * No API key, no account, good English *and* Korean, MP3 out. It needs network
 * access while generating; the resulting .mp3 files are fully self-hosted, so
 * the app itself has no runtime dependency on it.
 *
 * Work goes through scripts/lib/backends/_edge_tts.py rather than the `edge-tts`
 * CLI so that failures actually exit non-zero and `truststore` can be used.
 *
 * Env overrides:
 *   PYTHON           python executable to use
 *   AUDIO_VOICE_EN   default en-US-AriaNeural
 *   AUDIO_VOICE_KO   default ko-KR-SunHiNeural
 *   AUDIO_RATE       default -8%   (a touch slower, easier to follow)
 */

export const name = "edge-tts";
export const ext = "mp3";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SHIM = path.join(HERE, "_edge_tts.py");

const VOICE = {
  en: process.env.AUDIO_VOICE_EN || "en-US-AriaNeural",
  ko: process.env.AUDIO_VOICE_KO || "ko-KR-SunHiNeural",
};
const RATE = process.env.AUDIO_RATE || "-8%";

const PYTHONS = [
  ...(process.env.PYTHON ? [process.env.PYTHON] : []),
  "python",
  "py",
  "python3",
];

let python = null;

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: ["ignore", "ignore", "pipe"] });
    let err = "";
    child.stderr.on("data", (d) => (err += d));
    child.on("error", reject);
    child.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(err.trim() || `${cmd} exited ${code}`)),
    );
  });
}

async function resolvePython() {
  if (python) return python;
  for (const candidate of PYTHONS) {
    try {
      await run(candidate, ["-c", "import edge_tts"]);
      python = candidate;
      return python;
    } catch {
      // try the next interpreter
    }
  }
  throw new Error(
    "edge-tts (Python package) not found on any of: " +
      PYTHONS.join(", ") +
      "\n  pip install edge-tts          neural voices, needs network at build time" +
      "\n  pip install truststore        optional, fixes TLS errors on corporate networks" +
      "\n  or generate offline:  npm run audio -- --backend piper",
  );
}

export async function check() {
  await resolvePython();
}

export async function synth(text, lang, outPath) {
  const py = await resolvePython();
  await run(py, [
    SHIM,
    "--voice",
    VOICE[lang] || VOICE.en,
    // "=" form so a negative like -8% isn't parsed as a flag
    `--rate=${RATE}`,
    "--text",
    text,
    "--out",
    outPath,
  ]);
}
