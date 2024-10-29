/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Norse', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

