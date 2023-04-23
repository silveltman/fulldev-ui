<script lang="ts">
	import type { SocialContent } from '$lib/types'

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

	let className = ''
	export { className as class }
	// export let content : SocialContent


	export let size: 'sm' | 'md' | 'lg' = 'md'

</script>

<a
	target="_blank"
	{href}
	title={icon}
	class="inline-block rounded-full bg-500 p-1 text-500 hover:bg-700 hover:text-700"
>
	<svelte:component
		this= { componentMap[icon]  }
		size={
			size === 'sm'
				? 20
				: size === 'md'
				? 24
				: size === 'lg'
				? 28
				: 24
		}
		class={className}
		stroke={1.5}
	/>
</a>
