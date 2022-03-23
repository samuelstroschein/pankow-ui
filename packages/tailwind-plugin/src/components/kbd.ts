import { Config } from "../config";
import { css } from "../css";

export function kbd(args: { config: Config }) {
  const styled = `
    .kbd {
      @apply border border-neutral-focus border-opacity-20 bg-base-200 px-2 rounded;
      border-bottom-width: 2px;
      min-height: 2.2em;
      min-width: 2.2em;
    }
  `;

  const unstyled = `
    .kbd {
      @apply inline-flex items-center justify-center;

      &-xs {
        @apply px-1 text-xs;
        min-height: 1.2em;
        min-width: 1.2em;
      }
      &-sm {
        @apply px-1 text-sm;
        min-height: 1.6em;
        min-width: 1.6em;
      }
      &-md {
        @apply px-2 text-base;
        min-height: 2.2em;
        min-width: 2.2em;
      }
      &-lg {
        @apply px-4 text-lg;
        min-height: 2.5em;
        min-width: 2.5em;
      }
    }
  `;

  return css(styled + unstyled);
}
