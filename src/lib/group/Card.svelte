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
		{box && 'rounded-card border border-base-6 bg-base-2'}
		{href && 'group hover:border-base-8'}
		{className}"
	{...$$restProps}
>
	{#if $$slots.media}
		<figure
			class="w-full overflow-hidden group-hover:opacity-75 [&_img]:!rounded-[0px]
		{box ? 'rounded-t-card' : 'mb-md overflow-hidden rounded-card'}
		"
		>
			<slot name="media" />
		</figure>
	{/if}

	<div
		class="[&_* p:not(h1,h2,h3,h4,h5,h6)]:text-sm flex w-full flex-col gap-sm
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
