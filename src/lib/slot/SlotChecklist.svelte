<script lang="ts">
	import type { Checklist } from '$lib/types'
	import { IconCircleCheck } from '@tabler/icons-svelte'
	import Button from 'base/Button.svelte'
	export let center: boolean = false
	export let block: Checklist
	//
</script>

<ul
	class="slot-checklist grid w-full grid-cols-[repeat(auto-fit,minmax(332px,1fr))] gap-x-2xl gap-y-2xl"
	class:justify-center={center}
>
	{#each block.checklist as item}
		<li class="relative max-w-lg pl-8 text-left">
			<IconCircleCheck
				stroke={1.3}
				class="absolute left-0 top-0 text-primary-700"
			/>
			<h5 class="inline">{item.heading}</h5>
			<p class="inline">{item.text}</p>
			<Button
				color
				class="mt-md"
				variant="tertiary"
				text="Meer weten"
			/>
		</li>
	{/each}
</ul>
