<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import Button from './Button.svelte'
	export let Hst: Hst

	let href: string | undefined = undefined
	let text: string = 'Lorem ipsum'
	let disabled: boolean = false
</script>

<Hst.Story layout={{ type: 'grid', width: 300 }}>
	<svelte:fragment slot="controls">
		<Hst.Text
			title="Content"
			bind:value={text}
		/>
		<Hst.Text
			title="Href"
			bind:value={href}
		/>
		<Hst.Checkbox
			title="Disabled"
			bind:value={disabled}
		/>
	</svelte:fragment>

	<Hst.Variant title="Primary/sm">
		<Button
			{href}
			{text}
			{disabled}
			variant="primary"
			size="sm"
		/>
	</Hst.Variant>
	<Hst.Variant title="Primary/md">
		<Button
			{href}
			{text}
			{disabled}
			variant="primary"
			size="md"
		/>
	</Hst.Variant>
	<Hst.Variant title="Primary/lg">
		<Button
			{href}
			{text}
			{disabled}
			variant="primary"
			size="lg"
		/>
	</Hst.Variant>
	<Hst.Variant title="Secondary/sm">
		<Button
			{href}
			{text}
			{disabled}
			variant="secondary"
			size="sm"
		/>
	</Hst.Variant>
	<Hst.Variant title="Secondary/md">
		<Button
			{href}
			{text}
			{disabled}
			variant="secondary"
			size="md"
		/>
	</Hst.Variant>
	<Hst.Variant title="Secondary/lg">
		<Button
			{href}
			{text}
			{disabled}
			variant="secondary"
			size="lg"
		/>
	</Hst.Variant>
	<Hst.Variant title="Tertiary/sm">
		<Button
			{href}
			{text}
			{disabled}
			variant="tertiary"
			size="sm"
		/>
	</Hst.Variant>
	<Hst.Variant title="Tertiary/md">
		<Button
			{href}
			{text}
			{disabled}
			variant="tertiary"
			size="md"
		/>
	</Hst.Variant>
	<Hst.Variant title="Tertiary/lg">
		<Button
			{href}
			{text}
			{disabled}
			variant="tertiary"
			size="lg"
		/>
	</Hst.Variant>
</Hst.Story>
