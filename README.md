# Front-End Website Standard Operating Procedure (SOP)

This document outlines the standard operating procedure for setting up front-end websites within our company. The goal is to ensure consistent project structure, best practices, and high performance across all front-end projects.

## 1. Project Initialization

- Ensure \*\*Node.js\*\* and \*\*NPM\*\* are installed. You can verify your installation by running:

 ```bash
  node -v
  npm -v
 ```

- Install \*\*ngrok\*\* and set up an account if you don\'t already have one:

  1\. Visit the \[ngrok website\]\(https\:\/\/ngrok.com\/\) and sign up for a free account\.
  2\. Download and install \*\*ngrok\*\* by following the platform-specific installation instructions on their website\.

  To verify that ngrok is installed correctly, run:
  
 ```bash
  ngrok version
 ```

  This should display the version number of ngrok\.

- \*\*Authenticate ngrok\*\* with your account:

  After installing ngrok, you’ll need to authenticate it using your \*\*ngrok authtoken\*\*\.
  You can find the authtoken in your ngrok dashboard under \*\*Your Authtoken\*\*\.

  Run the following command to authenticate:

 ```bash
  ngrok config add-authtoken \<your-authtoken\>
 ```

  Replace \`\<your-authtoken\>\` with your actual token\.

- Create a Vite, React, and TypeScript project:

 ```bash
  npm create vite\@latest my-project -- --template react-ts
  cd my-project
  npm install
 ```

- Install \*\*wait-on\*\* to ensure ngrok starts only after the Vite development server is ready:

 ```bash
  npm install wait-on --save-dev
 ```

- Update the \`scripts\` section in your \`package\.json\` to include \*\*wait-on\*\* and \*\*ngrok\*\*:

  Open your \`package\.json\` and modify the \`dev\` script as follows:

 ```json
  "scripts": {
    "dev": "vite & wait-on http\:\/\/localhost\:5173 && ngrok http 5173",
    "build": "tsc -b && vite build",
    "lint": "eslint \.",
    "preview": "vite preview"
  }
 ```

  This script:
  - Runs \`vite\` to start the local development server\.
  - Uses \`wait-on\` to ensure the server at \`http\:\/\/localhost\:5173\` is fully running before starting ngrok\.
  - Exposes the development server over HTTPS using ngrok, making it accessible via a public URL\.

- To start the development server and expose it with ngrok, run:

 ```bash
  npm run dev
 ```

  You will receive a publicly accessible URL from ngrok, such as:

 ```
  https\:\/\/\<random-subdomain\>\.ngrok-free\.app
 ```

  Use this URL to share your local app or test it on external devices\.

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

## 5. Global Styles, Themes, and Text Styles

### Defining Primitives

In \`styles/primitives.ts\`, we define all the basic building blocks like colors, font sizes, and font families. These primitives are used throughout the project to ensure consistency in design.

```ts
// styles/primitives.ts
export const colors = {
  grey900: '#262a32',
  grey800: '#2e343d',
  grey700: '#373d48',
  grey500: '#9fa8b6',
  grey300: '#e3e5ea',
  grey200: '#eeeff2',
  grey100: '#f9fafb',
  white: '#ffffff',
  black: '#1e1e1e',
  blue: '#0087f5',
  red: '#c73232',
  primary: '#adde34',
  secondary: '#275347',
};

export const fontSizes = {
  small: '0.75rem', /* 12px */
  medium: '1rem',   /* 16px */
  large: '1.5rem',  /* 24px */
  mediumHero: '2.25rem', /* 36px */
  boldHero: '3rem',      /* 48px */
};

export const radius = {
  standard: '4px',
  large: '12px',
  exreme: '24px',
};

export const spacing = {
  tightSpacing: '0.25rem', /* 4px */
  regularSpacing: '0.75rem', /* 12px */
  doubleSpacing: '1.5rem', /* 24px */
  sixTimesSpacing: '4.5rem', /* 72px */
};

