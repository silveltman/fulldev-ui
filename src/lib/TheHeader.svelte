<script lang="ts">
	import type { Header } from '$lib/types'
	import Link from '$lib/base/Link.svelte'
	import Container from './layout/Container.svelte'

	let className = ''
	export { className as class }

	export let cms: Header = {
		logo: 'logo',
		links: [
			{
				text: 'Home',
				href: '/'
			},
			{
				text: 'Contact',
				href: '/contact'
			}
		]
	}
</script>

<header
	class="fixed top-0 left-0 right-0 !h-96 w-full !bg-red-500 bg-neutral-0 py-md lg:py-lg {className}"
>
	<Container class="flex items-center justify-between">
		<span class="text-body-xl font-bold text-neutral-1000">{cms.logo}</span>
		<ul class="flex gap-lg">
			{#each cms.links as link}
				<li>
					<Link href={link.href}>{link.text}</Link>
				</li>
			{/each}
		</ul>
	</Container>
</header>
