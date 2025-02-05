/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'tablebg':"url('/src/Assets/table.jpg')",
        'table1bg':"url('/src/Assets/table.jpeg')",
        'foodbg':"url('/src/Assets/food.jpeg')",
        'backgroundbg':"url('/src/Assets/background.jpg')",
      }
    },
  },
  plugins: [],
}