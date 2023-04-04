<script lang="ts">
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui'
	import { IconHeart } from '@tabler/icons-svelte'

	export let items: {
		heading: string
		text: string
	}[] = []
</script>

<div class="flex w-full flex-col gap-y-lg">
	{#each items as item}
		<Disclosure class="flex flex-col items-start gap-y-sm">
			<DisclosureButton class="flex items-center justify-between gap-sm">
				<h4 class="inline-block">
					{item.heading}
				</h4>
			</DisclosureButton>
			<DisclosurePanel>
				{item.text}
				Hello world
			</DisclosurePanel>
		</Disclosure>
	{/each}
</div>
