<script lang="ts">
	let className = ''
	export { className as class }
	export let as: string = 'div'
</script>

<svelte:element
	this={as}
	class="flex w-full flex-col gap-md sm:inline-flex sm:w-auto sm:flex-row [*+&]:pt-12 {className}"
	{...$$restProps}
>
	<slot />
</svelte:element>
