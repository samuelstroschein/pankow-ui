## Button Group

Have a hankering for a series of buttons that are attached to one another? Wrap them in a `.button-group` and the buttons will be rounded and spaced automatically.

```html live
<div class="button-group d-block mb-2">
	<button class="button-group-item button" type="button">Button</button>
	<button class="button-group-item button" type="button">Button</button>
	<button class="button-group-item button button-danger" type="button">Danger</button>
</div>

<div class="button-group d-block mb-2 ml-0">
	<button class="button-group-item button button-outline" type="button">Button</button>
	<button class="button-group-item button button-outline" type="button">Button</button>
	<button class="button-group-item button button-outline" type="button">Button</button>
</div>
```

Use `button-group-item button button-sm` for a smaller button-group items.

```html live
<div class="button-group">
	<button class="button-group-item button button-sm" type="button">Button</button>
	<button class="button-group-item button button-sm" type="button">Button</button>
	<button class="button-group-item button button-sm" type="button">Button</button>
</div>
```

Add `.button-group-parent` to parent elements, like `<form>`s or `<details>`s, within `.button-group`s for proper spacing and rounded corners.

```html live
<div class="button-group">
	<button class="button button-group-item" type="button">Button</button>
	<form class="button-group-parent">
		<button class="button button-group-item" type="button">Button in a form</button>
	</form>
	<button class="button button-group-item" type="button">Button</button>
	<button class="button button-group-item" type="button">Button</button>
</div>
```
