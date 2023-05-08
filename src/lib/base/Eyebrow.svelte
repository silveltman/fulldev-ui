<script lang="ts">
	import type { EyebrowContent } from '$lib/types';

	let className = '';
	export { className as class };
	export let content: EyebrowContent;
</script>

<span
	class="inline-block text-base font-eyebrow text-base-11 size-sm:text-sm size-lg:text-lg {className}"
	{...$$restProps}
>
	{content}
</span>
