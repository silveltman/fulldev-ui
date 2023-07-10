import type { Preset } from 'unocss';

export default function myPreset(options: any = null): Preset {
	return {
		name: 'homme-shortcuts',
		shortcuts: {
			// Base components
			heading: 'text-hue12 text-lg leading-heading font-heading',
			text: 'text-hue11 text-md leading-base font-base',
			button:
				'inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-button p-md text-center text-md font-button leading-[1] transition active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
			'button-ghost': 'bg-transparent text-hue11 hover:bg-hue3 hover:text-hue12 active:bg-hue4',
			'button-soft': 'bg-hue3 text-hue11 hover:bg-hue4 hover:text-hue12 active:bg-hue5',
			'button-ringed':
				'bg-transparent text-hue11 ring-2 ring-inset ring-hue7 hover:text-hue12 hover:ring-hue8',
			'button-solid': 'bg-hue9 text-white hover:bg-hue10',
			img: 'block h-auto w-full max-w-full max-h-full min-w-0 min-h-0 rounded-image',
			input:
				'rounded-input !border-0 bg-transparent px-md py-3 text-hue12 !ring-2 !ring-inset ring-hue7 placeholder:text-hue11 focus:ring-hue8 disabled:pointer-events-none disabled:opacity-50 small:py-2 large:py-4',
			label: 'text-sm text-hue12',
			link: 'whitespace-nowrap text-md text-hue11 hover:text-hue12 disabled:pointer-events-none disabled:opacity-50',
			select:
				'shrink-0 rounded-input !border-none bg-transparent py-3 pl-md text-md !ring-2 !ring-inset ring-hue7 focus:ring-hue8 disabled:pointer-events-none disabled:opacity-50 small:py-2 large:py-4',
			textarea:
				'rounded-input !border-none bg-transparent p-md text-md leading-[1] text-hue12 !ring-2 !ring-inset ring-hue7 placeholder:text-hue11 focus:ring-hue8 disabled:pointer-events-none disabled:opacity-50',

			// Layout components
			container: 'mx-auto w-full max-w-screen-2xl px-4 md:px-12',
			carousel: `gap-x-md pb-md relative flex flex snap-x flex-row items-start justify-start overflow-hidden overflow-x-auto scroll-smooth  
				px-4 -mx-4 md:-mx-12 md:px-12 2xl:-mx-[calc(50vw-720px)] 2xl:px-[calc(50vw-720px)] 
				[&>*]:shrink-0 [&>*]:grow-0 [&>*]:snap-center [&>*]:w-60 sm:[&>*]:w-[320px] 
				small:[&>*]:w-40 sm:small:[&>*]:w-[218px]
				large:[&>*]:w-80 sm:large:[&>*]:w-[448px]
			`,

			masonry: `w-full columns-2 gap-x-md gap-y-lg space-y-lg small:columns-2 large:columns-1 [&>*]:grow [&>*]:break-inside-avoid-column
      sm:columns-[308px] small:sm:columns-[220px] large:sm:columns-2
      large:md:columns-[385px]
      `,
			matrix: `grid w-full grid-cols-2 gap-x-md gap-y-lg small:grid-cols-2 large:grid-cols-1 [&>*]:grow
      sm:grid-cols-[repeat(auto-fill,minmax(308px,1fr))] small:sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] large:sm:grid-cols-2
      `,
			panel:
				'relative w-full overflow-hidden rounded-panel border border-hue6 bg-hue2 px-lg py-xl md:px-xl',
			box: 'relative w-full overflow-hidden rounded-card border border-hue6 bg-hue2 p-md',
			section: 'relative w-full py-2xl',
			split: 'grid w-full auto-cols-fr grid-flow-row gap-xl lg:grid-flow-col',
			stack: 'grid w-full grid-flow-row gap-xl',

			// Helper classes
			border: 'border border-hue6'
		}
	};
}
