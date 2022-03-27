import type { Tailwind } from "../tailwind";

export type ParsedConfig = {
  borderRadius: (
    size: "sm" | "base" | "lg"
  ) => typeof Tailwind["borderRadius"][number];
  borderWidth: () => typeof Tailwind["borderWidth"][number];
  borderStyle: () => typeof Tailwind["borderStyle"][number];
};
