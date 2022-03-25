import type { Tailwind } from "../tailwind";
import type { ParsedConfig as ParsedColorSystemConfig } from "@pankow-ui/color-system";

export type ParsedConfig = {
  colorSystem: ParsedColorSystemConfig;
  borderRadius: (
    size: "sm" | "base" | "lg"
  ) => typeof Tailwind["borderRadius"][number];
};
