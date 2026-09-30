# Auditoría técnica

Registro acumulativo de auditorías. Las auditorías se agregan al final; no se borran. Un hallazgo se marca como resuelto indicando la iteración o la RDA que lo cerró (por ejemplo, `Resuelto en 02-01` o `Resuelto en RDA-004`).

**Severidad:** Alta (bloquea publicación o afecta al usuario/negocio), Media (afecta calidad o rendimiento), Baja (mejora).

---

## Auditoría 01 · Insumos iniciales del proyecto

- **Fecha:** 2026-09-29
- **Auditor:** Claude (asistente de planificación)
- **Alcance:** `index-prototipo.html`, propuesta comercial firmada (2 páginas) y `rrss-gruas-burgos.txt`.

### Resumen

El prototipo define bien la dirección visual (oscuro, naranja de alta visibilidad, tipografía condensada) y la jerarquía de contacto. Sin embargo, es un prototipo generado para mostrar el estilo: depende de recursos de terceros, contiene datos de relleno presentados como reales y afirmaciones comerciales sin respaldo, y tiene problemas de contraste. Debe tratarse como referencia visual, no como código base.

### A. Contenido y datos del negocio

| ID         | Severidad | Hallazgo                                                                                                                                                                                                 | Acción recomendada                                                                              | Estado  |
| :--------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------- | :------ |
| AUD-01-001 | Alta      | El teléfono `+56 9 9283 7412` se repite en todo el prototipo y no está confirmado como número real del cliente.                                                                                          | Confirmar número de llamada y de WhatsApp (pueden ser distintos). Centralizar en `negocio.js`. | Abierto |
| AUD-01-002 | Alta      | El correo `contacto@gruasburgos.cl` usa un dominio distinto de `gruasvillarrica.cl` y no consta que exista.                                                                                              | Confirmar correo real o crear uno en el dominio contratado.                                    | Abierto |
| AUD-01-003 | Alta      | Afirmaciones sin respaldo: "25 min tiempo promedio garantizado", "100 % seguro de carga", "0 daños", "tiempo de respuesta récord", "espera menor a 30 segundos", "respuesta en menos de 5 minutos con valor cerrado", "seguimiento GPS", "facturación inmediata", "operador certificado", "balizas homologadas MOP". | Validar cada una con el cliente. Eliminar o reformular las no respaldables para evitar publicidad engañosa (Ley 19.496 del Consumidor). | Abierto |
| AUD-01-004 | Alta      | Especificaciones técnicas inconsistentes: winche de "12.000 lbs" (≈ 5,4 t) en un texto y "6 TON" en otro; "hasta 4.5 TON"; "plataforma 6.5 metros"; mención de "grúas pluma" y maquinaria (Bobcat, miniexcavadora). | Obtener ficha real de la flota: cantidad de grúas, tipo, capacidad y largo de plataforma.        | Abierto |
| AUD-01-005 | Alta      | Tiempos de cobertura por zona (15–20, 20–30, 30–40, 35 min, "Villarrica–Temuco en 60 min") sin respaldo.                                                                                                 | Confirmar zonas y rangos, o mostrar solo localidades sin tiempos.                               | Abierto |
| AUD-01-006 | Media     | Cobertura del prototipo (Curarrehue, pasos fronterizos, aeropuerto, Concepción, Santiago) no coincide del todo con la del brief (Villarrica, Pucón, Loncoche, Temuco, Freire, Santiago, Puerto Montt). | Acordar lista definitiva de localidades y traslados de larga distancia.                         | Abierto |
| AUD-01-007 | Media     | "+5 años de trayectoria" aparece en el brief y en el prototipo, pero no hay un año de inicio documentado que lo respalde.                                                                                                     | Confirmar año de inicio de operaciones.                                                         | Abierto |
| AUD-01-008 | Media     | El usuario de TikTok es `yerko.gruas.burgo` (sin "s" final), distinto del nombre de marca.                                                                                                               | Confirmar que es la cuenta correcta.                                                            | Abierto |
| AUD-01-009 | Media     | Faltan datos de facturación para el footer (razón social, RUT) y coordenadas exactas de la base para el JSON-LD.                                                                                        | Solicitar al cliente.                                                                           | Abierto |
| AUD-01-010 | Media     | No hay reseñas reales incorporadas; el brief exige prueba social de Google Maps.                                                                                                                          | Obtener enlace al perfil de Google Maps y seleccionar reseñas con el cliente (RDA-007).        | Abierto |
| AUD-01-011 | Alta      | Las imágenes son de `lh3.googleusercontent.com/aida-public/…` (generadas para el prototipo, no del cliente).                                                                                            | Reemplazar por fotos reales del cliente, optimizadas localmente.                               | Abierto |

