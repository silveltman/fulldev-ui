<script lang="ts">
	import Button from '$lib/base/Button.svelte';
	import Container from 'layout/Container.svelte';
	import Split from 'layout/Split.svelte';
	import Box from 'layout/Box.svelte';
	import Grid from 'layout/Grid.svelte';
	import SlotGallery from 'slot/SlotGalleryCarousel.svelte';
	import Block from 'layout/Block.svelte';
</script>

<!-- <SlotGallery {content} /> -->

<Block>
	<Container>
		<Box class="bg-red-500">
			<Split>
				<div class="h-80 bg-blue-500" />
				<div class="h-80 bg-blue-500" />
				<div class="h-80 bg-blue-500" />
			</Split>
		</Box>
	</Container>
</Block>
