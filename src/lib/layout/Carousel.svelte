<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'div';
</script>

<svelte:element
	this={as}
	class="flex snap-x items-start gap-x-md overflow-x-scroll scroll-smooth pb-md scrollbar scrollbar-track-base-3 scrollbar-thumb-base-7 hover:!scrollbar-thumb-base-8 lg:pb-lg [&>*]:snap-center {className}"
>
	<slot />
</svelte:element>
