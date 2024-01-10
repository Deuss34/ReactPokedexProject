/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "beige-dark": "#E8DCB5",
        "beige-light": "#FAF0DC"
      }
    },
  },
  plugins: [],
}