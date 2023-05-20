<script lang="ts">
	let className: string = '';
	export { className as class };
	export let center: boolean = false;
	export let box: boolean = false;
	export let href: string = '';
</script>

<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	class="flex w-full grow flex-col
		{center ? 'flex flex-col items-center text-center' : ''}
		{box ? 'rounded-card border border-base-6 bg-base-2' : ''}
		{href && 'group hover:border-base-8'}
		{className}"
>
	{#if $$slots.media}
		<figure
			class="group-hover:opacity-75
		{box ? '' : 'mb-space-3'}
		"
		>
			<slot name="media" />
		</figure>
	{/if}

	<div
		class="flex flex-col gap-sm  [&_*:not(h1,h2,h3,h4,h5,h6)]:text-sm 
		{box ? 'p-space-3' : ''}"
	>
		<slot />
	</div>

	{#if $$slots.footer}
		<footer class="flex flex-wrap gap-sm {box ? 'pb-space-3 px-md' : 'pt-space-4'}">
			<slot name="footer" />
		</footer>
	{/if}
</svelte:element>
