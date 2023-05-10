<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'div';
</script>

<svelte:element
	this={as}
	class="daisy-carousel items-start gap-x-md pb-md !scrollbar !scrollbar-track-base-3 !scrollbar-thumb-base-7 [&>*]:daisy-carousel-item hover:!scrollbar-thumb-base-8 lg:pb-lg [&::-webkit-scrollbar]:block

        {className}
    "
>
	<slot />
</svelte:element>
