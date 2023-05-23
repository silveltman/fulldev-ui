<script lang="ts">
	import Container from 'layout/Container.svelte';
	import Split from './Split.svelte';

	let className = '';
	export { className as class };
</script>

<footer class="border-t border-base-6 bg-base-2 py-xl {className}">
	<Container>
		<Split>
			<slot name="start" />
			{#if $$slots.lists}
				<div class="columns-[160px] gap-x-lg space-y-lg [&>*]:break-inside-avoid-column">
					<slot name="lists" />
				</div>
			{/if}
			<slot name="end" />
		</Split>
		<div>
			<slot name="bottom" />
		</div>
	</Container>
</footer>
