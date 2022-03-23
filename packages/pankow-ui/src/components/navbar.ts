import { Config } from "../config";
import { css } from "../css";

export function navbar(args: { config: Config }) {
  const styled = `
  .navbar {
    padding: var(--navbar-padding, 0.5rem);
    min-height: 4rem;
    @apply w-full;
  }
  .navbar {
    padding: var(--navbar-padding, 0.5rem);
    min-height: 4rem;
    @apply w-full;
  }
    
  
  `;
  const unstyled = `
  .navbar {
    @apply flex items-center;
  }
  :where(.navbar > *) {
    @apply inline-flex items-center;
  }
  .navbar-start {
    width: 50%;
    justify-content: flex-start;
  }
  .navbar-center {
    flex-shrink: 0;
  }
  .navbar-end {
    width: 50%;
    justify-content: flex-end;
  }
  
  `;

  return css(unstyled + styled);
}
