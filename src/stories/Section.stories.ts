import type { Meta, StoryObj } from '@storybook/svelte';
import Section from 'layout/Section.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Section',
	component: Section,
	tags: ['autodocs']
} satisfies Meta<Section>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args

export const Empty: Story = {};

const Template = ({ ...args }) => ({
	Component: Section,
	args: args
});

export const Regular = Template.bind({});
