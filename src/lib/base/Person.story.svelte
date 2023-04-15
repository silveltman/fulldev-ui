<script lang="ts">
	import type { PersonContent, Hst } from '$lib/types'
	import Person from './Person.svelte'
	export let Hst: Hst

	let content: PersonContent = {
		heading: 'Heading',
		text: 'Text',
		image: {
			src: 'https://via.placeholder.com/150',
			alt: 'Alt text'
		}
	}
	//
</script>

<Hst.Story>
	<svelte:fragment slot="controls">
		<Hst.Json
			bind:value={content}
			title="Heading"
		/>
	</svelte:fragment>

	<Person {content} />
</Hst.Story>
