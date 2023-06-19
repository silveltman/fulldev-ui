<script lang="ts">
	import Video from 'base/Video.svelte';
	import Highlight from 'group/Highlight.svelte';
</script>

<section class=" container section stack bg-base-1">
	<div class="dark panel bg-base-1 max-md:-mx-4 max-md:rounded-[0px] md:rounded-box md:shadow-lg">
		<Video
			ratio={10 / 3.97}
			autoplay={true}
			loop={true}
			class="w-full"
			title="anti-slip-profiles"
			id="831834222?h=db8094c60f"
		/>
	</div>
	<Highlight
		row
		center
		class="large"
	>
		<span class="light-orange text-base-11">Gepatenteerde producten</span>
		<h1 class="h1">Nooit meer een gladde vlonder</h1>
		<a
			href="/"
			class="light-orange button button-solid"
			slot="actions">Bekijk producten</a
		>
	</Highlight>
</section>
