import { css } from "../functions/css";
import { ParsedConfig } from "../types/parsedConfig";
import { forEachColorVariant } from "../functions/forEachColorVariant";

export function button({ config }: { config: ParsedConfig }) {
  return css(`
   .button {
     @apply focus:ring-4 font-medium  ${config.borderRadius(
       "base"
     )} focus:outline-none text-center inline-flex items-center
     button-base;

     &-sm {
      @apply ${config.fontSize("sm")} px-4 py-2;
    }

      &-base {
        @apply ${config.fontSize("base")} px-5 py-2.5;
      }

      &-lg {
        @apply ${config.fontSize("lg")} px-6 py-3;
      }
   }

   .button-outline {
      @apply focus:ring-4 font-medium  ${config.borderRadius(
        "base"
      )} focus:outline-none text-center inline-flex items-center
      button-base
      focus:z-10
      ${config.borderWidth()};
      

      &-sm {
        @apply ${config.fontSize("sm")} px-4 py-2;
      }

      &-base {
        @apply ${config.fontSize("base")} px-5 py-2.5;
      }

      &-lg {
        @apply ${config.fontSize("lg")} px-6 py-3;
      }
    }

   ${forEachColorVariant(
     {
       ...config.colorSystem.accentColors,
       ...config.colorSystem.semanticColors,
     },
     ({ name }) => `
      .button-${name} { 
        @apply
          bg-${name}
          text-on-${name}
          hover:bg-hover-${name} hover:text-hover-on-${name}
          focus:ring-focus-${name}
      }

      .button-outline-${name} {
        @apply 
          text-${name}
          bg-background
          border-${name} 
          hover:bg-hover-${name} hover:text-hover-on-${name}
          focus:ring-focus-${name};
      }
  `
   )}
`);
}
