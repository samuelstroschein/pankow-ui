import plugin from "tailwindcss/plugin";
import colors from "./colors/index";
import * as components from "./components/index";
import * as utilities from "./utilities/index";
import { injectThemes } from "./colors/functions";
import themes from "./colors/themes";
import { css } from "./css";

// tailwind requires commonjs
// therefore, `module.exports` instead of `export plugin`
module.exports = plugin(
  ({ addComponents, addUtilities, addBase, config }) => {
    console.log("pankow ui is activating...");
    // adding base style
    addBase(
      css(`
      :root {
        background-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));
        color: hsla(var(--bc) / var(--tw-text-opacity, 1));
      }
    `)
    );

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
    injectThemes(addBase, config, themes);
    console.log("pankow ui setup complete");
  },
  { theme: { extend: { colors } } }
);
