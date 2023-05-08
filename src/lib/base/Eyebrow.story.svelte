<script lang="ts">
	import type { Hst, EyebrowContent } from '$lib/types';
	import Eyebrow from './Eyebrow.svelte';
	import Select from './Select.svelte';
	export let Hst: Hst;

	let content: EyebrowContent = 'Lorem ipsum';
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
		{content}
		{size}
		variant="primary"
	/>
</Hst.Story>
