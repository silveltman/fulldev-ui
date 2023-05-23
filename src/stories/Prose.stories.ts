import type { Meta, StoryObj } from '@storybook/svelte';
import Prose from 'layout/Prose.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Prose',
	component: Prose,
	tags: ['autodocs']
} satisfies Meta<Prose>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args

export const Empty: Story = {};

const Template = ({ ...args }) => ({
	Component: Prose,
	props: args
});

export const Regular = Template.bind({});
