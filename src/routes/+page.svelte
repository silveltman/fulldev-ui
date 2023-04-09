<script lang="ts">
	import BlockContent from 'block/BlockContent.svelte'

	let block = {
		eyebrow: 'lorem ipsum',
		heading: 'Lorem ipsum dolor',
		html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		button_primary: {
			text: 'Lorem ipsum',
			href: '#'
		},
		button_secondary: {
			text: 'Lorem ipsum',
			href: '#'
		},
		image: {
			src: '/placeholder.jpg',
			alt: 'Lorem ipsum'
		}
	}
</script>

<BlockContent
	{block}
	size="lg"
	split
	center
	class="dark"
/>
<BlockContent
	{block}
	split
	center
/>
<BlockContent
	{block}
	split
	center
	reverse
/>
<BlockContent
	{block}
	split
	center
/>

<BlockContent
	{block}
	center
	box
	reverse
	class="dark"
/>
<BlockContent {block} />
<BlockContent
	{block}
	split
	reverse
/>
<BlockContent
	{block}
	class="dark"
	split
	center
/>
