import { Config } from "../config";
import { css } from "../css";

export function steps(args: { config: Config }) {
  const styled = `
  .steps {
    /* &,
    &-horizontal{ */
    .step {
      grid-template-rows: 40px 1fr;
      grid-template-columns: auto;
      min-width: 4rem;
      &:before {
        @apply top-0 col-start-1 row-start-1 h-2 w-full transform bg-base-300 text-base-content;
        content: "";
        margin-left: -100%;
      }
    }
    /* } */
    .step {
      &:after {
        content: counter(step);
        counter-increment: step;
        z-index: 1;
        @apply relative col-start-1 row-start-1 grid h-8 w-8 place-items-center place-self-center rounded-full bg-base-300 text-base-content;
      }
      &:first-child:before {
        content: none;
      }
      &[data-content]:after {
        content: attr(data-content);
      }
    }
    .step-neutral + .step-neutral:before,
    .step-neutral:after {
      @apply bg-neutral text-neutral-content;
    }
    .step-primary + .step-primary:before,
    .step-primary:after {
      @apply bg-primary text-primary-content;
    }
    .step-secondary + .step-secondary:before,
    .step-secondary:after {
      @apply bg-secondary text-secondary-content;
    }
    .step-accent + .step-accent:before,
    .step-accent:after {
      @apply bg-accent text-accent-content;
    }
    .step-info + .step-info:before {
      @apply bg-info;
    }
    .step-info:after {
      @apply bg-info text-info-content;
    }
    .step-success + .step-success:before {
      @apply bg-success;
    }
    .step-success:after {
      @apply bg-success text-success-content;
    }
    .step-warning + .step-warning:before {
      @apply bg-warning;
    }
    .step-warning:after {
      @apply bg-warning text-warning-content;
    }
    .step-danger + .step-danger:before {
      @apply bg-danger;
    }
    .step-danger:after {
      @apply bg-danger text-danger-content;
    }
   
  }
  .steps {
    &-horizontal {
      .step {
        grid-template-rows: 40px 1fr;
        grid-template-columns: auto;
        min-width: 4rem;
        &:before {
          @apply h-2 w-full translate-y-0 translate-x-0;
          content: "";
          margin-left: -100%;
        }
      }
    }
    &-vertical {
      .step {
        gap: 0.5rem;
        grid-template-columns: 40px 1fr;
        grid-template-rows: auto;
        min-height: 4rem;
        justify-items: start;
        &:before {
          @apply h-full w-2 -translate-y-1/2 -translate-x-1/2;
          margin-left: 50%;
        }
      }
    }
  }
  
  
  `;
  const unstyled = `
  .steps {
    @apply inline-grid grid-flow-col overflow-hidden overflow-x-auto;
    counter-reset: step;
    grid-auto-columns: 1fr;
    .step {
      @apply grid grid-cols-1 grid-rows-2 place-items-center text-center;
    }
  }
  .steps {
    &-horizontal {
      grid-auto-columns: 1fr;
      @apply inline-grid grid-flow-col overflow-hidden overflow-x-auto;
      .step {
        @apply grid grid-cols-1 grid-rows-2 place-items-center text-center;
      }
    }
    &-vertical {
      grid-auto-rows: 1fr;
      @apply grid-flow-row;
      .step {
        @apply grid grid-cols-2 grid-rows-1;
      }
    }
  }
  
  `;

  return css(unstyled + styled);
}
