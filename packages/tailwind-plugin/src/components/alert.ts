import { Config } from "../config";
import { css } from "../css";

export function alert(args: { config: Config }) {
  const unstyled = `
    .alert {
      @apply flex w-full flex-col items-center justify-between gap-4 space-y-2 md:flex-row md:space-y-0;
      > :where(*) {
        @apply flex items-center gap-2;
      }
    }    
  `;

  const styled = `
  .alert {
    @apply bg-base-200 p-4 rounded-box;
  }
  `;
  if (args.config.styled) {
    return css(unstyled + styled);
  }
  return css(unstyled);
}
