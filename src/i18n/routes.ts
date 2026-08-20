// Rutas por idioma
// ------------
// Cada página tiene un id estable y un slug propio en cada idioma.
// El inglés vive en la raíz (idioma por defecto) y el español bajo /es/.

export const languages = {
	en: 'English',
	es: 'Español'
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = 'en'

export type RouteId = 'home' | 'pricing' | 'features' | 'faq' | 'contact' | 'terms'

export const routes: Record<RouteId, Record<Lang, string>> = {
	home: { en: '/', es: '/es/' },
	pricing: { en: '/pricing', es: '/es/precios' },
	features: { en: '/features', es: '/es/funciones' },
	faq: { en: '/faq', es: '/es/faq' },
	contact: { en: '/contact', es: '/es/contacto' },
	terms: { en: '/terms', es: '/es/terminos' }
}

/** Idioma de la URL actual. El español se reconoce por el prefijo /es/. */
export function getLangFromUrl(url: URL): Lang {
	const segment = url.pathname.split('/')[1]
	return segment in languages ? (segment as Lang) : defaultLang
}

/** Ruta de una página en un idioma concreto. */
export function getRoute(id: RouteId, lang: Lang): string {
	return routes[id][lang]
}

/** Normaliza una ruta para comparar (sin barra final, salvo la raíz). */
function normalize(path: string): string {
	if (path === '/' || path === '') return '/'
	return path.replace(/\/+$/, '')
}

/** Id de página a partir de una ruta, o null si no es una ruta conocida. */
export function getRouteId(path: string): RouteId | null {
	const target = normalize(path)
	for (const [id, byLang] of Object.entries(routes) as [RouteId, Record<Lang, string>][]) {
		for (const p of Object.values(byLang)) {
			if (normalize(p) === target) return id
		}
	}
	return null
}

/**
 * La misma página en el otro idioma. Si la ruta no se reconoce
 * (por ejemplo un 404), devuelve la portada de ese idioma.
 */
export function switchLangPath(currentPath: string, to: Lang): string {
	const id = getRouteId(currentPath)
	return id ? routes[id][to] : routes.home[to]
}
