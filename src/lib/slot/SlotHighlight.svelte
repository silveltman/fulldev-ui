<script lang="ts">
	import type { SlotHighlightContent } from '$lib/types';
	import Button from 'base/Button.svelte';
	import Eyebrow from 'base/Eyebrow.svelte';

	let className = '';
	export { className as class };
	export let content: SlotHighlightContent;

	const headingMap: {
		lg: 'h1';
		md: 'h2';
		sm: 'h3';
	} = {
		lg: 'h1',
		md: 'h2',
		sm: 'h3'
	};

	export let size: 'lg' | 'md' | 'sm' = 'md';
	export let heading: 'h1' | 'h2' | 'h3' = headingMap[size];
</script>

<div
	class="slot-highlight relative
	{size === 'lg' && 'max-w-3xl'}
	{size === 'md' && 'max-w-2xl'}
	{size === 'sm' && 'max-w-xl'}

	{className}
	"
>
	{#if content.eyebrow}
		<Eyebrow
			class="
				{size === 'lg' && 'mb-xl'}
				{size === 'md' && 'mb-lg'}
				{size === 'sm' && 'mb-md'}
			"
			{size}
			content={content.eyebrow}
		/>
	{/if}

	{#if content.heading}
		<svelte:element
			this={heading}
			class="
				{size === 'lg' && 'text-3xl'}
				{size === 'md' && 'text-2xl'}
				{size === 'sm' && 'text-xl'}
			"
		>
			{content.heading}
		</svelte:element>
	{/if}

	{#if content.textarea}
		<p
			class="pt-lg"
			class:text-lg={size === 'lg'}
		>
			{content.textarea}
		</p>
	{/if}

	{#if content.button_primary || content.button_secondary}
		<div class="mt-2xl flex w-full flex-col gap-md sm:inline-flex sm:w-auto sm:flex-row">
			{#if content.button_primary}
				<Button
					{size}
					content={content.button_primary}
				/>
			{/if}
			{#if content.button_secondary}
				<Button
					{size}
					variant="ringed"
					content={content.button_secondary}
				/>
			{/if}
		</div>
	{/if}
</div>
