<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import type { Prose } from '$lib/types'
	import SlotProse from 'slot/SlotProse.svelte'
	export let Hst: Hst

	// Styling props
	let size: 'lg' | 'md' | 'sm' = 'md'

	// Content props
	let block: Prose = {
		eyebrow: 'lorem ipsum',
		heading: 'Lorem ipsum dolor',
		html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		button_primary: {
			text: 'Lorem ipsum',
			href: '#'
		},
		button_secondary: {
			text: 'Lorem ipsum',
			href: '#'
		}
	}
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Select
			title="size"
			bind:value={size}
			options={['sm', 'md', 'lg']}
		/>
		<Hst.Json
			title="Block"
			bind:value={block}
		/>
	</svelte:fragment>

	<SlotProse
		{size}
		{block}
	/>
</Hst.Story>
