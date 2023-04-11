<script lang="ts">
	import Container from 'layout/Container.svelte'

	let className: string = ''
	export { className as class }
</script>

<section>
	<Container>
		<div class="relative my-4xl rounded-box bg-neutral-200 px-4 py-2xl md:px-2xl {className}">
			<slot />
		</div>
	</Container>
</section>
