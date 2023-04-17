<script lang="ts">
	export let required: boolean = false
	export let rows: number = 5
	export let name: string = 'textarea'
	export let label: string | undefined = undefined
	export let placeholder: string | undefined = undefined
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
	<textarea
		id={name}
		{rows}
		{name}
		{placeholder}
		{required}
		class="flex rounded-input border-700 py-3 px-3 text-md"
	/>
</div>
