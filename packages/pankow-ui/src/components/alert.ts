import { css } from "../functions/css";
import { forEachColorVariant } from "../functions/forEachColorVariant";
import { ParsedConfig } from "../types/parsedConfig";

export function alert({ config }: { config: ParsedConfig }) {
  return css(`
    .alert {
      @apply 
        p-4 
        ${config.borderRadius("base")};
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
