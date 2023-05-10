<script lang="ts">
	import type { SelectContent } from '$lib/types';

	// export let required: boolean = false
	// export let name: string = 'select'
	// export let label: string | undefined = undefined
	// export let placeholder: string | undefined = undefined
	// export let options: string[]

	let className = '';
	export { className as class };
	export let content: SelectContent;

	export let required: boolean = false;
	export let name: string;
</script>

<div
	class="flex w-full flex-col gap-xs {className}"
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
	<select
		id={name}
		{name}
		{required}
		class="ringed select max-w-none rounded-input text-base"
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
