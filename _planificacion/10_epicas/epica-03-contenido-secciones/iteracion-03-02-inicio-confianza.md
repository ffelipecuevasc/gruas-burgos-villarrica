# Iteración 03-02 · Sección Inicio: quiénes somos y reseñas

- **Épica:** 03 · Contenido y secciones
- **Estado:** Pendiente
- **Rama sugerida:** `iteracion/03-02-confianza`
- **Depende de:** 03-01
- **RDA relacionadas:** RDA-007
- **Hallazgos que cierra:** AUD-01-007, AUD-01-010

## Objetivo

Dar confianza a quien duda entre varias grúas: quién es Grúas Burgos y qué dicen sus clientes.

## Tareas

1. Bloque `QuienesSomos.astro` dentro de `#inicio`: relato breve con los textos del cliente (años de trayectoria confirmados, zona, tipo de flota) y hasta 4 métricas verificadas.
2. `src/data/resenas.js` con 3 a 6 reseñas reales: texto (recortado con elipsis si es largo, sin alterar el sentido), nombre abreviado (por ejemplo "María J."), fecha aproximada, calificación y URL del perfil.
3. `TarjetaResena.astro` y bloque `Resenas.astro` con enlace "Ver todas las opiniones en Google".
4. Si no hay reseñas aprobadas, el bloque no se renderiza (condición sobre el arreglo vacío).

## Criterios de aceptación

- [ ] Ninguna reseña inventada ni editada en su sentido.
- [ ] Sin `AggregateRating` en el marcado.
- [ ] Bloque legible en una columna a 360 px.

## Datos requeridos del cliente

- Enlace al perfil de Google Maps, aprobación de reseñas y año de inicio.
