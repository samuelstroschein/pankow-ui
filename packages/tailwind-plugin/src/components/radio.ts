import { Config } from "../config";
import { css } from "../css";

export function radio(args: { config: Config }) {
  const styled = `
  .radio {
    --chkbg: var(--base-content);
    @apply h-6 w-6 cursor-pointer appearance-none rounded-full border border-base-content border-opacity-20;
    transition: background, box-shadow var(--animation-input, 0.2s) ease-in-out;
    &:focus-visible {
      outline: 2px solid hsl(var(--base-content));
      outline-offset: 2px;
    }
    &:checked {
      @apply bg-base-content;
      animation: radiomark var(--animation-input, 0.2s) ease-in-out;
      box-shadow: 0 0 0 4px hsl(var(--base-100)) inset, 0 0 0 4px hsl(var(--base-100)) inset;
    }
    &-primary {
      --chkbg: var(--primary);
      @apply border-primary hover:border-primary;
      &:focus-visible {
        outline: 2px solid hsl(var(--primary));
      }
      &:checked {
        @apply border-primary bg-primary text-primary-content;
      }
    }
    &-secondary {
      --chkbg: var(--s);
      @apply border-secondary hover:border-secondary;
      &:focus-visible {
        outline: 2px solid hsl(var(--secondary));
      }
      &:checked {
        @apply border-secondary bg-secondary text-secondary-content;
      }
    }
    &-accent {
      --chkbg: var(--accent);
      @apply border-accent hover:border-accent;
      &:focus-visible {
        outline: 2px solid hsl(var(--accent));
      }
      &:checked {
        @apply border-accent bg-accent text-accent-content;
      }
    }
    &:disabled {
      @apply cursor-not-allowed opacity-20;
    }
  }
  
  @keyframes radiomark {
    0% {
      box-shadow: 0 0 0 12px hsl(var(--base-100)) inset, 0 0 0 12px hsl(var(--base-100)) inset;
    }
    50% {
      box-shadow: 0 0 0 3px hsl(var(--base-100)) inset, 0 0 0 3px hsl(var(--base-100)) inset;
    }
    100% {
      box-shadow: 0 0 0 4px hsl(var(--base-100)) inset, 0 0 0 4px hsl(var(--base-100)) inset;
    }
  }
  
  /* backward comptability */
  .radio-mark {
    @apply hidden;
  }
  
  
  `;
  const unstyled = `
  .radio {
    @apply shrink-0;
  }
  .radio {
    &-xs {
      @apply h-4 w-4;
    }
    &-sm {
      @apply h-5 w-5;
    }
    &-md {
      @apply h-6 w-6;
    }
    &-lg {
      @apply h-8 w-8;
    }
  }
  
  `;

  return css(unstyled + styled);
}
