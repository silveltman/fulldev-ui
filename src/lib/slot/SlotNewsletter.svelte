<script lang="ts">
	import type { SlotNewsletterContent } from '$lib/types'
	import Form from 'base/Form.svelte'
	import Textfield from 'base/Textfield.svelte'

	export let content: SlotNewsletterContent = {}
</script>

<Form>
	<Textfield
		name="email"
		type="email"
		placeholder="Your email"
		required
	/>
</Form>
