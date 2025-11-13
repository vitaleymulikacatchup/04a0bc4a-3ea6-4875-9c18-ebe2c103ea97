/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'bitninja-red': '#c41e3a',
        'bitninja-dark-red': '#a01729',
        'bitninja-gray': '#6b7280',
        'bitninja-light-gray': '#f3f4f6',
        'bitninja-border': '#e5e7eb'
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}