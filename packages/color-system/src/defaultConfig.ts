import { Config } from "./types/config";
import { Color } from "./types/color";
import tailwindColors from "tailwindcss/colors";

// TODO - better default colors?
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
