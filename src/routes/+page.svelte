<script lang="ts">
	import Flow from 'wrap/Flow.svelte';
	import Section from 'wrap/Section.svelte';
	import Container from 'wrap/Container.svelte';
	import Highlight from 'group/Highlight.svelte';
	import Image from 'base/Image.svelte';
	import Gallery from 'group/Gallery.svelte';
	import Button from 'base/Button.svelte';
	import Select from 'base/Select.svelte';
</script>

<Section>
	<Container>
		<Flow row>
			<Gallery class="lg:col-span-2">
				<Image
					src="https://picsum.photos/1200/1200"
					alt="alt"
				/>
				<Image
					src="https://picsum.photos/1200/1200"
					alt="alt"
				/>
				<Image
					src="https://picsum.photos/1200/1200"
					alt="alt"
				/>
				<Image
					src="https://picsum.photos/1200/800"
					alt="alt"
				/>
				<Image
					src="https://picsum.photos/1200/1200"
					alt="alt"
				/>
				<Image
					src="https://picsum.photos/1200/400"
					alt="alt"
				/>
				<Image
					src="https://picsum.photos/1200/1200"
					alt="alt"
				/>
				<Image
					src="https://picsum.photos/1200/1200"
					alt="alt"
				/>
			</Gallery>
			<Highlight>
				<h1>Hello world</h1>
				<svelte:fragment slot="actions">
					<Select
						id="groefdikte"
						placeholder="Kies groefdikte"
						options={['1', '2']}
					/>
					<Button
						class="light-orange w-full"
						variant="soft"
						text="Inmeet instructies"
						href="#"
					/>
				</svelte:fragment>
			</Highlight>
		</Flow>
	</Container>
</Section>
