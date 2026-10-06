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

## 4. Banderas

- Teléfono: ¿se ven las banderas de Chile y Argentina en el extremo derecho del menú, sin tapar ni empujar los enlaces?:
- Escritorio: ¿se ven en el extremo derecho del menú?:
- ¿Se reconocen las dos banderas a ese tamaño (16 px de alto)? La de Argentina va sin el Sol de Mayo:
- ¿Las dejas así o prefieres otro tamaño o posición?:

## 5. Opiniones

- ¿Se ven las diez opiniones sin tocar nada, en el teléfono y en escritorio?:
- ¿Sigue apareciendo el botón «Ver 4 opiniones más»? (no debe aparecer):
- ¿Sigue el botón «Ver más opiniones en Google» al final?:
- ¿El logotipo de Google se ve junto al título «Lo que dicen nuestros clientes»? En el teléfono queda bajo el título; en escritorio, a su derecha:
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
