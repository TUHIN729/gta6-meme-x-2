// gta6-meme-x entry: copy POST.json from the repository into the output dir.
//
// The repository root is MAKEFUN_BOT_DIR (default /bot) and the destination
// is MAKEFUN_OUTPUT_DIR (default /output). Nothing else is written.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const destination = join(outputDir, "POST.json");

try {
  if (!existsSync(source)) {
    throw new Error(`POST.json not found in repository root: ${source}`);
  }
  // Validate the post file before copying it: it must parse as JSON and
  // its url must look like an X status URL, so a bad POST.json fails here
  // instead of silently reaching the grader.
  const parsed = JSON.parse(readFileSync(source, "utf8"));
  const statusUrl =
    /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;
  if (typeof parsed?.url !== "string" || !statusUrl.test(parsed.url)) {
    throw new Error(`POST.json does not hold a valid X status URL: ${source}`);
  }
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, destination);
  console.log(`copied POST.json (${parsed.url}) to ${destination}`);
} catch (error) {
  console.error(`failed to copy POST.json to ${destination}: ${error.message}`);
  process.exit(1);
}
