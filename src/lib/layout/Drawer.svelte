<script lang="ts">
	let className: string = '';
	export { className as class };

	export let position: 'left' | 'right' | 'top' | 'bottom';
</script>

<label
	class="overlay bg-base-12/20"
	for="drawer-{position}"
/>
<div
	class="drawer border-base-6 bg-base-2 p-lg shadow-none

		{position === 'left' && 'drawer-left border-r'}
		{position === 'right' && 'drawer-right border-l'}
		{position === 'top' && 'drawer-top border-b'}
		{position === 'bottom' && 'drawer-bottom border-t'}

		{className}"
>
	<div class="drawer-content flex h-full flex-col pt-10">
		<label
			for="drawer-{position}"
			class="btn-sm btn-circle btn-ghost btn absolute right-2 top-2"
		/>
		<slot />
	</div>
</div>
