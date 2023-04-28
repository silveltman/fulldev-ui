<script lang="ts">
	import type { SlotHighlightContent, Hst } from '$lib/types';
	import SlotHighlight from 'slot/SlotHighlight.svelte';
	export let Hst: Hst;

	// Styling props
	let size: 'lg' | 'md' | 'sm' = 'md';

	// Content props
	let content: SlotHighlightContent = {
		eyebrow: 'Lorem ipsum',
		heading: 'Lorem ipsum dolor sit amet',
		textarea:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu ante.',
		button_primary: {
			text: 'Lorem ipsum',
			href: '#'
		},
		button_secondary: {
			text: 'Lorem ipsum',
			href: '#'
		},
		button_tertiary: {
			text: 'Lorem ipsum',
			href: '#'
		}
	};
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Select
			title="size"
			bind:value={size}
			options={['sm', 'md', 'lg']}
		/>
	</svelte:fragment>

	<SlotHighlight
		{size}
		{content}
	/>
</Hst.Story>
