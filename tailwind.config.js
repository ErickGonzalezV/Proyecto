/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C1502E',    // Color terracota de La Vasera
        secondary: '#FDF6E9',  // Color crema del fondo
        accent: '#8B4513',     // Color café para acentos
        brown: {
          light: '#D4A484',    // Café claro
          DEFAULT: '#8B4513',  // Café medio
          dark: '#4A3728'      // Café oscuro
        }
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['Arial', 'sans-serif']
      },
      backgroundImage: {
        'texture': "url('/texture.png')"
      }
    },
  },
  plugins: [],
}
