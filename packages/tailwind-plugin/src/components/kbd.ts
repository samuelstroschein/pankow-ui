import { Config } from "../config";
import { css } from "../css";

export function kbd(args: { config: Config }) {
  const styled = `
    .kbd {
      @apply border border-neutral-focus border-opacity-20 bg-base-200 px-2 rounded-btn;
      border-bottom-width: 2px;
      min-height: 2.2em;
      min-width: 2.2em;
    }
  `;

  const unstyled = `
    .kbd {
      @apply inline-flex items-center justify-center;
    }
  `;

  return css(styled + unstyled);
}
