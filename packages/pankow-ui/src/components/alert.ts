import { css } from "../functions/css";
import { forEachColorVariant } from "../functions/forEachColorVariant";
import { ParsedConfig } from "../types/parsedConfig";

export function alert({ config }: { config: ParsedConfig }) {
  return css(`
    .alert {
      @apply 
        p-4
        space-y-2
        ${config.borderRadius("base")};

      &-title-icon {
        @apply w-4 h-4 mr-2;
      }

      &-title {
        @apply flex items-center space-x-2 text-title-md font-title-md;
      }

      &-body {
        @apply text-body-md font-body-md; 
      }

      &-actions {
        @apply flex space-x-2 text-body-md font-body-md pt-2;
      }
    }


    ${forEachColorVariant(
      config.colorSystem.semanticColors,
      ({ name }) => `
        .alert-${name} {
          @apply
            bg-${name}-container
            text-on-${name}-container;
        }
    `
    )}
  `);
}
