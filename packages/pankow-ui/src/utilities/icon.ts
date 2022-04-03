import { css } from "../functions/css";
import { ParsedConfig } from "../types/parsedConfig";

export function icon({ config }: { config: ParsedConfig }) {
  return css(`
    .icon {
        @apply inline-block overflow-visible fill-current;
    }
`);
}
