<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class="dark relative -mx-4 md:-mx-12 lg:mx-0 {className}">
	<div
		class="lg:gap-sm lg:space-y-sm snap-x scroll-smooth max-lg:flex max-lg:overflow-x-scroll lg:columns-1 xl:columns-2 [&_img]:shrink-0 [&_img]:snap-start [&_img]:object-contain [&_img]:max-lg:rounded-[0px]"
	>
		<slot />
	</div>

	<div class="scroll-indicator bottom-xl right-xl absolute z-10 -rotate-90 lg:hidden">
		<div class="bg-hue9/75 p-sm animate-bounce rounded-[999px] text-white">
			<i class="i-tabler:chevron-down text" />
		</div>
	</div>
</div>
