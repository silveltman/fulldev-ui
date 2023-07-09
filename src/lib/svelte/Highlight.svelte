<script lang="ts">
	let className: string = '';
	export { className as class };

	export let as: string = 'div';
	export let center: boolean = false;
	export let row: boolean = false;
</script>

<svelte:element
	this={as}
	class="gap-x-xl gap-y-md flex w-full flex-col
	{row ? 'lg:flex-row lg:justify-between' : 'gap-y-md small:max-w-xl large:max-w-3xl max-w-2xl'}
	{center && row && 'lg:items-center'}
	{center && !row && 'mx-auto items-center text-center'}
	{className}"
	{...$$restProps}
>
	{#if row}
		<div class="gap-sm flex flex-col">
			<slot />
		</div>
	{:else}
		<slot />
	{/if}

	{#if $$slots.actions}
		<div
			class="gap-md pt-md flex flex-wrap lg:pt-0
			{center && !row && 'justify-center'}
			{!row && 'lg:pt-md'}
			"
		>
			<slot name="actions" />
		</div>
	{/if}
</svelte:element>
