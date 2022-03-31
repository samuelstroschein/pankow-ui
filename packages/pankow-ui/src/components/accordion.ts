import { css } from "../functions/css";
import { forEachColorVariant } from "../functions/forEachColorVariant";
import { ParsedConfig } from "../types/parsedConfig";

export function accordion({ config }: { config: ParsedConfig }) {
  return css(`
    .accordion {
      @apply 
        p-4 
        ${config.borderRadius("base")};
    }

    .accordion-item {

    }

    .accordion-expanded {
        @apply bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white;
    }

    ${forEachColorVariant(
      config.colorSystem.semanticColors,
      ({ name }) => `
        .accordion-${name} {
          @apply
            bg-${name}-container
            text-on-${name}-container;
        }
    `
    )}
  `);
}
