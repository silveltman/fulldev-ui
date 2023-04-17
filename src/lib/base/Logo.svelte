<script lang="ts">
	import type { LogoContent } from '$lib/types'

	export let content: LogoContent
	export let disableLink: boolean = false
</script>

<svelte:element
	this={disableLink ? 'div' : 'a'}
	href={disableLink ? undefined : '/'}
>
	{#if content.light}
		<img
			class="inline-block dark:hidden"
			src={content.light.src}
			alt={content.light.alt}
		/>
	{/if}
	{#if content.dark}
		<img
			class="hidden dark:inline-block"
			src={content.dark.src}
			alt={content.dark.alt}
		/>
	{/if}
</svelte:element>
