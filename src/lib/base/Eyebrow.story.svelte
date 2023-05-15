<script lang="ts">
	import type { Hst } from '$lib/types';
	import Eyebrow from './Eyebrow.svelte';
	export let Hst: Hst;

	let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Select
			bind:value={size}
			title="Size"
			options={['sm', 'md', 'lg']}
		/>
	</svelte:fragment>

	<Eyebrow
		text="Lorem ipsum"
		class="size-{size}"
		variant="primary"
	/>
</Hst.Story>
