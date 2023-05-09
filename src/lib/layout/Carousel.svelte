<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'div';
</script>

<svelte:element
	this={as}
	class="scrollbar-thumb-front-300 daisy-carousel items-start gap-x-md pb-md !scrollbar-thin scrollbar-track-base-300 [&>*]:daisy-carousel-item lg:pb-lg [&::-webkit-scrollbar]:block

        {className}
    "
>
	<slot />
</svelte:element>
