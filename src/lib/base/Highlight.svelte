<script lang="ts">
	import type { HighlightContent } from '$lib/types';
	import Eyebrow from 'base/Eyebrow.svelte';
	import Button from './Button.svelte';

	let className = '';
	export { className as class };
	export let content: HighlightContent;

	export let heading: 'h1' | 'h2' | 'h3' = 'h2';
</script>

<div class="slot-highlight relative max-w-2xl size-sm:max-w-xl size-lg:max-w-3xl {className}">
	{#if content.eyebrow}
		<Eyebrow
			class="mb-lg size-sm:mb-md size-lg:mb-xl"
			text={content.eyebrow}
		/>
	{/if}

	{#if content.heading}
		<svelte:element this={heading}>
			{content.heading}
		</svelte:element>
	{/if}

	{#if content.textarea}
		<p class="pt-lg size-lg:text-lg">
			{content.textarea}
		</p>
	{/if}

	{#if content.button_primary || content.button_secondary}
		<div class="mt-2xl flex w-full flex-col gap-md sm:inline-flex sm:w-auto sm:flex-row">
			{#if content.button_primary}
				<Button {...content.button_primary} />
			{/if}
			{#if content.button_secondary}
				<Button {...content.button_secondary} />
			{/if}
		</div>
	{/if}
</div>
