<script lang="ts">
	import type { FooterContent } from '$lib/types'
	import Container from 'layout/Container.svelte'
	import Logo from 'base/Logo.svelte'
	import Link from 'base/Link.svelte'

	let className = ''
	export { className as class }

	// export let block: Block = defaults
	export let block : FooterContent

</script>

<footer class="bg-neutral-0 dark py-4xl {className}">
	<Container class="flex flex-col gap-md">
		<div>
			{#if block.logo}
				<block.Logo {...block.logo} />
			{/if}
			{#if block.text}
				<p class="text-sm">
					{block.text}
				</p>
			{/if}
		</div>
		{#if block.links?.length}
			<ul class="flex justify-center gap-lg">
				{#each block.links as item}
					<li>
						<Link
							content = {item}
							variant="secondary"
						>
						</Link>
					</li>
				{/each}
			</ul>
		{/if}
	</Container>
</footer>
