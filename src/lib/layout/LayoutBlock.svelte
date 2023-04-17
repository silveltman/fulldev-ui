<script lang="ts">
	import type { Layout } from '$lib/types'
	import Fill from './LayoutBlockFill.svelte'
	import Box from './LayoutBlockBox.svelte'
	import Stack from './LayoutBlockStack.svelte'
	import Split from './LayoutBlockSplit.svelte'

	let className: string = ''
	export { className as class }
	export let layout: Layout = {}
</script>

<svelte:component
	this={layout.box ? Box : Fill}
	class={className}
>
	<svelte:component
		this={layout.split ? Split : Stack}
		{layout}
	>
		<slot />
	</svelte:component>
</svelte:component>
