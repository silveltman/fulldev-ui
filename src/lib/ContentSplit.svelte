<script lang="ts">
	import type { Content } from '$lib/types'
	import Button from '$lib/base/Button.svelte'
	import Eyebrow from '$lib/base/Eyebrow.svelte'
	import Image from '$lib/base/Image.svelte'

	let className = ''
	export { className as class }

	export let reverse: boolean = false
	export let prose: 'md' | 'lg' = 'md'
	export let align: 'center' | 'start' | 'end' = 'center'

	export let cms: Content
</script>

<section class="bg-neutral-0 py-2xl {className}">
	<div
		class="container"
		class:flex-split={!reverse}
		class:flex-split-reverse={reverse}
		class:items-start={align === 'start'}
		class:items-center={align === 'center'}
		class:items-end={align === 'end'}
	>
		<div>
			<div
				class="prose lg:px-xl xl:px-2xl"
				class:!pl-0={!reverse}
				class:!pr-0={reverse}
				class:prose-lg={prose === 'lg'}
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
					<div class="button-group">
						{#if cms.button_primary}
							<Button>{cms.button_primary.text}</Button>
						{/if}
						{#if cms.button_secondary}
							<Button variant="secondary">{cms.button_secondary.text}</Button>
						{/if}
					</div>
				{/if}
			</div>
		</div>
		<div>
			<Image
				src={cms.image.src}
				alt={cms.image.alt}
			/>
		</div>
	</div>
</section>
