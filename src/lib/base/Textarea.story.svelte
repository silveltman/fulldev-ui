<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import Textarea from './Textarea.svelte'
	export let Hst: Hst

	let rows: number = 5
	let required = false
	let name = 'textarea'
	let label = 'Lorem'
	let placeholder: string | undefined = undefined
</script>

<Hst.Story layout={{ type: 'grid', width: 300 }}>
	<svelte:fragment slot="controls">
		<Hst.Number
			bind:value={rows}
			title="Type"
		/>
		<Hst.Checkbox
			bind:value={required}
			title="Required"
		/>
		<Hst.Text
			bind:value={name}
			title="Name"
		/>
		<Hst.Text
			bind:value={label}
			title="Label"
		/>
		<Hst.Text
			bind:value={placeholder}
			title="Placeholder"
		/>
	</svelte:fragment>

	<Textarea
		{rows}
		{required}
		{name}
		{label}
		{placeholder}
	/>
	
</Hst.Story>
