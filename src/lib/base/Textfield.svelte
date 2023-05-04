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
	class="form-control w-full {className}"
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
		class="input-bordered input border-middle-200 text-base"
	/>
</label>
