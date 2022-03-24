import type { Tailwind } from "../tailwind";

export type ParsedConfig = {
  borderRadius: (
    size: "sm" | "base" | "lg"
  ) => typeof Tailwind["borderRadius"][number];
};
