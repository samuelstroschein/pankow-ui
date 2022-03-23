import { Config } from "../config";
import { css } from "../css";

export function alert(args: { config: Config }) {
  const styled = `
    .alert {
      @apply bg-base-200 p-4 rounded;  
     
      &-sm {
        @apply p-2;
      }
      &-info {
        @apply bg-info text-info-content;
      }
      &-success {
        @apply bg-success text-success-content;
      }
      &-warning {
        @apply bg-warning text-warning-content;
      }
      &-danger {
        @apply bg-danger text-danger-content;
      }
    }
  `;

  const unstyled = `
    .alert {
      @apply flex w-full flex-col items-center justify-between gap-4 space-y-2 md:flex-row md:space-y-0;
      > :where(*) {
        @apply flex items-center gap-2;
      }
    }
  `;

  return css(unstyled + styled);
}
