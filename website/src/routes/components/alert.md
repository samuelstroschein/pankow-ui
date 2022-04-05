Alert messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don't show more than one at a time.

<div class="not-prose">
	<div class="alert alert-error" role="alert">
		<h2 class="alert-title">
			<svg class="alert-title-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
			This is an error alert
		</h2>
		<p class="alert-body">
			More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
		</p>
		<div class="alert-actions">
			<button type="button" class="button button-error button-sm">
			<svg class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
			View more
			</button>
			<button type="button" class="button-outline button-outline-error button-outline-sm" data-dismiss-target="#alert-additional-content-1" aria-label="Close">
			Dismiss
			</button>
		</div>
	</div>
</div>

```html
<div class="alert alert-error" role="alert">
	<h2 class="alert-title">
		<svg
			class="w-4 h-4 mr-2"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
				clip-rule="evenodd"
			></path>
		</svg>
		This is an error alert
	</h2>
	<p class="alert-body">
		More info about this info alert goes here. This example text is going to run a bit
		longer so that you can see how spacing within an alert works with this kind of
		content.
	</p>
	<div class="alert-actions">
		<button type="button" class="button button-error button-sm">
			<svg
				class="h-4 w-4 mr-2"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
				<path
					fill-rule="evenodd"
					d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
					clip-rule="evenodd"
				></path>
			</svg>
			View more
		</button>
		<button
			type="button"
			class="button-outline button-outline-error button-outline-sm"
			data-dismiss-target="#alert-additional-content-1"
			aria-label="Close"
		>
			Dismiss
		</button>
	</div>
</div>
```
