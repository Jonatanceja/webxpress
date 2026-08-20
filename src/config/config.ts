// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Webxpress. Sitios web rápidos, entregados en días',
	siteDescription:
		'Tu sitio web profesional publicado en 5 a 15 días hábiles, con precio cerrado y sin mensualidades. Diseño, desarrollo, hosting y soporte el primer año, en un solo pago.',
	ogImage: '/og.jpg',
	logo: {
		src: '/favicon.svg',
		alt: 'Webxpress. Logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
