<script lang="ts">
	let className: string = '';
	export { className as class };
	import { IconMenu2, IconX } from '@tabler/icons-svelte';
	import Container from './Container.svelte';

	export let position: 'left' | 'right' | 'top' | 'bottom';
</script>

<!-- Toggle  -->
<input
	type="checkbox"
	id="drawer-{position}"
	class="drawer-toggle"
/>
<label
	for="drawer-{position}"
	class={className}
>
	<slot name="toggle">
		<div class="ghost btn-circle btn ml-auto text-base-11 transition-none">
			<IconMenu2 />
		</div>
	</slot>
</label>

<!-- Overlay -->
<label
	class="overlay bg-base-12/20"
	for="drawer-{position}"
/>

<!-- Body  -->
<div
	class="drawer border-base-6 bg-base-2 shadow-none

		{position === 'left' && 'drawer-left border-r'}
		{position === 'right' && 'drawer-right border-l'}
		{position === 'top' && 'drawer-top border-b'}
		{position === 'bottom' && 'drawer-bottom border-t'}

		{className}"
>
	<header class="flex justify-between border-b p-sm">
		<Container
			class="flex justify-between {position === 'left' || position === 'right' ? '!px-0' : ''}"
		>
			<slot name="header" />
			<label
				for="drawer-{position}"
				class="ghost btn-circle btn ml-auto text-base-11 transition-none"
			>
				<IconX />
			</label>
		</Container>
	</header>
	<Container class={position === 'left' || position === 'right' ? '!p-lg' : 'py-lg'}>
		<slot />
	</Container>
</div>
