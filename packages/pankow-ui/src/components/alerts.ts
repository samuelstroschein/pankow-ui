import { css } from "../css";
import { ParsedConfig } from "../types/parsedConfig";

export function alerts({ config }: { config: ParsedConfig }) {
  return css(`
    .alert {
      @apply relative ${config.borderWidth()} border-solid ${config.borderRadius(
    "base"
  )} py-5 px-4 space-y-2;

      .icon {
        @apply mr-2 mb-1;
      }

    }

  .alert-close-button {
    @apply float-right p-4 -m-4 text-center cursor-pointer;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.5;
    }

    .icon {
      margin-right: 0;
    }
  }
`);
}
