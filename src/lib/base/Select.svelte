<script lang="ts">
	export let required: boolean = false
	export let name: string = 'select'
	export let label: string | undefined = undefined
	export let placeholder: string | undefined = undefined
	export let options: string[]
	//
</script>

<div class="flex flex-col">
	{#if label}
		<label
			for={name}
			class="text-sm font-medium text-700"
		>
			{label}
			{#if required}
				*
			{/if}
		</label>
	{/if}
	<select
		id={name}
		{name}
		class="text-base inline-flex rounded-input border-500 py-2 px-3 pr-10 sm:text-sm"
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
