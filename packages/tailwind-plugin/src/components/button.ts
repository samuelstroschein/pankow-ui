import { Config } from "../config";
import { css } from "../css";

export function button(args: { config: Config }) {
  const styled = `
  .btn {
    @apply font-semibold uppercase;
    border-width: var(--border-btn, 1px);
    animation: button-pop var(--animation-btn, 0.25s) ease-out;
    text-transform: var(--btn-text-case, uppercase);
    &:active:hover,
    &:active:focus {
      animation: none;
    }
    &:active:hover,
    &:active:focus {
      transform: scale(var(--btn-focus-scale, 0.95));
    }
  
    /* default btn */
    & {
      @apply border-neutral bg-neutral text-neutral-content;
      &:hover,
      &-active {
        @apply border-neutral-focus bg-neutral-focus;
      }
      &:focus-visible {
        outline: 2px solid hsl(var(--nf));
        outline-offset: 2px;
      }
    }
    /* brand colors */
    &-primary {
      @apply border-primary bg-primary text-primary-content;
      &:hover,
      &.btn-active {
        @apply border-primary-focus bg-primary-focus;
      }
      &:focus-visible {
        outline: 2px solid hsl(var(--p));
      }
    }
    &-secondary {
      @apply border-secondary bg-secondary text-secondary-content;
      &:hover,
      &.btn-active {
        @apply border-secondary-focus bg-secondary-focus;
      }
      &:focus-visible {
        outline: 2px solid hsl(var(--s));
      }
    }
    &-accent {
      @apply border-accent bg-accent text-accent-content;
      &:hover,
      &.btn-active {
        @apply border-accent-focus bg-accent-focus;
      }
      &:focus-visible {
        outline: 2px solid hsl(var(--a));
      }
    }
  
    /* btn with state colors */
    &-info {
      @apply border-info bg-info text-info-content;
      &:hover,
      &.btn-active {
        @apply border-info bg-info;
      }
      &:focus-visible {
        outline: 2px solid hsl(var(--in));
      }
    }
    &-success {
      @apply border-success bg-success text-success-content;
      &:hover,
      &.btn-active {
        @apply border-success bg-success;
      }
      &:focus-visible {
        outline: 2px solid hsl(var(--su));
      }
    }
    &-warning {
      @apply border-warning bg-warning text-warning-content;
      &:hover,
      &.btn-active {
        @apply border-warning bg-warning;
      }
      &:focus-visible {
        outline: 2px solid hsl(var(--wa));
      }
    }
    &-error {
      @apply border-error bg-error text-error-content;
      &:hover,
      &.btn-active {
        @apply border-error bg-error;
      }
      &:focus-visible {
        outline: 2px solid hsl(var(--er));
      }
    }
  
    /* glass */
    &.glass {
      &:hover,
      &.btn-active {
        --glass-opacity: 25%;
        --glass-border-opacity: 15%;
      }
      &:focus-visible {
        outline: 2px solid 0 0 2px currentColor;
      }
    }
  
    /* btn variants */
    &-ghost {
      @apply border border-transparent bg-transparent text-current;
      &:hover,
      &.btn-active {
        @apply border-opacity-0 bg-base-content bg-opacity-20;
      }
      &:focus-visible {
        outline: 2px solid 0 0 2px currentColor;
      }
    }
    &-link {
      @apply border-transparent bg-transparent text-primary;
      &:hover,
      &.btn-active {
        @apply border-transparent bg-transparent underline;
      }
      &:focus-visible {
        outline: 2px solid 0 0 2px currentColor;
      }
    }
  
    /* outline */
    &-outline {
      @apply border-current bg-transparent text-base-content;
      &:hover {
        @apply border-base-content bg-base-content text-base-100;
      }
      &.btn-primary {
        @apply text-primary;
        &:hover {
          @apply border-primary-focus bg-primary-focus text-primary-content;
        }
      }
      &.btn-secondary {
        @apply text-secondary;
        &:hover {
          @apply border-secondary-focus bg-secondary-focus text-secondary-content;
        }
      }
      &.btn-accent {
        @apply text-accent;
        &:hover {
          @apply border-accent-focus bg-accent-focus text-accent-content;
        }
      }
      &.btn-success {
        @apply text-success;
        &:hover {
          @apply border-success bg-success text-success-content;
        }
      }
      &.btn-info {
        @apply text-info;
        &:hover {
          @apply border-info bg-info text-info-content;
        }
      }
      &.btn-warning {
        @apply text-warning;
        &:hover {
          @apply border-warning bg-warning text-warning-content;
        }
      }
      &.btn-error {
        @apply text-error;
        &:hover {
          @apply border-error bg-error text-error-content;
        }
      }
    }
  
    /* disabled */
    &-disabled,
    &[disabled] {
      @apply border-opacity-0 bg-neutral bg-opacity-20 text-base-content text-opacity-20;
    }
  
    /* loading */
    &.loading {
      &.btn-square:before,
      &.btn-circle:before {
        @apply mr-0;
      }
      &.btn-xl:before,
      &.btn-lg:before {
        @apply h-5 w-5;
      }
      &.btn-sm:before,
      &.btn-xs:before {
        @apply h-3 w-3;
      }
    }
  }
  /* group */
  .btn-group {
    & > input[type="radio"]:checked.btn,
    & > .btn-active {
      @apply border-primary bg-primary text-primary-content;
      &:focus-visible {
        outline: 2px solid hsl(var(--p));
      }
    }
    & > .btn:not(:first-child) {
      @apply -ml-px rounded-l-none;
    }
    & > .btn:not(:last-child) {
      @apply rounded-r-none;
    }
  }
  
  @keyframes button-pop {
    0% {
      transform: scale(var(--btn-focus-scale, 0.95));
    }
    40% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1);
    }
  }
  
  `;

  const unstyled = `
  .btn {
    @apply text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none;
    line-height: 1em;
  
    /* disabled */
    &-disabled,
    &[disabled] {
      @apply pointer-events-none;
    }
  
    /* shapes */
    &-square {
      @apply h-12 w-12 p-0;
    }
    &-circle {
      @apply h-12 w-12 rounded-full p-0;
    }
  
    /* loading */
    &.loading {
      &,
      &:hover {
        @apply pointer-events-none;
      }
      &:before {
        @apply mr-2 h-4 w-4 rounded-full border-2;
        animation: spin 2s linear infinite;
        content: "";
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: currentColor;
        border-right-color: currentColor;
      }
    }
    
    &-xs {
      @apply h-6 px-2 min-h-6;
      font-size: 0.75rem;
    }
    &-sm {
      @apply h-8 px-3 min-h-8;
      font-size: 0.875rem;
    }
    &-md {
      @apply h-12 px-4 min-h-12;
      font-size: 0.875rem;
    }
    &-lg {
      @apply h-16 px-6 min-h-16;
      font-size: 1.125rem;
    }
    &-wide {
      @apply w-64;
    }
    &-block {
      @apply w-full;
    }
    &-square {
      &:where(.btn-xs) {
        @apply h-6 w-6 p-0;
      }
      &:where(.btn-sm) {
        @apply h-8 w-8 p-0;
      }
      &:where(.btn-md) {
        @apply h-12 w-12 p-0;
      }
      &:where(.btn-lg) {
        @apply h-16 w-16 p-0;
      }
    }
    &-circle {
      &:where(.btn-xs) {
        @apply h-6 w-6 rounded-full p-0;
      }
      &:where(.btn-sm) {
        @apply h-8 w-8 rounded-full p-0;
      }
      &:where(.btn-md) {
        @apply h-12 w-12 rounded-full p-0;
      }
      &:where(.btn-lg) {
        @apply h-16 w-16 rounded-full p-0;
      }
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .btn.loading:before {
      animation: spin 10s linear infinite;
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  /* group */
  .btn-group {
    @apply flex flex-wrap;
    & > input[type="radio"].btn {
      @apply appearance-none;
    }
    & > input[type="radio"].btn:before {
      content: attr(data-title);
    }
  }
  
  `;

  return css(unstyled + styled);
}
