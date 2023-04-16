<script lang="ts">
	import type { DisclosureContent } from '$lib/types'
	import { IconMinus, IconPlus } from '@tabler/icons-svelte'

	let className = ''
	export { className as class }
	export let content: DisclosureContent
	//
</script>

<label
	for={content.heading}
	class="flex w-full cursor-pointer flex-col items-start gap-y-sm py-lg {className}"
>
	<input
		type="checkbox"
		name={content.heading}
		id={content.heading}
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
