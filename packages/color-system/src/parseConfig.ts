import { Config } from "./types/config";
import { ParsedConfig } from "./types/parsedConfig";

export function parseConfig(config: Config): ParsedConfig {
  const colors = generateColors(config);

  return {
    ...config,
    colors,
  };
}

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

  const colors: ParsedConfig["colors"] = {
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

    // appending the opacity value to the on-surface color.
    //
    // opacity values are from https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
    "surface-100": accentColors.primary[900] + "0D",
    "surface-200": accentColors.primary[900] + "14",
    "surface-300": accentColors.primary[900] + "1C",
    "surface-400": accentColors.primary[900] + "1F",
    "surface-500": accentColors.primary[900] + "24",
    "on-surface": neutralColors.neutral[900],

    "surface-variant": neutralColors.neutralVariant[100],
    "on-surface-variant": neutralColors.neutralVariant[600],
    outline: neutralColors.neutralVariant[400],

    error: semanticColors.error[regular],
    "on-error": white,
    "error-container": semanticColors.error[container],
    "on-error-container": semanticColors.error[onContainer],
  };

  // add interaction state colors
  // see https://m3.material.io/foundations/interaction-states
  for (const [name, hex] of Object.entries(colors)) {
    colors[`hover-${name}`] = colorShade(hex, 8);
    colors[`focus-${name}`] = colorShade(hex, 12);
    colors[`press-${name}`] = colorShade(hex, 12);
    colors[`drag-${name}`] = colorShade(hex, 16);
  }

  return colors;
}

/**
 * Darkens or lightens a hex color.
 */
// @ts-ignore
// taken from https://stackoverflow.com/a/62640342/16690118
const colorShade = (col, amt) => {
  col = col.replace(/^#/, "");
  if (col.length === 3)
    col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];

  let [r, g, b] = col.match(/.{2}/g);
  [r, g, b] = [
    parseInt(r, 16) + amt,
    parseInt(g, 16) + amt,
    parseInt(b, 16) + amt,
  ];

  r = Math.max(Math.min(255, r), 0).toString(16);
  g = Math.max(Math.min(255, g), 0).toString(16);
  b = Math.max(Math.min(255, b), 0).toString(16);

  const rr = (r.length < 2 ? "0" : "") + r;
  const gg = (g.length < 2 ? "0" : "") + g;
  const bb = (b.length < 2 ? "0" : "") + b;

  return `#${rr}${gg}${bb}`;
};
