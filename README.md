# Grúas Burgos · Sitio web oficial

Sitio web de **Grúas Burgos**, servicio de grúas, traslado y rescate vehicular 24 horas con base en Villarrica, Región de La Araucanía, Chile.

🔹 **Sitio (se publica en la iteración 05-01):** [gruasvillarrica.cl](https://gruasvillarrica.cl)
🔹 **Repositorio:** [github.com/ffelipecuevasc/gruas-burgos-villarrica](https://github.com/ffelipecuevasc/gruas-burgos-villarrica)
🔹 **Desarrollo:** [Felipe Cuevas](https://felipecuevas.dev), Desarrollador Web Full Stack

---

## 1. Descripción del proyecto

El sitio existe para que una persona que necesita una grúa en Villarrica o sus alrededores encuentre a Grúas Burgos en Google y lo contacte en un solo toque, por llamada o por WhatsApp, desde su celular y en medio de una emergencia.

Reemplaza el destino actual de las campañas de Google Ads (la ficha de Google Maps) por una página propia, rápida y optimizada para búsquedas locales, que muestra servicios, cobertura, tiempos de respuesta y opiniones reales de clientes.

El sitio es una página única (one-page) con tres secciones principales, en español de Chile:

1. **Inicio:** propuesta de valor, contacto inmediato y señales de confianza.
2. **Servicios:** rescate en ruta, traslado de vehículos livianos y camionetas, grúa cama y viajes interurbanos.
3. **Contacto:** canales directos, zonas de cobertura, dirección de la base y datos comerciales.

## 2. Stack tecnológico

🔸 **Framework:** [Astro](https://astro.build) 7, generación estática (SSG) y arquitectura de islas.
🔸 **Estilos:** [Tailwind CSS](https://tailwindcss.com) 4, integrado mediante `@tailwindcss/vite`, enfoque mobile-first.
🔸 **Interactividad:** HTML y CSS por defecto; `<script>` nativo de Astro para comportamientos mínimos. React solo si una RDA lo justifica.
🔸 **Lenguaje:** JavaScript moderno (ES2022+).
🔸 **Entorno:** Node.js 24 LTS y PNPM 12 (versión 12.8.1 fijada en `devEngines.packageManager` de `package.json`).
🔸 **Calidad de código:** Prettier con `prettier-plugin-astro` y `prettier-plugin-tailwindcss`; `astro check`.
🔸 **Control de versiones:** Git, con repositorio remoto en GitHub.
🔸 **Hosting:** Cloudflare Pages, con despliegue automático desde la rama `main` y vistas previas por rama.
🔸 **Dominio:** `gruasvillarrica.cl`, con DNS administrado en Cloudflare.
🔸 **Medición:** Cloudflare Web Analytics (sin cookies) y Google Search Console.

## 3. Requisitos previos

1. Node.js 24 LTS (mínimo 22.12, requisito de Astro 7). La versión de referencia está en `.nvmrc`.
2. Git.
3. PNPM instalado (https://pnpm.io/installation). Si tu versión difiere de la 12.8.1 declarada en `devEngines.packageManager`, PNPM descarga y usa la declarada.

## 4. Instalación y uso local

```bash
git clone https://github.com/ffelipecuevasc/gruas-burgos-villarrica.git
cd gruas-burgos-villarrica
pnpm install
pnpm dev
```

El servidor de desarrollo queda disponible en `http://localhost:4321`.

### Comandos disponibles

| Comando             | Acción                                                |
| :------------------ | :---------------------------------------------------- |
| `pnpm dev`          | Inicia el servidor de desarrollo.                     |
| `pnpm build`        | Genera el sitio estático en `dist/`.                  |
| `pnpm preview`      | Sirve localmente la versión compilada para revisarla. |
| `pnpm check`        | Valida sintaxis y tipos de los componentes Astro.     |
| `pnpm format`       | Formatea el código con Prettier.                      |
| `pnpm format:check` | Verifica el formato sin modificar archivos.           |

## 5. Estructura del repositorio

```text
gruas-burgos-villarrica/
├── .claude/settings.json   Permisos del agente Claude Code
├── _planificacion/         Documentación de producto, épicas, iteraciones y bitácoras
├── public/                 Archivos estáticos (favicon, robots.txt, _headers, imágenes OG) (aún no existe; se crea en 04-01)
├── src/
│   ├── assets/             Imágenes optimizadas por Astro
│   ├── components/         Componentes .astro reutilizables
│   ├── data/               Datos del negocio (fuente única: teléfono, dirección, cobertura)
│   ├── icons/              Íconos SVG propios para astro-icon (por ahora vacía)
│   ├── layouts/            Plantillas de página
│   ├── pages/              Rutas del sitio
│   └── styles/             CSS global y tokens de Tailwind
├── AGENTS.md               Instrucciones para agentes de IA
├── DESIGN.md               Sistema de diseño
├── LICENSE                 Licencia MIT del código
└── astro.config.mjs        Configuración de Astro
```

## 6. Despliegue

El sitio se publica en **Cloudflare Pages** conectado a este repositorio:

1. Cada push a `main` genera un despliegue de producción en `gruasvillarrica.cl`.
2. Cada rama distinta de `main` genera una URL de vista previa para revisión.
3. Configuración de compilación: comando `pnpm build`, directorio de salida `dist`, versión de Node tomada de `.nvmrc` y variable de compilación `PNPM_VERSION` = `12.8.1`.
4. Las cabeceras HTTP (caché y seguridad) se definen en `public/_headers`.

Al ser un sitio 100 % estático, no se requiere adaptador de servidor.

## 7. Medición y posicionamiento

🔹 **Cloudflare Web Analytics:** métricas de visitas y Core Web Vitals reales, sin cookies ni banner de consentimiento.
🔹 **Google Search Console:** indexación, rendimiento en búsqueda orgánica y envío del sitemap (`/sitemap-index.xml`).
🔹 **Datos estructurados:** marcado JSON-LD de Schema.org (`EmergencyService` y `AutomotiveBusiness`) con horario 24/7, área de servicio y datos de contacto.

## 8. Metodología de trabajo

El desarrollo se organiza en épicas e iteraciones documentadas en `_planificacion/`. Cada iteración deja una bitácora en `_planificacion/99_bitacora/` y las decisiones técnicas se registran como RDA (Registro de Decisión Arquitectónica). El detalle está en `_planificacion/README.md`.

Los agentes de IA que colaboran en el proyecto siguen las reglas de `AGENTS.md`. Los commits, pushes y merges los realiza exclusivamente el desarrollador.

## 9. Autoría y licencia

Desarrollado por **[Felipe Cuevas](https://felipecuevas.dev)** para **Grúas Burgos**, Villarrica, Chile.

El código fuente de este repositorio se publica bajo la licencia MIT (ver [LICENSE](LICENSE)). El nombre, el logotipo y la marca «Grúas Burgos», junto con los textos, fotografías y demás contenido del cliente, no están cubiertos por esa licencia y todos los derechos sobre ellos quedan reservados.
