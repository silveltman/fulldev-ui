<script lang="ts">
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui'
	import { IconMinus, IconPlus } from '@tabler/icons-svelte'

	export let items: {
		heading: string
		text: string
	}[] = []
</script>

<div class="flex w-full flex-col gap-y-lg">
	{#each items as item}
		<Disclosure class="flex flex-col items-start gap-y-sm" let:open>
			<DisclosureButton class="flex w-full items-center justify-between gap-sm">
				<h5 class="inline-block">
					{item.heading}
				</h5>
				{#if open}
					 <IconMinus />
				{:else}
				<IconPlus />
				{/if}
			</DisclosureButton>
			<DisclosurePanel>
				{item.text}
			</DisclosurePanel>
		</Disclosure>
	{/each}
</div>
