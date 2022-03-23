// @ts-ignore
import postcssJs from "postcss-js";
import postcss from "postcss";

/**
 * Parses PostCSS strings to a Css in JS object.
 *
 * Read more here https://cssinjs.org/?v=v10.9.0
 *
 * @example
 * const result = css(`
 *  .button {
 *    background-color:red;
 *  }
 * `)
 * console.log(result)
 * >> {
 *  '.button': {
 *    background-color: 'red'
 *  }
 * }
 */
export function css(css: string): Record<string, string> {
  return postcssJs.objectify(postcss.parse(css));
}
