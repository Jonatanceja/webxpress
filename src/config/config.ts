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
	siteTitle: 'Webxpress. Sitios web rápidos y listos para crecer',
	siteDescription:
		'Tu sitio web rápido, optimizado y siempre actualizado. Con Webxpress obtienes diseño profesional, soporte continuo y actualizaciones sin complicaciones, todo en un solo servicio.',
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
