<script lang="ts">
	let className: string = '';
	export { className as class };
	export let position: 'left' | 'right' | 'top' | 'bottom';
</script>

<!-- Toggle  -->
<input
	type="checkbox"
	id="drawer-{position}"
	class="peer absolute h-0 w-0 appearance-none opacity-0"
/>

<label
	for="drawer-{position}"
	class="button button-ghost small {className}"
>
	<slot name="toggle">
		<i class="i-tabler:menu-2 text" />
	</slot>
</label>

<!-- Overlay -->
<label
	class="invisible fixed inset-0 z-40 bg-black/30 opacity-0 transition-all peer-checked:visible peer-checked:opacity-100 {className}"
	for="drawer-{position}"
/>

<!-- Body  -->
<div
	class="border-hue6 bg-hue2 fixed inset-0 z-50 transition-all peer-checked:!translate-x-0 peer-checked:translate-y-0

		{position === 'left' && 'right-auto w-full max-w-md -translate-x-full border-r'}
		{position === 'right' && 'left-auto w-full max-w-md translate-x-full border-l'}
		{position === 'top' && 'bottom-auto w-full -translate-y-full border-b'}
		{position === 'bottom' && ' top-auto w-full translate-y-full border-t'}

"
>
	<header class="border-hue6 py-sm flex justify-between border-b">
		<div
			class="lg:px-md container flex items-center justify-between {position === 'left' ||
			position === 'right'
				? '!pr-sm'
				: ''}"
		>
			<slot name="header" />

			<label
				for="drawer-{position}"
				class="button button-ghost small ml-auto"
			>
				<i class="i-tabler:x text" />
			</label>
		</div>
	</header>
	<div class="container {position === 'left' || position === 'right' ? 'py-md lg:px-md' : 'py-md'}">
		<slot />
	</div>
</div>
