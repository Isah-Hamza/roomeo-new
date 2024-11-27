/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#F45E51',
        'dark-black': '#434343',
        'light-dark': '#333333',
        'faint-red': '#F45E511F'
      },
    },
  },
  plugins: [],
}