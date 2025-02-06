/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navbar: '#EBE8F3',
        morado: '#511F52',
        lila: '#EFE1F2',
        hueso: '#F2F2F2',
        gris: '#E5E5E5',
        plomo: '#4B4B4B',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        secondary: ['Vidaloka', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
        }
      },
    },
  },
  plugins: [],
}

