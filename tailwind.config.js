/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amarelo': '#FBAF17',
        'azul_escuro': '#202332',
        'cinza_escuro': '#333'
      }
    },
  },
  plugins: [],
}

