<script lang="ts">
	import type { RichtextContent } from '$lib/types'

	export let content: RichtextContent
	//
</script>

<div class="slot-richtext max-w-3xl ">
	{#if content.html}
		{@html content.html}
	{/if}
</div>

<style lang="postcss">
	.slot-richtext {
		:global(h2:not(:first-child)),
		:global(h3:not(:first-child)) {
			@apply mt-3xl;
		}
		:global(img:not(:first-child)) {
			@apply mt-3xl;
		}

		:global(blockquote:not(:first-child)) {
			@apply mt-2xl;
		}

		:global(ul:not(:first-child)),
		:global(ol:not(:first-child)) {
			@apply mt-xl list-inside;
		}

		:global(ul) {
			@apply list-disc;
		}
		:global(ol) {
			@apply list-decimal;
		}

		:global(p:not(:first-child)) {
			@apply mt-lg;
		}
	}
</style>
