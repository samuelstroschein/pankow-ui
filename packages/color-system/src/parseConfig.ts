import { Config } from "./types/config";
import { ParsedConfig } from "./types/parsedConfig";
import { TinyColor } from "@ctrl/tinycolor";

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
  const regular = 700;
  const container = 100;
  const onContainer = 900;

  const colors: Partial<ParsedConfig["colors"]> = {
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

    "surface-100": new TinyColor(accentColors.primary[900])
      .setAlpha(0.05)
      .toHex8String(),
    "surface-200": new TinyColor(accentColors.primary[900])
      .setAlpha(0.08)
      .toHex8String(),
    "surface-300": new TinyColor(accentColors.primary[900])
      .setAlpha(0.11)
      .toHex8String(),
    "surface-400": new TinyColor(accentColors.primary[900])
      .setAlpha(0.12)
      .toHex8String(),
    "surface-500": new TinyColor(accentColors.primary[900])
      .setAlpha(0.14)
      .toHex8String(),
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
    colors[`hover-${name}`] = new TinyColor(hex).darken(8).toHex8String();
    colors[`focus-${name}`] = new TinyColor(hex).darken(12).toHex8String();
    colors[`press-${name}`] = new TinyColor(hex).darken(12).toHex8String();
    colors[`drag-${name}`] = new TinyColor(hex).darken(16).toHex8String();

    // no selected or activated colors because:
    //   "Unlike hover, focus, pressed, and dragged states
    //    that use state layers, components using the activated
    //    or selected states change the container and content
    //    color directly".
    // colors[`selected-${name}`] = colorShade(hex, 16);
    // colors[`activated-${name}`] = colorShade(hex, 16);
  }
  // "single" interaction states.
  // see https://m3.material.io/foundations/interaction-states
  // disabled states always use the on-surface color but with
  // different opacity values
  // colors[`disabled-content`] = new TinyColor(colors["on-surface-100-container"])
  //   .setAlpha(38)
  //   .toHex8String();
  colors[`disabled-content`] = new TinyColor(colors["on-surface"])
    .setAlpha(0.38)
    .toHex8String();
  colors[`disabled-container`] = new TinyColor(colors["on-surface"])
    .setAlpha(0.12)
    .toHex8String();

  return colors as ParsedConfig["colors"];
}
