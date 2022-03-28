import { css } from "../functions/css";
import { ParsedConfig } from "../types/parsedConfig";

export function buttons({ config }: { config: ParsedConfig }) {
  return css(`

    .button {
        @apply relative inline-block px-4 py-1.5 text-sm font-semibold
        leading-5 whitespace-nowrap align-middle
        select-none ${config.borderWidth()} ${config.borderRadius("base")};
    

        &:disabled,
        &.disabled,
        &[aria-disabled='true'] {
          cursor: pointer;
        }

        .icon {
          @apply mr-1;
          vertical-align: text-bottom;
        }

        .counter {
          @apply ml-0.5;
          color: inherit;
          text-shadow: none;
          vertical-align: top;
        }
      
        .dropdown-caret {
          @apply pl-1 opacity-80;
        }
      }
`);
}
