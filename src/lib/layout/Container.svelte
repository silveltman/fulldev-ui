<script lang="ts">
	let className: string = ''
	export { className as class }
	export let as: string = 'div'
</script>

<svelte:element
	this={as}
	class="mx-auto w-full max-w-screen-2xl px-4 lg:px-8 {className}"
>
	<slot />
</svelte:element>
