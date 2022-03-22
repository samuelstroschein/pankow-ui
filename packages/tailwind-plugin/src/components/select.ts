import { Config } from "../config";
import { css } from "../css";

export function select(args: { config: Config }) {
  const styled = `
  .select {
    @apply border border-base-content border-opacity-0 bg-base-100 pr-10 font-semibold transition duration-200 ease-in-out rounded-btn;
    &-bordered {
      @apply border-opacity-20;
    }
    background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%);
    background-position: calc(100% - 20px) calc(1px + 50%), calc(100% - 16px) calc(1px + 50%);
    background-size: 4px 4px, 4px 4px;
    background-repeat: no-repeat;
    &:focus {
      outline: 2px solid hsla(var(--base-content) / 0.2);
      outline-offset: 2px;
    }
    &-ghost {
      @apply bg-opacity-5;
      &:focus {
        @apply bg-opacity-100 text-base-content;
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
    &-multiple,
    &[multiple],
    &[size]&:not([size="1"]) {
      @apply bg-none pr-4;
    }
  }
  
  
  `;
  const unstyled = `
  .select {
    @apply inline-flex flex-shrink-0 cursor-pointer select-none appearance-none;
    @apply h-12 pl-4 pr-10 text-sm leading-loose min-h-12;
  
    /* disabled */
    &-disabled,
    &[disabled] {
      @apply pointer-events-none;
    }
  }
  .select {
    &-md {
      @apply h-12 pl-4 pr-10 text-sm leading-loose min-h-12;
    }
    &-lg {
      @apply h-16 pl-6 pr-8 text-lg leading-loose min-h-16;
    }
    &-sm {
      @apply h-8 pl-3 pr-8 text-sm leading-8 min-h-8;
    }
    &-xs {
      @apply h-6 pl-2 pr-8 text-xs leading-relaxed min-h-6;
    }
  }
  
  `;

  return css(unstyled + styled);
}
