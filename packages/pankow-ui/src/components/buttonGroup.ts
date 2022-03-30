import { css } from "../functions/css";
import { ParsedConfig } from "../types/parsedConfig";
import { forEachColorVariant } from "../functions/forEachColorVariant";

/**
 * Button group
 *
 * A button group is a series of buttons laid out next to each other, all part
 * of one visual button, but separated by rules to be separate.
 */
export function buttonGroup({ config }: { config: ParsedConfig }) {
  return css(`
  
  .button-group {
    display: inline-block;
    vertical-align: middle;
  
    // Proper spacing for multiple button groups (a la, gollum editor)
    + .button-group,
    + .button {
      margin-left: $spacer-1;
    }
  }
  
  .button-group-item {
    position: relative;
    float: left;
    border-right-width: 0;
    border-radius: 0;
  
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
  
    &:last-child {
      border-right-width: $border-width;
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  
    &.selected,
    &[aria-selected='true'],
    &:focus,
    &:active,
    &:hover {
      border-right-width: $border-width;
  
      + .button-group-item,
      + .button-group-parent .button-group-item {
        border-left-width: 0;
      }
    }
  }
  
  .button-group-parent {
    float: left;
  
    &:first-child .button-group-item {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
  
    &:last-child .button-group-item {
      border-right-width: $border-width;
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  
    .button-group-item {
      border-right-width: 0;
      border-radius: 0;
    }
  
    &.selected,
    &[aria-selected='true'],
    &:focus,
    &:active,
    &:hover {
      .button-group-item {
        border-right-width: $border-width;
      }
  
      + .button-group-item,
      + .button-group-parent .button-group-item {
        border-left-width: 0;
      }
    }
  }
  
  // ensure that the focus ring sits above the adjacent buttons
  .button-group-item,
  .button-group-parent {
    &:focus,
    &:active {
      z-index: 1;
    }
  }
  
`);
}
