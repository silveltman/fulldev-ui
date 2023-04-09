<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import type { Checklist } from '$lib/types'
	import SlotChecklist from 'slot/SlotChecklist.svelte'
	export let Hst: Hst

	// Styling props

	// Content props
	let block: Checklist = {
		checklist: [
			{
				heading: 'Lorem ipsum dolor',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			},
			{
				heading: 'Lorem ipsum dolor',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			},
			{
				heading: 'Lorem ipsum dolor',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			}
		]
	}
</script>

<Hst.Story>
	<SlotChecklist {block} />
</Hst.Story>
