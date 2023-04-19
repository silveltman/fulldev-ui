<script lang="ts">
	export let type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number' = 'text'
	export let required: boolean = false
	export let name: string = type
	export let label: string | undefined = undefined
	export let placeholder: string | undefined = undefined

	// no content prop
</script>

<div class="flex flex-col">
	{#if label}
		<label
			for={name}
			class="text-sm font-medium text-500"
		>
			{label}
			{#if required}
				*
			{/if}
		</label>
	{/if}
	<input
		{type}
		id={name}
		{name}
		{placeholder}
		{required}
		class="flex rounded-input border-700 py-3 px-3 text-md leading-none"
	/>
</div>
