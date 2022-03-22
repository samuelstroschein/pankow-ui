import { Config } from "../config";
import { css } from "../css";

export function drawer(args: { config: Config }) {
  const styled = `
  .drawer.drawer-end .drawer-toggle:checked ~ .drawer-content {
    @apply -translate-x-2;
  }
  .drawer-toggle {
    & ~ .drawer-content {
      @apply transition-all duration-300 ease-in-out;
    }
    & ~ .drawer-side {
      & > .drawer-overlay {
        @apply cursor-pointer bg-neutral-focus transition-all duration-300 ease-in-out;
      }
      & > .drawer-overlay + * {
        @apply transition-all duration-300 ease-in-out;
      }
    }
    &:checked {
      & ~ .drawer-content {
        @apply translate-x-2;
      }
      & ~ .drawer-side {
        & > .drawer-overlay {
          opacity: 0.999999; /* 1 causes a bug on chrome 🤷‍♂️ */
          @apply bg-opacity-40;
        }
      }
    }
    &:focus-visible {
      & ~ .drawer-content .drawer-button {
        outline: 2px solid hsl(var(--nf));
        outline-offset: 2px;
        &.btn-primary {
          outline: 2px solid hsl(var(--p));
        }
        &.btn-secondary {
          outline: 2px solid hsl(var(--s));
        }
        &.btn-accent {
          outline: 2px solid hsl(var(--a));
        }
        &.btn-info {
          outline: 2px solid hsl(var(--in));
        }
        &.btn-success {
          outline: 2px solid hsl(var(--su));
        }
        &.btn-warning {
          outline: 2px solid hsl(var(--wa));
        }
        &.btn-error {
          outline: 2px solid hsl(var(--er));
        }
        &.glass {
          outline: 2px solid currentColor;
        }
        &.btn-ghost {
          outline: 2px solid currentColor;
        }
        &.btn-link {
          outline: 2px solid currentColor;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .drawer-mobile {
      & > .drawer-toggle {
        &:checked {
          & ~ .drawer-content {
            @apply translate-x-0;
          }
        }
      }
    }
  }
  
      
  `;

  const unstyled = `
  .drawer {
    @apply grid overflow-hidden;
    /* max-height: 100vh; */
    &.drawer-end {
      direction: rtl;
    }
    &.drawer-end > * {
      direction: ltr;
    }
    &.drawer-end .drawer-toggle {
      & ~ .drawer-side > .drawer-overlay + * {
        @apply translate-x-full justify-self-end;
      }
      &:checked ~ .drawer-side > .drawer-overlay + * {
        @apply translate-x-0;
      }
    }
  }
  .drawer-toggle {
    @apply absolute h-0 w-0 appearance-none opacity-0;
    & ~ .drawer-content {
      @apply z-0 col-start-1 row-start-1 max-h-screen overflow-y-auto;
    }
    & ~ .drawer-side {
      @apply col-start-1 row-start-1 grid max-h-screen;
      & > .drawer-overlay {
        @apply invisible col-start-1 row-start-1 opacity-0;
      }
      & > .drawer-overlay + * {
        @apply z-10 col-start-1 row-start-1 -translate-x-full transform;
      }
    }
    &:checked {
      & ~ .drawer-side {
        @apply overflow-y-auto;
        & > .drawer-overlay {
          @apply visible;
        }
        & > .drawer-overlay + * {
          @apply translate-x-0;
        }
      }
    }
  }
  
  [dir="rtl"] .drawer-toggle ~ .drawer-side > .drawer-overlay + * {
    @apply translate-x-full;
  }
  [dir="rtl"] .drawer-toggle:checked ~ .drawer-side > .drawer-overlay + * {
    @apply translate-x-0;
  }
  
  @media (min-width: 1024px) {
    .drawer-mobile {
      grid-auto-columns: max-content auto;
      & > .drawer-toggle {
        & ~ .drawer-content {
          @apply h-auto lg:col-start-2;
        }
        & ~ .drawer-side {
          @apply overflow-y-auto;
          & > .drawer-overlay {
            @apply lg:visible;
          }
          & > .drawer-overlay + * {
            @apply lg:translate-x-0;
          }
        }
      }
    }
    .drawer-mobile.drawer-end {
      grid-auto-columns: auto max-content;
      direction: ltr;
      & > .drawer-toggle {
        & ~ .drawer-content {
          @apply h-auto lg:col-start-1;
        }
        & ~ .drawer-side {
          @apply overflow-y-auto lg:col-start-2;
          & > .drawer-overlay {
            @apply lg:visible;
          }
          & > .drawer-overlay + * {
            @apply lg:translate-x-0;
          }
        }
      }
    }
  }
  /* @supports (-webkit-touch-callout: none) {
    .drawer {
      max-height: -webkit-fill-available;
    }
  } */  
  `;

  return css(unstyled + styled);
}