### B. Alcance

| ID         | Severidad | Hallazgo                                                                                                                                                                   | Acción recomendada                                                        | Estado                |
| :--------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ | :-------------------- |
| AUD-01-012 | Media     | La propuesta contrata 3 secciones; el brief pide 6 bloques (hero, servicios, cobertura, testimonios, contacto, footer). Las secciones adicionales se cotizan aparte.      | Integrar los bloques dentro de las 3 secciones contratadas.               | Resuelto en RDA-009   |
| AUD-01-013 | Media     | El formulario de cotización del prototipo no envía nada (`alert()`), y la propuesta no incluye backend.                                                                   | Formulario que compone un mensaje de WhatsApp.                            | Abierto (RDA-006 propuesta) |
| AUD-01-014 | Baja      | El pie dice "© 2025".                                                                                                                                                      | Año dinámico en compilación.                                              | Abierto               |

### C. Rendimiento

| ID         | Severidad | Hallazgo                                                                                                     | Acción recomendada                                  | Estado              |
| :--------- | :-------- | :----------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- | :------------------ |
| AUD-01-015 | Alta      | Tailwind se carga desde `cdn.tailwindcss.com` (compilador JIT en el navegador, no apto para producción).     | Tailwind 4 compilado con Vite.                      | Resuelto en RDA-002 |
| AUD-01-016 | Alta      | Tres hojas de Google Fonts remotas, dos de ellas de Material Symbols (una duplicada).                        | Fuentes autoalojadas e íconos SVG.                  | Resuelto en RDA-004 y RDA-005 |
| AUD-01-017 | Media     | La imagen del hero se carga como `<img>` sin dimensiones, formato moderno ni prioridad; el mapa es un `background-image` remoto. | `<Picture />` con AVIF/WebP, dimensiones y prioridad. | Abierto |

### D. Accesibilidad

| ID         | Severidad | Hallazgo                                                                                                                         | Acción recomendada                                                            | Estado  |
| :--------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- | :------ |
| AUD-01-018 | Alta      | Texto `#5d1800` sobre naranja `#ff5715` tiene contraste 4,15:1 (falla AA en texto normal) y se usa en botones y en la tarjeta de despacho. | Texto `#0e0e0e` sobre naranja (6,09:1). Definido en `DESIGN.md`.             | Abierto |
| AUD-01-019 | Media     | Placeholder `#474746` sobre `#0e0e0e`: contraste 2,08:1.                                                                         | Usar `#8f8d8c` (5,84:1).                                                     | Abierto |
| AUD-01-020 | Media     | Texto escrito directamente en mayúsculas en el HTML; los lectores de pantalla pueden deletrearlo.                                | Texto en formato oración con `uppercase` en CSS.                             | Abierto |
| AUD-01-021 | Media     | `::-webkit-scrollbar { display: none }` oculta la barra de desplazamiento; animaciones `ping` y `pulse` sin `prefers-reduced-motion`. | Eliminar la regla y respetar movimiento reducido.                          | Abierto |
| AUD-01-022 | Media     | Etiquetas `<label>` del formulario no están asociadas a sus campos (`for`/`id`).                                                 | Asociar etiquetas y agregar `autocomplete`.                                  | Abierto |
| AUD-01-023 | Media     | En móvil el teléfono del header se oculta (`hidden xl:flex`) y la navegación de tres enlaces no tiene tratamiento móvil.         | Botón de llamada visible en header móvil y barra inferior de acciones.       | Abierto |
| AUD-01-024 | Baja      | Íconos de fuente sin `aria-hidden`; el nombre del ícono se lee como texto.                                                       | Resuelto al pasar a SVG con `aria-hidden`.                                   | Resuelto en RDA-005 |

### E. SEO y estructura

| ID         | Severidad | Hallazgo                                                                                                            | Acción recomendada                                                           | Estado  |
| :--------- | :-------- | :------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------- | :------ |
| AUD-01-025 | Alta      | Sin `<title>`, meta descripción, canonical, Open Graph ni JSON-LD.                                                  | Componente de cabecera SEO y datos estructurados.                            | Abierto |
| AUD-01-026 | Media     | `lang="es"` en lugar de `es-CL`; clase `dark` sin uso real (el sitio es solo oscuro).                               | `lang="es-CL"` y `color-scheme: dark`.                                       | Abierto |
| AUD-01-027 | Baja      | Elementos residuales del prototipo: círculo naranja vacío en el header, `div` vacío tras el texto de Quiénes somos, franja "hazard" con textos de relleno. | Eliminar o reemplazar con contenido real.                           | Abierto |
