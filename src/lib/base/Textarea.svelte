<script lang="ts">
	import type { TextareaContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: TextareaContent;

	export let required: boolean = false;
	export let name: string;
	export let rows: number = 5;
</script>

<div
	class="flex flex-col gap-xs {className}"
	{...$$restProps}
>
	{#if content.label}
		<label
			for={name}
			class="label text-sm"
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
		class="ringed textarea max-w-none rounded-input text-base"
	/>
</div>
