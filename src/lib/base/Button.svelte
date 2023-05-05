<script lang="ts">
	import type { ButtonContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: ButtonContent;

	export let variant: 'primary' | 'secondary' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<svelte:element
	this={content.href ? 'a' : 'button'}
	on:click
	type={content.href ? undefined : 'button'}
	href={content.href}
	class="btn

		{size === 'sm' && 'btn-sm text-xs'}
		{size === 'md' && 'text-sm'}
		{size === 'lg' && 'btn-lg text-base'}

		{variant === 'primary' && ''}
		{variant === 'secondary' && ''}
		
		{className}
		"
	{...$$restProps}
>
	<slot name="start" />

	{content.text}

	<slot name="end" />
</svelte:element>

<div class="">
	<div class="h-20 w-20 bg-test-5" />
</div>
