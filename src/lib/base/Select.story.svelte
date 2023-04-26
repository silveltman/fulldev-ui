<script lang="ts">
	import type { Hst, SelectContent } from '$lib/types'
	import Select from './Select.svelte'
	export let Hst: Hst

	let content: SelectContent = {
		name: 'select',
		label: 'Select',
		placeholder: 'Select an option',
		options: ['Option 1', 'Option 2', 'Option 3'],
		required: false
	}
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
		size="sm"
	/>
	<!-- <Select
		{content}
		size="md"
	/>
	<Select
		{content}
		size="lg"
	/> -->
</Hst.Story>
