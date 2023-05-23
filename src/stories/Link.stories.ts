import type { Meta, StoryObj } from '@storybook/svelte';
import Link from 'base/Link.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Base/Link',
	component: Link,
	tags: ['autodocs']
} satisfies Meta<Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const SimpleLink: Story = {
	args: {
		href: 'example.com/ui',
		text: 'Visit example.com'
	}
};

export const PathLink: Story = {
	args: {
		href: '/blog',
		text: 'Blog',
		path: '/blog'
	}
};
