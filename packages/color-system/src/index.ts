import plugin from "tailwindcss/plugin";
import { parseConfig } from "./parseConfig";
import tailwindColors from "tailwindcss/colors";
import { Color } from "./types/color";
import { Config } from "./types/config";

// todos:
//  - better default colors?
const defaultConfig: Config = {
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

const config = parseConfig(defaultConfig);

// tailwind requires commonjs
// therefore, `module.exports` instead of `export plugin`
module.exports = plugin(() => null, {
  theme: {
    extend: {
      colors: config.colors,
    },
  },
});
