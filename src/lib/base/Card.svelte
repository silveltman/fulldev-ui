<script lang="ts">
	import type { CardContent, ImageSizes } from '$lib/types';
	import Image from 'base/Image.svelte';

	let className = '';
	export { className as class };
	export let content: CardContent;

	export let box: boolean = false;
	export let center: boolean = false;
	export let sizes: ImageSizes = {};
	export let orientation: 'landscape' | 'portrait' | 'square' | 'responsive' = 'responsive';
</script>

<svelte:element
	this={content.href ? 'a' : 'div'}
	href={content.href}
	class="group flex w-full grow flex-col
	  	
		{center ? 'items-center text-center' : 'items-start'}
		{box ? 'overflow-hidden rounded-box border border-base-6 bg-base-2' : 'gap-lg size-sm:gap-md'}
		{box && content.href && 'group hover:border-base-8'}
		

		{className}
	"
	{...$$restProps}
>
	<slot name="media">
		{#if content.image}
			<div
				class="w-full
			{orientation === 'landscape' && 'aspect-w-4 aspect-h-3'}
			{orientation === 'portrait' && 'aspect-w-5 aspect-h-7'}
			{orientation === 'square' && 'aspect-w-1 aspect-h-1'}
			"
			>
				<Image
					{sizes}
					class="rounded-box object-cover
					{box && '!rounded-b-[0px]'}
					{content.href && 'group-hover:opacity-75'}
					"
					content={content.image}
				/>
			</div>
		{/if}
	</slot>
	<div
		class="flex flex-col gap-sm 
		{box && 'p-lg'}
	"
	>
		<slot name="body">
			{#if content.eyebrow}
				<span class="text-sm text-base-11 size-sm:text-xs">
					{content.eyebrow}
				</span>
			{/if}
			{#if content.heading}
				<h4 class="size-sm:text-base">
					{content.heading}
				</h4>
			{/if}
			{#if content.textarea}
				<p class="size-sm:text-sm">
					{content.textarea}
				</p>
			{/if}
		</slot>
	</div>
	{#if $$slots.buttons}
		<div class="flex flex-wrap gap-lg">
			<slot name="buttons" />
		</div>
	{/if}
</svelte:element>
