import type { Button, Image } from '$lib/types'

export interface BlockType {
    eyebrow?: string
    heading?: string
    text?: string
    html?: string
    button_primary?: Button
    button_secondary?: Button
    image?: Image
}

export const blockDefaults: BlockType = {
    eyebrow: 'lorem ipsum',
    heading: ' Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    button_primary: {
        text: 'Lorem ipsum',
        href: '#'
    },
    button_secondary: {
        text: 'Lorem ipsum',
        href: '#'
    },
    image: {
        src: './placeholder.jpg',
        alt: 'Lorem ipsum'
    }
}