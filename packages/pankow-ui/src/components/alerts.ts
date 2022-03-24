import { Config } from "../config";
import { css } from "../css";

export function alert(args: { config: Config }) {
  const unstyled = `
    .alert {
      @apply relative border border-solid rounded-md py-5 px-4

      
    }
`;

  const styled = `

  `;

  return css(unstyled + styled);
}
