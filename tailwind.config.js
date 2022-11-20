/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cust-grey': "#F2F2F2",
        'cust-orange': "#9E4E37",
        'body': "#E4E2D6",
        'header': "#EAEAE6",
        "footer": "#585547",
      },
      fontFamily: {
        display: "Alfa Slab One, cursive",
        body: "Comfortaa, cursive"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
