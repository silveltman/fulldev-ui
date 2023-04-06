<script lang="ts">
	export let src: string = 'logo.svg'
	export let alt: string = 'Logo'
	export let disableLink: boolean = false
</script>

<svelte:element
	this={disableLink ? 'div' : 'a'}
	href={disableLink ? undefined : '/'}
>
	<img
		{src}
		{alt}
	/>
</svelte:element>
