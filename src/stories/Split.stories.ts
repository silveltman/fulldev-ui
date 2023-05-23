import type { Meta, StoryObj } from '@storybook/svelte';
import Split from 'layout/Split.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Split',
	component: Split,
	tags: ['autodocs']
} satisfies Meta<Split>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args

export const Empty: Story = {};

export const Center: Story = {
	args: {
		center: true,
		class: 'bg-rose-200'
	}
};

const Template = ({ ...args }) => ({
	Component: Split,
	args: args
});

export const Regular = Template.bind({});
