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

	let size: 'sm' | 'md' | 'lg' = 'md'
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Json
			bind:value={content}
			title="Content"
		/>
		<Hst.Json
			bind:value={size}
			title="Size"
		/>
	</svelte:fragment>

	<Select
		{content}
		{size}
	/>
</Hst.Story>
