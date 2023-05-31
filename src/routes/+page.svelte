<script lang="ts">
	import Carousel from 'wrap/Carousel.svelte';
	import Flow from 'wrap/Flow.svelte';
	import Grid from 'wrap/Grid.svelte';
	import Inner from 'wrap/Container.svelte';
	import Outer from 'wrap/Section.svelte';
	import Section from 'wrap/Section.svelte';
	import Container from 'wrap/Container.svelte';
	import Panel from 'wrap/Panel.svelte';
	import Highlight from 'group/Highlight.svelte';
	import Heading from 'base/Heading.svelte';
	import Text from 'base/Text.svelte';
	import Card from 'group/Card.svelte';
	import Image from 'base/Image.svelte';
</script>

<Section>
	<Container>
		<!-- <Highlight
			row
			center
		>
			<Heading text="Heading" />
			<Text text="Text" />
			<svelte:fragment slot="actions">
				<button class="btn-primary btn">Button</button>
				<button class="btn-secondary btn">Button</button>
			</svelte:fragment>
		</Highlight> -->
		<Grid>
			<Card box>
				<Image
					slot="media"
					src="https://picsum.photos/seed/1/400/300"
					alt="test"
				/>
				<Heading
					as="h4"
					text="Heading"
				/>
				<Text text="Text" />
				<svelte:fragment slot="actions">
					<button class="btn-primary btn">Button</button>
					<button class="btn-secondary btn">Button</button>
				</svelte:fragment>
			</Card>
		</Grid>
	</Container>
</Section>