export const fonts = {
    base: 'Inter, sans-serif',
};
```

### Global Styles

In \`styles/global.ts\`, we apply global styles to foundational HTML elements, using the theme's tokens (which reference the primitives defined above).

```ts
// styles/global.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: any }>\`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%; 
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    background-color: \${({ theme }) => theme.tokens.baseBackgroundColor}; 
    color: \${({ theme }) => theme.tokens.baseTextColor};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (max-width: 768px) {
      font-size: 14px; 
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0; 
    font-weight: normal; 
  }

  p {
    margin: 0; 
  }

  ul, ol {
    padding: 0; 
    list-style: none; 
  }

  a {
    text-decoration: none;
    color: inherit; 
  }

  form {
    width: 100%;
  }
\`;
```

### Theme Tokens

In \`styles/tokens.ts\`, we define the light and dark themes. These tokens use the colors and fonts from \`primitives.ts\` to create the different theme settings.

```ts
// styles/tokens.ts
import { colors, fonts } from './primitives';

export const lightTheme = {
  tokens: {
    backgroundColor: colors.grey900,
    textColor: colors.black,
    fontFamily: fonts.base,
  },
};

export const darkTheme = {
  tokens: {
    backgroundColor: colors.grey200,
    textColor: colors.white,
    fontFamily: fonts.base,
  },
};
```

### Text Styles

In \`styles/textStyles.ts\`, we define reusable text styles for different font sizes and weights, ensuring consistency across components. These styles accept a \`color\` parameter to allow flexibility.

```ts
// styles/textStyles.ts
import { css } from 'styled-components';
import { textSizes, fonts } from './primitives';

export const mediumHero = (color: string) => css\`
  font-family: \${fonts.base};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.62px;
  font-size: \${textSizes.mediumHero};
  color: \${color};
\`;

export const boldHero = (color: string) => css\`
  font-family: \${fonts.base};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: \${textSizes.boldHero};
  color: \${color};
\`;
```

## 6. ThemeContext Setup

To manage light and dark theme preferences, set up the \`ThemeContext.tsx\`:

```ts
// src/contexts/ThemeContext.tsx
import React, { createContext, useEffect, useState, ReactNode } from 'react';

