<script lang="ts">
	export let key: string | undefined = undefined
	export let subject: string | undefined = undefined
	export let action: string | undefined = undefined
</script>

<form
	{action}
	method="POST"
	class="flex w-full max-w-md flex-col gap-md"
	{...$$restProps}
>
	{#if key}
		<input
			type="hidden"
			name="inbox_key"
			value={key}
		/>
	{/if}
	{#if subject}
		<input
			type="hidden"
			name="_subject"
			value={subject}
		/>
	{/if}
	<input
		type="text"
		name="_gotcha"
		style="display: none;"
	/>

	<slot />
</form>
