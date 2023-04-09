<script lang="ts">
	let className = ''
	export { className as class }
	export let size: 'sm' | 'md' | 'lg' = 'md'
	export let color: boolean = true
	export let text: string = 'Lorem ipsum'
</script>

<div
	class="hello bg-test bg-hello inline-block rounded-eyebrow text-md font-medium leading-none text-primary-700

	{size === 'lg' &&
		(color
			? 'border border-primary-500/20 !bg-primary-500/5 py-2 px-3 text-primary-500'
			: 'border border-neutral-500/20 !bg-neutral-500/5 py-2 px-3 text-neutral-500')}
	{className}
	"
	{...$$restProps}
>
	{text}
</div>
