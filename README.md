# PWA Scaffolding

This repository provides a starting point for all our web projects. It contains essential setup and structure to build Progressive Web Applications efficiently and consistently.

## Usage Instructions

### 1. Clone the Repository

When starting a new web project, clone this repository into your project's new repository:

```sh
$ git clone <url-of-this-repo> <your-new-project-name>
```

This will bring all the initial scaffolding to your project, ready for you to customize and build upon.

### 2. Update the Styles Directory

After cloning, ensure that the `/styles` directory aligns 1:1 with the Figma design provided for the project. This will ensure the visual aspects of your project are consistent with the design specifications.

### 3. Update Project Name

After updating the styles, change the project name in the following files:
- `package.json`
- `vite.config.ts`
- `index.html`

### 4. Update Screenshots and Icons

Update the screenshots and icons in the `public` folder to match the branding and design of the new project.

### 5. Development

You can start building the project from this base. Make sure to keep all development aligned with the architecture and conventions established here to ensure consistency across our projects.

### 6. Application Structure

The application has the following structure:
- **Routes**: Each route points to a specific page in the application.
- **Pages**: Pages represent different sections of the application and can have their own unique layouts and content.
- **Layouts**: Layouts are used to define the overall structure of a page, providing a consistent look and feel across multiple pages.
- **Components**: Components are reusable UI elements used within pages and layouts to build the interface.

### 7. State and Themes Management

The application stores state and themes using contexts:
- **Theme Context**: Themes are handled using `ThemeContext.tsx`. This file provides an example of how to manage and apply different themes across the application.
- **Auth Context**: Application state is handled using `AuthContext.tsx`. This context manages authentication state and serves as an example of handling global state within the application.

### 8. Hooks Usage

The scaffolding also includes an example of how hooks should be used:
- **Custom Hook**: The `./src/hooks/useSignIn.tsx` file is an example of a custom hook that interacts with the `AuthContext.tsx` context and the `useSignIn.ts` page. This demonstrates the best practices for using hooks to manage functionality and state within the application.

### 9. Localization

All text used in the application is sourced from the `./src/locales/*` directory. When adding new locales, make sure to configure them in `./src/i18n.ts` to ensure they are properly included in the application.

### 10. Onboarding New Developers

Any new developer joining the company needs to spend as much time as necessary to become familiar with the boilerplate. This foundation is the bedrock of all our web projects, and a thorough understanding is crucial to ensure consistency and efficiency across the team.

## Key Features
- **PWA Ready**: Basic configurations for a Progressive Web App are already in place.
- **Standardized Styles Directory**: A styles directory structure that keeps styling organized and in sync with the Figma design.

## Contribution Guidelines
If you make improvements to the scaffolding that could benefit future projects, consider contributing back to this repository by submitting a pull request.

---

Feel free to reach out with any questions or suggestions for improving the base scaffolding!
