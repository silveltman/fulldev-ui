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

	export let cms: Content
</script>

<section class="bg-neutral-0 py-2xl {className}">
	<Container>
		<Split class={align === 'center' ? 'lg:items-center' : ''}>
			<Prose
				size={prose}
				class={reverse ? 'order-2 pl-xl' : 'pr-xl'}
			>
				{#if cms.eyebrow}
					<Eyebrow>lorem opsu</Eyebrow>
				{/if}
				{#if cms.heading}
					<h2>{cms.heading}</h2>
				{/if}

				{#if cms.html}
					{@html cms.html}
				{/if}

				{#if cms.button_primary || cms.button_secondary}
					<ButtonGroup class="pt-md">
						{#if cms.button_primary}
							<Button>{cms.button_primary.text}</Button>
						{/if}
						{#if cms.button_secondary}
							<Button variant="secondary">{cms.button_secondary.text}</Button>
						{/if}
					</ButtonGroup>
				{/if}
			</Prose>
			{#if cms.image?.src}
				<Image
					sizes={{ base: '100vw', lg: '50vw', '2xl': '703px' }}
					src={cms.image.src}
					alt={cms.image.alt}
				/>
			{/if}
		</Split>
	</Container>
</section>
