<script lang="ts">
	import type { RadioContent } from '$lib/types';

	export let options: RadioContent = [];

	let className = '';
	export { className as class };

	export let required: boolean = false;
	export let name: string;
</script>

<fieldset
	class="flex flex-col gap-y-md {className}"
	{...$$restProps}
>
	{#each options as option}
		<label
			for="{option.heading} - {option.text}"
			class="flex cursor-pointer flex-wrap items-center gap-x-sm gap-y-xs text-sm {className}"
		>
			<input
				type="radio"
				class="radio"
				id="{option.heading} - {option.text}"
				value="{option.heading} - {option.text}"
				{name}
				{required}
			/>
			{#if option.heading}
				<span class="font-subheading">{option.heading}</span>
			{/if}
			{#if option.text}
				<span>{option.text}</span>
			{/if}
		</label>
	{/each}
</fieldset>
