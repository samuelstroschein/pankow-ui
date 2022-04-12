import { Color } from "./color";

export type Config = {
  accentColors: {
    /**
     * Primary color.
     *
     * Is used to derive roles for key components across the UI,
     * such as prominent buttons, active states,
     * as well as the tint of elevated surfaces.
     */
    primary: Color;
    /**
     * Secondary color.
     *
     * Is used for less prominent components in the UI,
     * while expanding the opportunity for color expression.
     */
    secondary: Color;
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
    tertiary: Color;
    [custom: string]: Color;
  };
  neutralColors: {
    /**
     * Neutral color.
     *
     * Is used to derive the roles of surface and background,
     * as well as high emphasis text and icons.
     */
    neutral: Color;
    /**
     * Neutral variant color.
     *
     * Is used to derive medium emphasis text and icons,
     * surface variants, and component outlines.
     */
    neutralVariant: Color;
    [custom: string]: Color;
  };
  semanticColors: {
    /**
     * Error color.
     *
     * Is used to signal error states.
     */
    error: Color;
    [custom: string]: Color;
  };
  /**
   * The color levels of the color system.
   *
   * Base colors refer to accent and semantic colors
   * like primary, secondary, error etc.
   */
  colorLevels: {
    base: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    container: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    onContainer: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  };
};
