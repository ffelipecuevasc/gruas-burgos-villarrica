# Evidencia de la fase B de 05-04 · Tanda de ajustes del cliente

Archivo para que el desarrollador entregue lo que solo él puede obtener: las pruebas de **lo que cambió en la tanda de ajustes** sobre la **vista previa de la rama** `iteracion/05-04-cambios-cliente` (no sobre producción). Se rellena después del `push` de la rama y antes del Pull Request. Todo lo que quede vacío se registrará como «no verificado». No pegar claves, datos personales ni la conversación con el cliente.

- **Fecha y hora de las pruebas:**
- **Hash del commit desplegado en la vista previa (Cloudflare):**
- **Quién hizo las pruebas y con qué equipos:**

## 1. Vista previa de la rama en Cloudflare

Cómo encontrarla: en el panel de Cloudflare, **Workers & Pages** › proyecto `gruas-burgos-villarrica` › **Deployments**. Busca el despliegue más reciente de la rama `iteracion/05-04-cambios-cliente` (entorno Preview). Su estado debe ser «Success» y el hash debe ser el del último commit de la rama. En la fase B anterior, la dirección con el nombre de la rama respondió 404: usa el enlace «Visit» del despliegue.

- **Dirección de la vista previa que usaste:**
- **Estado del despliegue y hash del commit:**
- **Resultado de la compilación (¿errores o avisos en el registro?):**

Salida completa del comando, **contra la dirección que usaste** (debe decir `200 OK` e incluir `x-robots-tag: noindex`):

```
curl.exe -sI <dirección de la vista previa>

```

## 2. Menú en el teléfono (tres enlaces)

- Equipo, sistema y navegador:
- ¿El menú muestra solo «Inicio», «Servicios» y «Contacto»?:
- ¿Los tres llevan a su sección, con el título visible bajo el header?:
- ¿El header mide lo mismo que antes (no se ve más alto ni más bajo)?:

## 3. Menú en escritorio (seis enlaces)

Prueba a 768 px (`F12`, `Ctrl + Shift + M`, «Responsive», 768 de ancho y recarga con `F5`) y con la ventana completa. Haz clic en cada enlace y responde sí o no: ¿la página llega a la sección correcta y su título se ve completo bajo el header?

| Enlace del menú     | 768 px | Ventana completa | Si algo falla, ¿qué viste? |
| :------------------ | :----- | :--------------- | :------------------------- |
| Inicio              |        |                  |                            |
| Servicios           |        |                  |                            |
| Quiénes somos       |        |                  |                            |
| Trabajos en terreno |        |                  |                            |
| Opiniones           |        |                  |                            |
| Contacto            |        |                  |                            |

- A 768 px, ¿los seis enlaces caben en una sola línea, sin cortarse ni montarse sobre las banderas?:
- A 767 px (un píxel menos), ¿quedan solo tres enlaces?:
- Con `Tab`, ¿el foco pasa por los seis enlaces en orden y su contorno se ve completo?:

## 4. Banderas del menú

Son las que entregaste el 2026-10-06 (íconos con las esquinas redondeadas; la de Argentina, con el Sol de Mayo).

- Teléfono: ¿se ven las dos banderas en el extremo derecho del menú (24 px), sin tapar ni empujar los enlaces «Inicio», «Servicios» y «Contacto»?:
- Teléfono: ¿se reconocen a ese tamaño? ¿Se distingue el Sol de Mayo?:
- Escritorio: ¿se ven en el extremo derecho del menú, más grandes (32 px)?:
- A 768 px de ancho quedan a 16 px de «Contacto». ¿Se ve holgado o apretado?:
- ¿El header mide lo mismo que antes (las banderas no lo hacen más alto)?:
- ¿Las dejas así o prefieres otro tamaño o posición?:

## 5. Opiniones

