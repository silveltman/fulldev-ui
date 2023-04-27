<script lang="ts">
	import type { Hst, SocialContent } from '$lib/types'
	import Social from './Social.svelte'
	export let Hst: Hst

	let content: SocialContent = {
		icon: 'facebook',
		href: '#'
	}
</script>

<Hst.Story layout={{ type: 'grid', width: 200 }}>
	<svelte:fragment slot="controls">
		<Hst.Json
			title="Content"
			bind:value={content}
		/>
	</svelte:fragment>

	<Social {content} />
</Hst.Story>
