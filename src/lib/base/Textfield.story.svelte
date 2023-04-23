<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import Textfield from './Textfield.svelte'
	export let Hst: Hst

	let type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number' = 'text'
	let required = false
	let name = type
	let label = 'Lorem'
	let placeholder: string | undefined = undefined
</script>

<Hst.Story layout={{ type: 'grid', width: 350 }}>
	<svelte:fragment slot="controls">
		<Hst.Select
			bind:value={type}
			options={['text', 'email', 'password', 'tel', 'url', 'search', 'number']}
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

	<Textfield
		{type}
		{required}
		{name}
		{label}
		{placeholder}
	/>
</Hst.Story>
