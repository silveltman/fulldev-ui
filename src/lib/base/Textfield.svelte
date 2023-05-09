<script lang="ts">
	import type { TextFieldContent } from '$lib/types';

	let className = '';
	export { className as class };

	export let content: TextFieldContent;

	export let type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' = 'text';
	export let required: boolean = false;
	export let name: string;
</script>

<label
	for={name}
	class="flex w-full flex-col {className}"
	{...$$restProps}
>
	{#if content.label}
		<span class="label text-sm">
			{content.label}
			{#if required}
				*
			{/if}
		</span>
	{/if}
	<input
		{type}
		id={name}
		{name}
		placeholder={content.placeholder}
		{required}
		class="input max-w-none border border-base-7 bg-base-2 bg-transparent text-base text-base-12 focus:border-base-8 active:border-base-8"
	/>
</label>
