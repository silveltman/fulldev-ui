<script>
	import ContactNarrow from '$lib/ContactNarrow.svelte'
	import HeroWide from '$lib/HeroWide.svelte'
	import TheFooter from '$lib/TheFooter.svelte'
	import TheHeader from '$lib/TheHeader.svelte'
	import object from '../contact.yml'
</script>

<TheHeader class="absolute" />
<HeroWide
	class="pb-0"
	cms={object.hero}
/>
<ContactNarrow />
<TheFooter class="dark" />
