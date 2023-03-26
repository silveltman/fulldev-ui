<script lang="ts">
	import type { Footer } from '$lib/types'
	import Link from '$lib/base/Link.svelte'
	import Container from './layout/Container.svelte'
	import Image from './base/Image.svelte'

	let className = ''
	export { className as class }

	export let cms: Footer = {
		logo: 'LogoIpsum',
		tagline: 'Your tagline goed right here'
	}
</script>

<footer class="bg-neutral-0 {className}">
	<Container>
		<div class="border-t border-neutral-100 py-xl">
			<div class="mx-auto flex max-w-md flex-col items-center">
				<span class="text-body-xl font-bold text-neutral-1000">
					{cms.logo}
				</span>
				<p class="mt-xs mb-md text-center text-body-sm text-neutral-800">
					{cms.tagline}
				</p>

				<ul class="flex justify-center gap-lg">
					<li>
						<Link
							variant="secondary"
							href="/algemene-voorwaarden">Algemene voorwaarden</Link
						>
					</li>
					<li>
						<Link
							variant="secondary"
							href="/privacyverklaring">Privacyverklaring</Link
						>
					</li>
				</ul>
			</div>
		</div>
	</Container>
</footer>
