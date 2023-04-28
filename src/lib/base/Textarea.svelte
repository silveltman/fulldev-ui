<script lang="ts">
	import type { TextAreaContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: TextAreaContent;

	export let required: boolean = false;
	export let name: string;
	export let rows: number = 5;
</script>

<div
	class="flex flex-col {className}"
	{...$$restProps}
>
	{#if content.label}
		<label
			for={name}
			class="text-sm font-medium text-500"
		>
			{content.label}
			{#if required}
				*
			{/if}
		</label>
	{/if}
	<textarea
		id={name}
		{rows}
		{name}
		placeholder={content.placeholder}
		{required}
		class="flex rounded-input border-700 py-3 px-3 text-md"
	/>
</div>
