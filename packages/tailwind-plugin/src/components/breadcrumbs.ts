import { Config } from "../config";
import { css } from "../css";

export function breadcrumbs(args: { config: Config }) {
  const styled = `
    .breadcrumbs {
      @apply py-2;
      & > ul {
        & > li {
          & > a {
            &:focus {
              @apply outline-none;
            }
            &:focus-visible {
              outline: 2px solid currentColor;
              outline-offset: 2px;
            }
          }
          & + *:before {
            content: "";
            @apply ml-2 mr-3 block h-1.5 w-1.5 rotate-45 transform opacity-40;
            border-top: 1px solid;
            border-right: 1px solid;
            background-color: transparent;
          }
        }
      }
    }
  `;

  const unstyled = `
    .breadcrumbs {
      @apply max-w-full overflow-x-auto;
      & > ul {
        @apply flex items-center whitespace-nowrap;
        min-height: min-content;
        & > li {
          @apply flex items-center;
          & > a {
            @apply flex cursor-pointer items-center hover:underline;
          }
        }
      }
    }
  `;

  return css(unstyled + styled);
}
