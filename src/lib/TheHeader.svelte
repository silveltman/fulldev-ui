<script lang="ts">
	import Link from '$lib/base/Link.svelte'

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

<header class="fixed top-0 left-0 right-0 w-full bg-neutral-0 py-lg {className}">
	<div class="container flex items-center justify-between">
		<span class="text-body-xl font-bold text-neutral-1000">{company}</span>
		<ul class="flex gap-lg">
			{#each links as link}
				<li>
					<Link href={link.href}>{link.text}</Link>
				</li>
			{/each}
		</ul>
	</div>
</header>
