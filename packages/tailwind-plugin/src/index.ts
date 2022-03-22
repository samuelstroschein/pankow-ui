import plugin from "tailwindcss/plugin";
import * as components from "./components/index";
import colors from "./colors/index";

// tailwind requires commonjs
// therefore, `module.exports` instead of `export plugin`
module.exports = plugin(
  ({ addComponents }) => {
    console.log("pankow ui is activating...");
    for (const name of Object.keys(components)) {
      addComponents(
        components[name as keyof typeof components]({
          config: { styled: true },
        })
      );
    }
    console.log("pankow ui setup complete");
  },
  { theme: { extend: { colors } } }
);
