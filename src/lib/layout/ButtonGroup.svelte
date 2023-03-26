<script lang="ts">
	let className = ''
	export { className as class }
	export let as: string = 'div'
</script>

<svelte:element
	this={as}
	class="flex w-full flex-col gap-md sm:w-auto sm:flex-row {className}"
	{...$$restProps}
>
	<slot />
</svelte:element>
