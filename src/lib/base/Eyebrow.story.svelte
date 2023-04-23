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

	<Hst.Variant title="Primary/sm">
		<Eyebrow
			{content}
			size="sm"
			variant="primary"
		/>
	</Hst.Variant>
	<Hst.Variant title="Secondary/md">
		<Eyebrow
			{content}
			size="md"
			variant = "secondary"
		/>
	</Hst.Variant>
	<Hst.Variant title="Secondary/lg">
		<Eyebrow
			{content}
			size="lg"
			variant = "secondary"
		/>
	</Hst.Variant>
</Hst.Story>
