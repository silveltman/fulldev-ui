import type { Meta, StoryObj } from '@storybook/svelte';
import Grid from 'layout/Grid.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Grid',
	component: Grid,
	tags: ['autodocs']
} satisfies Meta<Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Reguler: Story = {};

export const Custom: Story = {
	args: {
		class: 'bg-red-200'
	}
};
