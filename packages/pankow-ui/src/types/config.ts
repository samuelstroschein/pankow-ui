import type { Tailwind } from "../tailwind";
import type { Config as ColorSystemConfig } from "@pankow-ui/color-system";

export type Config = {
  /**
   * Base border radius.
   *
   * `rounded-sm` and `rounded-full` can not be defined
   * as those values would break the `sm - base - lg` pattern.
   */
  borderRadiusBase: Exclude<
    typeof Tailwind["borderRadius"],
    "rounded-sm" | "rounded-full"
  >[number];
  colorSystem: ColorSystemConfig;
};
