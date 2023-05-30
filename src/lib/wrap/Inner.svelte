<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'div';
	export let box: boolean = false;
</script>

<svelte:element
	this={as}
	class="mx-auto w-full max-w-screen-2xl
	{box
		? 'relative overflow-hidden rounded-box border border-base-6 bg-base-2 px-4 py-xl md:px-xl'
		: ' px-4 md:px-12 '}
	{className}"
>
	<slot />
</svelte:element>
