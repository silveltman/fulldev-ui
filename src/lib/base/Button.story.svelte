<script lang="ts">
	import type { Hst, ButtonContent } from '$lib/types';
	import Button from './Button.svelte';
	export let Hst: Hst;

	let content: ButtonContent = {
		text: 'Click me',
		href: '#'
	};

	let disabled: true | undefined = undefined;
	let size: 'sm' | 'md' | 'lg' = 'md';
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
		<Hst.Select
			title="size"
			bind:value={size}
			options={['sm', 'md', 'lg']}
		/>
	</svelte:fragment>

	<Hst.Variant title="Primary">
		<Button
			{content}
			{disabled}
			{size}
			variant="primary"
		/>
	</Hst.Variant>
	<Hst.Variant title="Secondary">
		<Button
			{content}
			{disabled}
			{size}
			variant="secondary"
		/>
	</Hst.Variant>
	<Hst.Variant title="Tertiary">
		<Button
			{content}
			{disabled}
			{size}
			variant="tertiary"
		/>
	</Hst.Variant>
</Hst.Story>
