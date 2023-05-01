<script lang="ts">
	import type { CardContent } from '$lib/types';
	import Image from 'base/Image.svelte';

	let className = '';
	export { className as class };
	export let content: CardContent;

	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let box: boolean = false;
	export let split: boolean = false;
	export let center: boolean = false;
</script>

<svelte:element
	this={content.href ? 'a' : 'div'}
	href={content.href}
	class="group card {className}
	  {split ? 'grid grid-cols-1 sm:grid-cols-2' : 'flex flex-col'}
	  {center ? 'items-center' : 'items-start'}
	  {center && !split ? 'text-center' : ''}

		{box ? 'rounded-box overflow-hidden bg-base-300' : 'gap-y-md gap-x-xl'}
	"
	{...$$restProps}
>
	{#if content.image}
		<Image
			class="rounded-box {content.href ? 'group-hover:opacity-75' : ''}"
			content={content.image}
		/>
	{/if}

	<div
		class="flex flex-col gap-lg
		{box ? 'bg-base-300 p-lg' : ''}
	"
	>
		{#if content.eyebrow || content.heading || content.textarea}
			<div class="flex flex-col gap-xs">
				{#if content.eyebrow}
					<span
						class="text-sm text-content-300
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
	</div>
</svelte:element>
