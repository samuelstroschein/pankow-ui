import type { TailwindPluginFn } from "tailwindcss/plugin";
import postcss from "postcss";
import fs from "fs";
import path from "path";
// @ts-ignore
import postcssJs from "postcss-js";

const button = fs
  .readFileSync(path.resolve(__dirname, "./css/button.pcss"))
  .toString();

const root = postcss.parse(button);

const asJson = postcssJs.objectify(root);

const plugin: TailwindPluginFn = ({ addComponents }) => {
  console.log("pankow ui is activating...");
  addComponents(asJson);
  console.log("pankow ui setup complete");
};

// is commonjs syntax, tailwind requires commonjs
module.exports = plugin;
