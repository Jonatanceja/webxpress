# Cómo añadir un proyecto al portafolio

Cada proyecto es **un solo archivo `.md`** en esta carpeta. El nombre del archivo
es la URL: `amax-contractors.md` se publica en `/portfolio/amax-contractors` y en
`/es/portafolio/amax-contractors`.

No hay que tocar código: al añadir el archivo, el proyecto aparece solo en el
listado de los dos idiomas.

## Pasos

1. **Guarda las capturas** en `src/assets/portfolio/<nombre-del-proyecto>/`.
   Conviértelas a `.webp` y limita el ancho a 1200 px (ver más abajo).
2. **Copia `amax-contractors.md`**, renómbralo y rellena los campos.
3. Listo. `npm run dev` para verlo.

## Campos

| Campo         | Obligatorio | Qué es                                                        |
| ------------- | ----------- | ------------------------------------------------------------- |
| `title`       | sí          | Nombre del cliente o del proyecto                             |
| `url`         | no          | Sitio publicado. Omítelo si ya no está en línea               |
| `year`        | sí          | Año de entrega                                                |
| `order`       | no          | Posición en el listado; los números bajos salen antes (por defecto 99) |
| `cover`       | sí          | Imagen de la tarjeta del listado                              |
| `summary`     | sí          | Una frase para la tarjeta                                     |
| `description` | sí          | Texto largo de la ficha                                       |
| `tags`        | no          | Lo que se hizo: diseño, desarrollo, SEO…                      |
| `screenshots` | no          | Capturas de la ficha, en orden                                |

## Los dos idiomas van en el mismo archivo

`summary`, `description`, cada `tag` y el `alt` de cada captura llevan una
versión `en` y otra `es`:

```yaml
summary:
  en: A full website redesign for a remodeling company.
  es: Rediseño completo del sitio de una empresa de remodelación.
```

Así el proyecto es un único archivo y las imágenes no se duplican entre idiomas.

### Párrafos en `description`

Usa `>` y separa los párrafos con **dos saltos de línea**:

```yaml
description:
  en: >
    Primer párrafo, que puede ocupar
    varias líneas en el archivo.


    Segundo párrafo.
```

### El texto `alt` de las capturas

No es decorativo: descríbelo para quien no puede ver la imagen. Di qué página es
y qué muestra («Página de servicios con comparativas de antes y después»), no
«captura 1».

## Preparar las capturas

Las capturas de página completa suelen pesar varios MB. Antes de añadirlas:

```bash
node -e "
const sharp = require('sharp');
sharp('/ruta/a/la/captura.png')
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile('src/assets/portfolio/<proyecto>/01-home.webp');
"
```

En el proyecto de Amax esto bajó las cuatro capturas de 13 MB a 1 MB.

Nómbralas con un número delante (`01-home`, `02-servicios`) para que el orden
quede claro en el disco, aunque el orden real lo decide la lista `screenshots`.
