<script lang="ts">
	let className: string = ''
	export { className as class }
	export let as: string = 'div'
</script>

<svelte:element
	this={as}
	class="flex flex-col gap-y-3xl {className}"
>
	<slot />
</svelte:element>
