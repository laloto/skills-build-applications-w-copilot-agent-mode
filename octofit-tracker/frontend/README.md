# Octofit Tracker frontend

The presentation tier uses React 19, Vite, Bootstrap, and `react-router-dom`.

## API configuration

Define `VITE_CODESPACE_NAME` in `.env.local` when the backend is running in GitHub Codespaces:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

The components request `https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/` in Codespaces. When the variable is unset, they use `http://localhost:8000/api/[component]/`, avoiding an `https://undefined-8000...` URL during local development.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
