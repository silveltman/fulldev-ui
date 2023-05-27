<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'section';
</script>

<svelte:element
	this={as}
	class="relative flex w-full bg-base-1 !px-container px-4 py-2xl md:px-12 {className}"
	{...$$restProps}
>
	<slot />
</svelte:element>
