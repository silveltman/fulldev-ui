// --------------------------------------------
// Base 
// --------------------------------------------
export interface Disclosure {
	heading?: string
	textarea?: string
}

export interface Image {
	src?: string
	alt?: string
}

export interface Social {
	icon?: string
	href?: string
}

export interface Button {
	text?: string
	href?: string
}

export interface Link {
	text?: string
	href?: string
}

export interface Logo {
	light?: Image
	dark?: Image
	disableLink?: boolean
}


// --------------------------------------------
// Slot
// --------------------------------------------

export type AccordionContent = Disclosure[]

interface ChecklistItem {
	heading?: string
	textarea?: string
}
export type ChecklistContent = ChecklistItem[]

export interface HighlightContent {
	eyebrow?: string
	heading?: string
	textarea?: string
	button_primary?: Button
	button_secondary?: Button
	button_tertiary?: Button

}

export type MediaContent = Image

export interface RichtextContent {
	html?: string
}

interface StatsItem {
	label?: string
	value?: string
}
export type StatsContent = StatsItem[]



// --------------------------------------------
// Block
// --------------------------------------------

export interface CtaContent {
	highlight?: HighlightContent
	media?: MediaContent
}

export interface FaqContent {
	highlight?: HighlightContent
	accordion?: AccordionContent
}

export interface FeaturesContent {
	highlight?: HighlightContent
	checklist?: ChecklistContent
	media?: MediaContent
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



// --------------------------------------------
// Layout
// --------------------------------------------

export interface Layout {
	box?: boolean
	split?: boolean
	center?: boolean
	reverse?: boolean
}