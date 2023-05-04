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
	class="group card grow {className}
	  	{center ? 'items-center text-center' : 'items-start'}
		{box ? 'overflow-hidden rounded-box bg-base-300' : 'gap-y-md gap-x-xl'}
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
		<div class="flex flex-col gap-xs {box && 'bg-base-300 p-lg'}">
			{#if content.eyebrow}
				<span
					class="text-sm text-front-300
						{size === 'sm' ? 'text-sm' : 'text-xs'}
					"
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
				<p class={size == 'lg' ? 'text-base' : 'text-sm'}>{content.textarea}</p>
			{/if}
		</div>
	{/if}
</svelte:element>