- ¿Se ven las diez opiniones sin tocar nada, en el teléfono y en escritorio?:
- ¿Sigue apareciendo el botón «Ver 4 opiniones más»? (no debe aparecer):
- ¿Sigue el botón «Ver más opiniones en Google» al final?:
- Teléfono: ¿el logotipo de Google se ve debajo del título «Lo que dicen nuestros clientes»?:
- Escritorio: ¿el logotipo queda en el extremo derecho de la fila del título, a su misma altura y lejos de la bajada «Opiniones publicadas en Google.»? Revísalo a 768 px y con la ventana completa:
- En un teléfono en horizontal o una ventana de 520 a 767 px, el logotipo queda al lado del título (no en el extremo derecho). ¿Lo aceptas?:
- ¿El logotipo se ve bien sobre el fondo oscuro (colores y tamaño)?:
- En el teléfono, con las diez opiniones visibles y las ocho tarjetas completas, la página quedó unos 1.900 px más larga (unas tres pantallas más de desplazamiento). ¿Lo aceptas?:

## 6. Medios de pago

- ¿El bloque «Medios de pago» se distingue del resto de Contacto (borde naranja)?:
- ¿Se ven los cuatro medios, cada uno con su ícono y su nombre: «Efectivo», «Transferencia», «Tarjeta de débito» y «Tarjeta de crédito»?:
- ¿Se lee debajo «Emitimos boletas y facturas.»?:
- ¿Los íconos se entienden? En especial, ¿se distinguen el de débito y el de crédito?:
- En el teléfono, ¿algún nombre se corta o se sale del bloque?:

## 7. Las ocho tarjetas de servicio

- ¿Las ocho tienen la misma estructura: ícono en un cuadro, línea, título, descripción, tres características y botón?:
- ¿La tercera característica de las ocho es «Disponible 24/7»?:
- En «Rescate 4x4 y vehículos atascados», ¿se leen «Winche de tiro», «Caminos rurales y de cordillera» y «Disponible 24/7»?:
- ¿Los íconos de los cinco servicios nuevos se entienden (batería, neumático, camión pluma, envío y maquinaria)? Si alguno no convence, di cuál:
- Escritorio con la ventana completa: ¿se ven cuatro tarjetas arriba y cuatro abajo, sin espacios vacíos?:
- Teléfono: ¿las ocho van una bajo otra, sin textos cortados?:
- Toca «Escribir por WhatsApp» en dos tarjetas cualesquiera: ¿abre WhatsApp con el mensaje del servicio? (los mensajes no cambiaron):

### 7.1 Banderas en la tarjeta de envío

- En «Envío de vehículos a todo Chile y a Argentina», ¿se ven las dos banderas arriba a la derecha, frente al ícono, en el teléfono y en escritorio?:
- ¿La tarjeta mide lo mismo que las de su fila (no quedó más alta ni descuadrada)?:
- ¿Alguna otra tarjeta lleva banderas? (no debe):
- ¿Te parece bien la ubicación o prefieres otra dentro de la tarjeta?:

### 7.2 Ícono del camión pluma

El sitio conserva el ícono actual. En la bitácora de la segunda pasada están los nombres de dos alternativas y la carpeta con sus capturas.

- ¿Cuál eliges: el actual, la alternativa 1 o la alternativa 2?:

## 8. Primera pantalla del teléfono

- Con la barra de direcciones de Chrome a la vista, ¿se ven completos la etiqueta «Asistencia en ruta 24/7», el título y los dos botones sobre la barra inferior?:
- ¿Las banderas del menú le quitan espacio o atención a esa primera pantalla?:

## 9. Otros navegadores

Si no los tienes, deja «no verificado».

- Firefox en el PC: ¿el menú de seis enlaces, las banderas, las opiniones, los medios de pago y las tarjetas se ven igual que en Chrome?:
- Safari en iPhone (si hay uno):

## 10. Observaciones y problemas adicionales

-

## 11. Veredicto del desarrollador

- ¿Apruebas la iteración para hacer el Pull Request y el merge? (sí / no, y por qué):
