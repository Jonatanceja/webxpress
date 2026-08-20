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
			'Webxpress crea sitios web modernos y rápidos, y los entrega en días. Precio cerrado desde el inicio, sin mensualidades: pagas una vez y el sitio es tuyo.',
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
