<script lang="ts">
	import type { CollapseContent } from '$lib/types';
	import { IconChevronLeft } from '@tabler/icons-svelte';

	let className = '';
	export { className as class };
	export let content: CollapseContent;
</script>

<div class="accordion {className}">
	<input
		type="checkbox"
		id={content.heading}
		class="accordion-toggle"
	/>
	<label
		for={content.heading}
		class="accordion-title bg-transparent"
	>
		<h5>
			{content.heading}
		</h5>
		<IconChevronLeft class="accordion-icon" />
	</label>
	<div class="accordion-content">
		<p class="min-h-0">{content.textarea}</p>
	</div>
</div>
