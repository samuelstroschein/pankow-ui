import { Config } from "../config";
import { css } from "../css";

export function stat(args: { config: Config }) {
  const styled = `
  .stats {
    @apply bg-base-100 text-base-content rounded-box;
  }
  :where(.stats) {
    @apply divide-x divide-y-0 overflow-x-auto;
  }
  .stat {
    @apply gap-x-4 border-base-content border-opacity-10 px-6 py-4;
    &-title {
      @apply opacity-60;
    }
    &-value {
      @apply text-4xl font-extrabold;
    }
    &-desc {
      @apply text-xs opacity-60;
    }
    &-actions {
      @apply mt-4;
    }
  }
  .stats-horizontal {
    @apply divide-x divide-y-0 overflow-x-auto;
  }
  .stats-vertical {
    @apply divide-y divide-x-0 overflow-y-auto;
  }
  
  `;
  const unstyled = `
  .stats {
    @apply inline-grid;
  }
  :where(.stats) {
    @apply grid-flow-col;
  }
  .stat {
    @apply inline-grid w-full;
    grid-template-columns: repeat(1, 1fr);
    &-figure {
      @apply col-start-2 row-span-3 row-start-1 place-self-center justify-self-end;
    }
    &-title {
      @apply col-start-1 whitespace-nowrap;
    }
    &-value {
      @apply col-start-1 whitespace-nowrap;
    }
    &-desc {
      @apply col-start-1 whitespace-nowrap;
    }
    &-actions {
      @apply col-start-1 whitespace-nowrap;
    }
  }
  .stats-horizontal {
    @apply grid-flow-col;
  }
  .stats-vertical {
    @apply grid-flow-row;
  }
  
  `;

  return css(unstyled + styled);
}
