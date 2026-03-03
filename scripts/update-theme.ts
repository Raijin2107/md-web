/**
 * update-theme.ts
 *
 * Reads app/globals.css and surgically replaces only the MD color token
 * blocks between marker comments. Every other line (fonts, Tailwind imports,
 * body rules, @theme, etc.) is left exactly as-is.
 *
 * Marker pairs that must exist in globals.css:
 *   Light tokens  →  inside :root {}
 *     /* [md-tokens:light:start] *\/  …  /* [md-tokens:light:end] *\/
 *
 *   Dark tokens   →  inside .dark {}
 *     /* [md-tokens:dark:start] *\/  …  /* [md-tokens:dark:end] *\/
 *
 * Run:  npx ts-node --project tsconfig.json scripts/update-theme.ts
 */

import { generateTheme, themeToCssVariables, COLOR_SEED } from "../lib/theme";
import fs from "fs";
import path from "path";

// ── 1. Generate new token values ──────────────────────────────────────────────

const theme = generateTheme(COLOR_SEED);
const { lightVariables, darkVariables } = themeToCssVariables(theme);

const toBlock = (vars: Record<string, string>, indent = "  ") =>
  Object.entries(vars)
    .map(([k, v]) => `${indent}${k}: ${v};`)
    .join("\n");

// ── 2. Read the existing file ─────────────────────────────────────────────────

const globalsPath = path.join(__dirname, "../app/globals.css");

if (!fs.existsSync(globalsPath)) {
  console.error(`❌  File not found: ${globalsPath}`);
  process.exit(1);
}

let css = fs.readFileSync(globalsPath, "utf-8");

// ── 3. Helper: replace content between marker comments ────────────────────────

function replaceBetweenMarkers(
  source: string,
  startMarker: string,
  endMarker: string,
  newContent: string
): string {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker);

  if (start === -1 || end === -1) {
    throw new Error(
      `Marker not found.\n  start: "${startMarker}"\n  end:   "${endMarker}"\n\nMake sure globals.css contains both marker comments.`
    );
  }

  const before = source.slice(0, start + startMarker.length);
  const after = source.slice(end);

  return `${before}\n${newContent}\n${after}`;
}

// ── 4. Inject tokens ──────────────────────────────────────────────────────────

css = replaceBetweenMarkers(
  css,
  "/* [md-tokens:light:start] */",
  "/* [md-tokens:light:end] */",
  toBlock(lightVariables, "  ")
);

css = replaceBetweenMarkers(
  css,
  "/* [md-tokens:dark:start] */",
  "/* [md-tokens:dark:end] */",
  toBlock(darkVariables, "  ")
);

// ── 5. Update the seed comment so it's easy to see what generated the file ───

css = css.replace(
  /\/\* Material 3 System Color Tokens - Generated from #[0-9a-fA-F]+ \*\//,
  `/* Material 3 System Color Tokens - Generated from ${COLOR_SEED} */`
);

// ── 6. Write back ─────────────────────────────────────────────────────────────

fs.writeFileSync(globalsPath, css, "utf-8");
console.log(`✅  Injected MD color tokens from seed ${COLOR_SEED} → ${globalsPath}`);