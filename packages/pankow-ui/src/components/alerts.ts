import { css } from "../css";
import { ParsedConfig } from "../types/parsedConfig";

export function alerts({ config }: { config: ParsedConfig }) {
  return css(`
    .alert {
      @apply relative border border-solid ${config.borderRadius(
        "base"
      )} py-5 px-4;

      .icon {
        @apply mr-6;
      }

      .bg-primary {
        @apply text-on-primary;
      }
    }
`);
}
