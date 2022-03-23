import { Config } from "../config";
import { css } from "../css";

export function card(args: { config: Config }) {
  const styled = `
    .card {
      @apply rounded;
      &:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
      }
      &.bordered {
        @apply border border-base-200;
      }
      &-bordered {
        @apply border border-base-200;
      }
      &.compact {
        .card-body {
          @apply p-4 text-sm;
        }
      }
      &-body {
        padding: var(--padding-card, 2rem);
        @apply flex flex-col gap-2;
      }
      &-title {
        @apply flex items-center gap-2 text-xl font-semibold;
      }
      &.image-full {
        &:before {
          @apply z-10 bg-neutral opacity-75 rounded;
        }
      }
      &.image-full > &-body {
        @apply z-20 text-neutral-content;
      }
    }

    .card-compact {
      .card-body {
        @apply p-4 text-sm;
      }
      .card-title {
        @apply mb-1;
      }
    }
    .card-normal {
      .card-body {
        padding: var(--padding-card, 2rem);
        @apply text-base;
      }
      .card-title {
        @apply mb-3;
      }
    }
    
  
  `;

  const unstyled = `
    .card {
      @apply relative flex flex-col overflow-hidden;
      &:focus {
        @apply outline-none;
      }
      &-body {
        @apply flex flex-auto flex-col;
        :where(p) {
          @apply flex-grow;
        }
      }
      &-actions {
        @apply flex flex-wrap items-start gap-2;
      }
      & figure {
        @apply flex items-center justify-center;
      }
      &.image-full {
        @apply grid;
        &:before {
          @apply relative;
          content: "";
        }
        &:before,
        & > * {
          @apply col-start-1 row-start-1;
        }
        & > figure img {
          @apply h-full object-cover;
        }
      }
      &.image-full > &-body {
        @apply relative;
      }
    }

    .card-side {
      align-items: stretch;
      flex-direction: row;
      & figure > * {
        max-width: unset;
      }
    }
    :where(.card-side figure > *) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
  `;

  return css(unstyled + styled);
}
