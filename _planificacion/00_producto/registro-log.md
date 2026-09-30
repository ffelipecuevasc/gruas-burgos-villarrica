# Registro de trabajo (registro-log)

**Fuente única de verdad del trabajo pendiente.** Si discrepa con `_planificacion/README.md` o con cualquier otro documento de planificación, prevalece este archivo.

- **Última actualización:** 2026-09-29
- **Iteración activa:** 01-01 · Andamiaje del proyecto
- **Próximo hito:** prototipo navegable en vista previa de Cloudflare Pages
- **Entrega tentativa:** 2026-10-18

---

## 1. Estado de épicas e iteraciones

| Iteración | Nombre                                              | Épica | Estado     | Depende de | Bitácora |
| :-------- | :-------------------------------------------------- | :---- | :--------- | :--------- | :------- |
| 01-01     | Andamiaje del proyecto                              | 01    | En curso   | —          | —        |
| 01-02     | Arquitectura base, layout y datos del negocio       | 01    | Pendiente  | 01-01      | —        |
| 02-01     | Tokens de diseño, fuentes e íconos                  | 02    | Pendiente  | 01-02      | —        |
| 02-02     | Componentes base de interfaz                        | 02    | Pendiente  | 02-01      | —        |
| 02-03     | Header, acciones flotantes y footer                 | 02    | Pendiente  | 02-02      | —        |
| 03-01     | Sección Inicio: hero y contacto inmediato           | 03    | Pendiente  | 02-03      | —        |
| 03-02     | Sección Inicio: quiénes somos y reseñas             | 03    | Pendiente  | 03-01      | —        |
| 03-03     | Sección Servicios y equipamiento                    | 03    | Pendiente  | 02-03      | —        |
| 03-04     | Sección Contacto, cobertura y formulario            | 03    | Pendiente  | 02-03      | —        |
| 04-01     | SEO técnico y datos estructurados                   | 04    | Pendiente  | 03-04      | —        |
| 04-02     | Imágenes y presupuesto de rendimiento               | 04    | Pendiente  | 03-04      | —        |
| 04-03     | Auditoría de accesibilidad y Lighthouse             | 04    | Pendiente  | 04-01, 04-02 | —      |
| 05-01     | Publicación en producción                           | 05    | Pendiente  | 04-03      | —        |
| 05-02     | Medición: Web Analytics, Search Console y Google Ads | 05   | Pendiente  | 05-01      | —        |

Nota: la iteración 01-01 la ejecuta el desarrollador de forma manual en WebStorm (creación del proyecto). La bitácora 01-01 puede redactarla el agente a partir del resumen del desarrollador.

## 2. Datos pendientes del cliente

Bloquean contenido real. Mientras falten, se usa `PENDIENTE_CLIENTE` en `src/data/negocio.js`.

| Dato                                                        | Hallazgo    | Necesario para | Estado    |
| :---------------------------------------------------------- | :---------- | :------------- | :-------- |
| Teléfono de llamadas y número de WhatsApp                   | AUD-01-001  | 01-02          | Pendiente |
| Correo de contacto                                          | AUD-01-002  | 01-02          | Pendiente |
| Validación de afirmaciones comerciales                      | AUD-01-003  | 03-01          | Pendiente |
| Ficha de la flota (tipos, capacidades, plataforma)          | AUD-01-004  | 03-03          | Pendiente |
| Localidades de cobertura y tiempos estimados                | AUD-01-005, AUD-01-006 | 03-04 | Pendiente |
| Año de inicio de operaciones                                | AUD-01-007  | 03-02          | Pendiente |
| Confirmación de cuentas de redes sociales                   | AUD-01-008  | 02-03          | Pendiente |
| Razón social, RUT y coordenadas de la base                  | AUD-01-009  | 02-03, 04-01   | Pendiente |
| Enlace al perfil de Google Maps y selección de reseñas      | AUD-01-010  | 03-02          | Pendiente |
| Fotos reales (flota, operaciones, base) y logo si existe    | AUD-01-011  | 03-01          | Pendiente |
| Textos del negocio (punto 2 de "Qué necesito de usted" en la propuesta) | — | 03-01 a 03-04 | Pendiente |

## 3. Decisiones por tomar

| Tema                                               | RDA      | Responsable            |
| :------------------------------------------------- | :------- | :--------------------- |
| Formulario de cotización vía WhatsApp              | RDA-006  | Desarrollador y cliente |
| Medición de conversiones de Google Ads en el sitio | RDA-010  | Desarrollador          |

## 4. Propuestas fuera de alcance

Ideas detectadas durante el trabajo que no forman parte de lo contratado. Se cotizan aparte si el cliente las quiere.

| Propuesta | Origen | Fecha |
| :-------- | :----- | :---- |
| —         | —      | —     |

## 5. Historial de cambios del registro

| Fecha      | Cambio                                               |
| :--------- | :--------------------------------------------------- |
| 2026-09-29 | Creación del registro, 5 épicas y 14 iteraciones.    |
