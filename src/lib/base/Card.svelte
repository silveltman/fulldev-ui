<script lang="ts">
	import type { CardContent, Layout } from '$lib/types'
	import Image from 'base/Image.svelte'
	import Person from 'base/Person.svelte'

	let className = ''
	export { className as class }
	export let content: CardContent
	export let layout: Layout = {}

	export let size: 'sm' | 'md' | 'lg' = 'md'

	//
</script>

<div
	class="gap-lg {className}
		{layout.box ? 'rounded-card overflow-hidden bg-700 p-lg' : ''}
		{layout.split ? 'grid grid-cols-1 sm:grid-cols-2' : 'flex flex-col'}
		{layout.split && layout.center ? 'sm:items-center' : ''}
	"
>
	{#if content.image}
		<Image content={content.image} />
	{/if}
	<div class="flex flex-col gap-lg">
		{#if content.eyebrow || content.heading || content.textarea}
			<div class="flex flex-col gap-sm">
				{#if content.eyebrow}
					<span
						class="text-sm text-300
							{size === 'sm' ? 'text-xs' : 'text-sm'}
							"
					>
						Lorem ipsum
					</span>
				{/if}
				{#if content.heading}
					<svelte:element this={size == 'sm' ? 'h5' : 'h4'}>
						{content.heading}
					</svelte:element>
				{/if}
				{#if content.textarea}
					<p class={size == 'sm' ? 'text-sm' : ''}>{content.textarea}</p>
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
</div>
