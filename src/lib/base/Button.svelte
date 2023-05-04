<script lang="ts">
	import type { ButtonContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: ButtonContent;

	export let variant: 'primary' | 'secondary' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let rel: string = 'prefetch';
</script>

<svelte:element
	this={content.href ? 'a' : 'button'}
	on:click
	rel={content.href ? rel : undefined}
	href={content.href}
	class="btn !scale-100 rounded-button border font-button hover:ring-1 hover:ring-offset-2 active:focus:ring-offset-0 active:hover:ring-offset-0

		{size === 'sm' && 'btn-sm text-sm'}
		{size === 'md' && 'text-base'}
		{size === 'lg' && 'btn-lg text-lg'}

		{variant === 'primary' &&
		'!border-primary-middle !bg-primary-back text-primary-front ring-primary-middle'}
		{variant === 'secondary' &&
		'!border-secondary-middle !bg-secondary-back text-secondary-front ring-secondary-middle'}
		
		{className}
		"
	{...$$restProps}
>
	<slot name="start" />
	{content.text}
	<slot name="end" />
</svelte:element>
