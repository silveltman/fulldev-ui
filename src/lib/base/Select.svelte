<script lang="ts">
	import type { SelectContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: SelectContent;

	export let required: boolean = false;
	export let name: string;
</script>

<div
	class="flex flex-col {className}"
	{...$$restProps}
>
	{#if content.label}
		<label for={name}>
			{content.label}
			{#if required}
				"*"
			{/if}
		</label>
	{/if}
	<select
		id={name}
		{name}
		class="text-base text-base inline-flex rounded-input border-500 py-2 px-3 pr-10"
		{required}
	>
		{#if content.placeholder}
			<option
				disabled
				selected>{content.placeholder}</option
			>
		{/if}
		{#each content.options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
</div>
