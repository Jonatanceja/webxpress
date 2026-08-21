// Nota: `z` se importa de astro:content, no del paquete zod. Astro valida los
// esquemas con su propia copia (v3) y un esquema de zod 4 rompe el build.
// TypeScript marca este `z` como deprecado; es un aviso, no un error.
import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

// Portafolio
// ------------
// Un archivo .md por proyecto en src/content/portfolio/.
// Los textos llevan versión en los dos idiomas dentro del mismo archivo, para
// que añadir un proyecto sea editar un solo fichero y las imágenes no se
// dupliquen entre idiomas.

/** Texto con versión en cada idioma */
const bilingual = z.object({
	en: z.string(),
	es: z.string()
})

const portfolio = defineCollection({
	// El guion bajo inicial excluye archivos de la colección: _README.md explica
	// cómo añadir proyectos sin convertirse en uno.
	loader: glob({ pattern: '**/[^_]*.md', base: './src/content/portfolio' }),
	schema: ({ image }) =>
		z.object({
			/** Nombre del cliente o del proyecto */
			title: z.string(),
			/** Sitio publicado. Opcional: no todos los proyectos siguen en línea */
			url: z.url().optional(),
			/** Año de entrega, para ordenar */
			year: z.number(),
			/** Orden en el listado; los números bajos salen primero */
			order: z.number().default(99),
			/** Imagen del listado */
			cover: image(),
			/** Frase corta para la tarjeta del listado */
			summary: bilingual,
			/** Texto largo de la ficha del proyecto */
			description: bilingual,
			/** Etiquetas de lo que se hizo, p. ej. "Diseño web", "SEO" */
			tags: z.array(bilingual).default([]),
			/** Capturas del sitio, en el orden en que se muestran */
			screenshots: z
				.array(
					z.object({
						src: image(),
						alt: bilingual
					})
				)
				.default([])
		})
})

export const collections = {
	portfolio
}
