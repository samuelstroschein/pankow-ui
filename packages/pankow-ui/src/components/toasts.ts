import { ParsedConfig } from "../types/parsedConfig";
import { css } from "../css";
//TODO change the hard coded Box shoadow color
// warum funktioneirt fill-current nicht ?
export function toasts({ config }: { config: ParsedConfig }) {
  return css(`
    .toast {
      @apply flex m-2  ${config.borderRadius(
        "base"
      )} sm:max-w-max sm:max-w-md sm:m-4   	;
      box-shadow: inset 0 0 0 1px #a3a3a3
      ;

      
    };
    
    .toast-icon {
      @apply flex items-center justify-center w-12	shrink-0 fill-current;
      border: $border-width $border-style transparent;
      border-right: 0;
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
    }
   .toast-content{
     @apply p-4;
   }
`);
}
