<script lang="ts">
	let className = '';
	export { className as class };

	export let text: string;
	export let as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';
</script>

<svelte:element
	this={as}
	class="text-base-12
    {['h1', 'h2', 'h3'].includes(as) ? 'text-lg font-heading' : 'text-md font-subheading'}
    {className}
    "
	{...$$restProps}
>
	{text}
</svelte:element>
