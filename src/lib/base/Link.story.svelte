<script lang="ts">
	import type { Hst, LinkContent } from '$lib/types'
	import Link from './Link.svelte'
	export let Hst: Hst

	let content: LinkContent = {
		text: 'Click me',
		href: '#'
	}

	let size: 'sm' | 'md' | 'lg' = 'md'
</script>

<Hst.Story layout={{ type: 'grid', width: 200 }}>
	<svelte:fragment slot="controls">
		<Hst.Json
			title="Content"
			bind:value={content}
		/>
		<Hst.Json
			title="Size"
			bind:value={size}
		/>
	</svelte:fragment>

	<Hst.Variant title="Primary">
		<Link
			{content}
			{size}
			variant="primary"
		/>
	</Hst.Variant>

	<Hst.Variant title="Secondary">
		<Link
			{content}
			{size}
			variant="secondary"
		/>
	</Hst.Variant>
</Hst.Story>
