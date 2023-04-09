<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import Button from './Button.svelte'
	export let Hst: Hst

	let color: boolean = true
	let href: string | undefined = undefined
	let text: string = 'Lorem ipsum'
	let disabled: boolean = false
</script>

<Hst.Story layout={{ type: 'grid', width: 300 }}>
	<svelte:fragment slot="controls">
		<Hst.Text
			bind:value={text}
			title="Content"
		/>
		<Hst.Text
			bind:value={href}
			title="Href"
		/>
		<Hst.Checkbox
			bind:value={disabled}
			title="Disabled"
		/>
		<Hst.Checkbox
			bind:value={color}
			title="Color"
		/>
	</svelte:fragment>

	<Hst.Variant title="Primary/sm">
		<Button
			{color}
			{href}
			{text}
			{disabled}
			variant="primary"
			size="sm"
		/>
	</Hst.Variant>
	<Hst.Variant title="Primary/md">
		<Button
			{color}
			{href}
			{text}
			{disabled}
			variant="primary"
			size="md"
		/>
	</Hst.Variant>
	<Hst.Variant title="Primary/lg">
		<Button
			{color}
			{href}
			{text}
			{disabled}
			variant="primary"
			size="lg"
		/>
	</Hst.Variant>
	<Hst.Variant title="Secondary/sm">
		<Button
			{color}
			{href}
			{text}
			{disabled}
			variant="secondary"
			size="sm"
		/>
	</Hst.Variant>
	<Hst.Variant title="Secondary/md">
		<Button
			{color}
			{href}
			{text}
			{disabled}
			variant="secondary"
			size="md"
		/>
	</Hst.Variant>
	<Hst.Variant title="Secondary/lg">
		<Button
			{color}
			{href}
			{text}
			{disabled}
			variant="secondary"
			size="lg"
		/>
	</Hst.Variant>
	<Hst.Variant title="Tertiary/sm">
		<Button
			{color}
			{href}
			{text}
			{disabled}
			variant="tertiary"
			size="sm"
		/>
	</Hst.Variant>
	<Hst.Variant title="Tertiary/md">
		<Button
			{color}
			{href}
			{text}
			{disabled}
			variant="tertiary"
			size="md"
		/>
	</Hst.Variant>
	<Hst.Variant title="Tertiary/lg">
		<Button
			{color}
			{href}
			{text}
			{disabled}
			variant="tertiary"
			size="lg"
		/>
	</Hst.Variant>
</Hst.Story>
