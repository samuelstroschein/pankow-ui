import { Config } from "../config";
import { css } from "../css";

export function variables(args: { config: Config }) {
  return css(`
    .no-animation {
        --btn-focus-scale: 1;
        --animation-btn: 0;
        --animation-input: 0;
    }  

  `);
}
