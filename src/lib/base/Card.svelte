<script lang="ts">
	import type { CardContent, Layout } from '$lib/types'
	import Image from 'base/Image.svelte'
	import Person from 'base/Person.svelte'

	let className = ''
	export { className as class }
	export let content: CardContent
	export let layout: Layout = {}

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
					<span class="text-sm text-300">Lorem ipsum</span>
				{/if}
				{#if content.heading}
					<h4>{content.heading}</h4>
				{/if}
				{#if content.textarea}
					<p>{content.textarea}</p>
				{/if}
			</div>
		{/if}
		{#if content.person}
			<Person content={content.person} />
		{/if}
	</div>
</div>
