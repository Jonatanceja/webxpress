// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Webxpress.',
		aboutText:
			'Webxpress es tu plataforma para tener un sitio web moderno, rápido y sin complicaciones. Paga una suscripción mensual y nosotros nos encargamos del diseño, cambios, soporte y actualizaciones.',
		logo: {
			src: '/logo.svg',
			alt: 'Webxpress Logo',
			text: 'Webxpress.'
		}
	},
	footerColumns: [
		{
			category: 'Producto',
			subCategories: [
				{
					subCategory: 'Funciones',
					subCategoryLink: '/funciones'
				},
				{
					subCategory: 'Precios',
					subCategoryLink: '/precios'
				}
			]
		},
		{
			category: 'Ayuda',
			subCategories: [
				{
					subCategory: 'Preguntas Frecuentes',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Términos y condiciones',
					subCategoryLink: '/terminos'
				}
			]
		},
		{
			category: 'Contáctanos',
			subCategories: [
				{
					subCategory: 'Contacto',
					subCategoryLink: '/contacto'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Webxpress 2025.'
	}
}
