<script lang="ts">
	let className = '';
	export { className as class };
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let id: string;
	export let label: string | null = null;
	export let placeholder: string | null = null;
	export let options: string[];
</script>

<label
	for={id}
	class="relative flex flex-col gap-xs {className}"
	{...$$restProps}
>
	{#if label}
		<span class="relative text-sm text-base-11">
			{label}
		</span>
	{/if}
	<div class="relative">
		<select
			{id}
			name={id}
			{required}
			{disabled}
			class="text-md block w-full rounded-input !border-none bg-transparent p-md leading-[1] !ring-2 !ring-inset ring-base-7 focus:ring-base-8 disabled:pointer-events-none disabled:opacity-50"
		>
			{#if placeholder}
				<option
					value=""
					disabled
					class="leading-[1] text-base-11"
					selected>{placeholder}</option
				>
			{/if}
			{#each options as option}
				<option
					class="leading-[1] text-base-12 "
					value={option}>{option}</option
				>
			{/each}
		</select>
	</div>
</label>

<style lang="postcss">
	/* Apply styles when no value selected */
	select:has(option:checked[value='']) {
		@apply text-base-11;
	}
</style>
