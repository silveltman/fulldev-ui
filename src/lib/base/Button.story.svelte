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
	let variant: 'solid' | 'ringed' | 'soft' = 'solid';
</script>

<Hst.Story layout={{ type: 'grid', width: 200 }}>
	<svelte:fragment slot="controls">
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

	<div class="orange-dark">
		<Hst.Variant title="Solid">
			<Button
				{content}
				{disabled}
				{size}
				variant="solid"
			/>
		</Hst.Variant>
		<Hst.Variant title="Ringed">
			<Button
				{content}
				{disabled}
				{size}
				variant="ringed"
			/>
		</Hst.Variant>
		<Hst.Variant title="Soft">
			<Button
				{content}
				{disabled}
				{size}
				variant="soft"
			/>
		</Hst.Variant>
	</div>
</Hst.Story>
