<script lang="ts">
	import type { NewsletterContent } from '$lib/types';
	import Form from 'base/Form.svelte';
	import Textfield from 'base/Textfield.svelte';
	import Button from 'base/Button.svelte';

	export let content: NewsletterContent;
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
