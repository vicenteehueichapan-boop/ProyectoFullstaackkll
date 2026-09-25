# Level-Up Gamer

Proyecto de la asignatura **DSY1104 · Desarrollo Fullstack II**. Esta primera entrega implementa la pantalla de inicio de sesión con React, Atomic Design y React Bootstrap.

## Equipo

**VIhueicha**

## Integrantes

| Nombre completo | Correo institucional |
| --- | --- |
| Vicente Hueichapan | vi.hueichapan@duocuc.cl |

## Caso

**Level-Up Gamer**

## Descripción del caso

Level-Up Gamer es una propuesta de tienda en línea de tecnología y accesorios para videojuegos.
El proyecto busca ofrecer un catálogo claro y una experiencia de compra adaptable a distintos dispositivos.
Durante el semestre se podrán incorporar funciones de usuarios, favoritos, carrito y administración según las actividades solicitadas.
La entrega actual se limita a una pantalla de acceso responsiva; todavía no existe autenticación conectada a un servidor.

## Alcance de esta entrega

- Formulario de acceso con validación local de correo y campos obligatorios.
- Componentes distribuidos en al menos tres niveles de Atomic Design.
- Diseño responsivo construido con `Container`, `Row`, `Col` y `Form` de React Bootstrap.
- Evidencia visual a 375, 768 y 1280 píxeles.

La validación del formulario es demostrativa. No se envían credenciales ni se guarda la contraseña. La autenticación real requerirá un backend en una etapa posterior.

## Estructura del proyecto

```text
src/
├── components/
│   ├── atoms/
│   │   ├── AppLogo.jsx
│   │   ├── PrimaryButton.jsx
│   │   └── TextInput.jsx
│   ├── molecules/
│   │   └── FormField.jsx
│   ├── organisms/
│   │   └── LoginForm.jsx
│   └── templates/
│       └── AuthTemplate.jsx
├── pages/
│   └── LoginPage.jsx
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

`App.jsx` muestra la única página de esta entrega. Se agregará React Router cuando el proyecto tenga una segunda página; así cada ruta corresponderá a una necesidad real.

## Tecnologías

- React y React DOM
- Vite
- React Bootstrap y Bootstrap 5
- JavaScript con JSX
- CSS
- Oxlint para revisión estática

## Cómo ejecutar el proyecto

Requisito: Node.js 20.19 o superior, o 22.12 o superior, y npm. Desde la carpeta raíz del repositorio:

```bash
npm install
npm run dev
```

Abrir la dirección local que indique Vite, normalmente `http://localhost:5173/`.

Para comprobar el proyecto antes de entregar:

```bash
npm run check
```

Ese comando ejecuta la revisión estática y la compilación de producción. `npm run preview` permite inspeccionar localmente la compilación después de `npm run build`.

## Evidencias de responsividad

Las capturas se obtuvieron de la aplicación en un navegador a los anchos solicitados. No se detectó desplazamiento horizontal.

| Ancho | Captura |
| --- | --- |
| 375 px | [Vista móvil](output/playwright/login-375px.png) |
| 768 px | [Vista tablet](output/playwright/login-768px.png) |
| 1280 px | [Vista escritorio](output/playwright/login-1280px.png) |

## Material complementario

**Pendiente por decisión del equipo:** todavía no existe una carpeta pública de Google Drive para los documentos del semestre. El código y las evidencias de esta entrega están en GitHub. Antes de la entrega final de la actividad se debe añadir aquí un enlace real con permiso “Cualquiera con el enlace puede ver”, como exige la guía 12.

## Forma de trabajo

Las convenciones de código y la lista de verificación de cada entrega están en [CONTRIBUTING.md](CONTRIBUTING.md).
