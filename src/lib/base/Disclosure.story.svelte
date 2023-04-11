<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import Disclosure from './Disclosure.svelte'
	export let Hst: Hst

	let heading: string = 'Lorem ipsum'
	let textarea: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Text
			bind:value={heading}
			title="Heading"
		/>
		<Hst.Text
			bind:value={textarea}
			title="Text"
		/>
	</svelte:fragment>

	<Disclosure
		{heading}
		{textarea}
	/>
</Hst.Story>
