/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",       // Includes all subdirectories and files in 'app'
    "./components/**/*.{js,jsx,ts,tsx}" // Includes all subdirectories and files in 'components'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
