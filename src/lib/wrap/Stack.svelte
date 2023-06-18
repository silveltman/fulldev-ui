<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'section';
	export let row: boolean = false;
</script>

<svelte:element
	this={as}
	class="grid w-full auto-cols-fr grid-flow-row gap-xl
	{row && 'lg:grid-flow-col'}
	{className}"
	{...$$restProps}
>
	<slot />
</svelte:element>
