# LogWeb

Este es un proyecto simple llamado **LogWeb** que usa Node.js y Express para crear una aplicación web con logs organizados y un diseño básico con Bootstrap. El contenido está en archivos HTML separados.

## Estructura
- `logs/`: Archivos de logs separados (app.log para general, home.log para la página principal).
- `public/`: Archivos públicos como imágenes.
- `routes/`: Rutas accesibles de la aplicación.
- `views/`: Archivos HTML para las páginas.
- `app.js`: Archivo principal que configura el servidor.

## Requisitos
- Node.js instalado (descargar desde [nodejs.org](https://nodejs.org/)).

## Instalación
1. Clona o descarga este proyecto.
2. Entra a la carpeta: `cd LogWeb`.
3. Instala las dependencias: `npm install`.
4. Asegúrate de tener una imagen llamada `imagen.jpg` en la carpeta `public`.

## Uso
1. Inicia el servidor: `npm src/start`.
2. Abre tu navegador en `http://localhost:3000`.
3. Haz clic en el botón "Registrar Log" para ver cómo se guardan los logs.

## Dependencias
- `express`: Framework para la aplicación web.
- `winston`: Gestión de logs.
- `morgan`: Registro automático de visitas.
- `ejs`: Motor de plantillas (instalado pero no usado con variables por ahora).
- Bootstrap (via CDN): Diseño del menú y página.

## Notas
- Los logs se guardan en `logs/home.log` para la página principal y en `logs/app.log` para eventos generales.
- El contenido de la página principal está en `views/home.html`.
- Puedes añadir más rutas en `routes/index.js` y más archivos HTML en `views/`.
