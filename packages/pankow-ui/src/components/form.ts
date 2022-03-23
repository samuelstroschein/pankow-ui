import { Config } from "../config";
import { css } from "../css";

export function form(args: { config: Config }) {
  const styled = `
    .label {
      @apply px-1 py-2;
      &-text {
        @apply text-sm text-base-content;
      }
      &-text-alt {
        @apply text-xs text-base-content;
      }
      a {
        @apply hover:text-base-content;
      }
    }
  `;

  const unstyled = `
    .form-control {
      @apply flex flex-col;
    }
    .label {
      @apply flex select-none items-center justify-between;
    }
  `;

  return css(styled + unstyled);
}
