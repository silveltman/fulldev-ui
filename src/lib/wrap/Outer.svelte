<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'section';
</script>

<svelte:element
	this={as}
	class="relative w-full bg-base-1 py-2xl {className}"
	{...$$restProps}
>
	<slot />
</svelte:element>
