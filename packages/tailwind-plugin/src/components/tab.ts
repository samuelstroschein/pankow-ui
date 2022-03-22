import { Config } from "../config";
import { css } from "../css";

export function tab(args: { config: Config }) {
  const styled = `
  .tab {
    @apply text-opacity-50 hover:text-opacity-100;
    --tab-color: hsla(var(--bc) / var(--tw-text-opacity, 1));
    --tab-bg: hsla(var(--b1) / var(--tw-bg-opacity, 1));
    --tab-border-color: hsla(var(--b3) / var(--tw-bg-opacity, 1));
    color: var(--tab-color);
    padding-left: var(--tab-padding, 1rem);
    padding-right: var(--tab-padding, 1rem);
    &.tab-active {
      @apply border-base-content border-opacity-100 text-opacity-100;
    }
    &:focus {
      @apply outline-none;
    }
    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: -3px;
      &.tab-lifted {
        border-bottom-right-radius: var(--tab-radius, 0.5rem);
        border-bottom-left-radius: var(--tab-radius, 0.5rem);
      }
    }
  }
  .tab-bordered {
    @apply border-base-content border-opacity-20;
    border-style: solid;
    border-bottom-width: calc(var(--tab-border, 1px) + 1px);
  }
  .tab-lifted {
    border: var(--tab-border, 1px) solid transparent;
    border-width: 0 0 var(--tab-border, 1px) 0;
    border-top-left-radius: var(--tab-radius, 0.5rem);
    border-top-right-radius: var(--tab-radius, 0.5rem);
    border-bottom-color: var(--tab-border-color);
    padding-left: var(--tab-padding, 1rem);
    padding-right: var(--tab-padding, 1rem);
    padding-top: var(--tab-border, 1px);
    &.tab-active {
      background-color: var(--tab-bg);
      border-width: var(--tab-border, 1px) var(--tab-border, 1px) 0 var(--tab-border, 1px);
      border-left-color: var(--tab-border-color);
      border-right-color: var(--tab-border-color);
      border-top-color: var(--tab-border-color);
      padding-left: calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));
      padding-right: calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));
      padding-bottom: var(--tab-border, 1px);
      padding-top: 0;
      &:before,
      &:after {
        z-index: 1;
        content: "";
        display: block;
        position: absolute;
        width: var(--tab-radius, 0.5rem);
        height: var(--tab-radius, 0.5rem);
        bottom: 0;
        --tab-grad: calc(68% - var(--tab-border, 1px));
        --tab-corner-bg: radial-gradient(circle at var(--circle-pos), transparent var(--tab-grad), var(--tab-border-color) calc(var(--tab-grad) + 0.3px), var(--tab-border-color) calc(var(--tab-grad) + var(--tab-border, 1px)), var(--tab-bg) calc(var(--tab-grad) + var(--tab-border, 1px) + 0.3px));
      }
      &:before {
        left: calc(var(--tab-radius, 0.5rem) * -1);
        --circle-pos: top left;
        background-image: var(--tab-corner-bg);
  
        /* RTL quick fix */
        [dir="rtl"] & {
          --circle-pos: top right;
        }
      }
      &:after {
        right: calc(var(--tab-radius, 0.5rem) * -1);
        --circle-pos: top right;
        background-image: var(--tab-corner-bg);
  
        /* RTL quick fix */
        [dir="rtl"] & {
          --circle-pos: top left;
        }
      }
      &:first-child:before {
        background: none;
      }
      &:last-child:after {
        background: none;
      }
    }
  }
  .tab-lifted.tab-active + .tab-lifted.tab-active {
    &:before {
      background: none;
    }
  }
  .tabs-boxed {
    @apply bg-base-200 p-1 rounded-btn;
    .tab-active {
      @apply bg-primary text-primary-content rounded-btn hover:text-primary-content;
    }
  }
  
  
  `;
  const unstyled = `
  .tabs {
    @apply flex flex-wrap items-end;
  }
  .tab {
    @apply relative inline-flex cursor-pointer select-none flex-wrap items-center justify-center text-center;
    @apply h-8 text-sm leading-loose;
    --tab-padding: 1rem;
  }
  .tab {
    &-md {
      @apply h-8 text-sm leading-loose;
      --tab-padding: 1rem;
    }
    &-lg {
      @apply h-12 text-lg leading-loose;
      --tab-padding: 1.25rem;
    }
    &-sm {
      @apply h-6 text-sm leading-3;
      --tab-padding: 0.75rem;
    }
    &-xs {
      @apply h-5 text-xs leading-3;
      --tab-padding: 0.5rem;
    }
  }
  
  `;

  return css(unstyled + styled);
}
