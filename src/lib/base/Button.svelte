<script lang="ts">
	let className = '';
	export { className as class };

	export let text: string | null = null;
	export let href: string | undefined = undefined;
	export let variant: 'solid' | 'ringed' | 'soft' | 'ghost' = 'soft';
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	href={href ? href : undefined}
	type={!href ? 'button' : undefined}
	on:click
	class="button inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-button p-md text-center text-md font-button leading-[1] transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50

		{variant === 'solid' && 'bg-base-9 text-base-9-content hover:bg-base-10'}
		{variant === 'soft' && 'bg-base-3 text-base-11 hover:bg-base-4 hover:text-base-12 active:bg-base-5'}
		{variant === 'ringed' &&
		'bg-transparent text-base-11 ring-2 ring-inset ring-base-7 hover:text-base-12 hover:ring-base-8'}
		{variant === 'ghost' &&
		'bg-transparent text-base-11 hover:bg-base-3 hover:text-base-12 active:bg-base-4'}

		{className}
	"
	{...$$restProps}
>
	<slot>
		{text}
	</slot>
</svelte:element>
