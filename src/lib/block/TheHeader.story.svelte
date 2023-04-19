<script lang="ts">
	import type { HeaderContent, Hst } from '$lib/types'
	import TheHeader from './TheHeader.svelte'

	export let Hst: Hst

	let content: HeaderContent = {
		logo: {
			light: {
				src: '/logo-light.svg',
				alt: 'Placeholder'
			},
			dark: {
				src: '/logo-dark.svg',
				alt: 'Placeholder'
			}
		},
		links: [
			{
				text: 'Home',
				href: '/'
			},
			{
				text: 'About',
				href: '/about'
			},
			{
				text: 'Contact',
				href: '/contact'
			}
		]
	}
</script>

<Hst.Story>
	<TheHeader {content} />
</Hst.Story>
