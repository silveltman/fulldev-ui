<script lang="ts">
	import type { TextFieldContent } from '$lib/types';

	let className = '';
	export { className as class };

	export let content: TextFieldContent;

	export let type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' = 'text';
	export let required: boolean = false;
	export let name: string;
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
	<input
		{type}
		id={name}
		{name}
		placeholder={content.placeholder}
		{required}
		class="flex rounded-input border-700 py-3 px-3 text-md leading-none"
	/>
</div>
