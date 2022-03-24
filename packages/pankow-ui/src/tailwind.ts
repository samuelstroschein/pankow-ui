/**
 * Tailwind possiblities.
 *
 * Use this variable to derive types.
 *
 * @example
 *    const x: typeof tailwind['borderRadius']
 *
 */
export const Tailwind = {
  /** Utilities for controlling the border radius of an element. */
  borderRadius: [
    "rounded-none",
    "rounded-sm",
    "rounded",
    "rounded-md",
    "rounded-lg",
    "rounded-xl",
    "rounded-2xl",
    "rounded-3xl",
    "rounded-full",
  ] as const,
} as const;
