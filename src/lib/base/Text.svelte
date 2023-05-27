<script lang="ts">
	let className = '';
	export { className as class };

	export let as: string = 'p';
	export let secondary: boolean = false;
	export let text: string;
</script>

<svelte:element
	this={as}
	class="
    {secondary ? 'text-sm text-base-11' : 'text-md text-base-12'}
    {className}
    "
	{...$$restProps}
>
	{text}
</svelte:element>
