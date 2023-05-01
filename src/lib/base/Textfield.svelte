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
	class="form-control w-full {className}"
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
	<input
		{type}
		id={name}
		{name}
		placeholder={content.placeholder}
		{required}
		class="text-base input-bordered input"
	/>
</div>
