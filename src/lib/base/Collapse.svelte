<script lang="ts">
	import type { DisclosureContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: DisclosureContent;
</script>

<div class="collapse-plus collapse {className}">
	<input type="checkbox" />
	<h5 class="collapse-title">{content.heading}</h5>
	<p class="collapse-content transition-none">
		{content.textarea}
	</p>
</div>
