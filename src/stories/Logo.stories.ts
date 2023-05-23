import type { Meta, StoryObj } from '@storybook/svelte';
import Logo from 'base/Logo.svelte';
import Logopng from './assets/logo.png';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Base/Logo',
	component: Logo,
	tags: ['autodocs']
} satisfies Meta<Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Simple: Story = {
	args: {
		src: Logopng,
		alt: 'img alt',
		href: '/',
		class: 'h-10 w-10'
	}
};

export const NoLink: Story = {
	args: {
		src: Logopng,
		alt: 'img alt',
		disableLink: true,
		class: 'h-7 w-7'
	}
};
