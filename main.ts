import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Midnight Fridge Roast entry: one original one-line roast of a smart fridge
// that refuses to open after midnight.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters (this line is 107).
const line =
  "After midnight my fridge won't open for me, but the milk has a curfew exemption, so it gets in and I don't.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
if (readFileSync("/output/entry.txt", "utf8") !== line) {
  throw new Error("entry.txt does not match the roast line");
}
console.log(`wrote ${line.length} characters to /output/entry.txt`);
