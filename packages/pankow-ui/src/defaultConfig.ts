import { Config } from "./types/config";
import { defaultConfig as defaultColorSystemConfig } from "@pankow-ui/color-system";

export const defaultConfig: Config = {
  borderRadiusBase: "rounded-lg",
  borderWidth: "border",
  borderStyle: "border-solid",
  colorSystem: defaultColorSystemConfig,
  fontSizeBase: "text-sm",
};
