import { Config } from "../config";
import { css } from "../css";

export function link(args: { config: Config }) {
  const styled = `
    .link {
      &-primary {
        @apply text-primary hover:text-primary-focus;
      }
      &-secondary {
        @apply text-secondary hover:text-secondary-focus;
      }
      &-accent {
        @apply text-accent hover:text-accent-focus;
      }
      &-neutral {
        @apply text-neutral hover:text-neutral-focus;
      }
      &:focus {
        @apply outline-none;
      }
      &:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
      }
    }
  `;

  const unstyled = `
    .link {
      @apply cursor-pointer underline;
      &-hover {
        @apply no-underline hover:underline;
      }
    }
  `;

  return css(styled + unstyled);
}
