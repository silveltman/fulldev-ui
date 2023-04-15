<script lang="ts">
	import type { DisclosureContent } from '$lib/types'
	import { IconMinus, IconPlus } from '@tabler/icons-svelte'

	let className = ''
	export { className as class }
	export let content: DisclosureContent

	export let name: string = 'disclosure'
	//
</script>

<label
	for={name}
	class="flex w-full cursor-pointer flex-col items-start gap-y-sm py-lg {className}"
>
	<input
		type="checkbox"
		{name}
		id={name}
		class="peer hidden"
	/>
	<div
		class="flex w-full items-center justify-between gap-md peer-checked:[&>.min]:block peer-checked:[&>.plus]:hidden"
	>
		<h5 class="inline-block">{content.heading}</h5>
		<IconPlus class="plus" />
		<IconMinus class="min hidden" />
	</div>
	<p class="hidden peer-checked:block">{content.textarea}</p>
</label>
