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
			title="size"
			bind:value={size}
			options={['sm', 'md', 'lg']}
		/>
	</svelte:fragment>

	<Hst.Variant title="Primary">
		<div class="p-4">
			<Button
				{content}
				{disabled}
				{size}
				variant="primary"
			/>
		</div>
	</Hst.Variant>
	<Hst.Variant title="Secondary">
		<div class="p-4">
			<Button
				{content}
				{disabled}
				{size}
				variant="secondary"
			/>
		</div>
	</Hst.Variant>
</Hst.Story>
