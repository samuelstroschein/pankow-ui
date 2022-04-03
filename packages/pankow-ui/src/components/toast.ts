import { css } from "../functions/css";
import { ParsedConfig } from "../types/parsedConfig";
import { forEachColorVariant } from "../functions/forEachColorVariant";

export function toast({ config }: { config: ParsedConfig }) {
  return css(`
   .toast{
    @apply flex bg-surface-100 items-center w-full max-w-xs p-4 ${config.borderRadius("base")} shadow ;

   }
   
   .toast-icon{
    @apply inline-flex items-center justify-center flex-shrink-0 w-8 h-8  
    ${config.borderRadius( "base")} ;
   }
  
  .toast-content{
    @apply  ${config.fontSize("base")} font-medium mx-2;
  }
  .toast-close{
    @apply  ml-auto -mx-1.5 -my-1.5  ${config.borderRadius("base")} inline-flex h-8 w-8  p-1.5 
  }
   ${forEachColorVariant(
     {
       ...config.colorSystem.semanticColors,
     },
     ({ name }) => `
      .toast-icon-${name} { 
        @apply
        bg-${name}-container
        text-on-${name}-container;
          
      }
      .toast-close-${name} {
        @apply 
          text-${name}
          bg-transparent
          border-${name} 
          hover:bg-hover-${name} hover:text-hover-on-${name}
          focus:ring-focus-${name};
      }
      
  `
   )}
   


`);
}
