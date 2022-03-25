/**
 * In case this package is used as standalone plugin.
 */

import plugin from "tailwindcss/plugin";
import { defaultConfig, parseConfig } from "./parseConfig";

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
