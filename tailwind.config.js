/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
      maxHeight: {
        '128': '36rem'
      },
      scale: {
        '25': '0.25',
      },
      screens: {
        'xxl': '1520px',
        'xs': '415px'
      }
    },
  },
  plugins: [],
}