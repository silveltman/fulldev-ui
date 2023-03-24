<script lang="ts">
	import Label from './Label.svelte';

	// Base props
	export let required: boolean = false;
	export let rows: number = 5;

	// Content props
	export let name: string = 'textarea';
	export let label: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
</script>

<div class="flex flex-col">
	{#if label}
		<Label {name} text={label} />
	{/if}
	<textarea
		id={name}
		{rows}
		{name}
		{placeholder}
		{required}
		class="flex rounded-xl border-neutral-400 py-4 px-6 text-body-md"
	/>
</div>
