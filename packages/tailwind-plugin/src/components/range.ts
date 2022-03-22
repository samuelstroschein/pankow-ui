import { Config } from "../config";
import { css } from "../css";

export function range(args: { config: Config }) {
  const styled = `
  .range {
    -webkit-appearance: none;
    --range-shdw: var(--bc);
    @apply bg-transparent rounded-box overflow-hidden;
    &:focus-visible::-webkit-slider-thumb {
      --focus-shadow: 0 0 0 6px hsl(var(--b1)) inset, 0 0 0 2rem hsl(var(--range-shdw)) inset;
    }
    &:focus-visible::-moz-range-thumb {
      --focus-shadow: 0 0 0 6px hsl(var(--b1)) inset, 0 0 0 2rem hsl(var(--range-shdw)) inset;
    }
    &::-webkit-slider-runnable-track {
      @apply h-2 w-full rounded-box;
      background-color: hsla(var(--bc) / 0.1);
    }
    &::-moz-range-track {
      @apply h-2 w-full rounded-box;
      background-color: hsla(var(--bc) / 0.1);
    }
    &::-webkit-slider-thumb {
      background-color: hsl(var(--b1));
      @apply relative h-6 w-6 border-none transition-all duration-300 ease-in-out rounded-box;
      -webkit-appearance: none;
      top: 50%;
      color: hsl(var(--range-shdw));
      transform: translateY(-50%);
      --filler-size: 100rem;
      --filler-offset: 0.6rem;
      box-shadow: 0 0 0 3px hsl(var(--range-shdw)) inset, var(--focus-shadow, 0 0), calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size);
    }
    &::-moz-range-thumb {
      background-color: hsl(var(--b1));
      @apply relative h-6 w-6 border-none transition-all duration-300 ease-in-out rounded-box;
      top: 50%;
      color: hsl(var(--range-shdw));
      --filler-size: 100rem;
      --filler-offset: 0.5rem;
      box-shadow: 0 0 0 3px hsl(var(--range-shdw)) inset, var(--focus-shadow, 0 0), calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size);
    }
    &-primary {
      --range-shdw: var(--p);
    }
    &-secondary {
      --range-shdw: var(--s);
    }
    &-accent {
      --range-shdw: var(--a);
    }
  }
  
  `;
  const unstyled = `
  .range {
    @apply h-6 w-full cursor-pointer;
    &:focus {
      outline: none;
    }
  }
  .range {
    &-xs {
      @apply h-4;
      &::-webkit-slider-runnable-track {
        @apply h-1;
      }
      &::-moz-range-track {
        @apply h-1;
      }
      &::-webkit-slider-thumb {
        @apply h-4 w-4;
        --filler-offset: 0.4rem;
      }
      &::-moz-range-thumb {
        @apply h-4 w-4;
        --filler-offset: 0.4rem;
      }
    }
    &-sm {
      @apply h-5;
      &::-webkit-slider-runnable-track {
        @apply h-1;
      }
      &::-moz-range-track {
        @apply h-1;
      }
      &::-webkit-slider-thumb {
        @apply h-5 w-5;
        --filler-offset: 0.5rem;
      }
      &::-moz-range-thumb {
        @apply h-5 w-5;
        --filler-offset: 0.5rem;
      }
    }
    &-md {
      @apply h-6;
      &::-webkit-slider-runnable-track {
        @apply h-2;
      }
      &::-moz-range-track {
        @apply h-2;
      }
      &::-webkit-slider-thumb {
        @apply h-6 w-6;
        --filler-offset: 0.6rem;
      }
      &::-moz-range-thumb {
        @apply h-6 w-6;
        --filler-offset: 0.6rem;
      }
    }
    &-lg {
      @apply h-8;
      &::-webkit-slider-runnable-track {
        @apply h-4;
      }
      &::-moz-range-track {
        @apply h-4;
      }
      &::-webkit-slider-thumb {
        @apply h-8 w-8;
        --filler-offset: 1rem;
      }
      &::-moz-range-thumb {
        @apply h-8 w-8;
        --filler-offset: 1rem;
      }
    }
  }
  
  `;

  return css(unstyled + styled);
}
