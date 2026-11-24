// Funniest Time Machine Warning Label — program/v1 entry (Node 22, no dependencies).
//
// What this program does
// -----------------------
// 1. Holds the entry text in one constant, LABEL: a single warning label for
//    a time machine, written like a genuine safety notice. It turns a real
//    time-travel hazard — marrying your own great-grandmother — into the joke:
//    the wedding is lovely, the honeymoon is awkward, and the punchline lands
//    in the last few words, when the reader realises the groom is his own
//    best man. 117 characters, every phrase doing work.
// 2. Creates /output if it does not exist yet.
// 3. Writes LABEL to /output/entry.txt as UTF-8, exactly as-is: no trailing
//    newline, no extra whitespace, so the file is byte-identical to the label
//    and the sealed gate (1–120 characters, not only whitespace) passes.
//
// The program is deterministic: same input, same file, every run. It reads
// nothing, calls no network, and depends on nothing beyond Node's stdlib.

import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: Do not marry your great-grandmother. The wedding is lovely, the honeymoon awkward, and you are the best man.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
