import type { Meta, StoryObj } from '@storybook/svelte';
import Footer from 'layout/Footer.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Footer',
	component: Footer,
	tags: ['autodocs']
} satisfies Meta<Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Reguler: Story = {};

export const Custom: Story = {
	args: {
		class: 'rounded-md p-2 border-b border-red-500'
	}
};
