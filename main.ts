import { mkdirSync, writeFileSync } from "node:fs";

// Two lines to my past self: one warning about a single moment,
// and one sentence on why that moment mattered and what changed.
const lines = [
  "Tell Maya you love her on the platform at Gambir before her 6:40 train pulls away.",
  "You let the doors close in silence, and that quiet ride home is why you now say the hard thing while there is still time to say it.",
];

const text = lines.join("\n") + "\n";
if (text.trim().length < 1 || text.trim().length > 280) {
  throw new Error("entry must be 1-280 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
