import plugin, { TailwindPlugin } from "tailwindcss/plugin";
import { merge } from "lodash";
import { parseConfig } from "./functions/parseConfig";
import { defaultConfig } from "./defaultConfig";
import { Config } from "./types/config";
import * as components from "./components/index";
import * as utilities from "./utilities/index";
import * as typography from "@pankow-ui/typography/lib";

/**
 * Pankow UI TailwindCSS plugin.
 *
 * The defined config will be merged with the default config.
 * All provided values will over-write the default values.
 *
 * @example
 *    --- tailwind.config.js ---
 *    const pankowUi = require("pankow-ui");
 *
 *    module.exports = {
 *       plugins: [
 *          pankowUi.withConfig({})
 *       ]
 *    }
 *
 */
export function withConfig(config: Partial<Config>): TailwindPlugin {
  // merge mutates default config
  merge(defaultConfig, config);
  const parsedConfig = parseConfig(defaultConfig);
  return plugin(
    ({ addComponents, addUtilities }) => {
      console.log("pankow ui is activating...");
      // add components
      for (const component of Object.values(components)) {
        addComponents(component({ config: parsedConfig }));
      }
      // add utilities
      for (const utility of Object.values(utilities)) {
        addUtilities(utility({ config: parsedConfig }));
      }
      // add typography utilities
      for (const utility of Object.values(typography.utilities)) {
        addUtilities(utility);
      }
      console.log("pankow ui setup complete");
    },
    {
      theme: {
        extend: {
          colors: parsedConfig.colorSystem.colors,
        },
      },
    }
  );
}
