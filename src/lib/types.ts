interface Image {
	src: string
	alt: string
}

interface Button {
	text: string
	href: string
}

interface Link {
	text: string
	href: string
}

type Logo = string

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

export interface Header {
	logo?: Logo
	links?: Link[]
}

export interface Footer {
	logo?: Logo
	tagline?: string
}
