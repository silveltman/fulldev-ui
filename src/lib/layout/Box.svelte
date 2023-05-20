<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'div';
</script>

<svelte:element
	this={as}
	class="relative w-full rounded-box border border-base-6 bg-base-2 px-4 py-lg md:p-lg {className}"
>
	<slot />
</svelte:element>
