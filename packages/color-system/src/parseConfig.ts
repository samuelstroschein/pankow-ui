import { Config } from "./types/config";
import tailwindColors from "tailwindcss/colors";
import { Color } from "./types/color";
import { ParsedConfig } from "./types/parsedConfig";

export function parseConfig(config: Config): ParsedConfig {
  const colors = generateColors(config);

  return {
    ...config,
    colors,
  };
}

// todos:
//  - better default colors?
export const defaultConfig: Config = {
  accentColors: {
    primary: tailwindColors.blue as Color,
    secondary: tailwindColors.indigo as Color,
    tertiary: tailwindColors.teal as Color,
  },
  neutralColors: {
    neutral: tailwindColors.stone as Color,
    neutralVariant: tailwindColors.neutral as Color,
  },
  semanticColors: {
    error: tailwindColors.red as Color,
  },
};

// todos:
// - support surface levels (100,200,300,400,500)
//   see https://m3.material.io/styles/color/the-color-system/color-roles
// - support for custom colors
// - non-hardcoded version
// - derive dark/light mode colors
function generateColors(config: Config) {
  const { accentColors, neutralColors, semanticColors } = config;

  // ---- HELPER VARIABLES -----
  // Some tokens are always white.
  // See https://m3.material.io/styles/color/the-color-system/key-colors-tones
  const white = "#ffffff";
  // regular colors refer to accent and semantic colors.
  // like primary, secondary, error etc.
  const regular = 400;
  const container = 100;
  const onContainer = 900;

  const colors = {
    primary: accentColors.primary[regular],
    "on-primary": white,
    "primary-container": accentColors.primary[container],
    "on-primary-container": accentColors.primary[onContainer],

    secondary: accentColors.secondary[regular],
    "on-secondary": white,
    "secondary-container": accentColors.secondary[container],
    "on-secondary-container": accentColors.secondary[onContainer],

    tertiary: accentColors.tertiary[regular],
    "on-tertiary": white,
    "tertiary-container": accentColors.tertiary[container],
    "on-tertiary-container": accentColors.tertiary[onContainer],

    background: white,
    "on-background": neutralColors.neutral[900],
    surface: white,
    "on-surface": neutralColors.neutral[900],

    "surface-variant": neutralColors.neutralVariant[100],
    "on-surface-variant": neutralColors.neutralVariant[600],
    outline: neutralColors.neutralVariant[400],

    error: semanticColors.error[regular],
    "on-error": white,
    "error-container": semanticColors.error[container],
    "on-error-container": semanticColors.error[onContainer],
  };

  return colors;
}
