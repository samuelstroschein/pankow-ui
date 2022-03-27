import type { Tailwind } from "../tailwind";

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
  borderWith: typeof Tailwind["borderWidth"][number];
};
