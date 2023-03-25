<script lang="ts">
	import Label from './Label.svelte'

	export let required: boolean = false
	export let name: string = 'select'
	export let label: string | undefined = undefined
	export let placeholder: string | undefined = undefined
	export let options: string[]
</script>

<div class="flex flex-col">
	{#if label}
		<Label
			{name}
			text={label}
		/>
	{/if}
	<select
		id={name}
		{name}
		class="text-base sm:text-sm inline-flex rounded-xl border-neutral-400 py-2 px-3 pr-10"
		{required}
	>
		{#if placeholder}
			<option
				disabled
				selected>{placeholder}</option
			>
		{/if}
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
</div>
