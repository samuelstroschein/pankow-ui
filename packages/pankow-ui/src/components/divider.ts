import { Config } from "../config";
import { css } from "../css";

export function divider(args: { config: Config }) {
  const styled = `
    .divider {
      @apply my-4 h-4 whitespace-nowrap;
      &:before {
        @apply bg-base-content bg-opacity-10;
      }
      &:after {
        @apply bg-base-content bg-opacity-10;
      }
      &:not(:empty) {
        @apply gap-4;
      }
    }

    .divider-horizontal {
      @apply my-0 mx-4 h-auto w-4;
    }

    .divider-vertical {
      @apply mx-0 my-4 h-4 w-auto;
    }
      
  `;

  const unstyled = `
    .divider {
      @apply flex flex-row items-center self-stretch;
      &:before,
      &:after {
        content: "";
        @apply flex-grow;
        @apply h-0.5 w-full;
      }
    }

    .divider-horizontal {
      @apply flex-col;
      &:before {
        @apply h-full w-0.5;
      }
      &:after {
        @apply h-full w-0.5;
      }
    }

    .divider-vertical {
      @apply flex-row;
      &:before {
        @apply h-0.5 w-full;
      }
      &:after {
        @apply h-0.5 w-full;
      }
    }
    
  `;

  return css(unstyled + styled);
}
