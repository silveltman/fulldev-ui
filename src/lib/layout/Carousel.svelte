<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'div';
</script>

<svelte:element
	this={as}
	class="carousel items-center gap-x-md pb-md !scrollbar scrollbar-track-base-300 scrollbar-thumb-content-100 [&::-webkit-scrollbar]:block

        {className}
    "
>
	<slot />
</svelte:element>
