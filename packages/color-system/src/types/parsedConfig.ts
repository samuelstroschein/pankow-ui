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

    // The material design system only uses
    // "surface-100" and "on-surface".
    // However, that breaks easy processing of colors
    // because the surface colors deviate from the
    // "standard" color pattern:
    // "color-container" -> "on-color-container".
    "surface-100-container": string;
    "on-surface-100-container": string;
    "surface-200-container": string;
    "on-surface-200-container": string;
    "surface-300-container": string;
    "on-surface-300-container": string;
    "surface-400-container": string;
    "on-surface-400-container": string;
    "surface-500-container": string;
    "on-surface-500-container": string;

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
