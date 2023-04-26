<script lang="ts">
	import type { TextFieldContent } from '$lib/types'

	// export let type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number' = 'text'
	// export let required: boolean = false
	// export let name: string = type
	// export let label: string | undefined = undefined
	// export let placeholder: string | undefined = undefined

	let className = ''
	export { className as class }

	export let content: TextFieldContent
	// no content prop
</script>

<div
	class="flex flex-col {className}"
	{...$$restProps}
>
	{#if content.label}
		<label
			for={content.name}
			class="text-sm font-medium text-500"
		>
			{content.label}
			{#if content.required}
				*
			{/if}
		</label>
	{/if}
	<input
		type={content.type}
		id={content.name}
		name={content.name}
		placeholder={content.placeholder}
		required={content.required}
		class="flex rounded-input border-700 py-3 px-3 text-md leading-none"
	/>
</div>
