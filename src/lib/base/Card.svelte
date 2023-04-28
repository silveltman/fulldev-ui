<script lang="ts">
	import type { CardContent } from '$lib/types';
	import Image from 'base/Image.svelte';
	import Person from 'base/Person.svelte';

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
	class="group gap-lg {className}
	  {box ? 'rounded-card overflow-hidden bg-700 p-lg' : ''}
	  {split ? 'grid grid-cols-1 sm:grid-cols-2' : 'flex flex-col'}
	  {split && center ? 'sm:items-center' : ''}
	"
	{...$$restProps}
>
	{#if content.image}
		<Image
			class={content.href ? 'group-hover:opacity-75' : ''}
			content={content.image}
		/>
	{/if}
	<div class="flex flex-col gap-lg">
		{#if content.eyebrow || content.heading || content.textarea}
			<div class="flex flex-col gap-xs">
				{#if content.eyebrow}
					<span
						class="text-sm text-300
				{size === 'lg' ? 'text-sm' : 'text-xs'}
			  "
					>
						Lorem ipsum
					</span>
				{/if}
				{#if content.heading}
					<svelte:element this={size == 'lg' ? 'h4' : 'h5'}>
						{content.heading}
					</svelte:element>
				{/if}
				{#if content.textarea}
					<p class={size == 'lg' ? 'text-md' : 'text-sm'}>{content.textarea}</p>
				{/if}
			</div>
		{/if}
		{#if content.person}
			<Person
				{size}
				content={content.person}
			/>
		{/if}
	</div>
</svelte:element>
