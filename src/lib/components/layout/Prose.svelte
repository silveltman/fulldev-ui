<script lang="ts">
	let className = ''
	export { className as class }
	export let as: string = 'div'
	export let size: 'sm' | 'md' | 'lg' = 'md'
	export let center: boolean = false
</script>

<svelte:element
	this={as}
	class="prose flex flex-col relative
	{center ? 'mx-auto items-center text-center' : 'items-start'}
	{className}
	"
	class:prose-sm={size === 'sm'}
	class:prose-md={size === 'md'}
	class:prose-lg={size === 'lg'}
	{...$$restProps}
>
	<slot />
</svelte:element>

<style lang="postcss">
	.prose-sm {
		--prose-space: theme('spacing.sm');
	}
	.prose-md {
		--prose-space: theme('spacing.md');
	}
	.prose-lg {
		--prose-space: theme('spacing.lg');
	}

	.prose {
		gap: var(--prose-space);

		:global(ul),
		:global(ol) {
			@apply flex flex-col items-start gap-sm;
		}

		:global(ul li) {
			@apply inline-flex items-start;

			&::before {
				@apply inline-flex items-center pr-sm align-middle leading-none;
				content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M382 816 154 588l57-57 171 171 367-367 57 57-424 424Z"/></svg>');
			}
		}
	}
</style>
