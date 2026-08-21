import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://webxpress.website',

	// Inglés en la raíz, español bajo /es/
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
		routing: {
			prefixDefaultLocale: false
		}
	},

	// Las URLs en español estaban indexadas en la raíz; se mueven a /es/.
	// El blog se retiró y su tráfico va a la portada.
	redirects: {
		'/precios': '/es/precios',
		'/funciones': '/es/funciones',
		'/contacto': '/es/contacto',
		'/terminos': '/es/terminos'
	},

	integrations: [
		icon(),
		sitemap({
			i18n: {
				defaultLocale: 'en',
				locales: { en: 'en', es: 'es-MX' }
			}
		})
	],
	vite: {
		plugins: [tailwindcss()]
	}
})