const ThemeContext = createContext({ isLightTheme: true, toggleTheme: () => {} });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  // Detect user preference for light theme
  useEffect(() => {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    setIsLightTheme(prefersLight);
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setIsLightTheme(prevTheme => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
```

## 7. React Router Setup

Add React Router to handle navigation in \`App.tsx\`:

```ts
// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

## 8. State Management

- Use **Context API** to manage state, stored in the **local browser database** (e.g., localStorage or sessionStorage).
- Keep all business logic (e.g., API calls) in \`Hooks\` or \`Utils\`. **Do not include logic in \`Components\` or \`Layouts\`.**

## 9. Error Handling

- Standardize error handling using custom hooks (e.g., \`useApi\`) and components like \`Notification\` or \`Toast\` for consistent UI messaging.

## 10. Accessibility

- Ensure all components are accessible and compliant with **WCAG** standards.
- Use tools like **axe** or **Lighthouse** to audit accessibility.

## 11. Performance Optimization

- Implement lazy loading, code splitting, and tree shaking.
- Perform Lighthouse checks for performance, accessibility, and SEO.

## 12. CI/CD Pipelines

- Set up a CI/CD pipeline with **GitHub Actions**, **Travis CI**, or **CircleCI** to automate testing and deployment.

## 13. Testing Strategy

- Use **Jest** or **React Testing Library** for unit testing and **Cypress** for end-to-end tests.
- Organize tests in a \`tests\` or \`__tests__\` folder.

## 14. Security

- Ensure secure input sanitization, secure token handling, and secure cookie settings.

## 15. Functional Programming Style

We aim to follow a **functional programming** approach wherever possible. This helps to keep code more predictable, easier to test, and free from side effects. Here are some guidelines to follow:

- **Pure Functions**: Aim to write pure functions that don’t modify outside variables or state. A pure function always produces the same output given the same input.
  
- **Immutability**: Avoid mutating objects or arrays directly. Instead, return new objects or arrays with the necessary changes. For example, use \`map\`, \`filter\`, and \`reduce\` for handling arrays instead of loops that mutate them.

- **Declarative over Imperative**: Emphasize **what** should be done rather than **how**. Use built-in array methods like \`forEach\`, \`map\`, and \`filter\` instead of manually iterating over data with loops.

- **Avoid Side Effects**: Keep functions side-effect free when possible. If side effects are needed (e.g., API calls, logging), isolate them in specific functions (e.g., hooks or utilities) that are designed to handle side effects.

- **Higher-Order Functions**: Make use of higher-order functions (functions that take other functions as arguments or return functions) to keep your code DRY and reusable.

- **Use Hooks for State**: Keep all state management, especially side effects like API calls, within hooks. This helps maintain a clear separation of concerns between your UI and logic.

Following a functional programming style helps ensure the consistency, maintainability, and predictability of your codebase.

## 16. Naming Conventions

Naming is crucial for creating clear, readable, and maintainable code. Consistent and logical naming helps all team members understand the purpose of variables, functions, components, and files at a glance. Here are some best practices for naming in this project:

### 1. **Descriptive and Specific**
   - Names should describe **what** the function, variable, or component is and **why** it exists, rather than **how** it works.
   - Avoid overly generic names like \`data\`, \`item\`, or \`handleClick\`. Instead, aim for names like \`userData\`, \`fetchUserDetails\`, or \`onSubmitForm\` to add clarity.
   
### 2. **Consistent Case Style**
   - Use **camelCase** for variables and function names:
     ```js
     const userName = 'John';
     function fetchUserDetails() {}
     ```
   - Use **PascalCase** for React components:
     ```js
     const UserProfile = () => { ... }
     ```
   - Use **kebab-case** for CSS classes or file names:
     ```css
     .user-profile { ... }
     ```

### 3. **Avoid Abbreviations**
   - Avoid using short or cryptic abbreviations. It's better to be explicit, even if the name is slightly longer, to ensure readability.
     - Instead of \`usr\`, use \`user\`.
     - Instead of \`btnClk\`, use \`handleButtonClick\`.

### 4. **Boolean Variables Should Sound Like Questions**
   - For boolean variables or functions that return a boolean, name them like questions:
     ```js
     const isLoggedIn = true;
     function hasAccess() {}
     ```

### 5. **Consistent Naming in Context**
   - Maintain consistency in similar contexts. For example, if you name a function \`getUserProfile\`, ensure similar functions follow the same pattern (e.g., \`getUserSettings\`, \`getUserOrders\`).

### 6. **Avoid Using Magic Numbers and Strings**
   - Instead of using hard-coded values, define constants with meaningful names:
     ```js
     const MAX_RETRY_ATTEMPTS = 3;
     const DEFAULT_THEME = 'light';
     ```

### 7. **File Naming**
   - Files should be named after the primary component, hook, or utility they export.
   - React components should be named in **PascalCase** (e.g., \`UserProfile.tsx\`).
   - Utility or helper functions should be named in **kebab-case** or **camelCase**, depending on the team's convention (e.g., \`fetch-data.ts\` or \`fetchData.ts\`).

### 8. **Function Naming**
   - Functions should describe an action, and where possible, be named with a verb (e.g., \`fetchUser\`, \`updateProfile\`, \`handleSubmit\`).

### 9. **Avoid Prefixing with Generic Words**
   - Avoid naming things with generic prefixes like \`data\`, \`info\`, or \`object\`. Be more descriptive of what the variable or function holds or does:
     ```js
     // Instead of
     const data = fetchData();

     // Prefer
     const userData = fetchUserData();
     ```

### 10. **Component Naming**
   - React components should be named after what they render. For example, a component rendering user details should be named \`UserDetails\`, not just \`Details\` or \`Component\`.

By following these naming conventions, we ensure that the code remains self-documenting, making it easier for current and future developers to understand and work with the codebase.
