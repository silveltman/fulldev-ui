<script lang="ts">
	import type { PersonContent } from '$lib/types';
	import Image from 'base/Image.svelte';

	let className = '';
	export { className as class };
	export let content: PersonContent;

	export let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<div
	class="flex items-center gap-md {className}"
	{...$$restProps}
>
	{#if content.image}
		<div class="h-14 w-14 overflow-hidden rounded-full">
			<Image
				ratio={1}
				content={content.image}
			/>
		</div>
	{/if}
	<div>
		<h6 class={size == 'lg' ? 'text-sm' : 'text-xs'}>{content.heading}</h6>
		<p class={size == 'lg' ? 'text-sm' : 'text-xs'}>{content.text}</p>
	</div>
</div>
