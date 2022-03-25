import { ParsedConfig } from "../types/parsedConfig";
import { css } from "../css";

export function toasts({ config }: { config: ParsedConfig }) {
  return css(`
    .toast {
      @apply flex m-2 ${config.borderRadius(
        "base"
      )} sm:max-w-max sm:max-w-md sm:m-4;
    
      box-shadow: inset 0 0 0 1px black, var(--color-shadow-large);
      
    };
    
    .toast-icon {
      @apply flex items-center justify-items-center w-12	shrink-0 px-3;
      border: $border-width $border-style transparent;
      border-right: 0;
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
    }
`);
}
