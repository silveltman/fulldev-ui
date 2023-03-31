<script lang="ts">
	import { text } from 'svelte/internal'
	import Label from './Label.svelte'

	export let required: boolean = false
	export let rows: number = 5
	export let name: string = 'textarea'
	export let label: string | undefined = undefined
	export let placeholder: string | undefined = undefined
</script>

<div class="flex flex-col">
	{#if label}
		<Label {name}>
			{label}
		</Label>
	{/if}
	<textarea
		id={name}
		{rows}
		{name}
		{placeholder}
		{required}
		class="flex rounded-input border-neutral-400 py-3 px-3 text-body-md"
	/>
</div>
