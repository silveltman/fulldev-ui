<script lang="ts">
	import type { ButtonContent } from '$lib/types';
	import { IconChevronRight } from '@tabler/icons-svelte';

	let className = '';
	export { className as class };
	export let content: ButtonContent;

	export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let rel: string = 'prefetch';
</script>

<svelte:element
	this={content.href ? 'a' : 'button'}
	on:click
	rel={content.href ? rel : undefined}
	href={content.href}
	class="inline-flex items-center justify-center rounded-button text-center font-medium leading-none transition-transform disabled:cursor-not-allowed disabled:opacity-50 active:scale-95
	
			{size === 'sm' && 'py-3 px-4 text-sm'}
			{size === 'md' && 'py-4 px-6 text-md'}
			{size === 'lg' && 'py-5 px-8 text-lg'}

			{variant === 'primary' &&
		'shadow-button hover:text-button-primary-hover bg-button-primary text-button-primary ring-1 ring-inset ring-button-primary hover:bg-button-primary-hover hover:ring-button-primary-hover'}
			{variant === 'secondary' &&
		'shadow-button hover:text-button-secondary-hover bg-button-secondary text-button-secondary ring-1 ring-inset ring-button-secondary hover:bg-button-secondary-hover hover:ring-button-secondary-hover'}
			{variant === 'tertiary' && 'text-button !p-0 decoration-1 hover:underline'}
			
			{className}
			"
	{...$$restProps}
>
	{content.text}
</svelte:element>
