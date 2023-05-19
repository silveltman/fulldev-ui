<script lang="ts">
	import type { Hst } from '$lib/types';
	import Button from 'base/Button.svelte';
	import Link from 'base/Link.svelte';
	export let Hst: Hst;

	let text: string = 'Click me';
	let href: string = '';
	let size: 'small' | 'medium' | 'large' = 'medium';
	let disabled: true | undefined = undefined;
</script>

<Hst.Story layout={{ type: 'grid', width: 200 }}>
	<svelte:fragment slot="controls">
		<Hst.Text
			title="Text"
			bind:value={text}
		/>
		<Hst.Text
			title="Href"
			bind:value={href}
		/>
		<Hst.Select
			title="Size"
			bind:value={size}
			options={['small', 'medium', 'large']}
		/>
		<Hst.Checkbox
			title="Disabled"
			bind:value={disabled}
		/>
	</svelte:fragment>

	<Hst.Variant title="Solid">
		<Button
			class={size}
			{text}
			{href}
			{disabled}
			variant="solid"
		/>
	</Hst.Variant>
	<Hst.Variant title="Ringed">
		<Button
			class={size}
			{text}
			{href}
			{disabled}
			variant="ringed"
		/>
	</Hst.Variant>
	<Hst.Variant title="Soft">
		<Button
			class={size}
			{text}
			{href}
			{disabled}
			variant="soft"
		/>
	</Hst.Variant>
	<Hst.Variant title="Transparent">
		<Button
			class={size}
			{text}
			{href}
			{disabled}
			variant="ghost"
		/>
	</Hst.Variant>
	<Hst.Variant title="Link">
		<Link
			class={size}
			{text}
			{href}
			{disabled}
		/>
	</Hst.Variant>
</Hst.Story>
