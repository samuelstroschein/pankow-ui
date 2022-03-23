import { Config } from "../config";
import { css } from "../css";

export function stack(args: { config: Config }) {
  const styled = `
  .stack {
    @apply place-items-center items-end;
    & > * {
      @apply w-full;
    }
    & > * {
      @apply opacity-60;
    }
    & > *:nth-child(2) {
      @apply opacity-80;
    }
    & > *:nth-child(1) {
      @apply opacity-100;
    }
  }
  
  `;
  const unstyled = `
  .stack {
    @apply inline-grid;
    & > * {
      @apply col-start-1 row-start-1;
    }
    & > * {
      transform: translateY(1rem) scale(0.9);
      z-index: 1;
    }
    & > *:nth-child(2) {
      transform: translateY(0.5rem) scale(0.95);
      z-index: 2;
    }
    & > *:nth-child(1) {
      transform: translateY(0) scale(1);
      z-index: 3;
    }
  }
  
  `;

  return css(unstyled + styled);
}
