<script lang="ts">
	let className = ''
	export { className as class }
	export let as: string = 'div'
	export let size: 'sm' | 'md' | 'lg' = 'md'
</script>

<svelte:element
	this={as}
	class="prose {className}"
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
		--prose-space: vtheme('spacing.lg');
	}

	.prose {
		h1,
		h2,
		h3 {
			margin-bottom: var(--prose-space);

			&:not(:first-child) {
				margin-top: var(--prose-space);
			}
		}

		p,
		ul {
			margin-bottom: var(--prose-space);

			&:last-child {
				margin-bottom: 0;
			}
		}

		ul {
			@apply flex flex-col gap-sm;

			li {
				@apply flex items-start;

				&:before {
					@apply inline-flex items-center pr-sm align-middle leading-none;
					content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M382 816 154 588l57-57 171 171 367-367 57 57-424 424Z"/></svg>');
				}
			}
		}
	}
</style>
