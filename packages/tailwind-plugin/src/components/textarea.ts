import { Config } from "../config";
import { css } from "../css";

export function textarea(args: { config: Config }) {
  const styled = `
  .textarea {
    @apply border border-base-content border-opacity-0 bg-base-100 rounded-btn;
    &-bordered {
      @apply border-opacity-20;
    }
    &:focus {
      outline: 2px solid hsla(var(--bc) / 0.2);
      outline-offset: 2px;
    }
    &-ghost {
      @apply bg-opacity-5;
      &:focus {
        @apply bg-opacity-100 text-base-content;
        box-shadow: none;
      }
    }
    &-primary {
      @apply border-primary;
      &:focus {
        outline: 2px solid hsl(var(--p));
      }
    }
    &-secondary {
      @apply border-secondary;
      &:focus {
        outline: 2px solid hsl(var(--s));
      }
    }
    &-accent {
      @apply border-accent;
      &:focus {
        outline: 2px solid hsl(var(--a));
      }
    }
    &-info {
      @apply border-info;
      &:focus {
        outline: 2px solid hsl(var(--in));
      }
    }
    &-success {
      @apply border-success;
      &:focus {
        outline: 2px solid hsl(var(--su));
      }
    }
    &-warning {
      @apply border-warning;
      &:focus {
        outline: 2px solid hsl(var(--wa));
      }
    }
    &-error {
      @apply border-error;
      &:focus {
        outline: 2px solid hsl(var(--er));
      }
    }
    &-disabled,
    &[disabled] {
      @apply cursor-not-allowed border-base-200 bg-base-200 text-opacity-20 placeholder-base-content placeholder-opacity-20;
    }
  }
  
  `;
  const unstyled = `
  .textarea {
    @apply flex-shrink transition duration-200 ease-in-out;
    & {
      @apply px-4 py-2  text-sm leading-loose min-h-12;
    }
  }
  
  `;

  return css(unstyled + styled);
}
