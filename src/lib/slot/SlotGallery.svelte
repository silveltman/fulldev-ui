<script lang="ts">
	import type { SlotGalleryContent } from '$lib/types';
	import Image from '$lib/base/Image.svelte';
	export let content: SlotGalleryContent = [
		{
			src: 'https://via.placeholder.com/500',
			alt: 'Image 1'
		},
		{
			src: 'https://via.placeholder.com/400',
			alt: 'Image 2'
		},
		{
			src: 'https://via.placeholder.com/300',
			alt: 'Image 3'
		},
		{
			src: 'https://via.placeholder.com/500',
			alt: 'Image 1'
		},
		{
			src: 'https://via.placeholder.com/400',
			alt: 'Image 2'
		},
		{
			src: 'https://via.placeholder.com/300',
			alt: 'Image 3'
		}
	];
</script>

<div class="grid grid-cols-5 gap-sm overflow-x-scroll">
	{#each content as item, i}
		<input
			checked={i === 0}
			type="radio"
			name="radio"
			id="test{i}"
			class="radio hidden"
		/>
		<label
			for="test{i}"
			class="row-start-2"
		>
			<Image content={item} />
		</label>
		<div class="order-first col-span-5 hidden h-auto w-full rounded-image">
			<Image content={item} />
		</div>
	{/each}
</div>

<style lang="postcss">
	.radio:checked + label {
		@apply ring;
	}
	.radio:checked + label + div {
		@apply block;
	}
</style>
