<script lang="ts">
	import type { Hst, LinkContent } from '$lib/types'
	import { json } from '@sveltejs/kit'
	import Link from './Link.svelte'
	export let Hst: Hst

	let content: LinkContent = {
		text: 'Click me',
		href: '#'
	}
</script>

<Hst.Story layout={{ type: 'grid', width: 200 }}>
	<svelte:fragment slot="controls">
		<Hst.Json
			title="Content"
			bind:value={content}
		/>
	</svelte:fragment>

	<Hst.Variant title="Primary">
		<Link
			{content}
			variant="primary"
		/>
	</Hst.Variant>

	<Hst.Variant title="Secondary">
		<Link
			{content}
			variant="secondary"
		/>
	</Hst.Variant>

	<Hst.Variant title="Primary/sm">
		<Link
			{content}
			variant="primary"
			size="sm"
		/>
	</Hst.Variant>
	<Hst.Variant title="Primary/md">
		<Link
			{content}
			variant="primary"
			size="md"
		/>
	</Hst.Variant>
	<Hst.Variant title="Primary/lg">
		<Link
			{content}
			variant="primary"
			size="lg"
		/>
	</Hst.Variant>
</Hst.Story>
