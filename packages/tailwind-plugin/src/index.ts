import type { TailwindPluginFn } from "tailwindcss/plugin";
import * as components from "./components/index";

const plugin: TailwindPluginFn = ({ addComponents }) => {
  console.log("pankow ui is activating...");
  for (const name of Object.keys(components)) {
    addComponents(
      components[name as keyof typeof components]({ config: { styled: true } })
    );
  }
  console.log("pankow ui setup complete");
};

// is commonjs syntax, tailwind requires commonjs
module.exports = plugin;
