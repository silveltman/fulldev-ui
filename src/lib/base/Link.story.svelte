<script lang="ts">
	import type { Hst, LinkContent } from '$lib/types'
	import Link from './Link.svelte'
	export let Hst: Hst

	let content: LinkContent = {
		text: 'Click me',
		href: '#'
	}

	// let disabled: boolean = false
</script>


<Hst.Story layout={{ type: 'grid', width: 200 }}>
    <svelte:fragment slot="controls">
        <Hst.Json
            title="Content"
            bind:value={content}
        />
    </svelte:fragment>

    <Hst.Variant title="Primary/sm">
        <Link
            {content}
            variant="primary"
        />
    </Hst.Variant>

    <Hst.Variant title="Secondary/sm">
        <Link
            {content}
            variant="secondary"
        />
    </Hst.Variant>

    </Hst.Story>
