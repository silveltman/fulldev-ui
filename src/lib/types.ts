// --------------------------------------------
// Base
// --------------------------------------------
export interface ButtonContent {
	text: string;
	href?: string;
}

export interface CollapseContent {
	heading: string;
	textarea: string;
}

export type EyebrowContent = string;

export interface ImageContent {
	src: string;
	alt: string;
}

type LengthUnit =
	| `${number}px`
	| `${number}vw`
	| `${number}vh`
	| `${number}em`
	| `${number}rem`
	| `${number}%`;

type CalcFunction =
	| `calc(${LengthUnit} + ${LengthUnit})`
	| `calc(${LengthUnit} - ${LengthUnit})`
	| `calc(${LengthUnit} * ${number})`
	| `calc(${LengthUnit} / ${number})`;

export type ImageSizesValue = LengthUnit | CalcFunction;

export interface ImageSizes {
	base?: ImageSizesValue;
	sm?: ImageSizesValue;
	md?: ImageSizesValue;
	lg?: ImageSizesValue;
	xl?: ImageSizesValue;
	'2xl'?: ImageSizesValue;
}

export interface LinkContent {
	text: string;
	href: string;
}

export type LogoContent = ImageContent;

export interface CardContent {
	image?: ImageContent;
	eyebrow?: string;
	heading?: string;
	textarea?: string;
	href?: string;
}

// --------------------------------------------
export interface ToggleContent {
	heading: string;
	text: string;
	id: string;
	required?: boolean;
}

export interface SelectContent {
	label?: string;
	placeholder?: string;
	options: string[];
}

export interface RadioItem {
	heading?: string;
	text?: string;
}

export type RadioContent = RadioItem[];

export interface CheckboxContent {
	heading?: string;
	text?: string;
}

export interface WhatsappContent {
	tel: string;
}

export interface TextFieldContent {
	label?: string;
	placeholder?: string;
}

export interface TextareaContent {
	label?: string;
	placeholder?: string;
}

export interface SocialContent {
	icon:
		| 'facebook'
		| 'twitter'
		| 'linkedin'
		| 'pinterest'
		| 'whatsapp'
		| 'telegram'
		| 'email'
		| 'phone';
	href: string;
}

// --------------------------------------------
// Slot
// --------------------------------------------

export type AccordionContent = CollapseContent[];

interface ChecklistItem {
	heading?: string;
	textarea?: string;
	button?: ButtonContent;
}
export type SlotChecklistContent = ChecklistItem[];

export interface HighlightContent {
	eyebrow?: string;
	heading?: string;
	textarea?: string;
	button_primary?: ButtonContent;
	button_secondary?: ButtonContent;
}

export type SlotMediaContent = ImageContent;

export interface RichtextContent {
	html?: string;
}

interface StatsItem {
	label?: string;
	value?: string;
}
export type StatsContent = StatsItem[];

export type SlotCardContent = CardContent[];

export interface NewsletterContent {
	textfield: {
		placeholder?: string;
	};
	button: ButtonContent;
}

export type SlotGalleryContent = ImageContent[];

// --------------------------------------------
// Block
// --------------------------------------------

export interface HeroContent {
	highlight?: HighlightContent;
	media?: SlotMediaContent;
}

export interface CtaContent {
	highlight?: HighlightContent;
	media?: SlotMediaContent;
}

export interface FaqContent {
	highlight?: HighlightContent;
	accordion?: AccordionContent;
}

export interface FeaturesContent {
	highlight?: HighlightContent;
	checklist?: SlotChecklistContent;
	media?: SlotMediaContent;
}

export interface BlockCardsContent {
	highlight?: HighlightContent;
	cards?: SlotCardContent;
}

export interface HeaderContent {
	logo?: LogoContent;
	links?: LinkContent[];
}

export interface FooterContent {
	text?: string;
	logo?: LogoContent;
	links?: LinkContent[];
}

// --------------------------------------------
// Rest
// --------------------------------------------

export interface Layout {
	box?: boolean;
	split?: boolean;
	center?: boolean;
	reverse?: boolean;
}
