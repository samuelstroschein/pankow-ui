import { css } from "../functions/css";
import { forEachColorVariant } from "../functions/forEachColorVariant";
import { ParsedConfig } from "../types/parsedConfig";

export function card({ config }: { config: ParsedConfig }) {
  return css(`

    .card-outline {
        @apply 
          p-4
          ${config.borderRadius("base")};
      }
    `);

  // ${forEachColorVariant(
  //   config.colorSystem.colors,
  //   ({ name }) => `
  //     .card-outline-${name} {
  //       @apply
  //         bg-${name}-container
  //         text-on-${name}-container;
  //     }
  // `
  // )}
  //   `);
}
