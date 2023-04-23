<script lang="ts">
	import type { CheckboxContent } from "$lib/types"

	export let required: boolean = false

	let className = ''
	export { className as Class}

	export let content: CheckboxContent
	
</script>

<div class="flex items-start">
	<input
		type="checkbox"
		class="mt-xs"
		id={content.id}
		name={content.id}
		{required}
		
	/>
	<label
		for={content.id}
		class="flex cursor-pointer flex-col pl-md {className}"
	>
		{#if content.heading}
			<h6>{content.heading}</h6>
		{/if}
		{#if content.text}
			<p>{content.text}</p>
		{/if}
	</label>
</div>
