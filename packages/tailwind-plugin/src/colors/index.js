function withOpacityValue(variable, fallbackColor) {
  return ({ opacityValue }) => {
    let fallbackColorValue = "";
    if (fallbackColor) {
      fallbackColorValue = `, var(${fallbackColor})`;
    }
    if (opacityValue === undefined) {
      return `hsl(var(${variable}${fallbackColorValue}))`;
    }
    return `hsl(var(${variable}${fallbackColorValue}) / ${opacityValue})`;
  };
}

export default {
  transparent: "transparent",
  current: "currentColor",

  primary: withOpacityValue("--primary"),
  "primary-focus": withOpacityValue("--primary-focus", "--primary"),
  "primary-content": withOpacityValue("--primary-content"),

  secondary: withOpacityValue("--secondary"),
  "secondary-focus": withOpacityValue("--secondary-focus", "--secondary"),
  "secondary-content": withOpacityValue("--secondary-content"),

  accent: withOpacityValue("--accent"),
  "accent-focus": withOpacityValue("--accent-focus", "--accent"),
  "accent-content": withOpacityValue("--accent-content"),

  neutral: withOpacityValue("--neutral"),
  "neutral-focus": withOpacityValue("--neutral-focus", "neutral"),
  "neutral-content": withOpacityValue("--neutral-content"),

  "base-100": withOpacityValue("--base-100"),
  "base-200": withOpacityValue("--base-200", "--base-100"),
  "base-300": withOpacityValue("--base-300", "--base-200"),
  "base-content": withOpacityValue("--base-content"),

  info: withOpacityValue("--info"),
  "info-content": withOpacityValue("--info-content", "--neutral-content"),

  success: withOpacityValue("--success"),
  "success-content": withOpacityValue("--success-content", "--neutral-content"),

  warning: withOpacityValue("--warning"),
  "warning-content": withOpacityValue("--warning-content", "--neutral-content"),

  danger: withOpacityValue("--danger"),
  "danger-content": withOpacityValue("--danger-content", "--neutral-content"),
};
