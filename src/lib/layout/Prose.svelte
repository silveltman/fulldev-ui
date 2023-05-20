<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class="c-richtext small:max-w-xl large:max-w-3xl max-w-2xl {className}">
	<slot />
</div>

<style lang="postcss">
	.c-richtext {
		:global(h2:not(:first-child)),
		:global(h3:not(:first-child)) {
			@apply mt-space-8;
		}
		:global(img:not(:first-child)) {
			@apply mt-space-8;
		}

		:global(blockquote:not(:first-child)) {
			@apply mt-space-7;
		}

		:global(ul:not(:first-child)),
		:global(ol:not(:first-child)) {
			@apply mt-2xl list-inside;
		}

		:global(ul) {
			@apply list-disc;
		}
		:global(ol) {
			@apply list-decimal;
		}

		:global(p:not(:first-child)) {
			@apply mt-space-5;
		}

		:global(a[href]) {
			@apply underline;
		}
	}
</style>
