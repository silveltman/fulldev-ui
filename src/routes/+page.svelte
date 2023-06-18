<script lang="ts">
	import Navbar from 'group/Navbar.svelte';
	import Drawer from 'group/Drawer.svelte';
	import Input from 'base/Input.svelte';
	import Button from 'base/Button.svelte';
	import Select from 'base/Select.svelte';
	import Heading from 'base/Heading.svelte';
	import Textarea from 'base/Textarea.svelte';
	import Whatsapp from 'base/Whatsapp.svelte';
	import Social from 'base/Social.svelte';
	import Flow from 'wrap/Stack.svelte';
	import Grid from 'wrap/Grid.svelte';
	import Toggle from 'base/Toggle.svelte';
	import Section from 'wrap/Section.svelte';
	import Container from 'wrap/Container.svelte';
	import Panel from 'wrap/Panel.svelte';
	import Stack from 'wrap/Stack.svelte';
	import Highlight from 'group/Highlight.svelte';
	import Text from 'base/Text.svelte';

	let textfield = '';
	let selected: any;
</script>

<Section class="light- small">
	<Container>
		<Panel>
			<Stack class="items-start justify-start">
				<Highlight>
		r			<Heading>Hello world</Heading>
					<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatem.</Text>
				</Highlight>
				<Button>Click me</Button>
				<div class="h-full w-full bg-red-500" />
			</Stack>
		</Panel>
	</Container>
</Section>
