<script lang="ts">
	import Whatsapp from 'lib/Whatsapp.svelte';
</script>

<div class="section container">
	<div
		class="gap-x-md pb-md small:[&>*]:w-40 sm:small:[&>*]:w-[218px] relative -mx-4 flex flex snap-x flex-row items-start items-center justify-start overflow-hidden overflow-x-auto scroll-smooth px-4
		 md:-mx-12 md:px-12 2xl:-mx-[calc(50vw-720px)] 2xl:px-[calc(50vw-720px)]
		[&>*]:w-60
		[&>*]:shrink-0 [&>*]:grow-0
		[&>*]:snap-center sm:[&>*]:w-[320px]
		"
	>
		{#each { length: 20 } as item}
			<div class="bg-primary5 h-8" />
		{/each}
	</div>
</div>

<div class="section container">
	<div class="carousel2 large">
		{#each { length: 20 } as item}
			<div class="bg-primary5 h-8" />
		{/each}
	</div>
</div>
