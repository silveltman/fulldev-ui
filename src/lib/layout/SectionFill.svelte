<script lang="ts">
	import Container from 'layout/Container.svelte'

	let className: string = ''
	export { className as class }
	export let as: string = 'section'
</script>

<svelte:element
	this={as}
	class="relative bg-neutral-0 py-4xl {className}"
>
	<Container>
		<slot />
	</Container>
</svelte:element>
