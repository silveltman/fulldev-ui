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
	{...$$restProps}
/>

<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	class="flex w-full grow flex-col
		{center ? 'items-center text-center' : 'items-start text-left'}
		{box && 'rounded-card border-hue6 bg-hue2 border'}
		{href && 'hover:border-hue8 group'}
		{className}"
	{...$$restProps}
>
	{#if $$slots.media}
		<figure
			class="w-full overflow-hidden group-hover:opacity-75 [&_img]:!rounded-[0px]
		{box ? 'rounded-t-card' : 'mb-md rounded-card overflow-hidden'}
		"
		>
			<slot name="media" />
		</figure>
	{/if}

	<div
		class="[&_* p:not(h1,h2,h3,h4,h5,h6)]:text-sm gap-sm flex w-full flex-col
		{center ? 'items-center text-center' : 'items-start text-left'}
		{box ? 'p-md' : ''}"
	>
		<slot />
	</div>

	{#if $$slots.footer}
		<footer class="gap-sm flex w-full flex-wrap {box ? 'px-md pb-md' : 'pt-lg'}">
			<slot name="footer" />
		</footer>
	{/if}
</svelte:element>
