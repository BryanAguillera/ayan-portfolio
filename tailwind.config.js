/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
  
    extend: {
      colors: {
        background: '#ffffff', // Custom blue
        primary: '#771414', // Custom orange
        secondary: '#BEBA46', // Custom green
      },
      fontFamily: {
        custom: ['"Rubik80sFade-Regular"']
      }
    },
    
  },
  plugins: [],
}

