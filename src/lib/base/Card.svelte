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
	class="group light flex w-full grow flex-col
	  	
		{center ? 'items-center text-center' : 'items-start'}
		{box
		? 'overflow-hidden rounded-card border border-base-6 bg-base-2'
		: 'gap-md size-sm:gap-sm size-lg:gap-lg '}
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
					class="rounded-card object-cover
					{box && '!rounded-b-[0px]'}
					{content.href && 'group-hover:opacity-75'}
					"
					{...content.image}
				/>
			</div>
		{/if}
	</slot>
	<div
		class="flex flex-col gap-1
		{box && 'p-4'}
	"
	>
		<slot name="body">
			{#if content.eyebrow}
				<span class="text-1 text-base-11">
					{content.eyebrow}
				</span>
			{/if}
			{#if content.heading}
				<h4 class="text-2">
					{content.heading}
				</h4>
			{/if}
			{#if content.textarea}
				<p class="text-1">
					{content.textarea}
				</p>
			{/if}
		</slot>
	</div>
</svelte:element>
