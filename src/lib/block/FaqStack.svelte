<script lang="ts">
	import type { Hero } from '$lib/types'
	import Container from 'layout/Container.svelte'
	import Eyebrow from 'base/Eyebrow.svelte'
	import Stack from 'layout/Stack.svelte'
	import Accordion from 'base/Accordion.svelte'

	let className = ''
	export { className as class }

	export let block: any = {}
</script>

<section class="bg-neutral-0 py-4xl {className}">
	<Container>
		<Stack class="flex flex-col items-center">
			<div class="mx-auto inline-block max-w-2xl text-center">
				{#if block.eyebrow}
					<Eyebrow>lorem opsu</Eyebrow>
				{/if}

				{#if block.heading}
					<h2>{block.heading}</h2>
				{/if}

				{#if block.text}
					<p class="text-lg">{block.text}</p>
				{/if}
			</div>

			{#if block.questions}
				<Accordion items={block.questions} />
			{/if}
		</Stack>
	</Container>
</section>
