<script lang="ts">
	// no content prop

	import {
		IconBrandFacebook,
		IconBrandTwitter,
		IconBrandLinkedin,
		IconBrandPinterest,
		IconBrandWhatsapp,
		IconBrandTelegram,
		IconMail,
		IconPhone
	} from '@tabler/icons-svelte'

	export let icon:
		| 'facebook'
		| 'twitter'
		| 'linkedin'
		| 'pinterest'
		| 'whatsapp'
		| 'telegram'
		| 'email'
		| 'phone' = 'facebook'

	const componentMap = {
		facebook: IconBrandFacebook,
		twitter: IconBrandTwitter,
		linkedin: IconBrandLinkedin,
		pinterest: IconBrandPinterest,
		whatsapp: IconBrandWhatsapp,
		telegram: IconBrandTelegram,
		email: IconMail,
		phone: IconPhone
	}

	export let href: string = '#'
</script>

<a
	target="_blank"
	{href}
	title={icon}
	class="inline-block rounded-full bg-500 p-1 text-500 hover:bg-700 hover:text-700"
>
	<svelte:component
		this={componentMap[icon]}
		size={24}
		stroke={1.5}
	/>
</a>
