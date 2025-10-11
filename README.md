# ViteX - RTJV Template

Minimal template for web projects using React + Tailwind + JavaScript + Vite.

## Description

- Project initialized from a Vite template with React and Tailwind.
- A simple structure designed to help you get started quickly, with HMR and Tailwind preconfigured.

## Main files

- Project configuration: [package.json](package.json)
- Vite configuration: [vite.config.js](vite.config.js)
- HTML entry: [src/index.html](src/index.html)
- React entry point: [src/index.jsx](src/index.jsx)
- Tailwind import: [src/index.css](src/index.css)
- Root component: [`App`](src/App/App.jsx)
- Routes: [`AppRoutes`](src/Routes/Routes.jsx)
- Home page: [`Home`](src/Pages/Home/Home.jsx)

## Requirements

- Node.js (LTS recommended)
- npm

## Installation

```sh
npm install
```

## Useful scripts

- Start development (Vite, HMR): `npm run dev`
- Build for production: `npm run build`
- Run ESLint: `npm run lint`
- Format with Prettier: `npm run prettier`

## Quick edits

- React entry point: [src/index.jsx](src/index.jsx)
- Home page: edit [src/Pages/Home/Home.jsx](src/Pages/Home/Home.jsx)
- Styles / Tailwind import: [src/index.css](src/index.css)
- Dev server port: see [vite.config.js](vite.config.js) (default configured to 8080)

## Notes

- Tailwind is imported in [src/index.css](src/index.css).
- Routing is handled by React Router: see [`AppRoutes`](src/Routes/Routes.jsx).

## License

- MIT
- This project is open source — feel free to fork, modify, and redistribute.
