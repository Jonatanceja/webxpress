// WhatsApp
// ------------
// Número de contacto por WhatsApp, en un solo sitio para que el botón flotante,
// la página de contacto y cualquier otro enlace usen siempre el mismo.

/** Número en formato internacional, sólo dígitos: 52 (México) + 33 2123 9962 */
export const whatsappNumber = '523321239962'

/** Cómo se muestra el número a la vista */
export const whatsappDisplay = '+52 33 2123 9962'

/** Enlace de chat, con un mensaje inicial opcional */
export function whatsappLink(message?: string): string {
	const base = `https://wa.me/${whatsappNumber}`
	return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
