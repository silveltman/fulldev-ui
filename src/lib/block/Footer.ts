import type { Link, Social, Logo } from '$lib/types'

export interface Block {
    logo?: Logo
    text?: string
    links?: Link[]
    linkGroups?: {
        heading?: string
        links?: Link[]
    }[]
    socials?: Social[]
    newsletter?: {
        heading?: string
        text?: string
    }
}

export const defaults: Block = {
    logo: {
        light: {

            src: '/logo-light.svg',
            alt: 'Logo'
        },
        dark: {
            src: '/logo-dark.svg',
            alt: 'Logo'
        }
    },
    text: 'Sit dolor Lorem non ad aute cupidatat dolor.',
    links: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    linkGroups: [
        {
            heading: 'Services',
            links: [
                {
                    text: 'Service 1',
                    href: '/services/service-1'
                },
                {
                    text: 'Service 2',
                    href: '/services/service-2'
                },
                {
                    text: 'Service 3',
                    href: '/services/service-3'
                }
            ]
        },
        {
            heading: 'Products',
            links: [
                {
                    text: 'Product 1',
                    href: '/products/product-1'
                },
                {
                    text: 'Product 2',
                    href: '/products/product-2'
                },
                {
                    text: 'Product 3',
                    href: '/products/product-3'
                }
            ]
        },
        {
            heading: 'Resources',
            links: [
                {
                    text: 'Resource 1',
                    href: '/resources/resource-1'
                },
                {
                    text: 'Resource 2',
                    href: '/resources/resource-2'
                },
                {
                    text: 'Resource 3',
                    href: '/resources/resource-3'
                }
            ]
        }
    ],
    socials: [
        {
            icon: 'twitter',
            href: 'https://twitter.com'
        },
        {
            icon: 'facebook',
            href: 'https://facebook.com'
        },
        {
            icon: 'instagram',
            href: 'https://instagram.com'
        },
        {
            icon: 'linkedin',
            href: 'https://linkedin.com'
        }
    ],
    newsletter: {
        heading: 'Newsletter',
        text: 'Sit dolor Lorem non ad aute cupidatat dolor.'
    }
}