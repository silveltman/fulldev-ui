<script lang="ts">
	import type { SlotStatsContent, Hst } from '$lib/types'
	import SlotStats from 'slot/SlotStats.svelte'

	export let Hst: Hst

	let content: SlotStatsContent = [
		{
			value: '800+',
			label: 'Lorem ipsum'
		},
		{
			value: '800+',
			label: 'Lorem ipsum'
		},
		{
			value: '800+',
			label: 'Lorem ipsum'
		}
	]
</script>

<Hst.Story>
	<SlotStats {content} />
</Hst.Story>
