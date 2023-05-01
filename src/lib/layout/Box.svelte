<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'div';
</script>

<svelte:element
	this={as}
	class="rounded-box relative w-full px-4 py-2xl md:px-2xl {className}"
>
	<slot />
</svelte:element>
