import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import commonjs from "@rollup/plugin-commonjs";

/**
 * What is rollup used for?
 *
 * Compiling and bundling the code. TypeScript needs to be
 * compiled to JavaScript. Furthermore, the CSS needs to be
 * included in the dist(tribution) too.
 */

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    // allow commonjs dependencies
    commonjs(),
    // enable typescript
    typescript(),
    // copy css files into the dist(tribution)
    copy({ targets: [{ src: "src/css/**/*", dest: "dist/css" }] }),
  ],
};
