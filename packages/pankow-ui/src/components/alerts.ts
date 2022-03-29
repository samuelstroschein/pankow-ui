import { css } from "../functions/css";
import { forEachColorVariant } from "../functions/forEachColorVariant";
import { ParsedConfig } from "../types/parsedConfig";

export function alerts({ config }: { config: ParsedConfig }) {
  return css(`
    .alert {
      @apply relative ${config.borderWidth()} ${config.borderStyle()} 
      ${config.borderRadius("base")} py-5 px-4 space-y-2;

      .icon {
        @apply mr-2 mb-1;
      }

    }

    ${forEachColorVariant(
      config.colorSystem,
      ({ name }) => `
      .alert-${name} {
          @apply bg-${name}-container text-on-${name}-container;
        }      
      `
    )}


  .alert-close-button {
    @apply float-right p-4 m-4 text-center cursor-pointer;

    &:hover {
      opacity: 0.7;
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
