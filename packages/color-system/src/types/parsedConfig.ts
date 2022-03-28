import type { Config } from "./config";

/**
 * Union of Config and generated hex colors.
 */
export type ParsedConfig = Config & {
  colors: {
    primary: string;
    "on-primary": string;
    "primary-container": string;
    "on-primary-container": string;

    secondary: string;
    "on-secondary": string;
    "secondary-container": string;
    "on-secondary-container": string;

    tertiary: string;
    "on-tertiary": string;
    "tertiary-container": string;
    "on-tertiary-container": string;

    background: string;
    "on-background": string;

    "surface-100": string;
    "surface-200": string;
    "surface-300": string;
    "surface-400": string;
    "surface-500": string;
    "on-surface": string;

    "surface-variant": string;
    "on-surface-variant": string;

    outline: string;

    error: string;
    "on-error": string;
    "error-container": string;
    "on-error-container": string;

    [dynamic: string]: string;
  };
};
