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
		{center ? 'items-center text-center' : 'items-start text-left'}
		{box ? 'rounded-card border border-base-6 bg-base-2' : ''}
		{href && 'group hover:border-base-8'}
		{className}"
>
	{#if $$slots.media}
		<figure
			class="w-full group-hover:opacity-75
		{box ? '' : 'mb-md'}
		"
		>
			<slot name="media" />
		</figure>
	{/if}

	<div
		class="flex w-full flex-col gap-sm [&_*:not(h1,h2,h3,h4,h5,h6)]:text-sm
		{center ? 'items-center text-center' : 'items-start text-left'}
		{box ? 'p-md' : ''}"
	>
		<slot />
	</div>

	{#if $$slots.footer}
		<footer class="flex w-full flex-wrap gap-sm {box ? 'px-md pb-md' : 'pt-lg'}">
			<slot name="footer" />
		</footer>
	{/if}
</svelte:element>
