import {
    themeFromSourceColor,
    argbFromHex,
    hexFromArgb,
    Theme
} from "@material/material-color-utilities";

export const generateTheme = (sourceColorHex: string): Theme => {
    return themeFromSourceColor(argbFromHex(sourceColorHex));
};

export const themeToCssVariables = (theme: Theme) => {
    const light = theme.schemes.light;
    const dark = theme.schemes.dark;
    const palette = theme.palettes;

    const toCssName = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

    const lightVariables = Object.entries(light.toJSON()).reduce((acc, [key, value]) => {
        acc[`--md-sys-color-${toCssName(key)}`] = hexFromArgb(value as number);
        return acc;
    }, {} as Record<string, string>);

    const darkVariables = Object.entries(dark.toJSON()).reduce((acc, [key, value]) => {
        acc[`--md-sys-color-${toCssName(key)}`] = hexFromArgb(value as number);
        return acc;
    }, {} as Record<string, string>);

    // Add Surface Container tokens (Neutral palette)
    // Light Tones
    lightVariables['--md-sys-color-surface-container-lowest'] = hexFromArgb(palette.neutral.tone(100));
    lightVariables['--md-sys-color-surface-container-low'] = hexFromArgb(palette.neutral.tone(96));
    lightVariables['--md-sys-color-surface-container'] = hexFromArgb(palette.neutral.tone(94));
    lightVariables['--md-sys-color-surface-container-high'] = hexFromArgb(palette.neutral.tone(92));
    lightVariables['--md-sys-color-surface-container-highest'] = hexFromArgb(palette.neutral.tone(90));

    // Dark Tones
    darkVariables['--md-sys-color-surface-container-lowest'] = hexFromArgb(palette.neutral.tone(4));
    darkVariables['--md-sys-color-surface-container-low'] = hexFromArgb(palette.neutral.tone(10));
    darkVariables['--md-sys-color-surface-container'] = hexFromArgb(palette.neutral.tone(12));
    darkVariables['--md-sys-color-surface-container-high'] = hexFromArgb(palette.neutral.tone(17));
    darkVariables['--md-sys-color-surface-container-highest'] = hexFromArgb(palette.neutral.tone(22));

    return { lightVariables, darkVariables };
};

export const COLOR_SEED = "#00CED1";
