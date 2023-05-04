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
			class="flex flex-wrap items-center gap-x-sm gap-y-xs cursor-pointer{className}"
		>
			<input
				type="radio"
				class="radio radio-sm mr-sm border-front-300 checked:bg-front-300"
				id="{option.heading} - {option.text}"
				value="{option.heading} - {option.text}"
				{name}
				{required}
			/>
			{#if option.heading}
				<h6 class="inline">{option.heading}</h6>
			{/if}
			{#if option.text}
				<p class="inline text-sm">{option.text}</p>
			{/if}
		</label>
	{/each}
</fieldset>
