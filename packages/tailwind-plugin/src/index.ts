import plugin from "tailwindcss/plugin";
import colors from "./colors/index";
import * as components from "./components/index";
import * as utilities from "./utilities/index";

// tailwind requires commonjs
// therefore, `module.exports` instead of `export plugin`
module.exports = plugin(
  ({ addComponents, addUtilities }) => {
    console.log("pankow ui is activating...");
    // add components
    for (const name of Object.keys(components)) {
      addComponents(
        components[name as keyof typeof components]({
          config: { styled: true },
        })
      );
    }
    // add utilities
    for (const name of Object.keys(utilities)) {
      addUtilities(
        utilities[name as keyof typeof utilities]({
          config: { styled: true },
        })
      );
    }
    console.log("pankow ui setup complete");
  },
  { theme: { extend: { colors } } }
);
