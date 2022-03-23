import { Config } from "../config";
import { css } from "../css";

export function checkbox(args: { config: Config }) {
  const styled = `
    .checkbox {
      --chkbg: var(--base-content);
      --chkfg: var(--base-100);
      @apply h-6 w-6 cursor-pointer appearance-none border border-base-content border-opacity-20 rounded;
      &:focus-visible {
        outline: 2px solid hsl(var(--base-content));
        outline-offset: 2px;
      }
      &:checked,
      &[checked="true"] {
        @apply bg-base-content bg-no-repeat;
        animation: checkmark var(--animation-input, 0.2s) ease-in-out;
        background-image: linear-gradient(-45deg, transparent 65%, hsl(var(--chkbg)) 65.99%), linear-gradient(45deg, transparent 75%, hsl(var(--chkbg)) 75.99%), linear-gradient(-45deg, hsl(var(--chkbg)) 40%, transparent 40.99%), linear-gradient(45deg, hsl(var(--chkbg)) 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);
      }
      &:indeterminate {
        @apply bg-base-content bg-no-repeat;
        animation: checkmark var(--animation-input, 0.2s) ease-in-out;
        background-image: linear-gradient(90deg, transparent 80%, hsl(var(--chkbg)) 80%), linear-gradient(-90deg, transparent 80%, hsl(var(--chkbg)) 80%), linear-gradient(0deg, hsl(var(--chkbg)) 43%, hsl(var(--chkfg)) 43%, hsl(var(--chkfg)) 57%, hsl(var(--chkbg)) 57%);
      }
      &-primary {
        --chkbg: var(--primary);
        --chkfg: var(--primary-content);
        @apply border-primary hover:border-primary;
        &:focus-visible {
          outline: 2px solid hsl(var(--primary));
        }
        &:checked,
        &[checked="true"] {
          @apply border-primary bg-primary text-primary-content;
        }
      }
      &-secondary {
        --chkbg: var(--secondary);
        --chkfg: var(--secondary-content);
        @apply border-secondary hover:border-secondary;
        &:focus-visible {
          outline: 2px solid hsl(var(--secondary));
        }
        &:checked,
        &[checked="true"] {
          @apply border-secondary bg-secondary text-secondary-content;
        }
      }
      &-accent {
        --chkbg: var(--accent);
        --chkfg: var(--accent-content);
        @apply border-accent hover:border-accent;
        &:focus-visible {
          outline: 2px solid hsl(var(--accent));
        }
        &:checked,
        &[checked="true"] {
          @apply border-accent bg-accent text-accent-content;
        }
      }
      &:disabled {
        @apply cursor-not-allowed border-transparent bg-base-content opacity-20;
      }
    }
    
    @keyframes checkmark {
      0% {
        background-position-y: 5px;
      }
      50% {
        background-position-y: -2px;
      }
      100% {
        background-position-y: 0;
      }
    }
    
    /* backward comptability */
    .checkbox-mark {
      @apply hidden;
    }
    
    body[dir="rtl"] {
      .checkbox {
        --chkbg: var(--base-content);
        --chkfg: var(--base-100);
        &:checked,
        &[checked="true"] {
          background-image: linear-gradient(45deg, transparent 65%, hsl(var(--chkbg)) 65.99%), linear-gradient(-45deg, transparent 75%, hsl(var(--chkbg)) 75.99%), linear-gradient(45deg, hsl(var(--chkbg)) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(var(--chkbg)) 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99%), linear-gradient(45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%);
        }
      }
    }
  `;

  const unstyled = `
    .checkbox {
      @apply shrink-0;
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
