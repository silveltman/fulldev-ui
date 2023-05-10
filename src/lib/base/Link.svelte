<script lang="ts">
	import type { ButtonContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let href: string;
	export let text: string;
	export let currentSlug: string | undefined = '/';

	export let variant: 'solid' | 'ringed' | 'soft' | 'transparent' = 'solid';
</script>

<a
	{href}
	class="px-sm py-xs text-base-11 hover:text-base-12
    {currentSlug === href && 'text-base-12'}
    {className}
	"
	{...$$restProps}
>
	<slot>
		{text}
	</slot>
</a>
