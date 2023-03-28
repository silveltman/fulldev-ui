<script>
	import ContactNarrow from '$lib/BlockContactNarrow.svelte'
	import HeroWide from '$lib/BlockHeroWide.svelte'
	import TheFooter from '$lib/BlockFooterSimple.svelte'
	import TheHeader from '$lib/BlockHeaderSimple.svelte'
	import object from '../contact.yml'
</script>

<TheHeader class="absolute" />
<HeroWide
	class="pb-0"
	block={object.hero}
/>
<ContactNarrow />
<TheFooter class="dark" />
