<script lang="ts">
	import type { SlotNewsletterContent } from '$lib/types'
	import Form from 'base/Form.svelte'
	import Textfield from 'base/Textfield.svelte'
	import Button from 'base/Button.svelte'

	export let content: SlotNewsletterContent
	//
</script>

<Form
	key="newsletter"
	subject="Newsletter"
	action="/"
>
	<div class="flex gap-sm">
		<Textfield
			name="email"
			type="email"
			placeholder={content.placeholder}
			required
		/>
		<Button
			content={content.button}
			type="submit"
		/>
	</div>
</Form>
