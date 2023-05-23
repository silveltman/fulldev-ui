<script lang="ts">
	import type { SlotChecklistContent, Hst } from '$lib/types';
	import SlotChecklist from 'slot/SlotChecklist.svelte';

	export let Hst: Hst;

	let content: SlotChecklistContent = [
		{
			heading: 'Lorem ipsum dolor',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			heading: 'Lorem ipsum dolor',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			heading: 'Lorem ipsum dolor',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		}
	];
</script>

<Hst.Story>
	<SlotChecklist {content} />
</Hst.Story>
