/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkGrey": "#2F2F2F"
      }
    },
  },
  plugins: [],
}
