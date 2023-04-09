<script lang="ts">
	export let light:
		| {
				src: string
				alt: string
		  }
		| undefined = undefined
	export let dark:
		| {
				src: string
				alt: string
		  }
		| undefined = undefined
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
