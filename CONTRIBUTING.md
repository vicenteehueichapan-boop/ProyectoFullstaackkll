# Acuerdos de desarrollo

Estas reglas ayudan a que Level-Up Gamer sea fácil de entender, revisar y ampliar. La consigna de cada actividad y las guías del profesor tienen prioridad.

## Arquitectura

- Usar componentes pequeños con una responsabilidad clara. Extraerlos cuando exista reutilización, comportamiento propio o complejidad real.
- Organizar la interfaz en `atoms`, `molecules`, `organisms`, `templates` y `pages` según la guía 12.
- Dejar los datos concretos y la composición final en la página; los templates definen la distribución.
- No agregar carpetas, bibliotecas o capas de servicio antes de necesitarlas.
- Mantener un archivo principal por componente. Nombrar componentes en `PascalCase` y variables en `camelCase`.

## React

- Tratar props y estado como inmutables.
- Guardar solo el estado que no pueda derivarse de otros datos.
- Usar eventos para acciones del usuario y `useEffect` solo al sincronizar con sistemas externos.
- Respetar las reglas de Hooks: llamarlos en el nivel superior de componentes o hooks propios.
- Evitar modificaciones manuales del DOM administrado por React.
- Usar identificadores estables en las listas renderizadas con `map`.

## HTML, estilos y accesibilidad

- Mantener HTML semántico dentro del JSX: encabezados ordenados, `main`, `form`, `label`, botones y enlaces con su función correcta.
- Asociar cada etiqueta visible con su control mediante `htmlFor` e `id`.
- Mostrar los errores con texto y asociarlos al campo; el color no es suficiente.
- Conservar foco visible y funcionamiento con teclado.
- Importar Bootstrap antes de los estilos propios. Diseñar desde móvil y comprobar 375, 768 y 1280 píxeles.
- Evitar medidas rígidas que corten texto o provoquen desplazamiento horizontal.

## Seguridad y alcance

- El login actual es una demostración de interfaz; no afirmar que autentica usuarios.
- No guardar contraseñas ni secretos en el frontend, archivos `.env` públicos o Git.
- Cuando exista backend, repetir allí toda validación y aplicar el mecanismo de autenticación definido para esa etapa.
- Incorporar nuevas funciones solo cuando el curso las solicite o el caso las necesite.

## Antes de cada commit

1. Revisar que el cambio cumpla la actividad y pueda explicarse.
2. Ejecutar `npm run check`.
3. Probar la interacción modificada y revisar la consola del navegador.
4. Si cambia la interfaz, verificar los anchos requeridos y actualizar evidencias.
5. Actualizar el README si cambian estructura, dependencias o instrucciones.
6. Escribir un mensaje de commit que explique el cambio, por ejemplo `feat: construir login responsivo`.

Referencias: [guía de React](https://react.dev/learn), [documentación de Vite](https://vite.dev/guide/), [Bootstrap 5](https://getbootstrap.com/docs/5.3/), [formularios accesibles de W3C](https://www.w3.org/WAI/tutorials/forms/) y [guía de seguridad de OWASP](https://cheatsheetseries.owasp.org/).
