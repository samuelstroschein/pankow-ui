import { Config } from "./types/config";
import { defaultConfig as defaultColorSystemConfig } from "@pankow/color-system/lib";

export const defaultConfig: Config = {
  borderRadiusBase: "rounded-lg",
  borderWidth: "border",
  borderStyle: "border-solid",
  colorSystem: defaultColorSystemConfig,
  fontSizeBase: "text-sm",
};
