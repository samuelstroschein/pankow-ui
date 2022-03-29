import { ParsedConfig } from "../types/parsedConfig";
import { css } from "../functions/css";
//TODO change the hard coded Box shoadow color

//TODO close-button is not on the right side in the dismiss function
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
     @apply p-4 ;
   }
   .toast-close-button{
    @apply max-h-14	 p-4  border-0 float-right	;

    &:hover {
      opacity: 0.7;
      outline: none;

    }

    &:active {
      opacity: 0.5;
    }

    .icon {
      margin-right: 0;
    }
  }
`);
}
