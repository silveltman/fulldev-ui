<script lang="ts">
	import type { FormContent, TextFieldContent } from "$lib/types"
	import Textfield from "./Textfield.svelte"

	let className = ''
	export { className as class }

	// export let key: string | undefined = undefined
	// export let subject: string | undefined = undefined
	// export let action: string | undefined = undefined

	let content : FormContent

	// let field : TextFieldContent = {
	// 	type: 'text',
	// 	name: 'name',
	// 	label: 'Name',
	// 	placeholder: 'Your name',
	// 	required: true,
	// }
</script>

<form
	action ={content.action}
	method="POST"
	class="flex w-full max-w-md flex-col gap-md 
	{className}"
>
		<!-- <input
			type="hidden"
			name="_subject"
			value="text"
		/> -->
		<!-- <Textfield  
			content = {field}
		/> -->


	<slot />
</form>
