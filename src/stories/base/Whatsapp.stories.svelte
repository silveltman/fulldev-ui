<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Whatsapp from 'base/Whatsapp.svelte';
</script>

<Meta
	title="Base/Whatsapp"
	component={Whatsapp}
	tags={['autodocs']}
/>

<Template let:args>
	<i style="opacity:50%"> position fixed: Look bottom-right </i>
	<Whatsapp {...args} />
</Template>

<Story
	name="Default"
	args={{ tel: '316-42520972' }}
/>
