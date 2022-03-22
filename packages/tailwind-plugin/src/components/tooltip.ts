import { Config } from "../config";
import { css } from "../css";

export function tooltip(args: { config: Config }) {
  const styled = `
  .tooltip {
    @apply relative inline-block text-center;
    --tooltip-tail: 3px;
    --tooltip-color: hsl(var(--n));
    --tooltip-text-color: hsl(var(--nc));
    --tooltip-tail-offset: calc(100% + 1px - var(--tooltip-tail));
  }
  .tooltip:before,
  .tooltip:after {
    @apply opacity-0 transition delay-100 duration-200 ease-in-out;
  }
  .tooltip:after {
    @apply absolute;
  }
  .tooltip:before {
    @apply max-w-xs rounded px-2 py-1 text-sm;
    background-color: var(--tooltip-color);
    color: var(--tooltip-text-color);
    width: max-content;
  }
  .tooltip.tooltip-open:before,
  .tooltip.tooltip-open:after,
  .tooltip:hover:before,
  .tooltip:hover:after {
    @apply opacity-100 delay-75;
  }
  .tooltip:after {
    content: "";
    border-style: solid;
    border-width: var(--tooltip-tail, 0);
    width: 0;
    height: 0;
    display: block;
    position: absolute;
  }
  .tooltip {
    &:after {
      transform: translateX(-50%);
      border-color: var(--tooltip-color) transparent transparent transparent;
      top: auto;
      left: 50%;
      right: auto;
      bottom: var(--tooltip-tail-offset);
    }
  }
  .tooltip-bottom {
    &:after {
      transform: translateX(-50%);
      border-color: transparent transparent var(--tooltip-color) transparent;
      top: var(--tooltip-tail-offset);
      left: 50%;
      right: auto;
      bottom: auto;
    }
  }
  .tooltip-left {
    &:after {
      transform: translateY(-50%);
      border-color: transparent transparent transparent var(--tooltip-color);
      top: 50%;
      left: auto;
      right: calc(var(--tooltip-tail-offset) + 1px);
      bottom: auto;
    }
  }
  .tooltip-right {
    &:after {
      transform: translateY(-50%);
      border-color: transparent var(--tooltip-color) transparent transparent;
      top: 50%;
      left: calc(var(--tooltip-tail-offset) + 1px);
      right: auto;
      bottom: auto;
    }
  }
  .tooltip {
    &-primary {
      --tooltip-color: hsl(var(--p));
      --tooltip-text-color: hsl(var(--pc));
    }
    &-secondary {
      --tooltip-color: hsl(var(--s));
      --tooltip-text-color: hsl(var(--sc));
    }
    &-accent {
      --tooltip-color: hsl(var(--a));
      --tooltip-text-color: hsl(var(--ac));
    }
    &-info {
      --tooltip-color: hsla(var(--in));
      --tooltip-text-color: hsl(var(--inc));
    }
    &-success {
      --tooltip-color: hsla(var(--su));
      --tooltip-text-color: hsl(var(--suc));
    }
    &-warning {
      --tooltip-color: hsla(var(--wa));
      --tooltip-text-color: hsl(var(--wac));
    }
    &-error {
      --tooltip-color: hsla(var(--er));
      --tooltip-text-color: hsl(var(--erc));
    }
  }
  
  
  `;
  const unstyled = `
  .tooltip {
    @apply relative inline-block;
    --tooltip-offset: calc(100% + 1px + var(--tooltip-tail, 0px));
  }
  .tooltip:before {
    @apply absolute;
    pointer-events: none;
  }
  .tooltip:before {
    content: attr(data-tip);
  }
  .tooltip {
    &:before {
      transform: translateX(-50%);
      top: auto;
      left: 50%;
      right: auto;
      bottom: var(--tooltip-offset);
    }
  }
  .tooltip-bottom {
    &:before {
      transform: translateX(-50%);
      top: var(--tooltip-offset);
      left: 50%;
      right: auto;
      bottom: auto;
    }
  }
  .tooltip-left {
    &:before {
      transform: translateY(-50%);
      top: 50%;
      left: auto;
      right: var(--tooltip-offset);
      bottom: auto;
    }
  }
  .tooltip-right {
    &:before {
      transform: translateY(-50%);
      top: 50%;
      left: var(--tooltip-offset);
      right: auto;
      bottom: auto;
    }
  }
  
  `;

  return css(unstyled + styled);
}
