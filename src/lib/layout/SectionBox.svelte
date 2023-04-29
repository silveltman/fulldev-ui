<script lang="ts">
	import Container from 'layout/Container.svelte';

	let className: string = '';
	export { className as class };
</script>

<section>
	<Container>
		<div class="bg-300 relative my-4xl rounded-box px-4 py-2xl md:px-2xl {className}">
			<slot />
		</div>
	</Container>
</section>
