import { Config } from "../config";
import { css } from "../css";

export function progress(args: { config: Config }) {
  const styled = `
  .progress {
    @apply h-2 rounded-box;
    &::-moz-progress-bar {
      @apply bg-neutral;
    }
    &-primary::-moz-progress-bar {
      @apply bg-primary;
    }
    &-secondary::-moz-progress-bar {
      @apply bg-secondary;
    }
    &-accent::-moz-progress-bar {
      @apply bg-accent;
    }
    &-info::-moz-progress-bar {
      @apply bg-info;
    }
    &-success::-moz-progress-bar {
      @apply bg-success;
    }
    &-warning::-moz-progress-bar {
      @apply bg-warning;
    }
    &-danger::-moz-progress-bar {
      @apply bg-danger;
    }
  
    &:indeterminate::after {
      @apply bg-neutral;
    }
    &-primary:indeterminate::after {
      @apply bg-primary;
    }
    &-secondary:indeterminate::after {
      @apply bg-secondary;
    }
    &-accent:indeterminate::after {
      @apply bg-accent;
    }
    &-info:indeterminate::after {
      @apply bg-info;
    }
    &-success:indeterminate::after {
      @apply bg-success;
    }
    &-warning:indeterminate::after {
      @apply bg-warning;
    }
    &-danger:indeterminate::after {
      @apply bg-danger;
    }
  
    &::-webkit-progress-bar {
      @apply bg-neutral bg-opacity-20 rounded-box;
    }
    &::-webkit-progress-value {
      @apply bg-neutral-focus rounded-box;
    }
    &-primary::-webkit-progress-value {
      @apply bg-primary;
    }
    &-secondary::-webkit-progress-value {
      @apply bg-secondary;
    }
    &-accent::-webkit-progress-value {
      @apply bg-accent;
    }
    &-info::-webkit-progress-value {
      @apply bg-info;
    }
    &-success::-webkit-progress-value {
      @apply bg-success;
    }
    &-warning::-webkit-progress-value {
      @apply bg-warning;
    }
    &-danger::-webkit-progress-value {
      @apply bg-danger;
    }
  }
  
  .progress:indeterminate::after {
    content: "";
    @apply inset-y-0 -left-[40%] w-1/3 absolute rounded-box;
    animation: progress-loading 5s infinite ease-in-out;
  }
  
  @keyframes progress-loading {
    50% {
      left: 107%;
    }
  }
  
  `;
  const unstyled = `
  .progress {
    @apply relative w-full appearance-none overflow-hidden;
  }
  
  `;

  return css(unstyled + styled);
}
