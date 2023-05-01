<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'div';
	export let center: boolean = false;
</script>

<svelte:element
	this={as}
	class="grid w-full grid-cols-1 gap-3xl lg:auto-cols-fr lg:grid-flow-col 
        {center ? 'lg:items-center' : 'lg:items-start'}
        {className}
    "
>
	<slot />
</svelte:element>
