import { Config } from "../config";
import { css } from "../css";

export function menu(args: { config: Config }) {
  const styled = `
  .menu {
    &.horizontal {
      li {
        &.bordered {
          > a,
          > button,
          > span {
            @apply border-l-0 border-b-4 border-primary;
          }
        }
      }
    }
    &[class*="p-"] li > * {
      @apply rounded-btn;
    }
    :where(li.bordered > *) {
      @apply border-l-4 border-primary;
    }
    :where(li) > :where(*:not(ul)) {
      @apply gap-3 px-4 py-3 text-current;
    }
  
    :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):focus),
    :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):hover) {
      @apply bg-base-content bg-opacity-10;
    }
    :where(li:not(.menu-title):not(:empty)) > :where(:not(ul).active),
    :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):active) {
      @apply bg-primary text-primary-content;
    }
    :where(li:empty) {
      @apply mx-4 my-2 h-px bg-base-content bg-opacity-10;
    }
  
    li.disabled {
      & > * {
        @apply select-none text-base-content text-opacity-20 hover:bg-transparent;
      }
    }
    li.hover-bordered {
      a {
        @apply border-l-4 border-transparent hover:border-primary;
      }
    }
    &.compact {
      li {
        > a,
        > span {
          @apply py-2 text-sm;
        }
      }
    }
    .menu-title {
      > * {
        @apply py-1 text-xs font-bold text-base-content text-opacity-40;
      }
    }
  }
  
  .menu :where(li:not(.disabled)) > :where(*:not(ul)) {
    @apply outline-none transition duration-200 ease-in-out;
  }
  
  .menu > :where(li:first-child) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
  }
  .menu > :where(li:first-child) > :where(:not(ul)) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
  }
  .menu > :where(li:last-child) {
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  .menu > :where(li:last-child) > :where(:not(ul)) {
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  
  .menu > :where(li) > :where(ul) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  
  .menu > :where(li) > :where(ul) :where(li) {
    @apply w-full whitespace-nowrap;
  }
  .menu > :where(li) > :where(ul) :where(li) :where(ul) {
    @apply pl-4;
  }
  .menu > :where(li) > :where(ul) :where(li) :where(:not(ul)) {
    @apply w-full whitespace-nowrap;
  }
  
  .menu > :where(li) > :where(ul) > :where(li:first-child) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
  }
  .menu > :where(li) > :where(ul) > :where(li:first-child) > :where(:not(ul)) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
  }
  .menu > :where(li) > :where(ul) > :where(li:last-child) {
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  .menu > :where(li) > :where(ul) > :where(li:last-child) > :where(:not(ul)) {
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  .menu-vertical :where(li.bordered > *) {
    @apply border-l-4 border-b-0;
  }
  .menu-horizontal :where(li.bordered > *) {
    @apply border-l-0 border-b-4;
  }
  .menu-normal :where(li > *) {
    @apply py-3 text-base;
  }
  .menu-compact :where(li > *) {
    @apply py-2 text-sm;
  }
  .menu-vertical > :where(li:first-child) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
  }
  .menu-vertical > :where(li:first-child) > :where(*:not(ul)) {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;
  }
  .menu-vertical > :where(li:last-child) {
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  .menu-vertical > :where(li:last-child) > :where(*:not(ul)) {
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  
  .menu-horizontal > :where(li:first-child) {
    border-top-left-radius: inherit;
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: inherit;
  }
  .menu-horizontal > :where(li:first-child) > :where(*:not(ul)) {
    border-top-left-radius: inherit;
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
    border-bottom-left-radius: inherit;
  }
  .menu-horizontal > :where(li:last-child) {
    border-top-left-radius: unset;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: unset;
  }
  .menu-horizontal > :where(li:last-child) > :where(*:not(ul)) {
    border-top-left-radius: unset;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: unset;
  }
  
  
  `;
  const unstyled = `
  .menu {
    @apply flex flex-col;
    &.horizontal {
      @apply inline-flex flex-row;
      :where(li) {
        @apply flex-row;
      }
    }
  }
  .menu :where(li) {
    @apply relative flex flex-col flex-wrap items-stretch;
  }
  .menu :where(li:not(.menu-title)) > :where(*:not(ul)) {
    @apply flex;
  }
  .menu :where(li:not(.disabled):not(.menu-title)) > :where(*:not(ul)) {
    @apply cursor-pointer select-none items-center outline-none;
  }
  .menu > :where(li > *:not(ul):focus) {
    @apply outline-none;
  }
  .menu > :where(li.disabled > *:not(ul):focus) {
    @apply cursor-auto;
  }
  
  .menu > :where(li) :where(ul) {
    @apply flex flex-col items-stretch;
  }
  .menu > :where(li) > :where(ul) {
    @apply absolute hidden;
    top: initial;
    left: 100%;
  }
  .menu > :where(li:hover) > :where(ul) {
    @apply flex;
  }
  .menu > :where(li:focus) > :where(ul) {
    @apply flex;
  }
  .menu-vertical {
    @apply flex-col;
    :where(li) {
      @apply flex-col;
    }
  }
  
  .menu-vertical > :where(li) > :where(ul) {
    top: initial;
    left: 100%;
  }
  
  .menu-horizontal {
    @apply inline-flex flex-row;
    :where(li) {
      @apply flex-row;
    }
  }
  
  .menu-horizontal > :where(li) > :where(ul) {
    top: 100%;
    left: initial;
  }
  
  `;

  return css(unstyled + styled);
}
