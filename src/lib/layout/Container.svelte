<script lang="ts">
	let className: string = ''
	export { className as class }
	export let as: string = 'div'
</script>

<svelte:element
	this={as}
	class="px- mx-auto w-full max-w-screen-2xl {className}"
	{...$$restProps}
>
	<slot />
</svelte:element>
