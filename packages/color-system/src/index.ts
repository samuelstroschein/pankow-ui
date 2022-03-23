import plugin from "tailwindcss/plugin";

// tailwind requires commonjs
// therefore, `module.exports` instead of `export plugin`
module.exports = plugin(() => null, {
  theme: {
    extend: {
      colors: {
        /**
         * Primary color.
         *
         * Is used to derive roles for key components across the UI,
         * such as prominent buttons, active states,
         * as well as the tint of elevated surfaces.
         */
        primary: "",
        "on-primary": "",
        "primary-container": "",
        "on-primary-container": "",
        /**
         * Secondary color.
         *
         * Is used for less prominent components in the UI,
         * while expanding the opportunity for color expression.
         */
        secondary: "",
        "on-secondary": "",
        "secondary-container": "",
        "on-secondary-container": "",
        /**
         * Tertiary color.
         *
         * Is used to derive the roles of contrasting accents
         * that can be used to balance primary and secondary
         * colors or bring heightened attention to an element.
         * The tertiary color role is left for teams to use at
         * their discretion and is intended to support broader
         * color expression in products.
         */
        tertiary: "",
        "on-tertiary": "",
        "tertiary-container": "",
        "on-tertiary-container": "",
        /**
         * Neutral color.
         *
         * Is used to derive the roles of surface and background,
         * as well as high emphasis text and icons.
         */
        background: "",
        "on-background": "",
        surface: "",
        "on-surface": "",
        /**
         * Neutral variant color.
         *
         * Is used to derive medium emphasis text and icons,
         * surface variants, and component outlines.
         */
        "surface-variant": "",
        "on-surface-variant": "",
        outline: "",
        /**
         * Error color.
         *
         * Is used to signal error states.
         */
        error: "",
        "on-error": "",
        "error-container": "",
        "on-error-container": "",
      },
    },
  },
});
