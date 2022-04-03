import type { Tailwind } from "../tailwind";
import type { Config as ColorSystemConfig } from "@pankow/color-system";

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
  borderWidth: typeof Tailwind["borderWidth"][number];
  borderStyle: typeof Tailwind["borderStyle"][number];
  colorSystem: ColorSystemConfig;
  /**
   * Base font size.
   *
   * `rounded-xs` and `text-9xl` can not be defined
   * as those values would break the `sm - base - lg` pattern.
   */
  fontSizeBase: Exclude<
    typeof Tailwind["fontSize"],
    "text-xs" | "text-9xl"
  >[number];
};
