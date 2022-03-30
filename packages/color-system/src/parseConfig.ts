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
    // opacity values are from https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
    //
    // Futhermore, in order to follow the semantics of the other colors,
    // the "container" colors are added although they are the same color.
    "surface-100": accentColors.primary[900] + "0D",
    "on-surface-100": accentColors.primary[900],
    "surface-100-container": accentColors.primary[900] + "0D",
    "on-surface-100-container": neutralColors.neutral[900],
    "surface-200": accentColors.primary[900] + "14",
    "on-surface-200": accentColors.primary[900],
    "surface-200-container": accentColors.primary[900] + "14",
    "on-surface-200-container": neutralColors.neutral[900],
    "surface-300": accentColors.primary[900] + "1C",
    "on-surface-300": accentColors.primary[900],
    "surface-300-container": accentColors.primary[900] + "1C",
    "on-surface-300-container": neutralColors.neutral[900],
    "surface-400": accentColors.primary[900] + "1F",
    "on-surface-400": accentColors.primary[900],
    "surface-400-container": accentColors.primary[900] + "1F",
    "on-surface-400-container": neutralColors.neutral[900],
    "surface-500": accentColors.primary[900] + "24",
    "on-surface-500": accentColors.primary[900],
    "surface-500-container": accentColors.primary[900] + "24",
    "on-surface-500-container": neutralColors.neutral[900],
    // utility on-surface color. avoids the need to reference
    // on-surface-100, on-surface-200, etc.
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
    colors[`hover-${name}`] = new TinyColor(hex).darken(8).toHexString();
    colors[`focus-${name}`] = new TinyColor(hex).darken(12).toHexString();
    colors[`press-${name}`] = new TinyColor(hex).darken(12).toHexString();
    colors[`drag-${name}`] = new TinyColor(hex).darken(16).toHexString();
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
  colors[`disabled-content`] = new TinyColor(colors["on-surface-100-container"])
    .darken(38)
    .toHexString();
  colors[`disabled-container`] = new TinyColor(
    colors["on-surface-100-container"]
  )
    .darken(12)
    .toHexString();

  return colors;
}
