<script lang="ts">
	import Form from './Form.svelte'

	let className = ''
	export { className as class }
</script>

<section class="bg-neutral-0 py-2xl {className}">
	<div class="conainer flex justify-center">
		<Form />
	</div>
</section>
