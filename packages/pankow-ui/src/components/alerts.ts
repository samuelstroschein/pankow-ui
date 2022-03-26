import { css } from "../css";
import { ParsedConfig } from "../types/parsedConfig";

export function alerts({ config }: { config: ParsedConfig }) {
  return css(`
    .alert {
      @apply relative border border-solid ${config.borderRadius(
        "base"
      )} py-5 px-4 space-y-2;

      .icon {
        @apply mr-2 mb-1;
      }

    }
`);
}
