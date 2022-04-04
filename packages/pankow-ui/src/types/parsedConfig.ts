import type { Tailwind } from "../tailwind";
import type { ParsedConfig as ParsedColorSystemConfig } from "@pankow/color-system/lib";

export type ParsedConfig = {
  borderRadius: (
    size: "sm" | "base" | "lg"
  ) => typeof Tailwind["borderRadius"][number];
  borderWidth: () => typeof Tailwind["borderWidth"][number];
  borderStyle: () => typeof Tailwind["borderStyle"][number];
  colorSystem: ParsedColorSystemConfig;
  fontSize: (size: "sm" | "base" | "lg") => typeof Tailwind["fontSize"][number];
};
