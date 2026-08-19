// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	dark: {
		src: string
		alt: string
	}
	light: {
		src: string
		alt: string
	}
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		dark: {
			src: '/logo-light.svg',
			alt: 'Webxpress logo'
		},
		light: {
			src: '/logo-dark.svg',
			alt: 'Webxpress logo'
		},
		text: ''
	},
	navItems: [
		{ name: 'Inicio', link: '/' },
		{ name: 'Precios', link: '/precios' },
		{ name: 'Funciones', link: '/funciones' },
		{ name: 'Blog', link: '/blog' },
		{
			name: 'Ayuda',
			link: '#',
			submenu: [
				{ name: 'Preguntas frecuentes', link: '/faq' },
				{ name: 'Terminos y condiciones', link: '/terminos' }
			]
		}
	],
	navActions: [{ name: 'Comienza ya', link: '/contacto', style: 'primary', size: 'lg' }]
}
