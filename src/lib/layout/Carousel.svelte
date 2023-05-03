<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'div';
</script>

<svelte:element
	this={as}
	class="carousel items-start gap-x-md pb-md !scrollbar-thin scrollbar-track-base-300 scrollbar-thumb-content-300 lg:pb-lg [&::-webkit-scrollbar]:block

        {className}
    "
>
	<slot />
</svelte:element>
