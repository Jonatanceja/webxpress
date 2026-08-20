// Términos y condiciones
// ------------
// El cuerpo de /terms y /es/terminos, por idioma. Vive aparte del diccionario
// general porque es texto contractual y conviene revisarlo como una unidad.

import type { Lang } from './routes'

export type TermsBlock = { heading: string; paragraphs: string[] }
export type TermsSection = {
	sidebarTitle: string
	sidebarText: string
	/** Alterna el fondo de la sección, como en el diseño original */
	alt?: boolean
	blocks: TermsBlock[]
}

const en: TermsSection[] = [
	{
		sidebarTitle: 'Introduction',
		sidebarText:
			'Please take a moment to read these terms and understand your rights and responsibilities when using our services.',
		blocks: [
			{
				heading: 'Webxpress',
				paragraphs: [
					'Webxpress provides design, development, maintenance and technical support for Shopify stores, static websites and sites with a content management system (CMS), along with additional digital marketing services depending on the package contracted.',
					'Your satisfaction matters to us. If you have any questions or concerns about these terms, please get in touch. Our team is here to help and to make sure you have an excellent experience with Webxpress.'
				]
			},
			{
				heading: 'Acceptance of the terms',
				paragraphs: [
					'By accessing or using our services, you agree to comply with and be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you should not use our services. Continued use of Webxpress means you accept these terms.',
					'We reserve the right to modify these terms at any time. We will notify you of any changes by publishing the new terms on our website. It is your responsibility to review these terms periodically. Continued use of the service after any change means you accept the new terms.'
				]
			},
			{
				heading: 'Our commitment to you',
				paragraphs: [
					'At Webxpress we are committed to providing reliable, high-quality services. Our goal is to help you reach your productivity and organisation goals with ease. We work continuously to improve our services and give you the best possible experience.',
					'We value your feedback and suggestions. Please get in touch with any thoughts or ideas on how we could serve you better. Your input helps us improve Webxpress and meet your needs.'
				]
			}
		]
	},
	{
		sidebarTitle: 'Purpose of the service',
		sidebarText:
			'Webxpress provides design, development, maintenance and technical support for Shopify stores, static websites and sites with a content management system (CMS), along with additional digital marketing services depending on the package contracted.',
		alt: true,
		blocks: [
			{
				heading: 'Static websites',
				paragraphs: [
					'Development of fast, secure and efficient web pages that use modern technologies to deliver high-quality static content with excellent loading speed.'
				]
			},
			{
				heading: 'Sites with a content manager (CMS)',
				paragraphs: [
					'Development of websites with a content management system, so you can edit copy, images and sections yourself without technical knowledge, while keeping the speed and security of a modern build.'
				]
			},
			{
				heading: 'Shopify websites',
				paragraphs: [
					'Creation and customisation of online stores on the Shopify platform, focusing on optimising the shopping experience, performance and scalability.'
				]
			},
			{
				heading: 'Additional services',
				paragraphs: [
					'Webxpress also offers additional digital marketing services designed to boost the visibility, ranking and reach of your website, tailored to each contracted package. These services include, but are not limited to, SEO strategy, social media campaigns, email marketing and analytics reporting.'
				]
			}
		]
	},
	{
		sidebarTitle: 'Scope of the service',
		sidebarText:
			'The initial development process covers every activity needed to build your website and get it running.',
		blocks: [
			{
				heading: 'Planning and analysis',
				paragraphs: [
					"Assessment of the client's specific needs, definition of goals, and selection of the appropriate features and technologies for the contracted package."
				]
			},
			{
				heading: 'Custom design',
				paragraphs: [
					'Creation of a unique visual proposal that reflects the brand identity and provides an intuitive experience for users.'
				]
			},
			{
				heading: 'Technical build',
				paragraphs: [
					'Implementation of the website using modern, efficient technologies, whether on Shopify, as a static site or with a content management system (CMS).'
				]
			},
			{
				heading: 'Testing and quality control',
				paragraphs: [
					'Thorough review to ensure the site works correctly across different devices and browsers, with no errors or performance issues.'
				]
			},
			{
				heading: 'Launch',
				paragraphs: [
					'Publication of the site in the production environment, including domain configuration, SSL certificates and any other technical aspects needed for it to work correctly.'
				]
			}
		]
	},
	{
		sidebarTitle: 'Payment and conditions',
		sidebarText:
			'How the price works, what it includes, delivery times and the payment options available, so you have full transparency from day one.',
		alt: true,
		blocks: [
			{
				heading: 'Fixed price',
				paragraphs: [
					'The price of each package is a single, fixed payment, agreed in writing before the project begins. It covers planning, design, development, testing and publication of the site, as well as the technical setup needed to get it running. Any work outside the agreed scope is quoted separately and requires your prior approval.'
				]
			},
			{
				heading: 'No monthly fees',
				paragraphs: [
					'Webxpress does not charge monthly fees or subscriptions for the contracted site. Once the agreed price has been settled, there are no mandatory recurring payments.'
				]
			},
			{
				heading: 'Delivery times',
				paragraphs: [
					'Delivery times are 5 business days for the static site package, 10 for the content manager and 20 for eCommerce. The clock starts once the complete client material (copy, logo and images) has been received and the brief has been approved. Delays in providing material or in client reviews extend the deadline accordingly.'
				]
			},
			{
				heading: 'Services included in the first year',
				paragraphs: [
					'The price includes hosting, SSL certificate, technical support and maintenance for the first 12 months from the publication of the site, in line with the scope of the contracted package.'
				]
			},
			{
				heading: 'Optional annual renewal',
				paragraphs: [
					'At the end of the first 12 months, renewal of hosting, support and maintenance is optional. Webxpress will inform the client of the renewal cost in advance. If the client chooses not to renew, the site files will be handed over so it can be hosted with the provider of their choice.'
				]
			},
			{
				heading: 'Taxes',
				paragraphs: [
					'Published prices do not include Value Added Tax (VAT) or other applicable taxes. The client is responsible for covering taxes in accordance with current legislation.'
				]
			}
		]
	},
	{
		sidebarTitle: 'Maintenance',
		sidebarText:
			'During the first 12 months, and in each renewal the client chooses to contract, Webxpress provides a continuous maintenance service to keep your site up to date and working at its best. This includes:',
		blocks: [
			{
				heading: 'Regular updates',
				paragraphs: [
					'Application of improvements, security patches and software updates to keep the site protected and efficient.'
				]
			},
			{
				heading: 'Ongoing optimisation',
				paragraphs: ['Improvements to loading speed, SEO, accessibility and user experience.']
			},
			{
				heading: 'Requested changes',
				paragraphs: [
					'Implementation of minor modifications and adjustments requested by the client, always within the limit set out in the contracted package.'
				]
			},
			{
				heading: 'Technical support',
				paragraphs: [
					'Answering queries, resolving incidents and advising on the correct use of the website and its features.'
				]
			}
		]
	},
	{
		sidebarTitle: 'Final provisions',
		sidebarText:
			'These Terms and Conditions constitute the entire agreement between Webxpress and the client, superseding any previous communication, proposal or agreement, whether oral or written, relating to the contracted services.',
		alt: true,
		blocks: [
			{
				heading: 'Use of the services',
				paragraphs: [
					'Continued use of the services implies full and unreserved acceptance of the provisions described here. Should any clause in this document be declared invalid or unenforceable, the remaining provisions will remain in force and in full effect. The client acknowledges having read, understood and accepted these terms in their entirety before starting any service with Webxpress.'
				]
			}
		]
	}
]

