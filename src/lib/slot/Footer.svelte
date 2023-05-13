<script lang="ts">
	import Container from 'layout/Container.svelte';

	let className = '';
	export { className as class };
</script>

<footer class="border-t border-base-6 bg-base-2 py-3xl {className}">
	<Container>
		<div
			class="grid gap-2xl sm:grid-cols-[repeat(auto-fit,minmax(34%,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(21%,1fr))]"
		>
			<slot />
		</div>
		<div>
			<slot name="bottom" />
		</div>
	</Container>
</footer>
