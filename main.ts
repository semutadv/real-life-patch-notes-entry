// Real-Life Patch Notes: The Comedy Changelog — entry program (program/v1).
// The joke is written the way a real release note would ship it: version
// number first, the fix stated flatly, and the known issue admitted in the
// same breath. On run, this writes that one line to <output>/entry.txt.
// The output directory is a mount point in the grader, so we only ever
// clear its CONTENTS; deleting the directory itself would throw EBUSY.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "Patch notes for me, v32.1: fixed the bug where I say 'one more episode' — known issue: the fix does not work after 11 p.m.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), ENTRY_TEXT, "utf8");
}

main();
