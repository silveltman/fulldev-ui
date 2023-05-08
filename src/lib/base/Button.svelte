<script lang="ts">
	import type { ButtonContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: ButtonContent;

	export let variant: 'solid' | 'ringed' | 'soft' = 'solid';
</script>

<svelte:element
	this={content.href ? 'a' : 'button'}
	on:click
	type={content.href ? undefined : 'button'}
	href={content.href}
	class="button btn !scale-100 rounded-button px-5 py-2.5 text-sm font-button transition-none size-sm:btn-sm size-lg:btn-lg size-sm:text-xs size-lg:text-base 
	
	{variant === 'solid' && 'bg-base-9 text-white focus:bg-base-10 hover:bg-base-10 active:bg-base-10'}
	{variant === 'soft' && 'bg-base-3 text-base-12 focus:bg-base-5 hover:bg-base-4 active:bg-base-5'}
	{variant === 'ringed' &&
		'bg-transparent text-base-12 ring-1 ring-inset ring-base-7 hover:ring-base-8'}
	{className}
	
	"
	class:button--solid={variant === 'solid'}
	class:button--ringed={variant === 'ringed'}
	class:button--soft={variant === 'soft'}
	{...$$restProps}
>
	{content.text}
</svelte:element>
