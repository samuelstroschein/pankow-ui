/**
 * Standonlone tailwind css plugin.
 */

import plugin from "tailwindcss/plugin";
import * as utilities from "./utilities/index";

// tailwind requires commonjs
// therefore, `module.exports` instead of `export plugin`
module.exports = plugin(({ addUtilities }) => {
  // add utilities
  for (const utility of Object.values(utilities)) {
    addUtilities(utility);
  }
});
