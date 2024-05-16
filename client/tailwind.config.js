/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,css,jsx}",
    "./index.html",
    "./src/*.{jsx,css}"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      },
    },
  },
  plugins: []
}

