<script lang="ts">
	import type { StatsContent, Hst } from '$lib/types';
	import Stats from 'base/Stats.svelte';

	export let Hst: Hst;

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
	];
</script>

<Hst.Story>
	<Stats {content} />
</Hst.Story>
