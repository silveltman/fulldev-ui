<script lang="ts">
	import Container from 'layout/Container.svelte'

	let className: string = ''
	export { className as class }
</script>

<section class="relative bg-500 py-4xl {className}">
	<Container>
		<slot />
	</Container>
</section>
