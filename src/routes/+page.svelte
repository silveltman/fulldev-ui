<script>
	import ContentSplit from '$lib/ContentSplit.svelte'
	import ContentWide from '$lib/ContentWide.svelte'
	import CtaBox from '$lib/CtaBox.svelte'
	import HeroSplit from '$lib/HeroSplit.svelte'
	import TheFooter from '$lib/TheFooter.svelte'
	import TheHeader from '$lib/TheHeader.svelte'
	import object from './index.yml'
</script>

<TheHeader class="dark absolute" />
<HeroSplit
	cms={object.hero}
	class="dark"
/>

<ContentSplit
	cms={object.feature}
	reverse
/>
<ContentSplit
	class="py-0"
	cms={object.feature}
/>
<ContentSplit
	cms={object.feature}
	reverse
/>
<CtaBox cms={object.cta_box} />
<ContentWide cms={object.about} />
<ContentSplit
	cms={object.ontwikkeling}
	reverse
/>
<ContentSplit
	class="dark"
	cms={object.cta_content}
/>
<TheFooter class="dark" />
