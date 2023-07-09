<script lang="ts">
	let className = '';
	export { className as class };

	export let src: string;
	export let alt: string;
	export let nolink: boolean = false;
</script>

<svelte:element
	this={nolink ? 'div' : 'a'}
	class="inline-block h-auto w-auto {className}"
	href={nolink ? undefined : '/'}
	{...$$restProps}
>
	<img
		class="h-auto w-auto"
		{src}
		{alt}
	/>
</svelte:element>
