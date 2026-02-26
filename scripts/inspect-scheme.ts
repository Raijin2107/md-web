import { generateTheme, COLOR_SEED } from "../lib/theme";

const theme = generateTheme(COLOR_SEED);
console.log("Light Scheme Keys:", Object.keys(theme.schemes.light.toJSON()));
