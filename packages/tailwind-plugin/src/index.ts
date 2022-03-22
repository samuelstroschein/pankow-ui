import type { TailwindPluginFn } from "tailwindcss/plugin";
import { button } from "./components/button";

const plugin: TailwindPluginFn = ({ addComponents }) => {
  console.log("pankow ui is activating...");
  addComponents(button());
  console.log("pankow ui setup complete");
};

// is commonjs syntax, tailwind requires commonjs
module.exports = plugin;
