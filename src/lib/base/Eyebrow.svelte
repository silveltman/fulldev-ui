<script lang="ts">
	import type { EyebrowContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: EyebrowContent;

	export let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<p
	class="inline-block font-eyebrow text-base-11

	{size == 'sm' && 'text-sm'}
	{size == 'md' && 'text-base'}
	{size == 'lg' && 'text-lg'}

	{className}
	"
	{...$$restProps}
>
	{content}
</p>
