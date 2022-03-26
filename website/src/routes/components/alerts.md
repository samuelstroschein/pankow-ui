---
title: Alerts
path: components/alerts
status: Stable
source: 'https://github.com/primer/css/tree/main/src/alerts'
bundle: alerts
---

Alert messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don't show more than one at a time.

## Default

Alert messages start off looking decently neutral—they're just light blue rounded rectangles.

<!-- not-prose means dont apply typhograhpy styles https://tailwindcss.com/docs/typography-plugin -->
<div class="not-prose">
	<div class="alert">alert message goes here.</div>
</div>

You can put multiple paragraphs of text in a alert message—the last paragraph's bottom `margin` will be automatically override.

<!-- not-prose means dont apply typhograhpy styles https://tailwindcss.com/docs/typography-plugin -->
<div class="not-prose">
	<div class="alert">
		<p>
			This is a longer alert message in it's own paragraph. It ends up looking something
			like this. If we keep adding more text, it'll eventually wrap to a new line.
		</p>
		<p>And this is another paragraph.</p>
	</div>
</div>

## Colors

TODO adjust to tailwind colors e.g. instead of `alert-warn` -> `alert bg-warn`

<!-- Add `.alert-warn`, `.alert-error`, or `.alert-success` to the alert message to make it yellow, red, or green, respectively. -->

<!-- ```html live
<div class="alert">alert message goes here.</div>

<div class="alert mt-3 alert-warn">alert message goes here.</div>

<div class="alert mt-3 alert-error">alert message goes here.</div>

<div class="alert mt-3 alert-success">alert message goes here.</div>
``` -->

## With icon

Add an icon to the left of the alert message to give it some funky fresh attention.

<div class="not-prose">
	<div class="alert">
		<!-- <%= octicon "info" %> -->
		<svg
			class="icon w-4 h-4"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
		>
			<path
				fill-rule="evenodd"
				d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"
			></path>
		</svg>
		Alert message with an icon
	</div>

    <div class="alert mt-3 bg-error-container">
    	<!-- <%= octicon "stop" %> -->
    	<svg
    		class="icon text-on-error-container h-4 w-4"
    		xmlns="http://www.w3.org/2000/svg"
    		viewBox="0 0 16 16"
    	>
    		<path
    			fill-rule="evenodd"
    			d="M4.47.22A.75.75 0 015 0h6a.75.75 0 01.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 01-.22.53l-4.25 4.25A.75.75 0 0111 16H5a.75.75 0 01-.53-.22L.22 11.53A.75.75 0 010 11V5a.75.75 0 01.22-.53L4.47.22zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5H5.31zM8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"
    		></path>
    	</svg>
    	Alert message with an icon and semantic colors.
    </div>

</div>

## With dismiss

Add a close icon on the right to allow users to dismiss a alert message.

```html live
<div class="alert">
	Dismissable alert message goes here.
	<button class="alert-close js-alert-close" type="button" aria-label="Close">
		<!-- <%= octicon "x" %> -->
		<svg
			class="octicon octicon-x"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"
			></path>
		</svg>
	</button>
</div>

<div class="alert mt-3 alert-warn">
	Dismissable alert message goes here.
	<button class="alert-close js-alert-close" type="button" aria-label="Close">
		<!-- <%= octicon "x" %> -->
		<svg
			class="octicon octicon-x"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"
			></path>
		</svg>
	</button>
</div>

<div class="alert mt-3 alert-error">
	Dismissable alert message goes here.
	<button class="alert-close js-alert-close" type="button" aria-label="Close">
		<!-- <%= octicon "x" %> -->
		<svg
			class="octicon octicon-x"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"
			></path>
		</svg>
	</button>
</div>

<div class="alert mt-3 alert-success">
	Dismissable alert message goes here.
	<button class="alert-close js-alert-close" type="button" aria-label="Close">
		<!-- <%= octicon "x" %> -->
		<svg
			class="octicon octicon-x"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"
			></path>
		</svg>
	</button>
</div>
```

## With action button

A alert message with an action button.

```html live
<div class="alert">
	alert message with action here.
	<button type="submit" class="btn btn-sm alert-action">Complete action</button>
</div>

<div class="alert mt-3 alert-warn">
	alert message with action here.
	<button class="btn btn-sm alert-action" type="submit">Complete action</button>
</div>

<div class="alert mt-3 alert-error">
	alert message with action here.
	<button class="btn btn-sm alert-action" type="submit">
		<svg
			class="octicon"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
		>
			<path
				fill-rule="evenodd"
				d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"
			></path>
		</svg>
		Complete action
	</button>
</div>

<div class="alert mt-3 alert-success">
	<svg
		class="octicon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		width="16"
		height="16"
	>
		<path
			d="M5.75 7.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zm5.25.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
		></path>
		<path
			fill-rule="evenodd"
			d="M6.25 0a.75.75 0 000 1.5H7.5v2H3.75A2.25 2.25 0 001.5 5.75V8H.75a.75.75 0 000 1.5h.75v2.75a2.25 2.25 0 002.25 2.25h8.5a2.25 2.25 0 002.25-2.25V9.5h.75a.75.75 0 000-1.5h-.75V5.75a2.25 2.25 0 00-2.25-2.25H9V.75A.75.75 0 008.25 0h-2zM3 5.75A.75.75 0 013.75 5h8.5a.75.75 0 01.75.75v6.5a.75.75 0 01-.75.75h-8.5a.75.75 0 01-.75-.75v-6.5z"
		></path>
	</svg>
	alert message with action here.
	<button class="btn btn-sm alert-action" type="submit">
		<svg
			class="octicon"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
		>
			<path
				fill-rule="evenodd"
				d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"
			></path>
		</svg>
		Complete action
	</button>
</div>
```

## Full width alert

A alert message that is full width and removes border and border radius.

```html live
<div class="alert alert-full">Full width alert message.</div>
```

## alert banner

A alert message that is fixed positioned at the top of the page. Use for more global events where the content of the page is unknown.

```html live
<div class="ml-n3" style="min-height: 50px;">
	<div class="alert alert-banner">alert banner message.</div>
</div>
```
