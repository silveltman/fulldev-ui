<script lang="ts">
	let className: string = '';
	export { className as class };
	export let id: string;
	export let title: string = '';
	export let autoplay: boolean = false;
	export let loop: boolean = false;
	export let ratio: number = 16 / 9;
</script>

<iframe
	{title}
	src="https://player.vimeo.com/video/{id}&autoplay={autoplay}&loop={loop}&title=0&byline=0&portrait=0&controls=1&autopause=0&pip=0"
	style="position:absolute;top:0;left:0;width:100%;height:100%;"
	frameborder="0"
	allow="autoplay; fullscreen; picture-in-picture"
	allowfullscreen
/>
