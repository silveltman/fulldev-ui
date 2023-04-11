<script lang="ts">
	import type { HighlightContent } from '$lib/types'
	import Button from 'base/Button.svelte'
	import Eyebrow from 'base/Eyebrow.svelte'

	export let size: 'lg' | 'md' | 'sm' = 'md'

	export let content: HighlightContent = {}
</script>

<div
	class="slot-highlight"
	class:max-w-3xl={size === 'lg'}
	class:max-w-2xl={size === 'md'}
	class:max-w-lg={size === 'sm'}
>
	{#if content.eyebrow}
		<Eyebrow
			class="
				{size === 'lg' && 'mb-xl'}
				{size === 'md' && 'mb-lg'}
				{size === 'sm' && 'mb-md'}
			"
			{size}
			text={content.eyebrow}
		/>
	{/if}

	{#if content.heading}
		{#if size === 'lg'}
			<h1>{content.heading}</h1>
		{:else if (size = 'md')}
			<h2>{content.heading}</h2>
		{:else if (size = 'sm')}
			<h3>{content.heading}</h3>
		{/if}
	{/if}

	{#if content.textarea}
		<p
			class="pt-lg"
			class:text-lg={size === 'lg'}
		>
			{content.textarea}
		</p>
	{/if}

	{#if content.button_primary || content.button_secondary || content.button_tertiary}
		<div class="mt-2xl flex w-full flex-col gap-md sm:inline-flex sm:w-auto sm:flex-row">
			{#if content.button_primary}
				<Button
					{size}
					{...content.button_primary}
				/>
			{/if}
			{#if content.button_secondary}
				<Button
					{size}
					variant="secondary"
					{...content.button_secondary}
				/>
			{/if}
			{#if content.button_tertiary}
				<Button
					{size}
					variant="tertiary"
					{...content.button_tertiary}
				/>
			{/if}
		</div>
	{/if}
</div>