const es: TermsSection[] = [
	{
		sidebarTitle: 'Introducción',
		sidebarText:
			'Por favor, tómate un momento para leer estos términos y comprender tus derechos y responsabilidades al utilizar nuestros servicios.',
		blocks: [
			{
				heading: 'Webxpress',
				paragraphs: [
					'Webxpress ofrece diseño, desarrollo, mantenimiento y soporte técnico para sitios web en Shopify, sitios web estáticos y sitios con gestor de contenido (CMS), así como servicios adicionales de marketing digital según el paquete contratado.',
					'Tu satisfacción es importante para nosotros. Si tienes alguna pregunta o inquietud sobre estos términos, no dudes en contactarnos. Nuestro equipo está aquí para ayudarte y asegurarse de que tengas una excelente experiencia con Webxpress.'
				]
			},
			{
				heading: 'Aceptación de los Términos',
				paragraphs: [
					'Al acceder o utilizar nuestros servicios, aceptas cumplir y estar sujeto a estos Términos de Servicio y a nuestra Política de Privacidad. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestros servicios. El uso continuo de Webxpress significa que aceptas estos términos.',
					'Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos de cualquier cambio publicando los nuevos términos en nuestro sitio web. Es tu responsabilidad revisar estos términos periódicamente. El uso continuo del servicio después de cualquier cambio significa que aceptas los nuevos términos.'
				]
			},
			{
				heading: 'Nuestro Compromiso Contigo',
				paragraphs: [
					'En Webxpress, estamos comprometidos a ofrecerte servicios confiables y de alta calidad. Nuestro objetivo es ayudarte a alcanzar tus metas de productividad y organización con facilidad. Trabajamos continuamente para mejorar nuestros servicios y brindarte la mejor experiencia posible.',
					'Valoramos tus comentarios y sugerencias. No dudes en contactarnos con cualquier opinión o idea sobre cómo podemos servirte mejor. Tu aporte nos ayuda a mejorar Webxpress y satisfacer tus necesidades.'
				]
			}
		]
	},
	{
		sidebarTitle: 'Objeto del Servicio',
		sidebarText:
			'Webxpress ofrece diseño, desarrollo, mantenimiento y soporte técnico para sitios web en Shopify, sitios web estáticos y sitios con gestor de contenido (CMS), así como servicios adicionales de marketing digital según el paquete contratado.',
		alt: true,
		blocks: [
			{
				heading: 'Sitios web estáticos',
				paragraphs: [
					'Desarrollo de páginas web rápidas, seguras y eficientes que utilizan tecnologías modernas para ofrecer contenido estático de alta calidad y gran velocidad de carga.'
				]
			},
			{
				heading: 'Sitios con gestor de contenido (CMS)',
				paragraphs: [
					'Desarrollo de sitios web con un gestor de contenido, para que puedas editar textos, imágenes y secciones por tu cuenta sin conocimientos técnicos, manteniendo la velocidad y la seguridad de un desarrollo moderno.'
				]
			},
			{
				heading: 'Sitios web en Shopify',
				paragraphs: [
					'Creación y personalización de tiendas en línea utilizando la plataforma Shopify, enfocándonos en optimizar la experiencia de compra, rendimiento y escalabilidad.'
				]
			},
			{
				heading: 'Servicios complementarios',
				paragraphs: [
					'Además, Webxpress ofrece servicios complementarios de marketing digital, diseñados para potenciar la visibilidad, posicionamiento y alcance del sitio web, adaptados a cada paquete contratado. Estos servicios incluyen, pero no se limitan a, estrategias de SEO, campañas en redes sociales, email marketing y análisis de métricas.'
				]
			}
		]
	},
	{
		sidebarTitle: 'Alcance del servicio',
		sidebarText:
			'El proceso de desarrollo inicial comprende todas las actividades necesarias para crear y poner en marcha tu sitio web.',
		blocks: [
			{
				heading: 'Planeación y análisis',
				paragraphs: [
					'Evaluación de las necesidades específicas del cliente, definición de objetivos, selección de funcionalidades y tecnologías adecuadas según el paquete contratado.'
				]
			},
			{
				heading: 'Diseño personalizado',
				paragraphs: [
					'Creación de una propuesta visual única que refleje la identidad de marca y brinde una experiencia intuitiva para los usuarios.'
				]
			},
			{
				heading: 'Construcción técnica',
				paragraphs: [
					'Implementación del sitio web utilizando tecnologías modernas y eficientes, ya sea en Shopify, como sitio estático o con un gestor de contenido (CMS).'
				]
			},
			{
				heading: 'Pruebas y control de calidad',
				paragraphs: [
					'Revisión exhaustiva para garantizar que el sitio funcione correctamente en distintos dispositivos y navegadores, sin errores ni problemas de rendimiento.'
				]
			},
			{
				heading: 'Publicación',
				paragraphs: [
					'Lanzamiento del sitio en el entorno de producción, incluyendo la configuración de dominios, certificados SSL y otros aspectos técnicos necesarios para su correcto funcionamiento.'
				]
			}
		]
	},
	{
		sidebarTitle: 'Pagos y condiciones',
		sidebarText:
			'Cómo funciona el precio, qué incluye, los plazos de entrega y las opciones de pago disponibles, para que tengas total transparencia desde el primer día.',
		alt: true,
		blocks: [
			{
				heading: 'Precio cerrado',
				paragraphs: [
					'El precio de cada paquete es un pago único y cerrado, acordado por escrito antes de iniciar el proyecto. Cubre la planificación, el diseño, el desarrollo, las pruebas y la publicación del sitio, así como la configuración técnica necesaria para su puesta en marcha. Cualquier trabajo fuera del alcance acordado se cotiza por separado y requiere tu autorización previa.'
				]
			},
			{
				heading: 'Sin mensualidades',
				paragraphs: [
					'Webxpress no cobra mensualidades ni suscripciones por el sitio contratado. Una vez liquidado el precio acordado, no existen pagos recurrentes obligatorios.'
				]
			},
			{
				heading: 'Plazos de entrega',
				paragraphs: [
					'Los plazos de entrega son de 5 días hábiles para el paquete de sitio estático, 10 para el gestor de contenido y 20 para eCommerce. El plazo comienza a correr a partir de la recepción completa del material del cliente (textos, logotipo e imágenes) y de la aprobación del brief. Los retrasos en la entrega de material o en las revisiones por parte del cliente extienden el plazo en la misma medida.'
				]
			},
			{
				heading: 'Servicios incluidos el primer año',
				paragraphs: [
					'El precio incluye hosting, certificado SSL, soporte técnico y mantenimiento durante los primeros 12 meses contados a partir de la publicación del sitio, conforme al alcance del paquete contratado.'
				]
			},
			{
				heading: 'Renovación anual opcional',
				paragraphs: [
					'Al concluir los primeros 12 meses, la renovación de hosting, soporte y mantenimiento es opcional. Webxpress informará al cliente el costo de renovación con anticipación. Si el cliente decide no renovar, se le entregarán los archivos del sitio para que pueda alojarlo con el proveedor de su elección.'
				]
			},
			{
				heading: 'Impuestos',
				paragraphs: [
					'Los precios publicados no incluyen el Impuesto al Valor Agregado (IVA) u otros impuestos aplicables. El cliente es responsable de cubrir los impuestos conforme a la legislación vigente.'
				]
			}
		]
	},
	{
		sidebarTitle: 'Mantenimiento',
		sidebarText:
			'Durante los primeros 12 meses, y en cada renovación que el cliente decida contratar, Webxpress ofrece un servicio continuo de mantenimiento para asegurar que tu sitio esté siempre actualizado y funcione de manera óptima. Esto incluye:',
		blocks: [
			{
				heading: 'Actualizaciones regulares',
				paragraphs: [
					'Aplicación de mejoras, parches de seguridad y actualizaciones de software para mantener el sitio protegido y eficiente.'
				]
			},
			{
				heading: 'Optimización constante',
				paragraphs: ['Mejoras en la velocidad de carga, SEO, accesibilidad y experiencia de usuario.']
			},
			{
				heading: 'Cambios solicitados',
				paragraphs: [
					'Implementación de modificaciones y ajustes menores que el cliente requiera, siempre dentro del límite establecido en el paquete contratado.'
				]
			},
			{
				heading: 'Soporte técnico',
				paragraphs: [
					'Atención a consultas, resolución de incidencias y asesoría para el correcto uso del sitio web y sus funcionalidades.'
				]
			}
		]
	},
	{
		sidebarTitle: 'Disposiciones Finales',
		sidebarText:
			'Estos Términos y Condiciones constituyen el acuerdo completo entre Webxpress y el cliente, reemplazando cualquier comunicación, propuesta o acuerdo previo, ya sea oral o escrito, relacionado con los servicios contratados.',
		alt: true,
		blocks: [
			{
				heading: 'Uso de los servicios',
				paragraphs: [
					'El uso continuo de los servicios implica la aceptación plena y sin reservas de las disposiciones aquí descritas. En caso de que alguna cláusula de este documento sea declarada inválida o inaplicable, las demás disposiciones permanecerán vigentes y en pleno efecto. El cliente reconoce que ha leído, entendido y aceptado estos términos en su totalidad antes de iniciar cualquier servicio con Webxpress.'
				]
			}
		]
	}
]

const terms: Record<Lang, TermsSection[]> = { en, es }

export function getTerms(lang: Lang): TermsSection[] {
	return terms[lang]
}
