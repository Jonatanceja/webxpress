// Carga de datos por idioma
// ------------
// Cada JSON tiene una versión por idioma en json-files/<lang>/.
// Los import son estáticos a propósito: así el build los resuelve y
// un fichero que falte se detecta al compilar, no en producción.

import type { Lang } from '../i18n/routes'

import pricingEn from './json-files/en/pricingTablesdata.json'
import pricingEs from './json-files/es/pricingTablesdata.json'
import faqEn from './json-files/en/faqData.json'
import faqEs from './json-files/es/faqData.json'
import featuresEn from './json-files/en/featuresData.json'
import featuresEs from './json-files/es/featuresData.json'
import testimonialsEn from './json-files/en/testimonialsData.json'
import testimonialsEs from './json-files/es/testimonialsData.json'

export type PricingTable = (typeof pricingEs)[number]
export type FaqItem = (typeof faqEs)[number]
export type FeatureItem = (typeof featuresEs)[number]
export type Testimonial = (typeof testimonialsEs)[number]

const pricing: Record<Lang, PricingTable[]> = { en: pricingEn, es: pricingEs }
const faq: Record<Lang, FaqItem[]> = { en: faqEn, es: faqEs }
const features: Record<Lang, FeatureItem[]> = { en: featuresEn, es: featuresEs }
const testimonials: Record<Lang, Testimonial[]> = { en: testimonialsEn, es: testimonialsEs }

export function getPricing(lang: Lang): PricingTable[] {
	return pricing[lang]
}

export function getFaq(lang: Lang): FaqItem[] {
	return faq[lang]
}

export function getFeatures(lang: Lang): FeatureItem[] {
	return features[lang]
}

export function getTestimonials(lang: Lang): Testimonial[] {
	return testimonials[lang]
}
