import plugin from "tailwindcss/plugin";
import colors from "./colors/index";

// tailwind requires commonjs
// therefore, `module.exports` instead of `export plugin`
module.exports = plugin(() => null, { theme: { extend: { colors } } });
