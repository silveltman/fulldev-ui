<script lang="ts">
	import Link from '$lib/base/Link.svelte'
	import Container from './layout/Container.svelte'

	let className = ''
	export { className as class }

	export let company: string = 'Elynfoods'
	export let links: {
		text: string
		href: string
	}[] = [
		{
			text: 'Home',
			href: '/'
		},
		{
			text: 'Contact',
			href: '/contact'
		}
	]
</script>

<footer class="bg-neutral-0 {className}">
	<Container>
		<div class="border-t border-neutral-100 py-xl">
			<div class="container flex max-w-md flex-col items-center">
				<span class="text-body-xl font-bold text-neutral-1000">Elynfoods</span>
				<p class="mt-xs mb-md text-center text-body-sm text-neutral-800">
					Quality animal feed from the Netherlands
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
