import { Config } from "../config";
import { css } from "../css";

export function variables(args: { config: Config }) {
  return css(`
    .no-animation {
        --btn-focus-scale: 1;
        --animation-btn: 0;
        --animation-input: 0;
    }
    .tab-border-none {
        --tab-border: 0px;
    }
    .tab-border {
        --tab-border: 1px;
    }
    .tab-border-2 {
        --tab-border: 2px;
    }
    .tab-border-3 {
        --tab-border: 3px;
    }
  
  
  `);
}
