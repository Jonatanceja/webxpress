import { defineConfig } from 'astro/config'
import partytown from '@astrojs/partytown'
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
		'/terminos': '/es/terminos',
		'/blog': '/'
		// Los posts individuales (/blog/<slug>) no se pueden redirigir desde aquí:
		// Astro exige que un redirect dinámico conserve sus parámetros. Configurar
		// en el hosting una regla comodín /blog/* -> / al desplegar.
	},

	integrations: [
		icon(),
		sitemap({
			i18n: {
				defaultLocale: 'en',
				locales: { en: 'en', es: 'es-MX' }
			}
		}),
		partytown({
			config: {
				forward: ['dataLayer.push']
			}
		})
	],
	vite: {
		plugins: [tailwindcss()]
	}
})
