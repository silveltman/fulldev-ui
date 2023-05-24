<script lang="ts">
	let className = '';
	export { className as class };
	export let src: string = 'https://via.placeholder.com/150';
	export let alt: string = 'Alt text';
	export let disableLink: boolean = false;
</script>

<svelte:element
	this={disableLink ? 'div' : 'a'}
	class="inline-block h-auto w-auto {className}"
	href={disableLink ? undefined : '/'}
	{...$$restProps}
>
	<img
		class="h-auto w-auto rounded-[0px]"
		{src}
		{alt}
	/>
</svelte:element>
