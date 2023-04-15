<script lang="ts">
	import type { EyebrowContent } from '$lib/types'

	let className = ''
	export { className as class }
	export let content: EyebrowContent

	export let size: 'sm' | 'md' | 'lg' = 'md'
	// export let variant: 'primary' | 'secondary' = 'primary'
</script>

<p
	class="text-primary-700 inline-block font-medium leading-none text-eyebrow

	{size == 'sm' && 'text-sm'}
	{size == 'md' && 'text-md'}
	{size == 'lg' && 'text-lg'}

	{className}
	"
	{...$$restProps}
>
	{content}
</p>
