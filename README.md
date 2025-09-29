# Ingeniería & Arquitectura – Portafolio (Vite + React + Tailwind)

Proyecto base migrado desde Express a un frontend moderno con React y Vite. Incluye TailwindCSS, React Router y una galería de proyectos con datos de ejemplo.

## Estructura

- `src/components/`: `Navbar`, `Footer`, `Layout`.
- `src/pages/`: `Home`, `Services`, `Projects`, `Contact`.
- `src/data/projects.json`: datos de ejemplo para la galería.
- `public/`: `logo.svg`, `placeholder.svg`.

## Requisitos

- Node.js 18+ (recomendado)

## Desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Rutas

- `/` – Inicio
- `/servicios` – Servicios
- `/proyectos` – Proyectos (galería)
- `/contacto` – Contacto

## Despliegue en Vercel

Opción A – Dashboard (sin CLI):
- Crea un nuevo proyecto desde tu repositorio.
- Framework Preset: Vite.
- Build Command: `vite build` (por defecto `npm run build`).
- Output Directory: `dist`.
- El archivo `vercel.json` ya incluye un rewrite para SPA, garantizando que el router del cliente funcione.

Opción B – Vercel CLI:
```bash
npm i -g vercel
vercel
# Responde a las preguntas (framework Vite, output dist)
```

## Personalización

- Reemplaza imágenes en `public/` y agrega recursos en `src/assets/` si lo necesitas.
- Edita `src/data/projects.json` con tus proyectos reales.
- Ajusta la paleta en `tailwind.config.js`.
