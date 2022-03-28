import plugin from "tailwindcss/plugin";
import * as components from "./components/index";
import * as utilities from "./utilities/index";
import { parseConfig } from "./parseConfig";
import { defaultConfig } from "./defaultConfig";

// defining the default config and parsedConfig outside
// of the module.exports because we need it to extend the theme

// tailwind requires commonjs
// therefore, `module.exports` instead of `export plugin`
module.exports = plugin(({ addComponents, addUtilities, addBase, config }) => {
  console.log("pankow ui is activating...");
  const parsedConfig = parseConfig(defaultConfig);

  // add components
  for (const component of Object.values(components)) {
    // TODO read config instead of hardcoded default config
    addComponents(component({ config: parsedConfig }));
  }
  // add utilities
  for (const utility of Object.values(utilities)) {
    addUtilities(utility({ config: parsedConfig }));
  }
  console.log("pankow ui setup complete");
});
