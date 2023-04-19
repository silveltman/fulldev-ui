<script lang="ts">
	import type { HeaderContent } from '$lib/types'
	import Link from 'base/Link.svelte'
	import Container from 'layout/Container.svelte'
	import Logo from 'base/Logo.svelte'

	let className = ''
	export { className as class }

	export let content: HeaderContent = {}
</script>

<header class="top-0 left-0 right-0 z-50 w-full bg-500 py-md lg:py-lg {className}">
	<Container class="flex items-center justify-between">
		{#if content.logo}
			<Logo content={content.logo} />
		{/if}
		<ul class="flex gap-lg">
			{#if content.links}
				{#each content.links as link}
					<li>
						<Link content={link} />
					</li>
				{/each}
			{/if}
		</ul>
	</Container>
</header>
