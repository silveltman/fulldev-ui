<script lang="ts">
	type Option = string | number | { label: string | number; value: string | number };

	let className = '';
	export { className as class };
	export let id: string;
	export let placeholder: string | null = null;
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let selected: string | number | null = null;
	export let options: Option[];

	const value = (option: Option) => (typeof option === 'object' ? option.value : option);
</script>

<select
	{id}
	name={id}
	{required}
	{disabled}
	class="shrink-0 rounded-input !border-none bg-transparent py-3 pl-md text-md !ring-2 !ring-inset ring-base-7 focus:ring-base-8 disabled:pointer-events-none disabled:opacity-50 small:py-2 large:py-4
	{className}
	"
	{...$$restProps}
>
	{#if placeholder}
		<option
			value=""
			disabled
			selected>{placeholder}</option
		>
	{/if}
	{#each options as option}
		<option
			value={value(option)}
			selected={value(option) === selected}
		>
			{value(option)}
		</option>
	{/each}
</select>

<style lang="postcss">
	select:has(option:checked[value='']) {
		@apply text-base-11;
	}
</style>
