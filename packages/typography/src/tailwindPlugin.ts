/**
 * Standonlone tailwind css plugin.
 */

import plugin from "tailwindcss/plugin";
import * as utilities from "./utilities/index";
import * as components from "./components/index";

// tailwind requires commonjs
// therefore, `module.exports` instead of `export plugin`
module.exports = plugin(({ addUtilities, addComponents }) => {
  // add utilities
  for (const utility of Object.values(utilities)) {
    addUtilities(utility);
  }
  // add components
  for (const component of Object.values(components)) {
    addComponents(component);
  }
});
