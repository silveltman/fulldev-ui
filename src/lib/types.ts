export type { Hst } from '@histoire/plugin-svelte'

// --------------------------------------------
// Base 
// --------------------------------------------
export interface ButtonContent {
	text: string
	href?: string
}

export interface DisclosureContent {
	heading: string
	textarea: string
}

export type EyebrowContent = string

export interface ImageContent {
	src: string
	alt: string
}

export interface SocialContent {
	icon: string
	href: string
}


export interface LinkContent {
	text: string
	href: string
}

export interface LogoContent {
	light?: ImageContent
	dark?: ImageContent
}

export interface PersonContent {
	heading: string
	text: string
	image: ImageContent
}

export interface CardContent {
	heading: string
	textarea: string
	image: ImageContent
	person?: PersonContent
}


// --------------------------------------------
// Slot
// --------------------------------------------

export type SlotAccordionContent = DisclosureContent[]

interface ChecklistItem {
	heading?: string
	textarea?: string
	button?: ButtonContent
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

export type SlotMediaContent = ImageContent

export interface RichtextContent {
	html?: string
}

interface StatsItem {
	label?: string
	value?: string
}
export type SlotStatsContent = StatsItem[]

export type SlotCardsContent = CardContent[]

export interface SlotNewsletterContent {
	placeholder?: string
	button: ButtonContent
}


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
