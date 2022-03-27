import type { Config } from "./types/config";
import type { ParsedConfig } from "./types/parsedConfig";
import { Tailwind } from "./tailwind";

/**
 * Parses the config.
 */
export function parseConfig(config: Config): ParsedConfig {
  return {
    borderRadius: (size) =>
      mapBorderRadius({ size, base: config.borderRadiusBase }),
    borderWidth: () => config.borderWith,
  };
}

/**
 * Maps the size based on the defined "base size".
 *
 * @example
 *    const baseSize = "rounded-lg"

 *    mapSize("sm")
 *    >> "rounded-md"
 *
 *    mapSize("base")
 *    >> "rounded-lg"
 *
 *    mapSize("lg")
 *    >> "rounded-xl"
 */
function mapBorderRadius(args: {
  size: "sm" | "base" | "lg";
  base: Config["borderRadiusBase"];
}): typeof Tailwind["borderRadius"][number] {
  // rounded-none entails no borders whatsoever
  // (disables the "sm", "base", "lg" pattern)
  if (args.base === "rounded-none") {
    return "rounded-none";
  }
  const indexOfBase = Tailwind["borderRadius"].findIndex(
    (value) => value === args.base
  );
  switch (args.size) {
    case "sm":
      return Tailwind["borderRadius"][indexOfBase - 1];
    case "base":
      return Tailwind["borderRadius"][indexOfBase];
    case "lg":
      return Tailwind["borderRadius"][indexOfBase + 1];
  }
}
