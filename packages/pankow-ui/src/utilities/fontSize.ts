import { Config } from "../config";
import { css } from "../css";

export function fontSize(args: { config: Config }) {
  return css(`
        .text-2xs {
            font-size: 0.7rem;
        }
  `);
}
