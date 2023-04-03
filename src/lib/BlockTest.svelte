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

<section class="relative max-w-2xl bg-neutral-0 py-2xl {className}">
	<h1>Hello world</h1>
	<p class="text-body-lg">
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque at perspiciatis vero aliquid
		incidunt. Aperiam facilis deserunt aliquid quia a.
	</p>

	<ButtonGroup class="pt-md">
		<Button href="/">Click me</Button>
		<Button
			href="/"
			variant="secondary">Click me</Button
		>
	</ButtonGroup>
</section>
