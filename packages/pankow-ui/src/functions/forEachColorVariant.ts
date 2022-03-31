import { ParsedConfig } from "../types/parsedConfig";
import { css } from "./css";

/**
 * Each color variant that is supposed to lead to a dedicated component.
 *
 * @example
 *    ${forEachColorVariant(
 *     config.colorSystem.colors,
 *     ({ name, bgColor, textColor }) =>
 *     .alert-${name} {
 *         @apply bg-${bgColor} text-on-${textColor};
 *       }
 *  )}
 */
export function forEachColorVariant(
  colorSystem: ParsedConfig["colorSystem"],
  callback: (value: { name: string }) => string
): string {
  // only accent and semantic colors are considered to by
  // component variants. Other, auto-generated colors
  // are not considered.
  const colors = Object.keys({
    ...colorSystem.accentColors,
    ...colorSystem.semanticColors,
  });
  return colors.map((name) => callback({ name })).join("\n");
}
