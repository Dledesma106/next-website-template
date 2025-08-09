import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores Semánticos Wireframe - Definidos directamente
        primary: '#171717',      // Gris muy oscuro
        secondary: '#495057',    // Gris medio
        accent: '#212529',       // Gris oscuro
        success: '#343a40',      // Gris medio-oscuro
        warning: '#6c757d',      // Gris medio
        error: '#212529',        // Gris oscuro
        destructive: '#171717',  // Gris muy oscuro
        info: '#adb5bd',         // Gris claro
        surface: '#e9ecef',      // Gris muy claro
        background: '#f8f9fa',   // Gris casi blanco
        muted: '#dee2e6',        // Gris claro
        border: '#ced4da',       // Gris medio-claro
      },
    },
  },
  plugins: [],
}

export default config 