<script lang="ts">
	import type { Hst, NewsletterContent } from '$lib/types';
	import Newsletter from 'base/Newsletter.svelte';

	export let Hst: Hst;

	let content: NewsletterContent = {
		textfield: {
			placeholder: 'Your email'
		},
		button: {
			text: 'Subscribe'
		}
	};
</script>

<Hst.Story>
	<Newsletter {content} />
</Hst.Story>
