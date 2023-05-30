<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'section';
	export let row: boolean = false;
	export let center: boolean = false;
</script>

<svelte:element
	this={as}
	class="w-full gap-x-xl gap-y-lg
	{row ? 'grid lg:auto-cols-fr lg:grid-flow-col' : 'flex flex-col'}
	{center && 'items-center'}
	{className}"
	{...$$restProps}
>
	<slot />
</svelte:element>
