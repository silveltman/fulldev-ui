<script lang="ts">
	import type { Hst, EyebrowContent } from '$lib/types'
	import Eyebrow from './Eyebrow.svelte'
	export let Hst: Hst

	export let content: EyebrowContent = 'Lorem ipsum'
</script>

<Hst.Story layout={{ type: 'grid', width: 300 }}>
	<svelte:fragment slot="controls">
		<Hst.Json
			bind:value={content}
			title="Content"
		/>
	</svelte:fragment>

	<Hst.Variant title="sm">
		<Eyebrow
			{content}
			size="sm"
		/>
	</Hst.Variant>
	<Hst.Variant title="md">
		<Eyebrow
			{content}
			size="md"
		/>
	</Hst.Variant>
	<Hst.Variant title="lg">
		<Eyebrow
			{content}
			size="lg"
		/>
	</Hst.Variant>
</Hst.Story>
