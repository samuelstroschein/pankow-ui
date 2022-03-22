import { Config } from "../config";
import { css } from "../css";

export function badge(args: { config: Config }) {
  const styled = `
  .badge {
    @apply border border-neutral bg-neutral text-neutral-content rounded-badge;

    &-primary {
      @apply border-primary bg-primary text-primary-content;
    }
    &-secondary {
      @apply border-secondary bg-secondary text-secondary-content;
    }
    &-accent {
      @apply border-accent bg-accent text-accent-content;
    }
  
    &-ghost {
      @apply border-base-200 bg-base-200 text-base-content;
    }
  
    &-outline {
      @apply border-current border-opacity-50 bg-transparent text-base-content;
      &.badge-primary {
        @apply text-primary;
      }
      &.badge-secondary {
        @apply text-secondary;
      }
      &.badge-accent {
        @apply text-accent;
      }
    }
  
    &-info {
      @apply border-transparent bg-info text-info-content;
    }
    &-success {
      @apply border-transparent bg-success text-success-content;
    }
    &-warning {
      @apply border-transparent bg-warning text-warning-content;
    }
    &-danger {
      @apply border-transparent bg-danger text-danger-content;
    }
  }
  
  .btn-outline {
    .badge {
      @apply border-neutral-focus text-neutral-content;
    }
    &.btn-primary .badge {
      @apply border-primary bg-primary text-primary-content;
    }
    &.btn-secondary .badge {
      @apply border-secondary bg-secondary text-secondary-content;
    }
    &.btn-accent .badge {
      @apply border-accent bg-accent text-accent-content;
    }
  
    .badge.outline {
      @apply border-neutral-focus bg-transparent;
    }
    &.btn-primary .badge-outline {
      @apply border-primary bg-transparent text-primary;
    }
    &.btn-secondary .badge-outline {
      @apply border-secondary bg-transparent text-secondary;
    }
    &.btn-accent .badge-outline {
      @apply border-accent bg-transparent text-accent;
    }
  
    &:hover .badge {
      @apply border-base-200 bg-base-200 text-base-content;
      &.outline {
        @apply border-base-200 text-neutral-content;
      }
    }
    &.btn-primary:hover .badge {
      @apply border-primary-content bg-primary-content text-primary;
      &.outline {
        @apply border-primary-content bg-primary-focus text-primary-content;
      }
    }
    &.btn-secondary:hover .badge {
      @apply border-secondary-content bg-secondary-content text-secondary;
      &.outline {
        @apply border-secondary-content bg-secondary-focus text-secondary-content;
      }
    }
    &.btn-accent:hover .badge {
      @apply border-accent-content bg-accent-content text-accent;
      &.outline {
        @apply border-accent-content bg-accent-focus text-accent-content;
      }
    }
  }
  
  `;

  const unstyled = `
    .badge {
      @apply inline-flex items-center justify-center transition duration-200 ease-in-out;
      @apply h-5 text-sm leading-5;
      width: fit-content;
      padding-left: 0.563rem;
      padding-right: 0.563rem;
  
      &-xs {
        @apply h-3 text-xs leading-3;
        padding-left: 0.313rem;
        padding-right: 0.313rem;
      }
      &-sm {
        @apply h-4 text-xs leading-4;
        padding-left: 0.438rem;
        padding-right: 0.438rem;
      }
      &-md {
        @apply h-5 text-sm leading-5;
        padding-left: 0.563rem;
        padding-right: 0.563rem;
      }
      &-lg {
        @apply h-6 text-base leading-6;
        padding-left: 0.688rem;
        padding-right: 0.688rem;
      }
    }
    
  `;

  return css(unstyled + styled);
}
