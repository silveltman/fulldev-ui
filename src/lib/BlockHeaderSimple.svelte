<script lang="ts">
	import type { Header } from '$lib/types'
	import Link from '$lib/base/Link.svelte'
	import Container from './layout/Container.svelte'

	let className = ''
	export { className as class }

	export let block: Header = {}
</script>

<header class="top-0 left-0 right-0 z-50 w-full bg-neutral-0 py-md lg:py-lg {className}">
	<Container class="flex items-center justify-between">
		<span class="text-body-xl font-bold text-neutral-1000">{block.logo}</span>
		<ul class="flex gap-lg">
			{#if block.links}
				{#each block.links as link}
					<li>
						<Link href={link.href}>{link.text}</Link>
					</li>
				{/each}
			{/if}
		</ul>
	</Container>
</header>
