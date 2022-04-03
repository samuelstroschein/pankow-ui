/**
 * Standonlone tailwind css plugin.
 */

import plugin from "tailwindcss/plugin";
import { defaultConfig } from "./defaultConfig";
import { parseConfig } from "./parseConfig";

const parsedConfig = parseConfig(defaultConfig);

// tailwind requires commonjs
// therefore, `module.exports` instead of `export plugin`
module.exports = plugin(() => null, {
  theme: {
    extend: {
      colors: parsedConfig.colors,
    },
  },
});
