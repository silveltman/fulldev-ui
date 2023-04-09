export interface Disclosure {
	heading: string
	text: string
}

export interface Image {
	src: string
	alt: string
}

export interface Social {
	icon: string
	href: string
}

export interface Button {
	text: string
	href: string
}

export interface Link {
	text: string
	href: string
}

export interface Logo {
	light?: Image
	dark?: Image
	disableLink?: boolean
}





// Slots
export interface Prose {
	eyebrow?: string
	heading?: string
	text?: string
	html?: string
	button_primary?: Button
	button_secondary?: Button
}

export interface Accordion {
	accordion: Disclosure[]
}

export interface Checklist {
	checklist: {
		heading: string
		text: string
	}[]
}


// Block Blocks
export interface Hero {
	eyebrow?: string
	heading?: string
	text?: string
	button_primary?: Button
	button_secondary?: Button
	image?: Image
}

export interface Content {
	eyebrow?: string
	heading?: string
	html?: string
	button_primary?: Button
	button_secondary?: Button
	image?: Image
}

export interface Cta {
	heading?: string
	text?: string
	button_primary?: Button
	button_secondary?: Button
}

export interface Faq {
	eyebrow?: string
	heading?: string
	text?: string
	button_primary?: Button
	button_secondary?: Button
	accordion: Disclosure[]
}

export interface Header {
	logo?: Logo
	links?: Link[]
}

export interface Footer {
	logo?: Logo
	tagline?: string
}

export interface Features {
	eyebrow?: string
	heading?: string
	text?: string
	checklist: [
		{
			heading: string
			text: string
		},
		{
			heading: string
			text: string
		},
		{
			heading: string
			text: string
		}
	],
	image?: Image
}