<script lang="ts">
	import Fill from './SectionFill.svelte';
	import Box from './SectionBox.svelte';
	import Stack from './SectionStack.svelte';
	import Split from './SectionSplit.svelte';

	let className: string = '';
	export { className as class };

	let box: boolean = false;
	let split: boolean = false;
	let center: boolean = false;
</script>

<svelte:component
	this={box ? Box : Fill}
	class={className}
>
	<svelte:component this={split ? Split : Stack}>
		<slot />
	</svelte:component>
</svelte:component>
