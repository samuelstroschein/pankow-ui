import { Config } from "../config";
import { css } from "../css";

export function footer(args: { config: Config }) {
  const styled = `
      .footer {
        @apply gap-y-10 gap-x-4 text-sm;
        & > * {
          @apply gap-2;
        }
        &-title {
          @apply mb-2 font-bold uppercase opacity-50;
        }
      }  
  `;

  const unstyled = `
    .footer {
      @apply grid w-full grid-flow-row place-items-start;
      & > * {
        @apply grid place-items-start;
      }
      &-center {
        @apply place-items-center text-center;
        & > * {
          @apply place-items-center;
        }
      }
    }
    @media (min-width: 48rem) {
      .footer {
        grid-auto-flow: column;
      }
      .footer-center {
        grid-auto-flow: row dense;
      }
    }
  
  
  `;

  return css(styled + unstyled);
}
