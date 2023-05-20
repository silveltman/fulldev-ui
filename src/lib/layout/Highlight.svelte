<script lang="ts">
	let className: string = '';
	export { className as class };
	export let as: string = 'div';
	export let center: boolean = false;
</script>

<svelte:element
	this={as}
	class="gap-mdsmall:max-w-xl large:max-w-3xl relative flex max-w-2xl flex-col
		{center ? 'mx-auto items-center text-center' : 'items-start'}
		{className}"
>
	<slot />
	{#if $$slots.footer}
		<footer class="gap-mdpt-space-3 flex flex-wrap">
			<slot name="footer" />
		</footer>
	{/if}
</svelte:element>
