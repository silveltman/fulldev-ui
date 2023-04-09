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


// Block types
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
