import { Config } from "../config";
import { css } from "../css";

export function collapse(args: { config: Config }) {
  const styled = `
    .collapse:focus-visible {
      outline: 2px solid hsl(var(--nf));
      outline-offset: 2px;
    }
    .collapse-arrow .collapse-title:after {
      @apply absolute block h-2 w-2 transition-all ease-in-out;
      transition-duration: 0.2s;
      top: 1.4rem;
      right: 1.4rem;
      content: "";
      transform-origin: 75% 75%;
      transform: rotate(45deg);
      box-shadow: 2px 2px;
      pointer-events: none;
    }
    .collapse-plus .collapse-title:after {
      @apply absolute block h-2 w-2 transition-all duration-300 ease-in-out;
      top: 0.9rem;
      right: 1.4rem;
      content: "+";
      pointer-events: none;
    }
    
    .collapse:not(.collapse-open):not(.collapse-close) input[type="checkbox"],
    .collapse:not(.collapse-open):not(.collapse-close) .collapse-title {
      @apply cursor-pointer;
    }
    .collapse:focus:not(.collapse-open):not(.collapse-close) .collapse-title {
      cursor: unset;
    }
    .collapse-title,
    .collapse > input[type="checkbox"] {
      @apply w-full p-4 pr-12;
      min-height: 3.75rem;
      transition: background-color 0.2s ease-in-out;
    }
    /* 
    .collapse-open :where(.collapse-title),
    .collapse:focus:not(.collapse-close) :where(.collapse-title),
    .collapse:not(.collapse-close) :where(input[type="checkbox"]:checked ~ .collapse-title) {
      @apply bg-base-content bg-opacity-10;
    } */
    
    .collapse-content {
      @apply px-4;
      cursor: unset;
      transition: padding 0.2s ease-in-out, background-color 0.2s ease-in-out;
    }
    .collapse-open :where(.collapse-content),
    .collapse:focus:not(.collapse-close) :where(.collapse-content),
    .collapse:not(.collapse-close) :where(input[type="checkbox"]:checked ~ .collapse-content) {
      @apply pb-4;
      transition: padding 0.2s ease-in-out, background-color 0.2s ease-in-out;
    }
    
    .collapse-open.collapse-arrow .collapse-title:after,
    .collapse-arrow:focus:not(.collapse-close) .collapse-title:after,
    .collapse-arrow:not(.collapse-close) input[type="checkbox"]:checked ~ .collapse-title:after {
      transform: rotate(225deg);
    }
    .collapse-open.collapse-plus .collapse-title:after,
    .collapse-plus:focus:not(.collapse-close) .collapse-title:after,
    .collapse-plus:not(.collapse-close) input[type="checkbox"]:checked ~ .collapse-title:after {
      content: "−";
    }
    
  `;

  const unstyled = `
    .collapse {
      @apply relative grid overflow-hidden;
    }
    .collapse-title,
    .collapse > input[type="checkbox"],
    .collapse-content {
      @apply col-start-1 row-start-1;
    }
    .collapse > input[type="checkbox"] {
      @apply appearance-none opacity-0;
    }
    .collapse-content {
      @apply row-start-2 overflow-hidden;
      max-height: 0px;
    }
    .collapse-open .collapse-content,
    .collapse:focus:not(.collapse-close) .collapse-content,
    .collapse:not(.collapse-close)
      input[type="checkbox"]:checked
      ~ .collapse-content {
      max-height: 9000px;
    }
  
  `;

  return css(unstyled + styled);
}
