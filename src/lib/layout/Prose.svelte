<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class="richtext max-w-2xl {className}">
	<slot />
</div>

<style lang="postcss">
	.richtext {
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

		:global(a[href]) {
			@apply underline;
		}
	}
</style>
