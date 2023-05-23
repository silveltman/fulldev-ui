import type { Meta, StoryObj } from '@storybook/svelte';
import Ratio from 'layout/Ratio.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Ratio',
	component: Ratio,
	tags: ['autodocs']
} satisfies Meta<Ratio>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args

export const Empty: Story = {};

const Template = ({ ...args }) => ({
	Component: Ratio,
	args: args
});

export const Regular = Template.bind({});
