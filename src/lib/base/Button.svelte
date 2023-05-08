<script lang="ts">
	import type { ButtonContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: ButtonContent;

	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let variant: 'solid' | 'ringed' | 'soft' = 'solid';
</script>

<svelte:element
	this={content.href ? 'a' : 'button'}
	on:click
	type={content.href ? undefined : 'button'}
	href={content.href}
	class="button btn !scale-100 transition-none {className}"
	class:btn-sm={size === 'sm'}
	class:btn-md={size === 'md'}
	class:btn-lg={size === 'lg'}
	class:button--solid={variant === 'solid'}
	class:button--ringed={variant === 'ringed'}
	class:button--soft={variant === 'soft'}
	{...$$restProps}
>
	{content.text}
</svelte:element>

<style lang="postcss">
	.btn-sm {
		@apply text-xs;
	}
	.btn-md {
		@apply text-sm;
	}
	.btn-lg {
		@apply text-base;
	}

	.button--solid {
		@apply bg-base-9 text-white focus:bg-base-10 hover:bg-base-10 active:bg-base-10;
	}
	.button--soft {
		@apply bg-base-3 text-base-12 focus:bg-base-5 hover:bg-base-4 active:bg-base-5;
	}
	.button--ringed {
		@apply bg-transparent text-base-12 ring-1 ring-inset ring-base-7 focus:ring-base-8 hover:ring-base-8 active:ring-base-8;
	}
</style>
