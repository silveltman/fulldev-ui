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

	<Hst.Variant title="Primary/sm">
		<Button
			{content}
			{disabled}
			variant="primary"
			size="sm"
		/>
	</Hst.Variant>
	<Hst.Variant title="Primary/md">
		<Button
			{content}
			{disabled}
			variant="primary"
			size="md"
		/>
	</Hst.Variant>
	<Hst.Variant title="Primary/lg">
		<Button
			{content}
			{disabled}
			variant="primary"
			size="lg"
		/>
	</Hst.Variant>
	<Hst.Variant title="Secondary/sm">
		<Button
			{content}
			{disabled}
			variant="secondary"
			size="sm"
		/>
	</Hst.Variant>
	<Hst.Variant title="Secondary/md">
		<Button
			{content}
			{disabled}
			variant="secondary"
			size="md"
		/>
	</Hst.Variant>
	<Hst.Variant title="Secondary/lg">
		<Button
			{content}
			{disabled}
			variant="secondary"
			size="lg"
		/>
	</Hst.Variant>
	<Hst.Variant title="Tertiary/sm">
		<Button
			{content}
			{disabled}
			variant="tertiary"
			size="sm"
		/>
	</Hst.Variant>
	<Hst.Variant title="Tertiary/md">
		<Button
			{content}
			{disabled}
			variant="tertiary"
			size="md"
		/>
	</Hst.Variant>
	<Hst.Variant title="Tertiary/lg">
		<Button
			{content}
			{disabled}
			variant="tertiary"
			size="lg"
		/>
	</Hst.Variant>
</Hst.Story>
