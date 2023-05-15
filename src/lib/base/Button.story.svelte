<script lang="ts">
	import type { Hst } from '$lib/types';
	import Button from './Button.svelte';
	export let Hst: Hst;

	let text: string = 'Click me';
	let href: string = '#';
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
			{text}
			{href}
			{disabled}
			variant="solid"
		/>
	</Hst.Variant>
	<Hst.Variant title="Ringed">
		<Button
			class="size-{size}"
			{text}
			{href}
			{disabled}
			variant="ringed"
		/>
	</Hst.Variant>
	<Hst.Variant title="Soft">
		<Button
			class="size-{size}"
			{text}
			{href}
			{disabled}
			variant="soft"
		/>
	</Hst.Variant>
	<Hst.Variant title="Transparent">
		<Button
			class="size-{size}"
			{text}
			{href}
			{disabled}
			variant="ghost"
		/>
	</Hst.Variant>
</Hst.Story>
