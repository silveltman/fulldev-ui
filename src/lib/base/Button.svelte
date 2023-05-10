<script lang="ts">
	import type { ButtonContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: ButtonContent;

	export let variant: 'solid' | 'ringed' | 'soft' | 'ghost' = 'soft';
</script>

<svelte:element
	this={content.href ? 'a' : 'button'}
	on:click
	type={content.href ? undefined : 'button'}
	href={content.href}
	class="button btn !scale-100 rounded-button px-5 py-2.5 text-sm font-button transition-none size-sm:btn-sm size-lg:btn-lg size-sm:text-xs size-lg:text-base 
		{variant}
		{className}
	"
	{...$$restProps}
>
	{content.text}
</svelte:element>
