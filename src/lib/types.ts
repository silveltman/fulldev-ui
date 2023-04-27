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

export interface LinkContent {
	text: string
	href: string
}

export interface LogoContent {
	light?: ImageContent
	dark?: ImageContent
}

export interface PersonContent {
	heading?: string
	text?: string
	image?: ImageContent
}

export interface CardContent {
	eyebrow?: string
	heading?: string
	textarea?: string
	href?: string
	image?: ImageContent
	person?: PersonContent
}

// -------------------------------------------- 
export interface ToggleContent {
	heading: string,
	text: string,
	id: string,
	required? : boolean
}

export interface SelectContent {
    required?: boolean;
    name: string;
    label?: string;
    placeholder?: string;
    options: string[];
}

export interface RadioItem {
	name?: string,
	heading: string,
	text: string,
	value: string
	required?: boolean;
}

export type RadioContent = RadioItem[]

export interface FormContent {
	action?: string,
	// fields?: (TextFieldContent | TextAreaContent | SelectContent | RadioContent | ToggleContent | CheckboxContent)[],
}

export interface CheckboxContent {
	heading: string,
	text: string,
	id: string,
	required?: boolean
}

export interface WhatsappContent {
	tel: string,
}

export interface TextFieldContent {
	type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search',
	name : string,
	label?: string,
	placeholder?: string,
	required: boolean,
}

export interface TextAreaContent {
	name : string,
	label?: string,
	placeholder?: string,
	required: boolean,
	// rows: number,
}

export interface SocialContent {
	icon:  | 'facebook'
	| 'twitter'
	| 'linkedin'
	| 'pinterest'
	| 'whatsapp'
	| 'telegram'
	| 'email'
	| 'phone',
	href: string
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

export interface SlotHighlightContent {
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
	highlight?: SlotHighlightContent
	media?: SlotMediaContent
}

export interface CtaContent {
	highlight?: SlotHighlightContent
	media?: SlotMediaContent
}

export interface FaqContent {
	highlight?: SlotHighlightContent
	accordion?: SlotAccordionContent
}

export interface FeaturesContent {
	highlight?: SlotHighlightContent
	checklist?: SlotChecklistContent
	media?: SlotMediaContent
}

export interface BlockCardsContent {
	highlight?: SlotHighlightContent
	cards?: SlotCardsContent
}

export interface HeaderContent {
	logo?: LogoContent
	links?: LinkContent[]
}

export interface FooterContent {
	text?: string
	logo?: LogoContent
	links? : LinkContent[]
}


// --------------------------------------------
// Rest
// --------------------------------------------

export interface Layout {
	box?: boolean
	split?: boolean
	center?: boolean
	reverse?: boolean
}
