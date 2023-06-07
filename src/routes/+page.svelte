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
</script>

<Navbar>
	<Drawer position="left">
		<h1 slot="header">Hallo</h1>
		<h1>Hallo</h1>
		<h1>Hallo</h1>
	</Drawer>
</Navbar>

<div class="flex flex-col medium">
	<Input
		id="inputfield"
		class="small"
	/>
	<Input
		id="inputfield"
		class="medium"
	/>
	<Input
		id="inputfield"
		class="large"
		type="number"
		value="999999999999999"
	/>
	<Select
		placeholder="test"
		options={[1, 2, 3]}
		id="seelct"
	/>
	<Button>Test</Button>

	<Heading class="text-base-8">Hello there</Heading>
	<Textarea
		id="area"
		required
	/>

	<Whatsapp tel="#" />

	<Social name="facebook" />
	<Social name="instagram" />
	<Social name="twitter" />
	<!-- <Social name="youtube" />
	<Social name="linkedin" />
	<Social name="pinterest" />
	<Social name="tiktok" />
	<Social name="whatsapp" />
	<Social name="telegram" />
	<Social name="snapchat" />
	<Social name="twitch" />
	<Social name="spotify" />
	<Social name="soundcloud" />
	<Social name="github" />
	<Social name="behance" />
	<Social name="dribbble" />
	<Social name="tumblr" />
	<Social name="reddit" />
	<Social name="medium" />
	<Social name="vimeo" />
	<Social name="discord" /> -->
</div>
