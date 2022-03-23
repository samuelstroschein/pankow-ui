// for now config = color

export type Config = Colors;

type Colors = {
  /**
   * Primary color.
   *
   * Is used to derive roles for key components across the UI,
   * such as prominent buttons, active states,
   * as well as the tint of elevated surfaces.
   */
  primary: string;
  "on-primary": string;
  "primary-container": string;
  "on-primary-container": string;
  /**
   * Secondary color.
   *
   * Is used for less prominent components in the UI,
   * while expanding the opportunity for color expression.
   */
  secondary: string;
  "on-secondary": string;
  "secondary-container": string;
  "on-secondary-container": string;
  /**
   * Tertiary color.
   *
   * Is used to derive the roles of contrasting accents
   * that can be used to balance primary and secondary
   * colors or bring heightened attention to an element.
   * The tertiary color role is left for teams to use at
   * their discretion and is intended to support broader
   * color expression in products.
   */
  tertiary: string;
  "on-tertiary": string;
  "tertiary-container": string;
  "on-tertiary-container": string;
  /**
   * Neutral color.
   *
   * Is used to derive the roles of surface and background,
   * as well as high emphasis text and icons.
   */
  background: string;
  "on-background": string;
  surface: string;
  "on-surface": string;
  /**
   * Neutral variant color.
   *
   * Is used to derive medium emphasis text and icons,
   * surface variants, and component outlines.
   */
  "surface-variant": string;
  "on-surface-variant": string;
  outline: string;
  /**
   * Error color.
   *
   * Is used to signal error states.
   */
  error: string;
  "on-error": string;
  "error-container": string;
  "on-error-container": string;
};

// is default material design 3 light mode for now.
// see https://m3.material.io/styles/color/the-color-system/tokens#7fd4440e-986d-443f-8b3a-4933bff16646
//
// todos:
//  1. use tailwind colors
//  2. how to support dark & light mode?
export const defaultColors: Config = {
  primary: "#6750A4",
  "on-primary": "#FFFFFF",
  "primary-container": "#EADDFF",
  "on-primary-container": "#21005E",
  /**
   * Secondary color.
   *
   * Is used for less prominent components in the UI,
   * while expanding the opportunity for color expression.
   */
  secondary: "#625B71",
  "on-secondary": "#FFFFFF",
  "secondary-container": "#E8DEF8",
  "on-secondary-container": "#1E192B",
  /**
   * Tertiary color.
   *
   * Is used to derive the roles of contrasting accents
   * that can be used to balance primary and secondary
   * colors or bring heightened attention to an element.
   * The tertiary color role is left for teams to use at
   * their discretion and is intended to support broader
   * color expression in products.
   */
  tertiary: "#7D5260",
  "on-tertiary": "#FFFFFF",
  "tertiary-container": "#FFD8E4",
  "on-tertiary-container": "#370B1E",
  /**
   * Neutral color.
   *
   * Is used to derive the roles of surface and background,
   * as well as high emphasis text and icons.
   */
  background: "#FFFBFE",
  "on-background": "#1C1B1F",
  surface: "#FFFBFE",
  "on-surface": "#1C1B1F",
  /**
   * Neutral variant color.
   *
   * Is used to derive medium emphasis text and icons,
   * surface variants, and component outlines.
   */
  "surface-variant": "#E7E0EC",
  "on-surface-variant": "#49454E",
  outline: "#79747E",
  /**
   * Error color.
   *
   * Is used to signal error states.
   */
  error: "#B3261E",
  "on-error": "#FFFFFF",
  "error-container": "#F9DEDC",
  "on-error-container": "#370B1E",
};
