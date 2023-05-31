<script lang="ts">
	let className = '';
	export { className as class };

	export let as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';
	export let secondary: boolean = as == 'h1' || as == 'h2' || as == 'h3' ? false : true;
	export let text: string;
</script>

<svelte:element
	this={as}
	class="text-base-12
    {secondary ? 'text-md font-subheading' : 'text-lg font-heading'}
    {className}
    "
	{...$$restProps}
>
	{text}
</svelte:element>
