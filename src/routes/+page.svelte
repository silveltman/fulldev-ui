<script lang="ts">
	import Carousel from 'wrap/Carousel.svelte';
	import Flow from 'wrap/Flow.svelte';
	import Grid from 'wrap/Grid.svelte';
	import Inner from 'wrap/Container.svelte';
	import Outer from 'wrap/Section.svelte';
	import Section from 'wrap/Section.svelte';
	import Container from 'wrap/Container.svelte';
	import Panel from 'wrap/Panel.svelte';
</script>

<Section>
	<Container>
		<Flow>
			<div class="h-40 w-full bg-blue-500" />
			<Flow row>
				<div class="h-40 w-full bg-blue-500" />
				<div class="h-40 w-full bg-blue-500" />
			</Flow>
		</Flow>
	</Container>
</Section>

<Section>
	<Container>
		<Panel>
			<Flow>
				<div class="h-40 w-full bg-blue-500" />
				<Flow row>
					<div class="h-40 w-full bg-blue-500" />
					<div class="h-40 w-full bg-blue-500" />
				</Flow>
			</Flow>
		</Panel>
	</Container>
</Section>

<Section>
	<Container>
		<Carousel>
			<div class="h-40 w-full bg-blue-500" />
			<div class="h-40 w-full bg-blue-500" />
			<div class="h-40 w-full bg-blue-500" />
			<div class="h-40 w-full bg-blue-500" />
			<div class="h-40 w-full bg-blue-500" />
			<div class="h-40 w-full bg-blue-500" />
		</Carousel>
	</Container>
</Section>

<Section>
	<Container>
		<Grid masonry>
			<div class="h-40 w-full bg-blue-500" />
			<div class="h-80 w-full bg-blue-500" />
			<div class="h-80 w-full bg-blue-500" />
			<div class="h-40 w-full bg-blue-500" />
			<div class="h-40 w-full bg-blue-500" />
			<div class="h-40 w-full bg-blue-500" />
			<div class="h-40 w-full bg-blue-500" />
			<div class="h-40 w-full bg-blue-500" />
			<div class="h-40 w-full bg-blue-500" />
		</Grid>
	</Container>
</Section>
