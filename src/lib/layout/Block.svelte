<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'section';
</script>

<svelte:element
	this={as}
	class="relative w-full overflow-x-hidden py-3xl {className}"
>
	<slot />
</svelte:element>
