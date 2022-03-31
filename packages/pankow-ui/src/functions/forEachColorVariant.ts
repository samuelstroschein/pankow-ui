import { Color } from "@pankow-ui/color-system";

/**
 * Each color variant that is supposed to lead to a dedicated component.
 *
 * @example
 *    ${forEachColorVariant(
 *     config.colorSystem.colors.accentColors,
 *     ({ name, bgColor, textColor }) =>
 *     .alert-${name} {
 *         @apply bg-${bgColor} text-on-${textColor};
 *       }
 *  )}
 */
export function forEachColorVariant(
  colors: Record<string, Color>,
  callback: (value: { name: string }) => string
): string {
  // only accent and semantic colors are considered to by
  // component variants. Other, auto-generated colors
  // are not considered.
  const colorArray = Object.keys(colors);
  return colorArray.map((name) => callback({ name })).join("\n");
}
