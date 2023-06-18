<script lang="ts">
	import Icon from 'lib/svelte/base/Icon.svelte';

	let className = '';
	export { className as class };
</script>

<div class="dark relative -mx-4 md:-mx-12 lg:mx-0 {className}">
	<div
		class="snap-x scroll-smooth max-lg:flex max-lg:overflow-x-scroll lg:columns-1 lg:gap-sm lg:space-y-sm xl:columns-2 [&_img]:shrink-0 [&_img]:snap-start [&_img]:object-contain [&_img]:max-lg:rounded-[0px]"
	>
		<slot />
	</div>

	<div class="scroll-indicator absolute bottom-xl right-xl z-10 -rotate-90 lg:hidden">
		<div class="animate-bounce rounded-[999px] bg-base-9/75 p-sm text-white">
			<Icon name="expand_more" />
		</div>
	</div>
</div>
