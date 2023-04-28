<script lang="ts">
	import type { SlotNewsletterContent } from '$lib/types';
	import Form from 'base/Form.svelte';
	import Textfield from 'base/Textfield.svelte';
	import Button from 'base/Button.svelte';

	export let content: SlotNewsletterContent;
</script>

<Form
	key="newsletter"
	subject="Newsletter"
	action="/"
>
	<div class="flex gap-sm">
		<Textfield
			content={content.textfield}
			name="newsletter-email"
			type="email"
			required
		/>
		<Button
			size="sm"
			content={content.button}
			type="submit"
		/>
	</div>
</Form>
