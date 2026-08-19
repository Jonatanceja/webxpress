import { defineConfig } from 'astro/config'
import partytown from '@astrojs/partytown'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://webxpress.website',
	integrations: [
		icon(),
		sitemap(),
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
