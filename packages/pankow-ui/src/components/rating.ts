import { Config } from "../config";
import { css } from "../css";

export function rating(args: { config: Config }) {
  const styled = `
  .rating {
    & input {
      @apply appearance-none;
      -webkit-appearance: none;
    }
    :where(input) {
      animation: rating-pop var(--animation-input, 0.25s) ease-out;
      @apply h-6 w-6 bg-base-content bg-opacity-100;
    }
    & .rating-hidden {
      @apply w-2 bg-transparent;
    }
    input:checked ~ input {
      @apply bg-opacity-20;
    }
    input:focus-visible {
      @apply transition-transform duration-300 ease-in-out;
      transform: translateY(-0.125em);
    }
  
    & input:active:focus {
      animation: none;
    }
  
    & input:active:focus {
      transform: translateY(-0.125em);
    }
  }
  .rating-half {
    :where(input:not(.rating-hidden)) {
      @apply w-3;
    }
  }
  
  @keyframes rating-pop {
    0% {
      transform: translateY(-0.125em);
    }
    40% {
      transform: translateY(-0.125em);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  `;
  const unstyled = `
  .rating {
    @apply relative inline-flex;
    :where(input) {
      @apply cursor-pointer;
    }
  }
  .rating-xs input {
    @apply h-3 w-3;
  }
  .rating-sm input {
    @apply h-4 w-4;
  }
  .rating-md input {
    @apply h-6 w-6;
  }
  .rating-lg input {
    @apply h-10 w-10;
  }
  
  .rating-half {
    &.rating-xs input:not(.rating-hidden) {
      @apply w-1.5;
    }
    &.rating-sm input:not(.rating-hidden) {
      @apply w-2;
    }
    &.rating-md input:not(.rating-hidden) {
      @apply w-3;
    }
    &.rating-lg input:not(.rating-hidden) {
      @apply w-5;
    }
  }
  
  `;

  return css(unstyled + styled);
}
