import { generateTheme, themeToCssVariables, COLOR_SEED } from "../lib/theme";
import fs from "fs";
import path from "path";

const theme = generateTheme(COLOR_SEED);
const { lightVariables, darkVariables } = themeToCssVariables(theme);

let css = `@import "tailwindcss";

:root {
  /* Material 3 System Color Tokens - Generated from ${COLOR_SEED} */
`;

Object.entries(lightVariables).forEach(([key, value]) => {
  css += `  ${key}: ${value};\n`;
});

css += `
  --background: var(--md-sys-color-background);
  --foreground: var(--md-sys-color-on-background);
}

body {
  /* Global Font Definitions moved to body to access Geist variable */
  --my-brand-font: var(--font-geist-sans), system-ui;
  --my-headline-font: var(--font-geist-sans), system-ui;
  --my-title-font: var(--font-geist-sans), system-ui;
  --my-plain-font: var(--font-geist-sans), system-ui;

  --md-ref-typeface-brand: var(--my-brand-font);
  --md-ref-typeface-plain: var(--my-plain-font);

  --md-sys-typescale-headline-font: var(--my-headline-font);
  --md-sys-typescale-title-font: var(--my-title-font);
  --md-sys-typescale-display-font: var(--my-brand-font);
  --md-sys-typescale-body-font: var(--my-plain-font);
  --md-sys-typescale-label-font: var(--my-plain-font);

  /* Specific typescales for Material components */
  --md-sys-typescale-label-large-font: var(--my-plain-font);
  --md-sys-typescale-label-medium-font: var(--my-plain-font);
  --md-sys-typescale-label-small-font: var(--my-plain-font);
  --md-sys-typescale-body-large-font: var(--my-plain-font);
  --md-sys-typescale-body-medium-font: var(--my-plain-font);
  --md-sys-typescale-body-small-font: var(--my-plain-font);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--md-sys-color-primary);
  --color-on-primary: var(--md-sys-color-on-primary);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
`;

Object.entries(darkVariables).forEach(([key, value]) => {
  css += `    ${key}: ${value};\n`;
});

css += `
    --background: var(--md-sys-color-background);
    --foreground: var(--md-sys-color-on-background);
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  transition: background-color 0.3s ease, color 0.3s ease;
}
`;

const globalsPath = path.join(__dirname, "../app/globals.css");
fs.writeFileSync(globalsPath, css);
console.log(`Successfully updated ${globalsPath}`);
