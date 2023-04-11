<script lang="ts">
	let className = ''
	export { className as class }
	export let size: 'sm' | 'md' | 'lg' = 'md'
	// export let variant: 'primary' | 'secondary' = 'primary'
	export let text: string = 'Lorem ipsum'
</script>

<p
	class="text-primary-700 text-eyebrow inline-block font-medium leading-none

	{size == 'sm' && 'text-sm'}
	{size == 'md' && 'text-md'}
	{size == 'lg' && 'text-lg'}

	{className}
	"
	{...$$restProps}
>
	{text}
</p>
