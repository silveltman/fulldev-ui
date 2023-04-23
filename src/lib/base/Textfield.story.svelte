<script lang="ts">
	import type { Hst,TextFieldContent } from '$lib/types'
	import Textfield from './Textfield.svelte'
	export let Hst: Hst

	// let type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number' = 'text'
	// let required = false
	// let name = type
	// let label = 'Lorem'
	// let placeholder: string | undefined = undefined

	let content : TextFieldContent = {
		type:'text',
		required: false,
		name: "text",
		label: "Lorem",
		placeholder:"name"
	}
</script>

<Hst.Story layout={{ type: 'grid', width: 350 }}>
	
	<svelte:fragment slot="controls">
		<Hst.Json
			title="Content"
			bind:value={content}
	/>
	</svelte:fragment>

	<Textfield
		{content}
	/>

</Hst.Story>
