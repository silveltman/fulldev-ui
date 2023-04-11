<script lang="ts">
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui'
	import { IconMinus, IconPlus } from '@tabler/icons-svelte'

	export let heading: string = ''
	export let text: string = ''
	//
</script>

<Disclosure
	class="flex flex-col items-start gap-y-sm py-lg"
	let:open
>
	<DisclosureButton class="flex w-full items-center justify-between gap-sm">
		<h5 class="inline-block">
			{heading}
		</h5>
		{#if open}
			<IconMinus />
		{:else}
			<IconPlus />
		{/if}
	</DisclosureButton>
	<DisclosurePanel>
		{text}
	</DisclosurePanel>
</Disclosure>
