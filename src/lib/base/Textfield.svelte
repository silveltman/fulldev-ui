<script lang="ts">
	export let type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number' = 'text'
	export let required: boolean = false
	export let name: string = type
	export let label: string | undefined = undefined
	export let placeholder: string | undefined = undefined
</script>

<div class="flex flex-col">
	{#if label}
		<label
			for={name}
			class="text-sm font-medium text-neutral-700"
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
		class="flex rounded-input border-neutral-400 bg-neutral-200 py-3 px-3 text-md leading-none"
	/>
</div>
