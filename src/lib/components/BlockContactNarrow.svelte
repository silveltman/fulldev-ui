<script lang="ts">
	import Form from '../Form.svelte'
	import Container from './layout/Container.svelte'

	let className = ''
	export { className as class }
</script>

<section class="bg-neutral-0 py-2xl {className}">
	<Container class="flex justify-center">
		<Form />
	</Container>
</section>
