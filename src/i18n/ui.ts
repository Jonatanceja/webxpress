// Diccionario de traducciones
// ------------
// Todo el texto visible del sitio, por idioma. Las rutas viven en routes.ts.

import type { Lang, RouteId } from './routes'

export type NavItem = { key: string; route: RouteId }
export type NavGroup = { key: string; items: NavItem[] }

export const ui = {
	en: {
		// Metadatos del sitio
		site: {
			locale: 'en_US',
			name: 'Webxpress',
			title: 'Webxpress. Fast websites, delivered in days',
			description:
				'Your professional website live in 5 to 20 business days, at a fixed price with no monthly fees. Design, development, hosting and support for the first year, in a single payment.'
		},

		// Navegación
		nav: {
			home: 'Home',
			pricing: 'Pricing',
			features: 'Features',
			help: 'Help',
			faq: 'FAQ',
			terms: 'Terms & conditions',
			contact: 'Contact',
			cta: 'Get started'
		},

		// Selector de idioma
		lang: {
			label: 'Change language',
			switchTo: 'Ver en español'
		},

		// Footer
		footer: {
			about:
				'Webxpress builds modern, fast websites and delivers them in days. A fixed price from the start, with no monthly fees: you pay once and the site is yours.',
			product: 'Product',
			help: 'Help',
			contactUs: 'Contact us',
			copyright: '© Webxpress 2026.'
		},

		// Portada
		home: {
			seoTitle: 'Webxpress | Your website live in days, not months',
			seoDescription:
				'We publish your website in 5 to 20 business days, at a fixed price with no monthly fees. Professional design, speed and support included for the first year.',
			heroTitle: 'Your <strong>website</strong> live in days',
			heroText:
				'<strong>From signing to launch in 5 to 20 business days.</strong> A fixed price from the start, with no monthly fees.',
			heroCta: 'See pricing and timelines',
			heroImageAlt: 'Your website in orbit',

			featuresTitle: 'No more endless projects. <strong>Your site</strong> published in days.',
			featuresText:
				'Webxpress delivers a modern, fast website in 5 to 20 business days, at a fixed price you know before we start. A single payment, no monthly fees and no surprises.',
			card1Title: 'Published in days, not months',
			card1Text:
				'5, 10 or 20 business days depending on the package. We give you the delivery date before we start, and we meet it.',
			card2Title: 'Speed you can actually feel',
			card2Text:
				'They load fast, flow better and improve your visitors experience on any device.',
			card3Title: 'Fixed price',
			card3Text:
				'A single payment, no monthly fees. You know exactly what your site costs from day one.',
			card4Title: 'Security included',
			card4Text:
				'HTTPS, protection against common errors and technical support included for the first year.',
			card5Title: 'Support that answers',
			card5Text: 'You are not on your own. We help you personally by email or WhatsApp.'
		},

		// Páginas interiores
		pricing: {
			seoTitle: 'Webxpress | Fixed price and delivery in days',
			seoDescription:
				'A single payment, no monthly fees. Choose your package and have your site published in 5, 10 or 20 business days.',
			headerTitle: 'A fixed price and your site published in <strong>days</strong>, not months.',
			headerText:
				'A single payment, with no monthly fees and no surprises. You know what it costs and when it goes live before we start.',
			quote:
				'We tell you the price and the delivery date before we start, and we stick to them. No monthly fees and no projects that drag on for months.'
		},
		features: {
			seoTitle: 'Webxpress | Technology, design and performance included',
			seoDescription:
				'Everything your Webxpress site includes: professional design, modern development without WordPress, content manager, hosting, SEO and optimised speed. Delivered in days, at a fixed price.',
			headerTitle: 'A solid foundation for your site, with no limits',
			headerText:
				'Designed to stand out, built to scale. Fast, secure sites, ready for what comes next.'
		},
		faq: {
			seoTitle: 'Webxpress | We answer your questions before you ask them',
			seoDescription:
				'Clear answers about pricing, delivery times, design and integrations.',
			headerTitle: 'We answer <strong>your questions</strong> before you ask them',
			headerText: 'Clear answers about pricing, delivery times, design and integrations.'
		},
		contact: {
			seoTitle: 'Webxpress | Talk to us',
			seoDescription:
				'Tell us about your project and we will get back to you with a fixed price and a delivery date.',
			headerTitle: 'Tell us about <strong>your project</strong>',
			headerText:
				'Write to us and we will get back to you with a fixed price and a delivery date. No commitment.'
		},
		terms: {
			seoTitle: 'Webxpress | Terms and conditions',
			seoDescription: 'The terms governing our web design and development services.',
			headerTitle: 'Terms and conditions',
			headerText:
				'The terms governing our web design and development services, so you know where you stand from day one.',
			legalNotice:
				'This is a translation provided for convenience. The Spanish version of these terms is the legally binding one.'
		}
	},

	es: {
		site: {
			locale: 'es_MX',
			name: 'Webxpress',
			title: 'Webxpress. Sitios web rápidos, entregados en días',
			description:
				'Tu sitio web profesional publicado en 5 a 20 días hábiles, con precio cerrado y sin mensualidades. Diseño, desarrollo, hosting y soporte el primer año, en un solo pago.'
		},

		nav: {
			home: 'Inicio',
			pricing: 'Precios',
			features: 'Funciones',
			help: 'Ayuda',
			faq: 'Preguntas frecuentes',
			terms: 'Términos y condiciones',
			contact: 'Contacto',
			cta: 'Comienza ya'
		},

		lang: {
			label: 'Cambiar idioma',
			switchTo: 'View in English'
		},

		footer: {
			about:
				'Webxpress crea sitios web modernos y rápidos, y los entrega en días. Precio cerrado desde el inicio, sin mensualidades: pagas una vez y el sitio es tuyo.',
			product: 'Producto',
			help: 'Ayuda',
			contactUs: 'Contáctanos',
			copyright: '© Webxpress 2026.'
		},

		home: {
			seoTitle: 'Webxpress | Tu sitio web en línea en días, no en meses',
			seoDescription:
				'Publicamos tu sitio en 5 a 20 días hábiles, con precio cerrado y sin mensualidades. Diseño profesional, velocidad y soporte incluido el primer año.',
			heroTitle: 'Tu <strong>sitio web</strong> en línea en días',
			heroText:
				'<strong>De la contratación al lanzamiento en 5 a 20 días hábiles.</strong> Precio cerrado desde el inicio, sin mensualidades.',
			heroCta: 'Ver precios y plazos',
			heroImageAlt: 'Tu sitio web en órbita',

			featuresTitle: 'No más proyectos eternos. <strong>Tu sitio</strong> publicado en días.',
			featuresText:
				'Webxpress te entrega un sitio web moderno y rápido en 5 a 20 días hábiles, con un precio cerrado que conoces antes de empezar. Un solo pago, sin mensualidades y sin sorpresas.',
			card1Title: 'Publicado en días, no en meses',
			card1Text:
				'5, 10 o 20 días hábiles según el paquete. Te damos la fecha de entrega antes de empezar y la cumplimos.',
			card2Title: 'Velocidad que sí se nota',
			card2Text:
				'Cargan rápido, fluyen mejor y mejoran la experiencia de tus visitantes desde cualquier dispositivo.',
			card3Title: 'Precio cerrado',
			card3Text:
				'Un solo pago, sin mensualidades. Sabes exactamente cuánto cuesta tu sitio desde el primer día.',
			card4Title: 'Seguridad incluida',
			card4Text:
				'HTTPS, protección contra errores comunes y soporte técnico incluido durante el primer año.',
			card5Title: 'Soporte que responde',
			card5Text:
				'No estás solo. Te acompañamos con atención personalizada por correo o WhatsApp.'
		},

		pricing: {
			seoTitle: 'Webxpress | Precio cerrado y entrega en días',
			seoDescription:
				'Un solo pago, sin mensualidades. Elige tu paquete y ten tu sitio publicado en 5, 10 o 20 días hábiles.',
			headerTitle: 'Precio cerrado y tu sitio publicado en <strong>días</strong>, no en meses.',
			headerText:
				'Un solo pago, sin mensualidades ni sorpresas. Sabes lo que cuesta y cuándo estará en línea antes de empezar.',
			quote:
				'Te decimos el precio y la fecha de entrega antes de empezar, y los cumplimos. Sin mensualidades y sin proyectos que se alargan meses.'
		},
		features: {
			seoTitle: 'Webxpress | Tecnología, diseño y rendimiento incluidos',
			seoDescription:
				'Descubre todo lo que incluye tu sitio Webxpress: diseño profesional, desarrollo moderno sin WordPress, gestor de contenido, hosting, SEO y velocidad optimizada. Entregado en días y con precio cerrado.',
			headerTitle: 'Una base sólida para tu sitio, sin límites',
			headerText:
				'Diseñado para destacar, desarrollado para escalar. Sitios rápidos, seguros y preparados para el futuro.'
		},
		faq: {
			seoTitle: 'Webxpress | Resolvemos tus dudas antes de que las tengas',
			seoDescription:
				'Encuentra respuestas claras sobre precios, plazos de entrega, diseño e integraciones.',
			headerTitle: 'Resolvemos <strong>tus dudas</strong> antes de que las tengas',
			headerText: 'Encuentra respuestas claras sobre precios, plazos de entrega, diseño e integraciones.'
		},
		contact: {
			seoTitle: 'Webxpress | Hablemos de tu proyecto',
			seoDescription:
				'Cuéntanos qué necesitas y te respondemos con un precio cerrado y una fecha de entrega.',
			headerTitle: 'Cuéntanos sobre <strong>tu proyecto</strong>',
			headerText:
				'Escríbenos y te respondemos con un precio cerrado y una fecha de entrega. Sin compromiso.'
		},
		terms: {
			seoTitle: 'Webxpress | Términos y condiciones',
			seoDescription: 'Las condiciones que rigen nuestros servicios de diseño y desarrollo web.',
			headerTitle: 'Términos y condiciones',
			headerText:
				'Las condiciones que rigen nuestros servicios de diseño y desarrollo web, para que sepas a qué atenerte desde el primer día.',
			legalNotice: ''
		}
	}
} as const

export function useTranslations(lang: Lang) {
	return ui[lang]
}

/** Estructura de la navegación, igual en ambos idiomas: las etiquetas salen del diccionario. */
export const navStructure: (NavItem | NavGroup)[] = [
	{ key: 'home', route: 'home' },
	{ key: 'pricing', route: 'pricing' },
	{ key: 'features', route: 'features' },
	{
		key: 'help',
		items: [
			{ key: 'faq', route: 'faq' },
			{ key: 'terms', route: 'terms' }
		]
	}
]

export const footerStructure: NavGroup[] = [
	{ key: 'product', items: [{ key: 'features', route: 'features' }, { key: 'pricing', route: 'pricing' }] },
	{ key: 'help', items: [{ key: 'faq', route: 'faq' }, { key: 'terms', route: 'terms' }] },
	{ key: 'contactUs', items: [{ key: 'contact', route: 'contact' }] }
]

export function isGroup(item: NavItem | NavGroup): item is NavGroup {
	return 'items' in item
}
