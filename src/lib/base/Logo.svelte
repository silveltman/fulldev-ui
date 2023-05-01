<script lang="ts">
	import type { LogoContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: LogoContent;
	export let disableLink: boolean = false;
</script>

<svelte:element
	this={disableLink ? 'div' : 'a'}
	class="h-lg {className}"
	href={disableLink ? undefined : '/'}
	{...$$restProps}
>
	<img
		class="inline-block dark:hidden"
		src={content.src}
		alt={content.alt}
	/>
</svelte:element>
