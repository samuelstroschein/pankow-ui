// @ts-ignore
import postcssJs from "postcss-js";
import postcss from "postcss";

/**
 * Parse PostCSS strings to a Css in JS object.
 *
 * Read more here https://cssinjs.org/?v=v10.9.0
 */
export function css(css: string): Record<string, string> {
  return postcssJs.objectify(postcss.parse(css));
}
