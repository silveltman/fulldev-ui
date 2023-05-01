<script lang="ts">
	import type { SocialContent } from '$lib/types';

	import {
		IconBrandFacebook,
		IconBrandTwitter,
		IconBrandLinkedin,
		IconBrandPinterest,
		IconBrandWhatsapp,
		IconBrandTelegram,
		IconMail,
		IconPhone
	} from '@tabler/icons-svelte';

	// export let icon:
	// 	| 'facebook'
	// 	| 'twitter'
	// 	| 'linkedin'
	// 	| 'pinterest'
	// 	| 'whatsapp'
	// 	| 'telegram'
	// 	| 'email'
	// 	| 'phone' = 'facebook'

	const componentMap = {
		facebook: IconBrandFacebook,
		twitter: IconBrandTwitter,
		linkedin: IconBrandLinkedin,
		pinterest: IconBrandPinterest,
		whatsapp: IconBrandWhatsapp,
		telegram: IconBrandTelegram,
		email: IconMail,
		phone: IconPhone
	};

	// export let href: string = '#'

	// export let content : SocialContent

	let className = '';
	export { className as class };
	export let content: SocialContent;

	export let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<a
	target="_blank"
	href={content.href}
	title={content.icon}
	class="text-hover:text-content-100 inline-block rounded-full bg-base-200 p-1 text-content-200 hover:bg-base-300

		{size === 'sm'
		? 'h-8 w-8'
		: size === 'md'
		? 'h-10 w-10'
		: size === 'lg'
		? 'h-12 w-12'
		: 'h-10 w-10'}

		{className}
		
	"
	{...$$restProps}
>
	<svelte:component
		this={componentMap[content.icon]}
		stroke={1.5}
	/>
</a>
