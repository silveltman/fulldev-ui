<script lang="ts">
	import type { CardContent } from '$lib/types';

	let className = '';
	export { className as class };
	// export let content: CardContent;

	export let box: boolean = false;
	export let center: boolean = false;

	export let href: string = '';

	const imageSizes = {
		sm: {
			base: '50vw',
			sm: '33vw',
			lg: '16vw',
			'2xl': '256px'
		},
		md: {
			base: '50vw',
			lg: '25vw',
			'2xl': '384px'
		},
		lg: {
			base: '100vw',
			md: '50vw',
			lg: '33vw',
			'2xl': '512px'
		}
	};
</script>

<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	class="group flex flex-col gap-md {className}"
	{...$$restProps}
>
	<slot />
</svelte:element>
