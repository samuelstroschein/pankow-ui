import { ParsedConfig } from "../types/parsedConfig";
import { css } from "../css";

export function toasts({ config }: { config: ParsedConfig }) {
  return css(`
    .toast {
      @apply flex m-2 text-on-background bg-surface ${config.borderRadius(
        "base"
      )} sm:max-w-max sm:max-w-md sm:m-4;
    
      background-color: var(--color-canvas-default);
      box-shadow: inset 0 0 0 1px var(--color-border-default), var(--color-shadow-large);
    
    }
`);
}
