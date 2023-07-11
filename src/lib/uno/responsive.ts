import type { Preset } from 'unocss';
import { presetIcons, presetUno } from 'unocss';

function buildVariant(size: string) {
	return function (matcher: any) {
		if (!matcher.startsWith(`${size}:`)) return matcher;
		return {
			matcher: matcher.slice(size.length + 1),
			selector: (s: string) => `.${size}${s}, .${size} ${s}`
		};
	};
}

// Takes the viewport widths in pixels and the font sizes in rem
function buildClamp(min: number, max: number, start: number = 360, end: number = 1536) {
	const slope = (max - min) / (end - start);
	const yAxisIntersection = -start * slope + min;
	const clamp = `clamp( ${min}px, ${yAxisIntersection}px + ${slope * 100}vw, ${max}px )`;
	return clamp;
}

export default function myPreset(options: any = null): Preset {
	return {
		name: 'homme-responsive',
		preflights: [
			{
				getCSS: () => `
					body, html {
						scroll-behavior: smooth;
						width: 100%;
						height: 100%;
					}
				`
			}
		],
		rules: [
			[
				'primary',
				{
					'--compact-multiplier': '1',
					'--compact-toggle': '999px'
				}
			],
			[
				'secondary',
				{
					'--compact-multiplier': '0.5',
					'--compact-toggle': '0px'
				}
			],
			[
				'large',
				{
					'--size-multiplier': '1.5',
					'--text3': buildClamp(36, 60),
					'--text2': buildClamp(18, 20),
					'--text1': buildClamp(16, 18)
				}
			],
			[
				'medium',
				{
					'--size-multiplier': '1',
					'--text3': buildClamp(26, 40),
					'--text2': buildClamp(16, 18),
					'--text1': buildClamp(14, 16)
				}
			],
			[
				'small',
				{
					'--size-multiplier': '0.5',
					'--text3': buildClamp(20, 24),
					'--text2': buildClamp(14, 16),
					'--text1': buildClamp(12, 14)
				}
			]
		],
		theme: {
			fontSize: {
				3: 'min(var(--text3), calc(var(--text2) + var(--compact-toggle)))',
				2: 'min(var(--text2), calc(var(--text2) + var(--compact-toggle) - 2px))',
				1: 'min(var(--text1), calc(var(--text2) + var(--compact-toggle) - 4px))'
			},
			spacing: {
				6: `calc(${buildClamp(96, 128)} * var(--size-multiplier) * var(--compact-multiplier))`,
				5: `calc(${buildClamp(48, 64)} * var(--size-multiplier) * var(--compact-multiplier))`,
				4: `calc(${buildClamp(24, 32)} * var(--size-multiplier) * var(--compact-multiplier))`,
				3: `calc(${buildClamp(12, 16)} * var(--size-multiplier) * var(--compact-multiplier))`,
				2: `calc(${buildClamp(6, 8)} * var(--size-multiplier) * var(--compact-multiplier))`,
				1: `calc(${buildClamp(3, 4)} * var(--size-multiplier) * var(--compact-multiplier))`
			}
		},
		variants: [
			buildVariant('compact'),
			buildVariant('large'),
			buildVariant('medium'),
			buildVariant('small')
		],
		presets: [presetUno(), presetIcons()]
	};
}
