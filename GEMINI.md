# GEMINI.md

## Project Overview

This project is a personal website built with Next.js and Tailwind CSS. It showcases the portfolio and services of a freelance developer. The website is designed to be responsive, with a mobile-first approach.

The project uses the following key technologies:

*   **Next.js:** For server-side rendering and routing.
*   **React:** For building the user interface.
*   **TypeScript:** For static typing.
*   **Tailwind CSS:** For styling the application.
*   **Framer Motion:** For animations.
*   **Lucide React:** For icons.

The application is structured using the Next.js App Router. The main page is `src/app/page.tsx`, which is composed of several React components. The overall layout is defined in `src/components/Layout.tsx`, which includes a header and a footer. The header is responsive and includes a navigation drawer for mobile devices.

## Building and Running

To build and run this project, you will need to have Node.js and npm (or yarn/pnpm) installed.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
4.  **Build the project:**
    ```bash
    npm run build
    # or
    yarn build
    # or
    pnpm build
    ```

## Development Conventions

*   **Component-Based Architecture:** The UI is built using React components, which are located in the `src/components` directory.
*   **Styling:** Tailwind CSS is used for styling. Utility classes are used directly in the JSX code.
*   **Routing:** The Next.js App Router is used for routing. Pages are created as directories in the `src/app` directory.
*   **Constants:** Constants such as personal information and navigation items are stored in `src/utils/constants.ts`.
*   **Linting:** The project uses ESLint for linting the code. The linting configuration is defined in the `.eslintrc.json` file.
*   **Type Checking:** TypeScript is used for static type checking. The TypeScript configuration is defined in the `tsconfig.json` file.
