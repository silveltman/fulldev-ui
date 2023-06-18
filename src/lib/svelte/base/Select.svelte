<script lang="ts">
	type Option = string | { label: string; value: string };

	let className = '';
	export { className as class };
	export let id: string;
	export let placeholder: string | null = null;
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let options: Option[];
	const optionValue = (option: Option) => (typeof option === 'object' ? option.value : option);
	export let value: string = optionValue(options[0]);
</script>

<select
	{id}
	name={id}
	{required}
	{disabled}
	bind:value
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
		<option value={optionValue(option)}>
			{optionValue(option)}
		</option>
	{/each}
</select>

<style lang="postcss">
	select:has(option:checked[value='']) {
		@apply text-base-11;
	}
</style>
