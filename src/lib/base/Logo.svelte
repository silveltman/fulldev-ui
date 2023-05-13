<script lang="ts">
	import type { LogoContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: LogoContent;
	export let disableLink: boolean = false;
</script>

<svelte:element
	this={disableLink ? 'div' : 'a'}
	class="block {className}"
	href={disableLink ? undefined : '/'}
	{...$$restProps}
>
	<img
		class="max-w-none"
		src={content.src}
		alt={content.alt}
	/>
</svelte:element>
