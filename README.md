# Portfolio Personal V2 · Sergio Alcántara

![HTML5](https://img.shields.io/badge/HTML5-FF003D?style=flat-square&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-A020F0?style=flat-square&logo=css&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=18181E) ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-34343F?style=flat-square&logo=github&logoColor=white)

Portfolio personal de Sergio Alcántara, estudiante de Desarrollo de Aplicaciones Multiplataforma (DAM). Reúne mis proyectos de desarrollo web, mi formación y los repositorios donde documento mi aprendizaje en Java y Python.

Está desarrollado con HTML, CSS y JavaScript, sin frameworks ni proceso de compilación, y publicado en GitHub Pages.

[![Ver el portfolio](https://img.shields.io/badge/Portfolio-Ver_web-FF003D?style=flat-square&labelColor=18181E)](https://seralcesc.github.io/Portfolio-Personal/)

## Objetivo

Mostrar mi evolución como desarrollador de software y aplicar lo aprendido sobre estructura semántica, diseño responsive, accesibilidad y rendimiento. El diseño combina una composición editorial con una identidad tecnológica: fondo oscuro, tipografía legible y acentos carmesí y violeta.

## Contenido

El hero no lleva numeración. Las siete secciones principales mantienen números arábigos:

| Sección | Contenido |
| --- | --- |
| Hero | Presentación, retrato y accesos a Proyectos y GitHub. |
| 01 · Proyectos seleccionados | J. Crisol y Devesa English School, con galerías de imágenes y enlaces a sus webs. |
| 02 · Sobre mí | Formación, enfoque de trabajo e intereses. |
| 03 · Cómo trabajo | Principios de desarrollo, identificados con números romanos dentro de la sección. |
| 04 · Tecnologías y herramientas | Tecnologías y herramientas organizadas en cuatro grupos. |
| 05 · Aprendizaje en progreso | Repositorios de ejercicios y prácticas de Java y Python. |
| 06 · Formación | Formación oficial y complementaria, diferenciadas en escritorio y mediante pestañas en móvil. |
| 07 · Contacto | Enlace de email y acceso al CV en PDF. |
| Footer | Identidad, enlaces a GitHub y LinkedIn e información del sitio. |

### Proyectos y aprendizaje

- **[J. Crisol](https://jcrisol.com):** web de presentación de un autor y su obra.
- **[Devesa English School](https://devesa-english-school.seralcesc.workers.dev):** landing page de una academia de inglés online.
- **[DAM Java Learning](https://github.com/seralcesc/dam-java-learning):** ejercicios, prácticas y pequeños proyectos de Java.
- **[DAM Python Learning](https://github.com/seralcesc/dam-python-learning):** ejercicios y prácticas de Python.

El código de los dos proyectos web mostrados es privado. Este repositorio contiene el código del portfolio.

## Tecnologías y organización

- **HTML:** estructura semántica, navegación por anclas y metadatos para buscadores y redes sociales.
- **CSS:** diseño con Grid y Flexbox, variables, capas de cascada y adaptación responsive.
- **JavaScript:** seguimiento de la sección visible con `IntersectionObserver`, galerías, cierre del menú al navegar y pestañas de Formación.
- **Recursos locales:** tipografía Roboto Flex en WOFF2, imágenes de proyectos y retrato en WebP, monogramas e iconos.
- **Publicación:** GitHub Pages.

| Archivo o carpeta | Función |
| --- | --- |
| `index.html` | Contenido y estructura de la página. |
| `styles/main.css` | Entrada de estilos: define las capas e importa los módulos. |
| `styles/reset.css` | Normalización de estilos del navegador. |
| `styles/tokens.css` | Colores, tipografías, espaciados, tamaños y tiempos de transición. |
| `styles/base.css` | Estilos generales y tipografía. |
| `styles/layout.css` | Contenedores y estructura compartida. |
| `styles/components.css` | Componentes, secciones, interacciones y reglas responsive. |
| `scripts/main.js` | Comportamiento interactivo. |
| `assets/` | Imágenes, monogramas, iconos, fuente local y CV. |
| `robots.txt` y `sitemap.xml` | Archivos de apoyo al rastreo del sitio. |

El orden de las capas CSS es `reset → tokens → base → layout → components`.

## Interacciones y diseño responsive

- Header editorial con monograma junto al nombre en escritorio y un indicador violeta de la sección visible.
- Enlaces del header con texto blanco y subrayado carmesí al pasar el ratón o recibir foco.
- Hasta **768 px**, la navegación se presenta mediante un menú modal. El monograma aparece centrado dentro del menú abierto.
- Galerías con controles anterior/siguiente, contador y transición entre imágenes.
- Formación oficial y complementaria en bloques independientes en escritorio; pestañas en pantallas estrechas.
- Efecto de profundidad en Perfil, Cómo trabajo, Stack, Aprendizaje, Formación y Contacto. Las tarjetas seleccionadas permanecen fijas y proyectan sombra.
- Contacto con letras e iconos suspendidos, cuatro líneas independientes y surcos inmóviles con un foco rojo central al activar cada enlace.

El efecto de profundidad se limita a dispositivos con capacidad de hover y puntero fino, y se desactiva cuando se solicita movimiento reducido.

## Accesibilidad

- Enlace para saltar al contenido principal.
- Foco visible y controles accesibles mediante teclado.
- Menú basado en `<dialog>`, con cierre mediante Escape y al seleccionar un enlace.
- Indicador de sección activa mediante `aria-current`.
- Pestañas de Formación con estado seleccionado y navegación mediante flechas izquierda/derecha.
- Textos alternativos en imágenes informativas e iconos decorativos ocultos a las tecnologías de asistencia.
- Títulos de los grupos de Formación disponibles para lectores de pantalla aunque se oculten visualmente en móvil.
- Ajustes de contraste en etiquetas y metadatos pequeños.
- Adaptación de transiciones y desplazamiento a `prefers-reduced-motion`.

El menú utiliza los atributos nativos `command` y `commandfor`; para comprobar todas sus funciones debe usarse un navegador que los admita.

## Ejecutar en local

Clona el repositorio:

```bash
git clone https://github.com/seralcesc/Portfolio-Personal.git
cd Portfolio-Personal
```

No es necesario instalar dependencias ni ejecutar un build. Sirve la carpeta con un servidor HTTP local. Por ejemplo, si tienes Python 3 instalado:

```bash
python -m http.server 8000
```

Abre [http://localhost:8000](http://localhost:8000).

## Validación con Lighthouse

Auditoría de la web publicada realizada el **3 de noviembre de 2026**, mediante PageSpeed Insights con Lighthouse 13.6.0:

| Categoría | Móvil | Escritorio |
| --- | ---: | ---: |
| Rendimiento | 100 | 100 |
| Accesibilidad | 100 | 100 |
| Buenas prácticas | 100 | 100 |
| SEO | 100 | 100 |

Informes: [móvil](https://pagespeed.web.dev/analysis/https-seralcesc-github-io-Portfolio-Personal/5vhrmpykel?form_factor=mobile) · [escritorio](https://pagespeed.web.dev/analysis/https-seralcesc-github-io-Portfolio-Personal/5vhrmpykel?form_factor=desktop).

Las puntuaciones corresponden a esa ejecución de laboratorio y pueden variar. Las comprobaciones automáticas no sustituyen las pruebas manuales de accesibilidad, responsive e interacción.

### Optimización pendiente

Preparar versiones ligeras del monograma para el header y el menú. Actualmente se utiliza el PNG original, de unos 528 KiB, para mostrarlo a 40–80 px.

## Autor

**Sergio Alcántara** · Estudiante de Desarrollo de Aplicaciones Multiplataforma.

[GitHub](https://github.com/seralcesc) · [LinkedIn](https://www.linkedin.com/in/sergio-alcantara-dev)
