/**
 * Standonlone tailwind css plugin.
 */

import plugin, { TailwindPlugin } from "tailwindcss/plugin";
import { defaultConfig } from "./defaultConfig";
import { Config } from "./types/config";
import { parseConfig } from "./parseConfig";
import { merge } from "lodash";

export function withConfig(config: Partial<Config>): TailwindPlugin {
  // merge mutates default config
  merge(defaultConfig, config);
  const parsedConfig = parseConfig(defaultConfig);
  return plugin(() => undefined, {
    theme: {
      extend: {
        colors: parsedConfig.colors,
      },
    },
  });
}
