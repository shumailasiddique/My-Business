# Front-End Website Standard Operating Procedure (SOP)

This document outlines the standard operating procedure for setting up front-end websites within our company. The goal is to ensure consistent project structure, best practices, and high performance across all front-end projects.

## 1. Project Initialization

- Ensure **Node.js** and **NPM** are installed.
  ```bash
  node -v
  npm -v
  ```
  
- Create a Vite, React, and TypeScript project:
  ```bash
  npm create vite@latest my-project -- --template react-ts
  cd my-project
  npm install
  ```

## 2. Setting Up PWA

- Install the Vite PWA plugin:
  ```bash
  npm install vite-plugin-pwa --save-dev
  ```

- Configure PWA in \`vite.config.ts\`:
  ```ts
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import { VitePWA } from 'vite-plugin-pwa';

  export default defineConfig({
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: { enabled: true },
        manifest: {
          name: 'My Awesome PWA',
          short_name: 'AwesomePWA',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          icons: [
            { src: '/192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/512x512.png', sizes: '512x512', type: 'image/png' }
          ],
        },
      }),
    ],
  });
  ```

- Add \`192x192.png\` and \`512x512.png\` to the \`public\` directory.

- Update \`index.html\` for PWA compatibility:
  ```html
  <link rel="manifest" href="/manifest.webmanifest">
  <meta name="theme-color" content="#ffffff">
  ```

- Test the PWA locally with:
  ```bash
  npm run dev
  ```

## 3. i18n Setup (Multi-language Support)

- Install i18next and the language detector:
  ```bash
  npm install i18next i18next-browser-language-detector
  ```

- Set up i18next in \`i18n.ts\`:
  ```ts
  import i18n from 'i18next';
  import { initReactI18next } from 'react-i18next';
  import LanguageDetector from 'i18next-browser-language-detector';
  import en from './locales/en.json';
  import es from './locales/es.json';
  import sv from './locales/sv.json';
  import cn from './locales/cn.json';

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: { en, es, sv, cn },
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      detection: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage', 'cookie'],
      },
    });

  export default i18n;
  ```

## 4. Project Structure

- Create the following folders:
  ```
  src/
    ├── components
    ├── contexts
    ├── hooks
    ├── layouts
    ├── locales
    ├── utils
    ├── styles
    ├── tests
  ```

## 5. Global Styles and Themes

- Create \`styles/global.ts\` for global styles:
  ```ts
  import { createGlobalStyle } from 'styled-components';

  export const GlobalStyles = createGlobalStyle<{ theme: any }>\`
    body, html, #root {
      margin: 0;
      padding: 0;
      background-color: \${({ theme }) => theme.tokens.backgroundColor};
      color: \${({ theme }) => theme.tokens.textColor};
      font-family: \${({ theme }) => theme.tokens.fontFamily};
    }
  \`;
  ```

- Define primitives in \`styles/primitives.ts\`:
  ```ts
  export const colors = { lightBackground: '#ffffff', darkBackground: '#333333' };
  export const fontSizes = { small: '12px', medium: '16px', large: '24px' };
  export const fonts = { base: '"Helvetica Neue", Arial, sans-serif' };
  ```

- Define tokens for light and dark themes in \`styles/tokens.ts\`:
  ```ts
  import { colors, fonts } from './primitives';

  export const lightTheme = { tokens: { backgroundColor: colors.lightBackground } };
  export const darkTheme = { tokens: { backgroundColor: colors.darkBackground } };
  ```

## 6. State Management

- Use **Context API** to manage state, stored in the **local browser database** (e.g., localStorage or sessionStorage).
- Keep all business logic (e.g., API calls) in \`Hooks\` or \`Utils\`. **Do not include logic in \`Components\` or \`Layouts\`.**

## 7. Error Handling

- Standardize error handling using custom hooks (e.g., \`useApi\`) and components like \`Notification\` or \`Toast\` for consistent UI messaging.

## 8. Accessibility

- Ensure all components are accessible and compliant with **WCAG** standards.
- Use tools like **axe** or **Lighthouse** to audit accessibility.

## 9. Performance Optimization

- Implement lazy loading, code splitting, and tree shaking.
- Perform Lighthouse checks for performance, accessibility, and SEO.

## 10. CI/CD Pipelines

- Set up a CI/CD pipeline with **GitHub Actions**, **Travis CI**, or **CircleCI** to automate testing and deployment.

## 11. Testing Strategy

- Use **Jest** or **React Testing Library** for unit testing and **Cypress** for end-to-end tests.
- Organize tests in a \`tests\` or \`__tests__\` folder.

## 12. Security

- Ensure secure input sanitization, secure token handling, and secure cookie settings.
