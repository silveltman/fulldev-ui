<script lang="ts">
	import type { HighlightContent, Hst } from '$lib/types';
	import Highlight from 'base/Highlight.svelte';
	export let Hst: Hst;

	let size: 'large' | 'medium' | 'small' = 'medium';

	let content: HighlightContent = {
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
		}
	};
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Select
			title="size"
			bind:value={size}
			options={['small', 'medium', 'large']}
		/>
	</svelte:fragment>

	<Highlight
		class={size}
		{content}
	/>
</Hst.Story>
