<script lang="ts">
	import Textarea from './base/Textarea.svelte'
	import Textfield from './base/Textfield.svelte'
	import Button from './base/Button.svelte'

	export let key: string | undefined = undefined
	export let subject: string | undefined = undefined
	export let action: string | undefined = undefined
</script>

<form
	{action}
	method="POST"
	class="flex w-full max-w-md flex-col gap-md"
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

	<slot>
		<Textfield
			label="Name"
			name="name"
		/>
		<Textfield
			label="Email"
			name="email"
			type="email"
		/>
		<Textfield
			label="Phone"
			name="tel"
			type="tel"
		/>
		<Textarea
			label="Message"
			name="message"
		/>

		<Button type="submit">Send message</Button>
	</slot>
</form>
