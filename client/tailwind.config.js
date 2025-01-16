/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          100:'rgba(249, 58, 83, 1)'
        }
      }
    },
  },
  plugins: [],
}