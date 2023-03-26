<script lang="ts">
	let className = ''
	export { className as class }
	export let as: string = 'div'
	export let reverse: boolean = false
</script>

<svelte:element
	this={as}
	class="flex flex-col [&>*]:lg:basis-full {reverse
		? 'lg:flex-row-reverse'
		: 'lg:flex-row'} {className}"
	{...$$restProps}
>
	<slot />
</svelte:element>
