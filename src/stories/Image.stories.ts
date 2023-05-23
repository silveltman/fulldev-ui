import type { Meta, StoryObj } from '@storybook/svelte';
import Image from 'base/Image.svelte';

// // More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Base/Image',
	component: Image,
	tags: ['autodocs'],
	argTypes: {
		sizes: {
			control: 'object'
		}
	}
} satisfies Meta<Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Sample1: Story = {
	args: {
		src: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
		alt: 'Image Alt',
		sizes: {
			xl: '500px',
			lg: '400px',
			md: '200px',
			sm: '40px'
		}
	}
};

export const Sample2: Story = {
	args: {
		src: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
		alt: 'Image Alt',
		sizes: {
			base: '50px'
		}
	}
};

export const Sample3: Story = {
	args: {
		src: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
		alt: 'Image Alt',
		sizes: {
			xl: '200px',
			lg: '100px'
		}
	}
};

export const Sample4: Story = {
	args: {
		src: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
		alt: 'Image Alt',
		sizes: {
			xl: '500px'
		}
	}
};
