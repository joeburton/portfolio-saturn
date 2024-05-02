# React + TypeScript + Vite + Storybook

### Create application

- npm create vite@latest vite-boilerplate -- --template react-ts

### Install storybook

- npm install @storybook/builder-vite --save-dev
- npx storybook@latest init

### Reference / Install MSW

- Reference: https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib-msw
- Testing React Components: https://www.robinwieruch.de/react-testing-library/
- Vite MSW Browser: https://www.raisiqueira.io/drops/vite-msw

### Tasks

- [x] Add storybook
- [x] Add React Testing Library
- [x] Add MSW
- [-] Add browser based mocking

### This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
