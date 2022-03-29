import { css } from "../functions/css";
import { ParsedConfig } from "../types/parsedConfig";
import { forEachColorVariant } from "../functions/forEachColorVariant";

export function button({ config }: { config: ParsedConfig }) {
  return css(`

    .button {
        @apply relative inline-block px-4 py-1.5 ${config.fontSize(
          "base"
        )} font-semibold
        leading-5 whitespace-nowrap align-middle
        select-none ${config.borderWidth()} ${config.borderRadius("base")}
        space-x-1
        hover:no-underline;
    

        &:disabled,
        &.disabled,
        &[aria-disabled='true'] {
          cursor: default;
        }

        .icon {
          vertical-align: text-bottom;
        }

        .counter {
          @apply ml-0.5;
          color: inherit;
          text-shadow: none;
          vertical-align: top;
        }
      
        .dropdown-caret {
          @apply pl-1 opacity-80;
        }
      }

      .button-sm {
        @apply 
          py-0.5 
          px-3 
          ${config.fontSize("sm")} 
          leading-5 ;
      
        .icon {
          vertical-align: text-top;
        }
      }

      .button-lg {
        @apply 
          ${config.fontSize("lg")} 
          leading-6;
        padding: 0.75em 1.5em;
      }

      .button-text {
        @apply 
          bg-transparent
          text-primary
          border-0
          shadow-none;
      
        &:hover {
          @apply bg-hover-surface-100;
          @apply text-on-primary;
          outline: none;
          box-shadow: none;
        }
      
        &:active,
        &:focus,
        &.selected,
        &[aria-selected='true'] {
          @apply 
            text-primary
            bg-surface-variant 
            border-surface-variant;
          
          background-color: none;
          outline: none;
        }
      
        &:disabled,
        &.disabled,
        &[aria-disabled='true'] {
          @apply 
            bg-disabled-container
            text-disabled-content
            border-disabled-container; 
        }
      }

      .button-outline {
        @apply 
          bg-transparent
          text-primary 
          border-outline;
      
        &:hover,
        &.hover,
        [open] > & {
          @apply 
            bg-hover-primary 
            border-hover-primary 
            text-on-primary;
        }
      
        &:active,
        &.selected,
        &[aria-selected='true'] {
          @apply bg-surface-variant border-surface-variant;
        }
      
        &:disabled,
        &.disabled,
        &[aria-disabled='true'] {
          @apply 
            bg-disabled-container
            text-disabled-content
            border-disabled-container; 
      
          .icon {
            @apply text-disabled-content;
          }
        }
      
        &:focus,
        &.focus {
          @apply 
            bg-focus-primary 
            border-focus-primary;
        }
      
        .counter {
          color: inherit;
          background-color: var(--color-btn-primary-counter-bg);
        }
      
        .icon {
          color: var(--color-btn-primary-icon);
        }
      }

    
    
    ${forEachColorVariant(config.colorSystem, ({ name }) => {
      return `
      .button-${name} {
        @apply 
          bg-${name} 
          text-on-${name};
          
      
        &:hover,
        &.hover,
        [open] > & {
          @apply 
            bg-hover-${name} 
            text-on-${name.includes("surface") ? "primary" : name}
            border-hover-${name};
        }

        &:active,
        &.selected,
        &[aria-selected='true'] {
          @apply 
            bg-surface-variant 
            text-on-surface-variant
            border-surface-variant;
        }
      
        &:disabled,
        &.disabled,
        &[aria-disabled='true'] {
          @apply 
            bg-disabled-container
            text-disabled-content
            border-disabled-container; 
      
          .icon {
            @apply text-disabled-content;
          }
        }
      
        &:focus,
        &.focus {
          @apply 
            bg-focus-${name} 
            border-focus-${name};
        }
      
        .counter {
          color: inherit;
          background-color: var(--color-btn-primary-counter-bg);
        }
      
        .icon {
          color: var(--color-btn-primary-icon);
        }
      }
      `;
    })}
`);
}
