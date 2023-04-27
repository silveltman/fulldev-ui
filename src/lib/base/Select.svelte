<script lang="ts">
	import type { SelectContent } from '$lib/types'

	// export let required: boolean = false
	// export let name: string = 'select'
	// export let label: string | undefined = undefined
	// export let placeholder: string | undefined = undefined
	// export let options: string[]

	let className = ''
	export { className as class }
	export let content: SelectContent

	export let size: 'sm' | 'md' | 'lg' = 'md'
	// export let variant: 'primary' | 'secondary' = 'primary'
</script>

<div
	class="flex flex-col {className}"
	{...$$restProps}
>
	{#if content.label}
		<label for={content.name}>
			{content.label}
			{#if content.required}
				"*"
			{/if}
		</label>
	{/if}
	<select
		id={content.name}
		name={content.name}
		class="text-base inline-flex rounded-input border-500 

		{size === 'sm' && 'py-1 px-2 pr-6 text-sm'}
		{size === 'md' && 'text-base py-2 px-3 pr-10'}
		{size === 'lg' && 'py-3 px-4 pr-14 text-lg'}
		
		"
		required={content.required}
	>
		{#if content.placeholder}
			<option
				disabled
				selected>{content.placeholder}</option
			>
		{/if}
		{#each content.options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
</div>
