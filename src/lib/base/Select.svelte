<script lang="ts">
	let className = '';
	export { className as class };
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let id: string;
	export let label: string;
	export let placeholder: string;
	export let options: string[];
</script>

<label
	for={id}
	class="relative flex flex-col gap-1 {className}"
	{...$$restProps}
>
	{#if label}
		<span class="relative text-1 text-base-11">
			{label}
		</span>
	{/if}
	<div class="relative">
		<select
			{id}
			name={id}
			{required}
			{disabled}
			class="inline-flex w-full rounded-input !border-2 border-base-7 bg-transparent px-space-4 py-space-3 text-2 leading-[1.25] disabled:pointer-events-none disabled:opacity-50"
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
