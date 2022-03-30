import { css } from "../functions/css";
import { forEachColorVariant } from "../functions/forEachColorVariant";
import { ParsedConfig } from "../types/parsedConfig";

export function counter({ config }: { config: ParsedConfig }) {
  return css(`
    .counter {
        @apply 
            px-1.5 py-0
            font-semibold
            ${config.borderWidth()}
            ${config.borderStyle()}
            ${config.borderRadius("base")}
            ${config.fontSize("sm")};
        display: inline-block;
        text-align: center;

        &:empty {
            display: none;
        }
    
        .icon {
            vertical-align: text-top;
            opacity: 0.8;
        }
    }

    ${forEachColorVariant(
      config.colorSystem,
      ({ name }) => `
        .counter-${name} {
            @apply 
                bg-${name}-container
                text-on-${name}-container;
        }
    `
    )}
`);
}
