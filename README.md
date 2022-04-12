# pankow-ui

Semantic typography, color-system and component classes for TailwindCSS based on [Material3](https://m3.material.io/styles/color/overview).

**tailwind.config.js**

```ts
const colorSystem = require("@pankow-ui/color-system");
const typography = require("@pankow-ui/typography");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts,md}"],
  theme: {},
  plugins: [
    typography,
    // any color you don't provide will use default values.
    colorSystem.withConfig({
      accentColors: { primary: colors.sky },
      neutralColors: {},
      semanticColors: {
        success: colors.green,
        warning: colors.amber,
        danger: colors.red,
      },
    }),
  ],
};
```

## @pankow-ui/typography

Either use the utility classes consisting of `text-{typography}-{size}` and `font-{typography}-size`, or
use the component classes directly e.g. `{typography}-{size}`.

<div class="not-prose">
    <div class="display-lg">display lg</div>
    <div class="display-md">display md</div>
    <div class="text-display-sm font-display-sm">display sm</div>
    <div class="my-4 bg-surface-variant h-0.5"></div>
    <div class="headline-lg">headline lg</div>
    <div class="headline-md">headline md</div>
    <div class="headline-sm">headline sm</div>
    <div class="my-4 bg-surface-variant h-0.5"></div>
    <div class="title-lg">title lg</div>
    <div class="title-md">title md</div>
    <div class="title-sm">title sm</div>
    <div class="my-4 bg-surface-variant h-0.5"></div>
    <div class="label-lg">label lg</div>
    <div class="label-md">label md</div>
    <div class="label-sm">label sm</div>
    <div class="my-4 bg-surface-variant h-0.5"></div>
    <div class="body-lg">body lg</div>
    <div class="body-md">body md</div>
    <div class="body-sm">body sm</div>
</div>

## @pankow-ui/color-system

Read the following https://m3.material.io/styles/color/the-color-system/key-colors-tones. All colors can
be configured with the config.

## TODOS

#### [ ] Use variables for color-system

Otherwise, dark/light mode etc. is hard to implement.
Read https://tailwindcss.com/docs/customizing-colors#using-css-variables
for further an implementation instruction.

#### [ ] Use variables for config variables

Instead of applying tailwind classes in components, apply css variables.

Makes implementing different themes easier and dynamic. Users can switch
the theme directly on the website without rebuilding, and re-deploying
the app.

Don't:

```
@apply ${config.borderRadius}
```

Do:

```
border-radius: var(--theme-border-radius)
```

#### [ ] Specify `rounded` variable in config.

By default, all components use `rounded-md` as base. A user
should be able to specify in the config `rounded-sm`, `rounded-md`, `rounded-lg`
as base.
