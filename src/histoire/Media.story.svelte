<script lang="ts">
	import type { Hst } from '$lib/types';
	import Image from 'base/Image.svelte';
	import Logo from 'base/Logo.svelte';
	export let Hst: Hst;

	let src: string = 'https://picsum.photos/300/200';
	let alt: string = 'https://picsum.photos/300/200';
</script>

<Hst.Story layout={{ type: 'grid', width: 300 }}>
	<svelte:fragment slot="controls">
		<Hst.Text
			title="Src"
			bind:value={src}
		/>
		<Hst.Text
			title="Alt"
			bind:value={alt}
		/>
	</svelte:fragment>

	<Hst.Variant title="Image">
		<Image
			{src}
			{alt}
		/>
	</Hst.Variant>
	<Hst.Variant title="Logo">
		<Logo
			{src}
			{alt}
		/>
	</Hst.Variant>
</Hst.Story>
