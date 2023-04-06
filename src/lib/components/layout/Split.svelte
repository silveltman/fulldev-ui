<script lang="ts">
	let className: string = ''
	export { className as class }
	export let as: string = 'div'
</script>

<svelte:element
	this={as}
	class="grid grid-cols-1 gap-x-xl gap-y-3xl lg:grid-cols-2 {className}"
>
	<slot />
</svelte:element>
