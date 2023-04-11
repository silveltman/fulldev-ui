<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import type { StatsContent } from '$lib/types'
	import SlotStats from 'slot/SlotStats.svelte'
	export let Hst: Hst

	let content: StatsContent = [
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
