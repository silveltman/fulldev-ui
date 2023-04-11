<script lang="ts">
	import type { Layout } from '$lib/types'
	import SectionFill from './SectionFill.svelte'
	import SectionBox from './SectionBox.svelte'
	import SectionStack from './SectionStack.svelte'
	import SectionSplit from './SectionSplit.svelte'

	let className: string = ''
	export { className as class }
	export let layout: Layout = {}
</script>

<svelte:component
	this={layout.box ? SectionBox : SectionFill}
	class={className}
>
	<svelte:component
		this={layout.split ? SectionSplit : SectionStack}
		{layout}
	>
		<slot />
	</svelte:component>
</svelte:component>
