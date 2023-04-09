<script lang="ts">
	interface Logo {
		src: string
		alt: string
	}
	export let light: Logo | undefined = undefined
	export let dark: Logo | undefined = undefined
	export let disableLink: boolean = false
</script>

<svelte:element
	this={disableLink ? 'div' : 'a'}
	href={disableLink ? undefined : '/'}
>
	{#if light}
		<img
			class="inline-block dark:hidden"
			src={light.src}
			alt={light.alt}
		/>
	{/if}
	{#if dark}
		<img
			class="hidden dark:inline-block"
			src={dark.src}
			alt={dark.alt}
		/>
	{/if}
</svelte:element>
