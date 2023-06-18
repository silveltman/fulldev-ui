<script lang="ts">
	import Container from 'wrap/Container.svelte';
	import Button from 'base/Button.svelte';
	import Icon from 'lib/svelte/base/Icon.svelte';

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

<Button
	label="drawer-{position}"
	class="small {className}"
	variant="ghost"
>
	<slot name="toggle">
		<Icon
			size={24}
			name="menu"
		/>
	</slot>
</Button>

<!-- Overlay -->
<label
	class="invisible fixed inset-0 z-40 bg-black/30 opacity-0 transition-all peer-checked:visible peer-checked:opacity-100 {className}"
	for="drawer-{position}"
/>

<!-- Body  -->
<div
	class="fixed inset-0 z-50 border-base-6 bg-base-2 transition-all peer-checked:!translate-x-0 peer-checked:translate-y-0

		{position === 'left' && 'right-auto w-full max-w-md -translate-x-full border-r'}
		{position === 'right' && 'left-auto w-full max-w-md translate-x-full border-l'}
		{position === 'top' && 'bottom-auto w-full -translate-y-full border-b'}
		{position === 'bottom' && ' top-auto w-full translate-y-full border-t'}

"
>
	<header class="flex justify-between border-b border-base-6 py-sm">
		<Container
			class="flex items-center justify-between lg:px-md {position === 'left' || position === 'right'
				? '!pr-sm'
				: ''}"
		>
			<slot name="header" />

			<Button
				label="drawer-{position}"
				class="ml-auto small"
				variant="ghost"
			>
				<Icon
					size={24}
					name="close"
				/>
			</Button>
		</Container>
	</header>
	<Container class={position === 'left' || position === 'right' ? 'py-md lg:px-md' : 'py-md'}>
		<slot />
	</Container>
</div>
