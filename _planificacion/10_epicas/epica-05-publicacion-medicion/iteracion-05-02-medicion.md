# Iteración 05-02 · Medición: Web Analytics, Search Console y Google Ads

- **Épica:** 05 · Publicación y medición
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/05-02-medicion`
- **Depende de:** 05-01
- **RDA relacionadas:** RDA-010

## Objetivo

Medir visitas, rendimiento real y conversiones sin degradar la velocidad del sitio.

## Tareas

1. Lista de verificación para el desarrollador:
   1. Activar Cloudflare Web Analytics para el dominio (inyección automática, sin editar código si el sitio está proxificado por Cloudflare).
   2. Verificar la propiedad de dominio en Google Search Console mediante registro DNS TXT en Cloudflare y enviar `sitemap-index.xml`.
   3. Enlazar el sitio desde el Perfil de Empresa de Google (ficha de Maps).
   4. En Google Ads, cambiar la URL final de los anuncios al sitio (o a anclajes específicos) y configurar extensiones de llamada.
2. Cerrar RDA-010: decidir si se agrega medición de clics en el sitio. Si se aprueba, implementar carga diferida de la etiqueta y medir su impacto en Lighthouse antes y después.
3. Documentar en la bitácora las URLs de los paneles (sin credenciales) y las cifras base de rendimiento.

## Criterios de aceptación

- [ ] Search Console muestra el sitemap procesado.
- [ ] RDA-010 en estado Aceptada o Descartada.
- [ ] Lighthouse móvil sigue ≥ 95 tras cualquier etiqueta agregada.
