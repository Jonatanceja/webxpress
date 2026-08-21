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
			portfolio: 'Portfolio',
			help: 'Help',
			faq: 'FAQ',
			terms: 'Terms & conditions',
			contact: 'Contact',
			cta: 'Get started'
		},

		// Selector de idioma
		lang: {
			label: 'Change language',
			switchTo: 'Ver en español',
			skipToContent: 'Skip to content'
		},

		// Footer
		footer: {
			about:
				'Webxpress builds modern, fast websites and delivers them in days. A fixed price from the start, with no monthly fees: you pay once and the site is yours.',
			product: 'Product',
			help: 'Help',
			contactUs: 'Contact us',
			social: 'Social media',
			newTab: '(opens in a new tab)',
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
		},

		// Bloques compartidos
		blocks: {
			ctaTitle: 'Take your site into orbit. Start today.',
			ctaText: 'Your site ready for launch in days, not weeks. No hassle, no hidden costs.',
			ctaButton: 'Get started',
			ctaTagline: 'Launch your site with',
			socialProof: '<strong class="highlight">Trusted</strong> by',
			featureListTitle: 'Everything your site needs, <strong>optimised</strong> to the maximum',
			featureListText:
				'Every package is built to give you a modern, complete solution, ready to stand out in speed, security and performance.',
			testimonialQuote:
				'The team understood the Addapp BI vision perfectly and turned it into a modern, clear and functional website. They exceeded our expectations, building a platform that reflects innovation and earns our clients trust.',
			testimonialName: 'Luis Almanza',
			testimonialRole: 'CEO at Addapp BI'
		},

		// Proceso (portada) y FAQ resumida
		steps: [
			{
				title: 'We put your brand online from <strong>day one</strong>',
				text: 'Within 48 hours we publish a temporary page with your logo, a custom message and your contact details. That gives you an immediate presence while we work on the full design of your site.'
			},
			{
				title: '<strong>Custom</strong> design',
				text: 'We create a visual proposal based on your brand, your goals and the kind of content you are going to show. You can review it and give feedback before we move on to development. The design is modern, functional and built to grow with you.'
			},
			{
				title: 'Building <strong>the site</strong>',
				text: 'With the design approved, we build your site on a fast, optimised platform. The code is clean and the site is quick, secure, responsive and scalable.'
			},
			{
				title: 'Delivery and <strong>launch</strong>',
				text: 'Your site goes live on its official domain. We run tests and final optimisations and make sure everything works properly. From here, your site is fully in orbit.'
			}
		],
		faqShort: {
			title: 'Everything you <strong>need to know</strong> before taking the next step.',
			text: 'We answer the most common questions about our web packages, the process, the timelines and the costs.',
			items: [
				{
					q: 'What does the price of the site include?',
					a: 'It includes design, development, ongoing optimisation, a content manager, high-speed hosting with SSL, updates, technical maintenance for 1 year and support.'
				},
				{
					q: 'What is the difference between a static site, a CMS and an eCommerce?',
					a: 'A static site is ideal for showing fixed information at maximum speed. A CMS (like the one we include) lets you edit copy and images yourself. An eCommerce is a full store with catalogue, cart and online payments.'
				},
				{
					q: 'Will I be able to update my page myself?',
					a: 'Yes, through the CMS (Content Management System). It is a friendly interface where you can change photos, posts or services without touching code. If you prefer a static site for its performance and security, we handle the changes for you.'
				},
				{
					q: 'Can I sell products on my website?',
					a: 'Of course. That is what our eCommerce package is for. It includes inventory management, payment gateways (Stripe, PayPal) and shipping calculation. It is a more robust solution built specifically to turn visitors into customers.'
				},
				{
					q: 'Which option suits me best?',
					a: 'If you just want presence and speed, a static site is perfect. If you publish content often, you need a CMS. If your goal is selling physical or digital products, eCommerce is the way. We will advise you on the best architecture.'
				}
			]
		},

		// Contacto
		contactBlocks: {
			title: 'Have a special request? We are here to <strong>help!</strong>',
			text: 'Choose one of the options below to get the specific help you need. Whether it is customer support, sales enquiries, feature requests or general feedback, we are here to give you the best possible assistance.',
			cards: [
				{ title: 'Customer support', subtitle: 'Need help with a project you have with us? Do not hesitate to get in touch.' },
				{ title: 'Sales', subtitle: 'Interested in our packages, or would you like a custom solution?' },
				{ title: 'Feature requests', subtitle: 'Want to add a feature to your website? We can help you make it happen.' },
				{ title: 'General feedback', subtitle: 'Your comments are valuable to us. Tell us how we can do better.' }
			],
			formTitle: 'Contact us',
			firstName: 'First name',
			lastName: 'Last name',
			email: 'Email',
			emailPlaceholder: 'name@youremail.com',
			phone: 'Phone',
			company: 'Company',
			plan: 'Which package do you need?',
			submit: 'Send'
		},

		// Secciones de las páginas de FAQ y funciones
		faqPage: {
			pricingTitle: 'Pricing and payment.',
			pricingText: 'What the price includes, why there are no monthly fees, how you can spread the payment and what happens at the end of the first year.',
			valueTitle: 'More value for every peso invested',
			valueText: 'With Webxpress you pay once and know the total from the start: design, development, hosting, SSL and support for the first year, with no monthly fees and no hidden costs. And because we deliver in days rather than months, your site starts working for you much sooner: better SEO, more conversions and fewer technical worries.',
			designTitle: 'Design and delivery times',
			designText: 'How we work to publish in days without sacrificing design, what we need from you to meet the deadline, and how you get an online presence within the first 48 hours.',
			resultsTitle: 'Design that drives results',
			resultsText: 'Good design does not just make your site look good, it drives sales, improves the user experience and strengthens your brand identity. At Webxpress we treat design as a strategic tool to attract, convince and retain customers, maximising the value of every visit.',
			integrationsTitle: 'Connections that power up your site',
			integrationsText: 'See how we connect your site with the tools and platforms you need to sell, communicate and grow without limits.'
		},
		featuresPage: {
			s1Title: 'Web development built to last',
			s1Text: 'Performance, straightforward maintenance and scalable architecture from day one.',
			s2Title: 'Speed and visibility that drive your business',
			s2Text: 'Sites optimised to load faster and rank better.',
			s3Title: 'Digital peace of mind for you and your users',
			s3Text: 'We apply security standards that prevent attacks and keep your site stable.',
			s4Title: 'Ready for today, prepared for tomorrow',
			s4Text: 'Your site connects easily with new technologies as your business evolves.',
			s5Title: 'Your technical team, without being on your payroll',
			s5Text: 'We answer questions, prevent problems and help you get the most out of your site.'
		},
		portfolioPage: {
			seoTitle: 'Webxpress | Our work',
			seoDescription:
				'Websites we have designed and built: fast, on-brand and made to bring in customers.',
			headerTitle: 'Sites we have <strong>put in orbit</strong>',
			headerText:
				'A selection of the websites we have designed and built. Fast, on-brand and made to bring in customers.',
			visitSite: 'Visit site',
			backToList: 'Back to portfolio',
			whatWeDid: 'What we did',
			screenshots: 'Screenshots',
			empty: 'No projects published yet.'
		},
		audit: {
			title: 'Get a free audit of your website',
			text: 'Leave us your email and we will send you a review of your site: what to improve in speed, SEO and conversion, plus a quote with no commitment.',
			point1: 'Concrete points to improve',
			point2: 'Speed, SEO and conversion',
			point3: 'A quote with no commitment',
			emailLabel: 'Your email',
			urlLabel: 'Your website',
			submit: 'Send me the audit',
			dismiss: 'No thanks',
			close: 'Close',
			privacy: 'We only use your email to send you the audit. No spam.'
		},
		whatsapp: {
			fab: 'Chat with us',
			aria: 'Chat with us on WhatsApp',
			greeting: 'Hi! I would like to know more about your websites.',
			contactTitle: 'Prefer to chat?',
			contactText: 'Write to us on WhatsApp and we will get back to you shortly.',
			contactButton: 'Chat with us'
		},
		testimonials: {
			title: 'What our <strong>clients</strong> say',
			text: 'Businesses that trusted us with their website and now have it working for them.'
		},
		notFound: {
			seoTitle: 'Oops! Webxpress lost its way - Page not found',
			seoDescription:
				'It looks like the page you are after does not exist. You can head back to the homepage, or get in touch if you think it should be there.',
			title: 'This page is not in orbit',
			text: 'The page you are looking for does not exist or has moved. Let us get you back on track.',
			imageAlt: 'Illustration of a 404 error',
			back: 'Back to homepage'
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
			portfolio: 'Portafolio',
			help: 'Ayuda',
			faq: 'Preguntas frecuentes',
			terms: 'Términos y condiciones',
			contact: 'Contacto',
			cta: 'Comienza ya'
		},

		lang: {
			label: 'Cambiar idioma',
			switchTo: 'View in English',
			skipToContent: 'Saltar al contenido'
		},

		footer: {
			about:
				'Webxpress crea sitios web modernos y rápidos, y los entrega en días. Precio cerrado desde el inicio, sin mensualidades: pagas una vez y el sitio es tuyo.',
			product: 'Producto',
			help: 'Ayuda',
			contactUs: 'Contáctanos',
			social: 'Redes sociales',
			newTab: '(se abre en una pestaña nueva)',
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
		},

		blocks: {
			ctaTitle: 'Lleva tu sitio al espacio. Comienza hoy.',
			ctaText: 'Tu sitio listo para despegar en días, no semanas. Sin complicaciones, sin costos ocultos.',
			ctaButton: '¡Comienza ya!',
			ctaTagline: 'Despega tu sitio con',
			socialProof: '<strong class="highlight">Confían</strong> en nosotros',
			featureListTitle: 'Todo lo que tu sitio necesita <strong>optimizado</strong> al máximo',
			featureListText:
				'Cada paquete está diseñado para ofrecerte una solución moderna, completa y lista para destacar en velocidad, seguridad y rendimiento.',
			testimonialQuote:
				'El equipo entendió perfectamente la visión de Addapp BI y la plasmó en un sitio web moderno, claro y funcional. Superaron nuestras expectativas al crear una plataforma que refleja innovación y genera confianza en nuestros clientes.',
			testimonialName: 'Luis Almanza',
			testimonialRole: 'CEO en Addapp BI'
		},

		steps: [
			{
				title: 'Ponemos tu marca en línea desde <strong>el día uno</strong>',
				text: 'En solo 48 horas publicamos una pantalla temporal con tu logo, mensaje personalizado y datos de contacto. Esto te da presencia inmediata mientras trabajamos en el diseño completo de tu sitio.'
			},
			{
				title: 'Diseño <strong>personalizado</strong>',
				text: 'Creamos una propuesta visual basada en tu marca, tus objetivos y el tipo de contenido que vas a mostrar. Podrás revisar y dar retroalimentación antes de continuar con el desarrollo. El diseño es moderno, funcional y pensado para crecer contigo.'
			},
			{
				title: '<strong>Desarrollo</strong> del sitio',
				text: 'Con el diseño aprobado, construimos tu sitio web en una plataforma ágil y optimizada. El código es limpio, el sitio es rápido, seguro, responsive y escalable.'
			},
			{
				title: 'Entrega y <strong>lanzamiento</strong>',
				text: 'Tu sitio se publica en el dominio oficial. Hacemos pruebas, optimizaciones finales y aseguramos que todo funcione correctamente. A partir de aquí, tu sitio ya está completamente en órbita.'
			}
		],
		faqShort: {
			title: 'Todo lo que <strong>necesitas saber</strong> antes de dar el siguiente paso.',
			text: 'Respondemos tus dudas más comunes sobre nuestros paquetes web, el proceso, los tiempos y los costos.',
			items: [
				{
					q: '¿Qué incluye el costo del sitio?',
					a: 'Incluye el diseño, desarrollo, optimización continua, gestor de contenido, hosting de alta velocidad con SSL, actualizaciones, mantenimiento técnico por 1 año y soporte.'
				},
				{
					q: '¿Cuál es la diferencia entre un sitio estático, un CMS y un Ecommerce?',
					a: 'Un sitio estático es ideal para mostrar información fija con máxima velocidad. Un CMS (como el que incluimos) te permite editar textos e imágenes tú mismo. Un Ecommerce es una tienda completa con catálogo, carrito y pagos en línea.'
				},
				{
					q: '¿Podré actualizar el contenido de mi página yo mismo?',
					a: 'Sí, mediante el CMS (Sistema de Gestión de Contenidos). Es una interfaz amigable donde puedes cambiar fotos, blogs o servicios sin tocar código. Si prefieres un sitio estático por su alto rendimiento y seguridad, nosotros nos encargamos de los cambios por ti.'
				},
				{
					q: '¿Puedo vender productos en mi sitio web?',
					a: '¡Claro! Para eso desarrollamos un Ecommerce. Incluye gestión de inventario, pasarelas de pago (Stripe, PayPal) y cálculo de envíos. Es una solución más robusta diseñada específicamente para convertir visitantes en clientes.'
				},
				{
					q: '¿Qué opción me conviene más?',
					a: 'Si solo quieres presencia y rapidez, un sitio estático es perfecto. Si publicas contenido seguido, necesitas un CMS. Si tu objetivo es vender productos físicos o digitales, lo tuyo es un Ecommerce. Nosotros te asesoramos para elegir la mejor arquitectura.'
				}
			]
		},

		contactBlocks: {
			title: '¿Tienes una solicitud especial? ¡Estamos aquí para <strong>ayudarte!</strong>',
			text: 'Elige una de las opciones a continuación para recibir la ayuda específica que necesitas. Ya sea soporte al cliente, consultas de ventas, solicitudes de funciones o comentarios generales, estamos aquí para ofrecerte la mejor asistencia posible.',
			cards: [
				{ title: 'Soporte al cliente', subtitle: '¿Necesitas ayuda con algún proyecto con nosotros? No dudes en ponerte en contacto.' },
				{ title: 'Ventas', subtitle: '¿Interesado en nuestros paquetes o deseas una solución personalizada?' },
				{ title: 'Solicitudes de funciones', subtitle: '¿Quieres agregar alguna función a tu sitio web? Nosotros podemos ayudarte a hacerlo.' },
				{ title: 'Retroalimentación general', subtitle: 'Tus comentarios son muy valiosos. Cuéntanos cómo podemos mejorar.' }
			],
			formTitle: 'Contáctanos',
			firstName: 'Nombre',
			lastName: 'Apellido',
			email: 'Email',
			emailPlaceholder: 'nombre@tucorreo.com',
			phone: 'Teléfono',
			company: 'Compañía',
			plan: 'Tipo de paquete que necesitas',
			submit: 'Enviar'
		},

		faqPage: {
			pricingTitle: 'Precios y formas de pago.',
			pricingText: 'Conoce qué incluye el precio, por qué no hay mensualidades, cómo puedes diferir el pago y qué pasa al cumplirse el primer año.',
			valueTitle: 'Más valor por cada peso invertido',
			valueText: 'Con Webxpress pagas una sola vez y sabes el total desde el inicio: diseño, desarrollo, hosting, SSL y soporte el primer año, sin mensualidades ni gastos ocultos. Y como entregamos en días y no en meses, tu sitio empieza a trabajar para ti mucho antes: mejor SEO, más conversiones y menos preocupaciones técnicas.',
			designTitle: 'Diseño y tiempos de entrega',
			designText: 'Cómo trabajamos para publicar en días sin sacrificar el diseño, qué necesitamos de ti para cumplir el plazo, y cómo tienes presencia en línea desde las primeras 48 horas.',
			resultsTitle: 'Diseño que impulsa resultados',
			resultsText: 'Un buen diseño no solo hace que tu sitio se vea bien, sino que impulsa ventas, mejora la experiencia del usuario y refuerza la identidad de tu marca. En Webxpress entendemos que el diseño es una herramienta estratégica para atraer, convencer y retener clientes, maximizando el valor de cada visita.',
			integrationsTitle: 'Conexiones que potencian tu sitio',
			integrationsText: 'Explora cómo integramos tu sitio con las herramientas y plataformas que necesitas para vender, comunicar y crecer sin límites.'
		},
		featuresPage: {
			s1Title: 'Desarrollo web hecho para durar',
			s1Text: 'Rendimiento, mantenimiento sencillo y arquitectura escalable desde el día uno.',
			s2Title: 'Velocidad y visibilidad que impulsan tu negocio',
			s2Text: 'Sitios optimizados para cargar más rápido y posicionar mejor.',
			s3Title: 'Tranquilidad digital para ti y tus usuarios',
			s3Text: 'Implementamos estándares de seguridad que previenen ataques y mantienen tu sitio estable.',
			s4Title: 'Preparado para hoy, listo para mañana',
			s4Text: 'Tu sitio se conecta fácilmente con nuevas tecnologías conforme evoluciona tu negocio.',
			s5Title: 'Tu equipo técnico, sin ser parte de tu nómina',
			s5Text: 'Resolvemos dudas, prevenimos errores y te ayudamos a sacarle el máximo provecho a tu sitio.'
		},
		portfolioPage: {
			seoTitle: 'Webxpress | Nuestro trabajo',
			seoDescription:
				'Sitios web que hemos diseñado y desarrollado: rápidos, fieles a su marca y hechos para atraer clientes.',
			headerTitle: 'Sitios que hemos <strong>puesto en órbita</strong>',
			headerText:
				'Una selección de los sitios que hemos diseñado y desarrollado. Rápidos, fieles a su marca y hechos para atraer clientes.',
			visitSite: 'Visitar sitio',
			backToList: 'Volver al portafolio',
			whatWeDid: 'Qué hicimos',
			screenshots: 'Capturas',
			empty: 'Aún no hay proyectos publicados.'
		},
		audit: {
			title: 'Obtén una auditoría gratis de tu sitio web',
			text: 'Déjanos tu correo y te enviamos una revisión de tu sitio: qué mejorar en velocidad, SEO y conversión, más una cotización sin compromiso.',
			point1: 'Puntos concretos a mejorar',
			point2: 'Velocidad, SEO y conversión',
			point3: 'Una cotización sin compromiso',
			emailLabel: 'Tu correo',
			urlLabel: 'Tu sitio web',
			submit: 'Quiero mi auditoría',
			dismiss: 'Ahora no',
			close: 'Cerrar',
			privacy: 'Solo usamos tu correo para enviarte la auditoría. Sin spam.'
		},
		whatsapp: {
			fab: 'Escríbenos',
			aria: 'Escríbenos por WhatsApp',
			greeting: '¡Hola! Quiero saber más sobre sus sitios web.',
			contactTitle: '¿Prefieres escribirnos?',
			contactText: 'Mándanos un mensaje por WhatsApp y te respondemos en breve.',
			contactButton: 'Escríbenos por WhatsApp'
		},
		testimonials: {
			title: 'Lo que dicen nuestros <strong>clientes</strong>',
			text: 'Negocios que nos confiaron su sitio web y hoy lo tienen trabajando para ellos.'
		},
		notFound: {
			seoTitle: '¡Ups! Webxpress perdió el camino - Página no encontrada',
			seoDescription:
				'Parece que la página que buscas no existe. Puedes volver a la portada o escribirnos si crees que debería estar ahí.',
			title: 'Esta página no está en órbita',
			text: 'La página que buscas no existe o ha cambiado de sitio. Te ayudamos a volver al rumbo.',
			imageAlt: 'Ilustración de un error 404',
			back: 'Volver al inicio'
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
	{ key: 'portfolio', route: 'portfolio' },
	{
		key: 'help',
		items: [
			{ key: 'faq', route: 'faq' },
			{ key: 'terms', route: 'terms' }
		]
	}
]

export const footerStructure: NavGroup[] = [
	{
		key: 'product',
		items: [
			{ key: 'features', route: 'features' },
			{ key: 'pricing', route: 'pricing' },
			{ key: 'portfolio', route: 'portfolio' }
		]
	},
	{ key: 'help', items: [{ key: 'faq', route: 'faq' }, { key: 'terms', route: 'terms' }] },
	{ key: 'contactUs', items: [{ key: 'contact', route: 'contact' }] }
]

export function isGroup(item: NavItem | NavGroup): item is NavGroup {
	return 'items' in item
}
