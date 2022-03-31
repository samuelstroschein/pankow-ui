import { css } from "../functions/css";
import { forEachColorVariant } from "../functions/forEachColorVariant";
import { ParsedConfig } from "../types/parsedConfig";

export function badge({ config }: { config: ParsedConfig }) {
  const x = `
    .badge {
      @apply 
        font-semibold
        px-2.5
        py-1
        ${config.borderRadius("sm")}
    }

    ${forEachColorVariant(
      config.colorSystem.semanticColors,
      ({ name }) => `
        .badge-${name} {
          @apply
            bg-${name}-container
            text-on-${name}-container;
        }
    `
    )}
  `;

  return css(x);
}
