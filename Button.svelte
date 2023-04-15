<script lang="ts">
	import type { ButtonContent } from '$lib/types'
	import { IconChevronRight } from '@tabler/icons-svelte'

	let className = ''
	export { className as class }
	export let content: ButtonContent
	//
</script>

{#if content.text}
	<button
		class="inline-flex items-center justify-center rounded-button text-center font-medium leading-none disabled:cursor-not-allowed disabled:opacity-50 {className}"
		{...$$restProps}
	>
		{content.text}
	</button>
{/if}
