<script lang="ts">
	let className: string = ''
	export { className as class }
	export let as: string = 'div'
</script>

<svelte:element
	this={as}
	class="rounded-3xl px-lg py-xl lg:px-xl lg:py-2xl {className}"
>
	<slot />
</svelte:element>
