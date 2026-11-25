// The Funniest Office Joke, Judged Head to Head
// Writes one single-line office joke to entry.txt (1-200 chars, gate enforced).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const JOKE =
  "I asked IT to fix the printer that only jams on deadline day, and they said they would put in a ticket — the printer ate that too.";

if (JOKE.length < 1 || JOKE.length > MAX_CHARS) {
  throw new Error(`gate: entry must be 1-${MAX_CHARS} chars, got ${JOKE.length}`);
}
if (JOKE.trim() !== JOKE || /[\r\n]/.test(JOKE)) {
  throw new Error("gate: entry must be a single line with no surrounding whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote entry.txt (${JOKE.length} chars)`);
