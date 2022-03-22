import { Config } from "../config";
import { css } from "../css";

export function sizing(args: { config: Config }) {
  return css(`
    .min-h-6 {
        min-height: 1.5rem;
    }
    .min-h-8 {
        min-height: 2rem;
    }
    .min-h-12 {
        min-height: 3rem;
    }
    .min-h-16 {
        min-height: 4rem;
    }
  `);
}
