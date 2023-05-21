<script lang="ts">
	import type { Hst } from '$lib/types';
	import Eyebrow from '../../archive/Eyebrow.svelte';
	export let Hst: Hst;

	let text: string = 'Lorem opsim dolor sit';
	let size: 'small' | 'medium' | 'large' = 'medium';
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
	<svelte:fragment slot="controls">
		<Hst.Text
			title="Text"
			bind:value={text}
		/>
		<Hst.Select
			title="Size"
			bind:value={size}
			options={['small', 'medium', 'large']}
		/>
	</svelte:fragment>

	<Hst.Variant title="Step 1 (text)">
		<p class="{size} text-sm">
			{text}
		</p>
	</Hst.Variant>
	<Hst.Variant title="Step 1 (eyebrow)">
		<!-- <Eyebrow
			{text}
			class={size}
		/> -->
	</Hst.Variant>
	<Hst.Variant title="Step 2 (text)">
		<p class="{size} text-md">
			{text}
		</p>
	</Hst.Variant>
	<Hst.Variant title="Step 2 (heading)">
		<h4 class={size}>
			{text}
		</h4>
	</Hst.Variant>
	<Hst.Variant title="Step 3 (heading)">
		<h1 class={size}>
			{text}
		</h1>
	</Hst.Variant>
</Hst.Story>
