import type { Meta, StoryObj } from '@storybook/svelte';
import Carousel from 'layout/Carousel.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Layout/Carousel',
	component: Carousel,
	tags: ['autodocs']
} satisfies Meta<Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args

export const Empty: Story = {};

const Template = ({ ...args }) => ({
	Component: Carousel,
	props: args
});

export const Regular = Template.bind({});
