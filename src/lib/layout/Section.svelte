<script lang="ts">
	import TheSectionFill from './SectionFill.svelte'
	import TheSectionBox from './SectionBox.svelte'
	import TheSectionStack from './SectionStack.svelte'
	import TheSectionSplit from './SectionSplit.svelte'

	let className: string = ''
	export { className as class }
	export let box: boolean = false
	export let split: boolean = false
	export let center: boolean = false
	export let reverse: boolean = false
</script>

<svelte:component
	this={box ? TheSectionBox : TheSectionFill}
	class={className}
>
	<svelte:component
		this={split ? TheSectionSplit : TheSectionStack}
		{center}
		{reverse}
	>
		<slot />
	</svelte:component>
</svelte:component>
