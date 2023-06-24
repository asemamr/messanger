/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      dropShadow: {
        '3xl': '-5px 0 50px rgba(0, 0, 0, 0.10)',
      }
    },
  },
  plugins: [],
}
