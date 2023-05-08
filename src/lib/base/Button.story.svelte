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
		<Hst.Checkbox
			title="Disabled"
			bind:value={disabled}
		/>
		<Hst.Select
			title="Size"
			bind:value={size}
			options={['sm', 'md', 'lg']}
		/>
	</svelte:fragment>

	<Hst.Variant title="Solid">
		<Button
			class="size-{size}"
			{content}
			{disabled}
			variant="solid"
		/>
	</Hst.Variant>
	<Hst.Variant title="Ringed">
		<Button
			class="size-{size}"
			{content}
			{disabled}
			variant="ringed"
		/>
	</Hst.Variant>
	<Hst.Variant title="Soft">
		<Button
			class="size-{size}"
			{content}
			{disabled}
			variant="soft"
		/>
	</Hst.Variant>
	<Hst.Variant title="Transparent">
		<Button
			class="size-{size}"
			{content}
			{disabled}
			variant="transparent"
		/>
	</Hst.Variant>
</Hst.Story>
