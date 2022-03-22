import { Config } from "../config";
import { css } from "../css";

export function toggle(args: { config: Config }) {

  const styled = `
  .toggle {
    --chkbg: hsla(var(--bc) / 0.2);
    --handleoffset: 1.5rem;
    @apply h-6 w-12 cursor-pointer appearance-none border border-base-content border-opacity-20 bg-base-content bg-opacity-20 duration-300 ease-in-out rounded-badge;
    transition: background, box-shadow var(--animation-input, 0.2s) ease-in-out;
    box-shadow: calc(var(--handleoffset) * -1) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;
    &:focus-visible {
      outline: 2px solid hsl(var(--bc));
      outline-offset: 2px;
    }
    &:checked,
    &[checked="true"] {
      --chkbg: hsl(var(--bc));
      @apply border-opacity-100 bg-opacity-100;
      box-shadow: var(--handleoffset) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;
      [dir="rtl"] & {
        box-shadow: calc(var(--handleoffset) * 1) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;
      }
    }
    &:indeterminate {
      --chkbg: hsl(var(--bc));
      @apply border-opacity-100 bg-opacity-100;
      box-shadow: calc(var(--handleoffset) / 2) 0 0 2px hsl(var(--b1)) inset, calc(var(--handleoffset) / -2) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;
      [dir="rtl"] & {
        box-shadow: calc(var(--handleoffset) / 2) 0 0 2px hsl(var(--b1)) inset, calc(var(--handleoffset) / -2) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;
      }
    }
    &-primary {
      &:focus-visible {
        outline: 2px solid hsl(var(--p));
      }
      &:checked,
      &[checked="true"] {
        --chkbg: hsl(var(--p));
        @apply border-primary;
        @apply border-primary border-opacity-10 bg-primary text-primary-content;
      }
    }
    &-secondary {
      &:focus-visible {
        outline: 2px solid hsl(var(--s));
      }
      &:checked,
      &[checked="true"] {
        --chkbg: hsl(var(--s));
        @apply border-secondary;
        @apply border-secondary border-opacity-10 bg-secondary text-secondary-content;
      }
    }
    &-accent {
      &:focus-visible {
        outline: 2px solid hsl(var(--a));
      }
      &:checked,
      &[checked="true"] {
        --chkbg: hsl(var(--a));
        @apply border-accent;
        @apply border-accent border-opacity-10 bg-accent text-accent-content;
      }
    }
    &:disabled {
      @apply cursor-not-allowed border-transparent bg-base-content bg-opacity-20;
    }
  }
  .toggle-mark {
    @apply hidden;
  }
  
  `;
  const unstyled = `
    .toggle {
      @apply shrink-0;
    }  
    .toggle {
      &-xs {
        --handleoffset: 0.5rem;
        @apply h-4 w-6;
      }
      &-sm {
        --handleoffset: 0.75rem;
        @apply h-5 w-8;
      }
      &-md {
        --handleoffset: 1.5rem;
        @apply h-6 w-12;
      }
      &-lg {
        --handleoffset: 2rem;
        @apply h-8 w-16;
      }
    }
    
  `;

  return css(unstyled + styled);
}
