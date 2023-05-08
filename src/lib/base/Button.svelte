<script lang="ts">
	import type { ButtonContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: ButtonContent;

	export let variant: 'solid' | 'ringed' | 'soft' | 'transparent' = 'solid';
</script>

<svelte:element
	this={content.href ? 'a' : 'button'}
	on:click
	type={content.href ? undefined : 'button'}
	href={content.href}
	class="button btn !scale-100 rounded-button px-5 py-2.5 text-sm font-button transition-none size-sm:btn-sm size-lg:btn-lg size-sm:text-xs size-lg:text-base 
	
		{variant === 'solid' && 'bg-base-9 text-white hover:bg-base-10'}
		{variant === 'ringed' && 'bg-transparent text-base-11 ring-1 ring-base-7 hover:ring-base-8'}
		{variant === 'soft' && 'bg-base-3 text-base-11 focus:bg-base-5 hover:bg-base-4 active:bg-base-5'}
		{variant === 'transparent' &&
		'bg-transparent text-base-11 focus:bg-base-5 hover:bg-base-4 active:bg-base-5'}
		
		{className}
	"
	{...$$restProps}
>
	{content.text}
</svelte:element>
