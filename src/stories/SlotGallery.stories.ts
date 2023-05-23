import type { Meta, StoryObj } from '@storybook/svelte';
import SlotGallery from 'slot/SlotGallery.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Slot/SlotGallery',
	component: SlotGallery,
	tags: ['autodocs']
} satisfies Meta<SlotGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args

const content = [
	{
		src: 'https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
		alt: 'check this out'
	},
	{
		src: 'https://images.unsplash.com/photo-1643720375812-7a09248a4f52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
		alt: 'text area'
	}
];

const content2 = [
	{
		src: 'https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
		alt: 'img 3 alt'
	},
	{
		src: 'https://images.unsplash.com/photo-1643720375812-7a09248a4f52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
		alt: 'img 3 alt'
	},
	{
		src: 'https://images.unsplash.com/photo-1635179209792-d53a32fca84f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		alt: 'img 3 alt'
	},
	{
		src: 'https://images.unsplash.com/photo-1635179239123-f7776f3d81e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
		alt: 'img 4 alt'
	}
];

export const Empty: Story = {
	args: {
		content: content
	}
};

export const Custom: Story = {
	args: {
		content: content2,
		class: 'gap-8'
	}
};
