import { Config } from "../config";
import { css } from "../css";

export function input(args: { config: Config }) {
  const styled = `
  .input {
    @apply border border-base-content border-opacity-0 bg-base-100 rounded-btn;
    &-bordered {
      @apply border-opacity-20;
    }
    &:focus {
      outline: 2px solid hsla(var(--base-content) / 0.2);
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
        outline: 2px solid hsl(var(--primary));
      }
    }
    &-secondary {
      @apply border-secondary;
      &:focus {
        outline: 2px solid hsl(var(--secondary));
      }
    }
    &-accent {
      @apply border-accent;
      &:focus {
        outline: 2px solid hsl(var(--accent));
      }
    }
    &-info {
      @apply border-info;
      &:focus {
        outline: 2px solid hsl(var(--info));
      }
    }
    &-success {
      @apply border-success;
      &:focus {
        outline: 2px solid hsl(var(--success));
      }
    }
    &-warning {
      @apply border-warning;
      &:focus {
        outline: 2px solid hsl(var(--warning));
      }
    }
    &-danger {
      @apply border-danger;
      &:focus {
        outline: 2px solid hsl(var(--danger));
      }
    }
    &-disabled,
    &[disabled] {
      @apply cursor-not-allowed border-base-200 bg-base-200 text-opacity-20 placeholder-base-content placeholder-opacity-20;
    }
    /* &::-webkit-calendar-picker-indicator {
      display: none;
    } */
  }
  
  `;

  const unstyled = `
  .input {
    @apply flex-shrink transition duration-200 ease-in-out;
    @apply h-12 px-4 text-sm leading-loose;

    &-md {
      @apply h-12 px-4 text-sm leading-loose;
    }
    &-lg {
      @apply h-16 px-6 text-lg leading-loose;
    }
    &-sm {
      @apply h-8 px-3 text-sm leading-8;
    }
    &-xs {
      @apply h-6 px-2 text-xs leading-relaxed;
    }
  }
  .input-group {
    @apply flex w-full items-stretch;
    > *,
    > .input {
      @apply rounded-none;
    }
    &-md {
      @apply text-sm leading-loose;
    }
    &-lg {
      @apply text-lg leading-loose;
    }
    &-sm {
      @apply text-sm leading-8;
    }
    &-xs {
      @apply text-xs leading-relaxed;
    }
    :where(span) {
      @apply flex items-center bg-base-300 px-4;
    }
    :first-child {
      border-top-left-radius: var(--rounded-btn, 0.5rem);
      border-top-right-radius: 0;
      border-bottom-left-radius: var(--rounded-btn, 0.5rem);
      border-bottom-right-radius: 0;
    }
    :last-child {
      border-top-left-radius: 0;
      border-top-right-radius: var(--rounded-btn, 0.5rem);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: var(--rounded-btn, 0.5rem);
    }
    &-vertical {
      @apply flex-col;
      :first-child {
        border-top-left-radius: var(--rounded-btn, 0.5rem);
        border-top-right-radius: var(--rounded-btn, 0.5rem);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      :last-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: var(--rounded-btn, 0.5rem);
        border-bottom-right-radius: var(--rounded-btn, 0.5rem);
      }
    }
  }
  
  `;

  return css(styled + unstyled);
}
