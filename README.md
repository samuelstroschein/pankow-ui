# pankow-ui

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

## Primer variables to Tailwind CSS

Border:
`border-radius` -> `rounded-md`
`border-radius-1` -> `rounded`
`border-radius-2` -> `rounded-md`
`border-radius-3` -> `rounded-lg`

`border-width` -> `border`
`border-syle` -> `border-solid`

Spacer:
`$spacer-0` -> `{p,m}-0`
`$spacer-1` -> `{p,m}-1`
`$spacer-2` -> `{p,m}-2`
`$spacer-3` -> `{p,m}-4`
`$spacer-4` -> `{p,m}-6`
`$spacer-5` -> `{p,m}-8`
`$spacer-6` -> `{p,m}-10`

Colors:
`fg.default` -> `on-background`
`fg.muted` -> `surface-variant`
`fg.subtle` -> `surface-variant`
`fg.onEmphasis` -> `inverse-on-surface`
`fg.accent` -> `primary`

`bg.emphasis` -> `inverse-surface`
`bg.default` -> `background`
`bg.subtle` -> `surface`
`bg.inset` -> `surface`

`border.default` -> `outline`
`border.muted` -> `surface-variant`

Typhography:
`$font-size-small`: `text-xs`
`$body-font-size`: `text-base`

Line height:
`$lh-default`: `leading-6`

## Design Principles

### Unstyled (no colors)

Components have no color by default. Express colors with tailwind classes:

**Don't**

```html
<div class="toast toast-warning">
  <div class="toast-icon"></div>
  <div class="toast-content">Toast message goes here</div>
  <div></div>
</div>
```

**Do**

```html
<div class="toast bg-surface-500 text-on-surface">
  <div class="toast-icon bg-warning"></div>
  <div class="toast-content text-on-surface">Toast message goes here</div>
  <div></div>
</div>
```
