import { Config } from "../config";
import { css } from "../css";

export function toasts(args: { config: Config }) {
  const unstyled = `
    .alert {
      @apply relative border border-solid rounded-md py-5 px-4
    }

    .tooltipped {
      @apply relative
      
    }
    .tooltipped::after {
      @apply absolute

      z-index: 1000000;
      display: none;
      padding: $em-spacer-5 $em-spacer-6;
      font: normal normal 11px/1.5 $body-font;
      -webkit-font-smoothing: subpixel-antialiased;
      color: var(--color-fg-on-emphasis);
      text-align: center;
      text-decoration: none;
      text-shadow: none;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: break-word;
      white-space: pre;
      pointer-events: none;
      content: attr(aria-label);
      background: var(--color-neutral-emphasis-plus);
      border-radius: $border-radius;
      opacity: 0;
    }
`;

  const styled = `

  `;

  return css(unstyled + styled);
}
