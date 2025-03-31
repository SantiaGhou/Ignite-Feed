# Ignite

Ignite is a minimal React + Vite project that offers a fast development experience with Hot Module Replacement (HMR) and built-in ESLint rules for a clean codebase.

## Overview

Built using [Vite](https://vitejs.dev) and [React](https://reactjs.org), this project provides:
- A blazing fast development server.
- HMR support using either [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) (Babel-based) or [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) (SWC-based).
- A starting point to integrate ESLint for ensuring code quality.

## Features

- **Fast Setup:** Quickly start coding with a basic React + Vite template.
- **Hot Module Replacement (HMR):** Experience immediate updates without full page reloads.
- **ESLint Integration:** Get started with a set of ESLint rules to maintain a consistent code style.
- **Flexible:** Option to integrate TypeScript with [`typescript-eslint`](https://typescript-eslint.io) when expanding your project.

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SantiaGhou/fundamentos1.git
```

2. Navigate to the project directory:
```bash
cd fundamentos1
```

3. Install the dependencies:
```bash
npm install
```

### Running Locally

To start the development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Building for Production

To create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
