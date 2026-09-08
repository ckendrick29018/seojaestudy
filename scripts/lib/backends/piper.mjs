import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { rename, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Piper backend — fully offline neural TTS (https://github.com/rhasspy/piper).
 *
 * No network at generation time, no API. You fetch the binary + voice models
 * once (see scripts/README.md), then this runs them locally forever.
 *
 *   scripts/bin/piper(.exe)
 *   scripts/voices/<model>.onnx  (+ .onnx.json)
 *
 * Piper emits WAV. If `ffmpeg` is on PATH we transcode to MP3; otherwise the
 * clip is kept as WAV (browsers play it fine, it is just larger).
 *
 * Env overrides:
 *   PIPER_BIN         path to the piper executable
 *   PIPER_VOICES      directory holding the .onnx models
 *   PIPER_MODEL_EN    default en_US-amy-medium.onnx
 *   PIPER_MODEL_KO    default ko_KO-kss-medium.onnx
 */

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SCRIPTS_ROOT = path.resolve(HERE, "../..");

const BIN =
  process.env.PIPER_BIN ||
  path.join(SCRIPTS_ROOT, "bin", process.platform === "win32" ? "piper.exe" : "piper");
const VOICES = process.env.PIPER_VOICES || path.join(SCRIPTS_ROOT, "voices");
const MODEL = {
  en: process.env.PIPER_MODEL_EN || path.join(VOICES, "en_US-amy-medium.onnx"),
  ko: process.env.PIPER_MODEL_KO || path.join(VOICES, "ko_KO-kss-medium.onnx"),
};

export const name = "piper";

let ffmpeg = null; // null = unknown, true/false once probed

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: ["pipe", "ignore", "pipe"], ...opts });
    let err = "";
    child.stderr.on("data", (d) => (err += d));
    child.on("error", reject);
    child.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(err.trim() || `${cmd} exited ${code}`)),
    );
    if (opts.input != null) {
      child.stdin.write(opts.input);
      child.stdin.end();
    }
  });
}

async function hasFfmpeg() {
  if (ffmpeg !== null) return ffmpeg;
  try {
    await run("ffmpeg", ["-version"]);
    ffmpeg = true;
  } catch {
    ffmpeg = false;
  }
  return ffmpeg;
}

export async function ext() {
  return (await hasFfmpeg()) ? "mp3" : "wav";
}

export async function check() {
  if (!existsSync(BIN)) {
    throw new Error(
      `piper binary not found at ${BIN}\n` +
        "  Download it from https://github.com/rhasspy/piper/releases and unzip into scripts/bin/\n" +
        "  See scripts/README.md for the exact steps.",
    );
  }
  for (const [lang, model] of Object.entries(MODEL)) {
    if (!existsSync(model)) {
      throw new Error(
        `piper ${lang} voice not found at ${model}\n` +
          "  Download a voice (.onnx + .onnx.json) from https://huggingface.co/rhasspy/piper-voices\n" +
          "  into scripts/voices/ — see scripts/README.md.",
      );
    }
  }
}

export async function synth(text, lang, outPath) {
  const model = MODEL[lang] || MODEL.en;
  const wavPath = outPath.replace(/\.(mp3|wav)$/, "") + ".wav";

  await run(BIN, ["--model", model, "--output_file", wavPath], { input: text });

  if (outPath.endsWith(".mp3")) {
    await run("ffmpeg", ["-y", "-loglevel", "error", "-i", wavPath, "-b:a", "64k", outPath]);
    await unlink(wavPath).catch(() => {});
  } else if (wavPath !== outPath) {
    await rename(wavPath, outPath);
  }
}
