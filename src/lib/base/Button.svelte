<script lang="ts">
	import type { ButtonContent } from '$lib/types';

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
	class="btn-primary btn font-medium normal-case

		{size === 'sm' && 'btn-sm text-sm'}
		{size === 'md' && 'btn-md text-md'}
		{size === 'lg' && 'btn-lg text-lg'}

		{variant === 'primary' && 'btn-primary'}
		{variant === 'secondary' && 'btn-outline btn-secondary'}
		{variant === 'tertiary' && 'btn-accent btn-link'}
		
		{className}
		"
	{...$$restProps}
>
	<slot name="start" />
	{content.text}
	<slot name="end" />
</svelte:element>
