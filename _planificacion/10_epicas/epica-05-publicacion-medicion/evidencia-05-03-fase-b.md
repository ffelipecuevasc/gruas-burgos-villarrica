# Evidencia de la fase B de 05-03

Archivo para que el desarrollador entregue lo que solo él puede obtener: las pruebas sobre la **vista previa de la rama** `iteracion/05-03-pie-y-hero` (no sobre producción). Se rellena después del `push` de la rama y antes del Pull Request. Todo lo que quede vacío se registrará como «no verificado». No pegar claves ni datos personales.

- **Fecha y hora de las pruebas:** 05/10/2026 22:55 hrs
- **Hash del commit desplegado en la vista previa (Cloudflare):** d276229
- **Quién hizo las pruebas y con qué equipos:** Yo, Felipe Cuevas, con mi laptop y Google Chrome.

## 1. Vista previa de la rama en Cloudflare

Cómo encontrarla: en el panel de Cloudflare, **Workers & Pages** › proyecto `gruas-burgos-villarrica` › **Deployments**. Busca el despliegue de la rama `iteracion/05-03-pie-y-hero` (entorno Preview). Su estado debe ser «Success» y el hash debe ser el del último commit de la rama. La dirección de la rama suele ser `https://iteracion-05-03-pie-y-hero.gruas-burgos-villarrica.pages.dev`; si no abre, usa el enlace «Visit» del despliegue.

- **Dirección de la vista previa que usaste:** https://225cc9a1.gruas-burgos-villarrica.pages.dev/.
- **Estado del despliegue y hash del commit:** Desplegado y el hash del commit es d276229.
- **Resultado de la compilación (¿errores o avisos en el registro?):** Despliegue exitoso sin errores.

Salida completa del comando (debe incluir `x-robots-tag: noindex`):

```
curl.exe -sI https://iteracion-05-03-pie-y-hero.gruas-burgos-villarrica.pages.dev/
HTTP/1.1 200 OK
Date: Tue, 06 Oct 2026 01:58:47 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0, must-revalidate
content-security-policy: frame-ancestors 'none'
permissions-policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
x-frame-options: DENY
x-robots-tag: noindex
Report-To: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=IZsNwOEWetTNT61Mkx50woooQuCzftdY4osz%2FSyIjYdfAo9xV%2BJb8aR0bwWUKfYZArgQLfb4nvjiKRZ3oJFgwGkKdtf77HNzW87bvsK2JrWhJ5UwsAqEMHgpKdkUic0xNPgA%2B4m5vOJbR0XG%2BLQAvyFr33wovJ5IV7G1XBM6FcymtAOIN1tjt%2FA7SCJRqfE74ZoGF0cDE%2FjpjnQ%3D"}]}
Nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
Server: cloudflare
CF-RAY: a4611022ba1df177-GRU
alt-svc: h3=":443"; ma=86400

```

## 2. Pie de página en Chrome de escritorio (Windows)

Cómo probar cada ancho: abre la vista previa, presiona `F12`, luego `Ctrl + Shift + M` (barra de dispositivos), elige «Responsive», escribe el ancho en la casilla de la izquierda, **recarga la página (`F5`)** y baja hasta el final con la rueda del mouse. Para «reaparecen», sube unos 300 píxeles. También puedes achicar la ventana de Chrome.

Responde sí o no, y qué viste si algo falla:

| Ancho    | Crédito «Sitio desarrollado por Felipe Cuevas» centrado y sin vacío debajo | Botones flotantes ocultos al llegar al pie | Reaparecen al subir | ¿Algo del pie queda tapado? |
| :------- | :------------------------------------------------------------------------- | :----------------------------------------- | :------------------ | :-------------------------- |
| 768 px   |  Si                                                                        |  Si                                        | Si                  | No, nada                    |
| 1024 px  |  Si                                                                        |  Si                                        | Si                  | No, nada                    |
| 1280 px  |  Si                                                                        |  Si                                        | Si                  | No, nada                    |
| 1536 px  |  Si                                                                        |  Si                                        | Si                  | No, nada                    |
| 1920 px  |  Si                                                                        |  Si                                        | Si                  | No, nada                    |

- ¿Aparece todavía el texto «© 2026 Grúas Burgos» o alguna fila de razón social o RUT?: No, nada de eso, pero todavía aparece el nombre de Yerko Burgos.
- Con JavaScript desactivado (`Ctrl + Shift + P` en las herramientas de desarrollador, escribe «Disable JavaScript», recarga y baja al final), a 1280 px: ¿el crédito y las redes quedan sin tapar al llegar al final?: Así es.

## 3. Teclado en escritorio

- Presiona `Tab` desde arriba y recorre toda la página hasta el pie: ¿algún elemento enfocado queda tapado por los botones flotantes o por el header?: No, ningún elemento.
- Vuelve a cargar la página y presiona `Mayús + Tab` una vez: ¿el foco llega a un botón flotante, está visible y su contorno de foco se ve claro?: Así es.
- Con el foco en ese botón, baja hasta el final con el mouse. Ya se aceptó que puede tapar un poco las redes. ¿Qué viste?: Las redes sociales quedan visibles de buena forma.

## 4. Hero (nivel 2)

Compara la vista previa con producción (`https://gruasvillarrica.cl`) en dos pestañas, en escritorio y en el teléfono.

- ¿Se nota que la foto está más clara que en producción?: Sí, se nota la diferencia.
- ¿Se lee bien el texto del hero (etiqueta, título, párrafo y los dos botones)?: Se lee perfectamente bien.
- ¿Confirmas el nivel 2 o prefieres otro? (si prefieres otro, dilo y se ajusta en una tanda corta): Confirmo el nivel 2.

## 5. Teléfono real

- Equipo, sistema y navegador: Samsung Galaxy A52+.
- Primera pantalla con la barra de direcciones de Chrome a la vista: ¿se ven completos la etiqueta «Asistencia en ruta 24/7», el título y los dos botones sobre la barra inferior?: Sí, se ven completos.
- La barra inferior («Llamar» y «Whatsapp») ¿se ve y funciona igual que antes?: Si, se ve y funciona igual que antes.
- Baja hasta el final de la página: ¿el crédito del pie se ve completo, sobre la barra inferior y sin nada encima?: Si, se ve completo.
- No debe verse ningún botón flotante extra en la esquina. ¿Es así?: Es así.
- Gira el teléfono a horizontal (el ancho supera los 768 px y la página usa el diseño de escritorio) y baja al final: ¿los botones flotantes se ocultan y el pie se ve completo?: Así es.

## 6. Otros navegadores

Si no los tienes, deja «no verificado».

- Firefox en el PC: ¿el pie se ve bien al final, sin botones encima, y los botones reaparecen al subir?: Firefox, y si, se ve bien al final, sin botones encima y los botones reaparecen al subir.
- Safari en iPhone (si hay uno): no verificado.

## 7. Lector de pantalla (opcional)

- Con el Narrador de Windows (`Windows + Ctrl + Intro`) en el pie, a 1280 px: ¿lee los botones flotantes ocultos?: no verificado.

## 8. Observaciones y problemas adicionales

- Ninguna observación.

## 9. Veredicto del desarrollador

- ¿Apruebas la iteración para hacer el Pull Request y el merge? (sí / no, y por qué): Apruebo, todo salió como esperado.
