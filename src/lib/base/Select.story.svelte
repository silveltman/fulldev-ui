<script lang="ts">
	import type { Hst, SelectContent } from '$lib/types';
	import Select from './Select.svelte';
	export let Hst: Hst;

	let content: SelectContent = {
		label: 'Label',
		placeholder: 'Placeholder',
		options: ['Option 1', 'Option 2', 'Option 3']
	};
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Json
			bind:value={content}
			title="Content"
		/>
	</svelte:fragment>

	<Select
		{content}
		name="select"
	/>
</Hst.Story>
