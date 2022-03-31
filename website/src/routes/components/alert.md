Alert messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don't show more than one at a time.

## Default

<div class="not-prose">
	<div class="alert alert-error text-sm">
		This is the default alert with an error color. 
	</div>
</div>

## With icon

<div class="alert alert-error flex text-sm" role="alert">
  <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div>
    <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
  </div>
</div>

## With dismiss

<div class="not-prose">
	<div class="alert alert-error flex text-sm" role="alert">
	<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
	<div class="ml-3 font-medium">
		A simple info alert with an <a href="#" class="font-semibold underline">example link</a>. Give it a click if you like.
	</div>
		<svg class="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
	</div>
</div>

## Additional content

<div class="not-prose">
	<div class="alert alert-error text-sm" role="alert">
		<div class="flex items-center">
			<svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
			<h3 class="text-lg font-medium">This is a info alert</h3>
		</div>
		<div class="mt-2 mb-4">
			More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
		</div>
		<div class="flex space-x-2">
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
