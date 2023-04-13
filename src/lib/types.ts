export type { Hst } from '@histoire/plugin-svelte'

// Cloudcannon types
type heading = string
type textarea = string
type text = string
type eyebrow = string




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

export interface ButtonContent {
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

export type SlotAccordionContent = Disclosure[]

interface ChecklistItem {
	heading?: string
	textarea?: string
}
export type SlotChecklistContent = ChecklistItem[]

export interface HighlightContent {
	eyebrow?: string
	heading?: string
	textarea?: string
	button_primary?: ButtonContent
	button_secondary?: ButtonContent
	button_tertiary?: ButtonContent

}

export type SlotMediaContent = Image

export interface RichtextContent {
	html?: string
}

interface StatsItem {
	label?: string
	value?: string
}
export type SlotStatsContent = StatsItem[]

export interface SlotNewsletterContent {


// --------------------------------------------
// Block
// --------------------------------------------

export interface HeroContent {
	highlight?: HighlightContent
	media?: SlotMediaContent
}

export interface CtaContent {
	highlight?: HighlightContent
	media?: SlotMediaContent
}

export interface FaqContent {
	highlight?: HighlightContent
	accordion?: SlotAccordionContent
}

export interface FeaturesContent {
	highlight?: HighlightContent
	checklist?: SlotChecklistContent
	media?: SlotMediaContent
}

// export interface Header {
// 	logo?: Logo
// 	links?: Link[]
// }

// export interface Footer {
// 	logo?: Logo
// 	tagline?: string
// }


// --------------------------------------------
// Rest
// --------------------------------------------

export interface Layout {
	box?: boolean
	split?: boolean
	center?: boolean
	reverse?: boolean
}
