/**
 * Tailwind CSS classes.
 *
 * Use this variable to derive types.
 *
 * @example
 *    const x: typeof tailwind['borderRadius']
 *
 */
// arrays are `as const` because they are not supposed to be mutated
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
  borderWidth: [
    "border-0",
    "border",
    "border-2",
    "border-4",
    "border-8",
  ] as const,
  borderStyle: [
    "border-solid",
    "border-dashed",
    "border-dotted",
    "border-double",
    "border-hidden",
    "border-none",
  ],
} as const;
