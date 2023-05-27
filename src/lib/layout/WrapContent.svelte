<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'div';
	export let center: boolean = false;
	export let layout: 'stack' | 'split' = 'stack';
</script>

<svelte:element
	this={as}
	class="w-full max-w-screen-2xl gap-x-xl gap-y-lg
        {layout == 'stack' ? 'flex flex-col' : 'grid lg:auto-cols-fr lg:grid-flow-col'}
        {center && 'items-center'}
        {className}
    "
>
	<slot />
</svelte:element>
