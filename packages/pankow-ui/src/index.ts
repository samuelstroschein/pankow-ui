import plugin from "tailwindcss/plugin";
import * as components from "./components/index";
import { parseConfig } from "./config";
// import * as utilities from "./utilities/index";
import { css } from "./css";
import { Config } from "./types/config";

// tailwind requires commonjs
// therefore, `module.exports` instead of `export plugin`
module.exports = plugin(({ addComponents, addUtilities, addBase, config }) => {
  console.log("pankow ui is activating...");
  // adding base style
  addBase(
    css(`
      :root {
        background-color: hsla(var(--base-content) / var(--tw-bg-opacity, 1));
        color: hsla(var(--base-content) / var(--tw-text-opacity, 1));
      }
    `)
  );
  // iterating over all exported components
  // to add the css to tailwind
  for (const name of Object.keys(components)) {
    // TODO read config instead of hardcoded default config
    const parsedConfig = parseConfig(defaultConfig);
    addComponents(
      components[name as keyof typeof components]({
        config: { borderRadius: () => "rounded" },
      })
    );
  }
  // add utilities
  // for (const name of Object.keys(utilities)) {
  //   addUtilities(
  //     utilities[name as keyof typeof utilities]({
  //       config: { styled: true },
  //     })
  //   );
  // }
  console.log("pankow ui setup complete");
});

const defaultConfig: Config = {
  borderRadiusBase: "rounded",
};
