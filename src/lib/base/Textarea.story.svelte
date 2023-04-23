<script lang="ts">
	import type { Hst, TextAreaContent } from '$lib/types'
	import Textarea from './Textarea.svelte'
	export let Hst: Hst


	let content: TextAreaContent = {
		rows:10,
		required: false,
		name : 'temp',
		label : 'text',
		placeholder : 'write here'
	}

</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Json
			title="Content"
			bind:value={content}
		/>
	</svelte:fragment>

	<Textarea
		{content}
	/>
	
</Hst.Story>
