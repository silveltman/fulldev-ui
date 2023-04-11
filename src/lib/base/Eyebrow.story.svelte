<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import Eyebrow from './Eyebrow.svelte'
	export let Hst: Hst

	let color: boolean = true
	let textarea: string = 'Lorem ipsum'
</script>

<Hst.Story layout={{ type: 'grid', width: 300 }}>
	<svelte:fragment slot="controls">
		<Hst.Text
			bind:value={textarea}
			title="Content"
		/>
		<Hst.Checkbox
			bind:value={color}
			title="Color"
		/>
	</svelte:fragment>

	<Hst.Variant title="sm">
		<Eyebrow
			{color}
			{textarea}
			size="sm"
		/>
	</Hst.Variant>
	<Hst.Variant title="md">
		<Eyebrow
			{color}
			{textarea}
			size="md"
		/>
	</Hst.Variant>
	<Hst.Variant title="lg">
		<Eyebrow
			{color}
			{textarea}
			size="lg"
		/>
	</Hst.Variant>
</Hst.Story>
