<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'div';
	export let center: boolean = false;
	export let row: boolean = false;
</script>

<svelte:element
	this={as}
	class="flex w-full gap-x-xl gap-y-md
	{row
		? 'max-lg:flex-col lg:justify-between'
		: 'max-w-2xl flex-col gap-y-md small:max-w-xl large:max-w-3xl'}
	{center && row && 'lg:items-center'}
	{center && !row && 'mx-auto items-center text-center'}
	{className}"
	{...$$restProps}
>
	{#if row}
		<div class="flex flex-col gap-sm">
			<slot />
		</div>
	{:else}
		<slot />
	{/if}

	{#if $$slots.actions}
		<div
			class="flex flex-wrap gap-md max-lg:pt-md
			{center && !row && 'justify-center'}
			{!row && 'lg:pt-md'}
			"
		>
			<slot name="actions" />
		</div>
	{/if}
</svelte:element>
