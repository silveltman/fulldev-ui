<script lang="ts">
	import BlockFaq from 'block/BlockFaq.svelte';
	import BlockRichtext from 'block/BlockRichtext.svelte';

	const content = {
		highlight: {
			eyebrow: 'lorem ipsum',
			heading: 'Lorem ipsum dolor',
			textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		richtext: {
			html: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'
		},
		media: {
			src: 'https://picsum.photos/1600/900',
			alt: 'Lorem ipsum'
		}
	};

	const layout = {
		box: false,
		split: true,
		center: false,
		reverse: false
	};
</script>

<BlockRichtext
	{content}
	{layout}
/>
