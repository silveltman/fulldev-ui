<script lang="ts">
	import Container from 'layout/Container.svelte'

	let className: string = ''
	export { className as class }
	export let as: string = 'section'
</script>

<svelte:element this={as}>
	<Container>
		<div class="relative my-4xl rounded-box bg-neutral-200 p-2xl {className}">
			<slot />
		</div>
	</Container>
</svelte:element>
