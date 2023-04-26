<script lang="ts">
	import type { Hst, ButtonContent } from '$lib/types'
	import Button from './Button.svelte'
	export let Hst: Hst

	let content: ButtonContent = {
		text: 'Click me',
		href: '#'
	}

	let disabled: boolean = false
</script>

<Hst.Story layout={{ type: 'grid', width: 200 }}>
	<svelte:fragment slot="controls">
		<Hst.Json
			title="Content"
			bind:value={content}
		/>
		<Hst.Checkbox
			title="Disabled"
			bind:value={disabled}
		/>
	</svelte:fragment>

	<Hst.Variant title="Primary">
		<Button
			{content}
			{disabled}
			variant="primary"
			size="sm"
		/>
	</Hst.Variant>
	<Hst.Variant title="Secondary">
		<Button
			{content}
			{disabled}
			variant="secondary"
			size="sm"
		/>
	</Hst.Variant>
	<Hst.Variant title="Tertiary">
		<Button
			{content}
			{disabled}
			variant="tertiary"
			size="sm"
		/>
	</Hst.Variant>
</Hst.Story>
