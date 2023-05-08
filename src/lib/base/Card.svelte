<script lang="ts">
	import type { CardContent } from '$lib/types';
	import Image from 'base/Image.svelte';

	let className = '';
	export { className as class };
	export let content: CardContent;

	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let box: boolean = false;
	export let center: boolean = false;

	const imageSizes = {
		sm: {
			base: '50vw',
			sm: '33vw',
			lg: '16vw',
			'2xl': '256px'
		},
		md: {
			base: '50vw',
			lg: '25vw',
			'2xl': '384px'
		},
		lg: {
			base: '100vw',
			md: '50vw',
			lg: '33vw',
			'2xl': '512px'
		}
	};
</script>

<svelte:element
	this={content.href ? 'a' : 'div'}
	href={content.href}
	class="group flex grow flex-col {className}
	  	{center ? 'items-center text-center' : 'items-start'}
		{box ? 'overflow-hidden rounded-box border border-base-6 bg-base-2' : 'gap-y-md gap-x-xl'}
		{box && content.href && 'hover:border-base-8'}
		{size === 'sm' && 'max-w-[50vw] basis-[40%] sm:max-w-[33vw] lg:max-w-[16vw] 2xl:max-w-[256px]'}
		{size === 'md' && 'max-w-[50vw] lg:max-w-[25vw] 2xl:max-w-[384px]'}
		{size === 'lg' && 'max-w-[100vw] basis-[90%] md:max-w-[50vw] lg:max-w-[33vw] 2xl:max-w-[512px]'}
		{className}
	"
	{...$$restProps}
>
	{#if content.image}
		<Image
			sizes={imageSizes[size]}
			class="rounded-box {content.href && 'group-hover:opacity-75'}"
			content={content.image}
		/>
	{/if}

	{#if content.eyebrow || content.heading || content.textarea}
		<div class="flex flex-col gap-xs {box && 'p-lg'}">
			{#if content.eyebrow}
				<span
					class="text-sm text-base-11"
					class:text-xs={size === 'md' || size === 'sm'}
					class:text-sm={size === 'lg'}
				>
					{content.eyebrow}
				</span>
			{/if}
			{#if content.heading}
				<svelte:element this={size == 'lg' ? 'h4' : 'h5'}>
					{content.heading}
				</svelte:element>
			{/if}
			{#if content.textarea}
				<p
					class="mt-sm"
					class:text-sm={size == 'sm' || size == 'md'}
				>
					{content.textarea}
				</p>
			{/if}
		</div>
	{/if}
</svelte:element>
