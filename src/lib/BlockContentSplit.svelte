<script lang="ts">
	import type { Content } from '$lib/types'
	import Button from '$lib/base/Button.svelte'
	import Eyebrow from '$lib/base/Eyebrow.svelte'
	import Image from '$lib/base/Image.svelte'
	import Container from './layout/Container.svelte'
	import Split from './layout/Split.svelte'
	import Prose from './layout/Prose.svelte'
	import ButtonGroup from './layout/ButtonGroup.svelte'

	let className = ''
	export { className as class }

	export let reverse: boolean = false
	export let prose: 'md' | 'lg' = 'md'
	export let align: 'center' | 'start' = 'center'

	export let block: Content = {}
</script>

<section class="bg-neutral-0 py-2xl {className}">
	<Container>
		<Split class={align === 'center' ? 'lg:items-center' : ''}>
			<Prose
				size={prose}
				class="max-w-xl {reverse ? 'lg:order-2 lg:pl-xl' : 'lg:pr-xl'}"
			>
				{#if block.eyebrow}
					<Eyebrow>lorem opsu</Eyebrow>
				{/if}
				{#if block.heading}
					<h2>{block.heading}</h2>
				{/if}

				{#if block.html}
					{@html block.html}
				{/if}

				{#if block.button_primary || block.button_secondary}
					<ButtonGroup class="pt-md">
						{#if block.button_primary}
							<Button>{block.button_primary.text}</Button>
						{/if}
						{#if block.button_secondary}
							<Button variant="secondary">{block.button_secondary.text}</Button>
						{/if}
					</ButtonGroup>
				{/if}
			</Prose>
			{#if block.image?.src}
				<Image
					sizes={{ base: '100vw', lg: '50vw', '2xl': '703px' }}
					src={block.image.src}
					alt={block.image.alt}
				/>
			{/if}
		</Split>
	</Container>
</section>
