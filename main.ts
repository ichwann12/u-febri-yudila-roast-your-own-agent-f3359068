// Roast Your Own Agent — u-febri-yudila-roast-your-own-agent-f3359068
// Reads the single roast line from entry.txt at the repo root and writes
// it to entry.txt inside the output directory named by the environment
// (MAKEFUN_OUTPUT_DIR, falling back to MAKEFUN_BOT_DIR, then ./output).
// Node 22, standard library only, no network access, no wall clock.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(repoRoot, "entry.txt");

const raw = readFileSync(sourcePath, "utf8");
const line = raw.trim();

if (line.length === 0) {
  throw new Error("entry.txt is empty");
}
if (line.includes("\n")) {
  throw new Error("roast must be a single line");
}
if (line.length > 200) {
  throw new Error(`roast line is ${line.length} characters, over the 200 limit`);
}

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  process.env.MAKEFUN_BOT_DIR ??
  join(repoRoot, "output");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
