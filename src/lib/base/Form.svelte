<script lang="ts">
	import type { FormContent, TextFieldContent } from '$lib/types'
	import Textfield from './Textfield.svelte'

	let className = ''
	export { className as class }

	export let key: string | undefined = undefined
	export let subject: string | undefined = undefined
	// export let action: string | undefined = undefined

	let content: FormContent

	// let field : TextFieldContent = {
	// 	type: 'text',
	// 	name: 'name',
	// 	label: 'Name',
	// 	placeholder: 'Your name',
	// 	required: true,
	// }
</script>

<form
	action={content.action}
	method="POST"
	class="flex w-full max-w-md flex-col gap-md 
	{className}"
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
