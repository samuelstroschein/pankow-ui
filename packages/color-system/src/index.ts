import plugin from "tailwindcss/plugin";
import { defaultColors } from "./config";

// tailwind requires commonjs
// therefore, `module.exports` instead of `export plugin`
module.exports = plugin(() => null, {
  theme: {
    extend: {
      colors: defaultColors,
    },
  },
});
