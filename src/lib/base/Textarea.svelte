<script lang="ts">
	import type { TextAreaContent } from '$lib/types'

	export let rows: number = 5

	let className = ''
	export { className as class }
	export let content: TextAreaContent
</script>

<div
	class="flex flex-col {className}"
	{...$$restProps}
>
	{#if content.label}
		<label
			for={content.name}
			class="text-sm font-medium text-500"
		>
			{content.label}
			{#if content.required}
				*
			{/if}
		</label>
	{/if}
	<textarea
		id={content.name}
		{rows}
		name={content.name}
		placeholder={content.placeholder}
		required={content.required}
		class="flex rounded-input border-700 py-3 px-3 text-md"
	/>
</div>
