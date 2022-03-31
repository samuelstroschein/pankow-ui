import { css } from "../functions/css";
import { ParsedConfig } from "../types/parsedConfig";
import { forEachColorVariant } from "../functions/forEachColorVariant";

export function button({ config }: { config: ParsedConfig }) {
  return css(`
   .toast{
    flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800
   }
   .toast-icon{
    inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200
   }
  
  .taost-content{
    ml-3 text-sm font-normal
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
          focus:ring-focus-${name};
      }

      .button-outline-${name} {
        @apply 
          text-${name}
          bg-transparent
          border-${name} 
          hover:bg-hover-${name} hover:text-hover-on-${name}
          focus:ring-focus-${name};
      }
      .button-text-${name} {
        @apply 
          text-${name}
          bg-transparent
          hover:bg-hover-${name} hover:text-hover-on-${name};
      }
  `
   )}
   


`);
}
