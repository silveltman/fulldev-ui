<script lang="ts">
	import type {ToggleContent} from '$lib/types'

	let className = ''
	export {className as class}

	export let content: ToggleContent 

</script>

<!-- <div class="flex items-start">
	<input
		type="checkbox"
		class="peer mt-xs"
		id={content.id}
		name={content.id}
		{required}
	/>
	<label
		for={content.id}
		class="flex w-20 cursor-pointer bg-success-300 p-1"
	>
		bbbbb
	</label>

	<div>
		{#if content.heading}
			<h6 class="">{content.heading}</h6>
		{/if}
		{#if content.text}
			<p class="inline">{content.text}</p>
		{/if}
	</div>
</div> -->
<div class="flex gap-md {className}">
	<input
		type="checkbox"
		class="peer hidden"
		id={content.id}
		name={content.id}
		required={content.required}
	/>
	<label
		for={content.id}
		class="flex w-12 cursor-pointer rounded-full border-700 bg-700 p-1 peer-checked:justify-end peer-checked:bg-success-500"
	>
		<div class="h-5 w-5 rounded-full bg-300" />
	</label>
	<div>
		{#if content.heading}
			<h6 class="inline">{content.heading}</h6>
		{/if}
		{#if content.text}
			<p class="ml-xs inline">{content.text}</p>
		{/if}
	</div>
</div>
