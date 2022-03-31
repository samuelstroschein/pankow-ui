import { css } from "../functions/css";
import { forEachColorVariant } from "../functions/forEachColorVariant";
import { ParsedConfig } from "../types/parsedConfig";

export function alert({ config }: { config: ParsedConfig }) {
  const x = `
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
  `;

  return css(x);
}
