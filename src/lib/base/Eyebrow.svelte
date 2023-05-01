<script lang="ts">
	import type { EyebrowContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: EyebrowContent;

	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let variant: 'primary' | 'secondary' = 'primary';
</script>

<p
	class="inline-block font-eyebrow

	{size == 'sm' && 'text-sm'}
	{size == 'md' && 'text-base'}
	{size == 'lg' && 'text-lg'}

	{variant == 'primary' && 'text-primary-700'}
	{variant == 'secondary' && 'text-secondary-700'}

	{className}
	"
	{...$$restProps}
>
	{content}
</p>
