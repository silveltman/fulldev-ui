<script lang="ts">
	import type { CardContent, ImageSizes } from '$lib/types';
	import Image from 'base/Image.svelte';

	let className = '';
	export { className as class };
	export let content: CardContent;

	export let box: boolean = false;
	export let center: boolean = false;
	export let sizes: ImageSizes = {};
</script>

<svelte:element
	this={content.href ? 'a' : 'div'}
	href={content.href}
	class="group flex grow flex-col
	  	
		{center ? 'items-center text-center' : 'items-start'}
		{box ? 'overflow-hidden rounded-box border border-base-6 bg-base-2' : 'gap-lg size-sm:gap-md'}

		{className}
	"
	{...$$restProps}
>
	<slot name="media">
		{#if content.image}
			<Image
				{sizes}
				class="rounded-box group-hover:opacity-75
				{box && '!rounded-b-[0px]'}
				"
				content={content.image}
			/>
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
	<slot name="footer" />
</svelte:element>
