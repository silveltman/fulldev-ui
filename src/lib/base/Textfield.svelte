<script lang="ts">
	import Label from './Label.svelte';

	// Base props
	export let type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number' = 'text';
	export let required: boolean = false;

	// Content props
	export let name: string = type;
	export let label: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
</script>

<div class="flex flex-col">
	{#if label}
		<Label {name} text={label} />
	{/if}
	<input
		{type}
		id={name}
		{name}
		{placeholder}
		{required}
		class="flex rounded-xl leading-none border-neutral-400 py-3 px-3 text-body-md"
	/>
</div>
