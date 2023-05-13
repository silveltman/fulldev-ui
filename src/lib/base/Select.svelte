<script lang="ts">
	import { IconAsterisk, IconChevronDown } from '@tabler/icons-svelte';

	let className = '';
	export { className as class };
	export let required: boolean = false;
	export let id: string;
	export let label: string;
	export let options: string[];
</script>

<label
	for={id}
	class="relative flex items-center {className}"
	{...$$restProps}
>
	<select
		{id}
		name={id}
		placeholder={label}
		{required}
		class="h-12 w-full rounded-input !border-2 border-base-7 bg-transparent fill-red-500 pl-2.5 pt-4 pb-0 text-base leading-[1] placeholder:text-base-11"
	>
		{#if label}
			<option
				value=""
				disabled
				class="leading-[1] text-base-11"
				selected>{label}</option
			>
		{/if}
		{#each options as option}
			<option
				class="leading-[1] text-base-12 "
				value={option}>{option}</option
			>
		{/each}
	</select>
	<span class="absolute top-0.5 px-3 text-xs text-base-11">
		{label}
	</span>
</label>

<style lang="postcss">
	/* Apply styles when no value selected */
	select:has(option:checked[value='']) {
		@apply py-0 text-base-11;

		& ~ span {
			@apply hidden;
		}
	}
</style>
