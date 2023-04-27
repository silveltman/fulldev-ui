<script lang="ts">
	import type { Hst, TextAreaContent } from '$lib/types'
	import Textarea from './Textarea.svelte'
	export let Hst: Hst

	let content: TextAreaContent = {
		required: false,
		name: 'temp',
		label: 'text',
		placeholder: 'write here'
	}

	let rows = 5
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Json
			title="Content"
			bind:value={content}
		/>
		<Hst.Number
			title="Rows"
			bind:value={rows}
		/>
	</svelte:fragment>

	<Textarea
		{content}
		{rows}
	/>
</Hst.Story>
