<script lang="ts">
	let className = '';
	export { className as class };
</script>

<article class="c-prose !medium max-w-3xl {className}">
	<slot />
</article>

<style lang="postcss">
	.c-prose {
		:global(h1),
		:global(h4) {
			@apply large;
		}
		:global(h2),
		:global(h5) {
			@apply medium;
		}
		:global(h3),
		:global(h6) {
			@apply small;
		}

		:global(h1:not(:first-child)),
		:global(h2:not(:first-child)),
		:global(h3:not(:first-child)),
		:global(h4:not(:first-child)),
		:global(h5:not(:first-child)),
		:global(h6:not(:first-child)) {
			@apply mt-xl;
		}
		:global(img) {
			@apply my-xl;
		}

		:global(p:not(:first-child)),
		:global(blockquote:not(:first-child)),
		:global(ul:not(:first-child)),
		:global(ol:not(:first-child)) {
			@apply mt-md text-hue12/80 list-inside;
		}

		:global(ul) {
			@apply list-disc;
		}
		:global(ol) {
			@apply list-decimal;
		}

		:global(a[href]) {
			@apply underline;
		}

		:global(img) {
			@apply rounded-image h-auto w-full;
		}
	}
</style>
