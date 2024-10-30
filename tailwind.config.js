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
      rotate: {
        '19': '19deg',
      }
    },
  },
  plugins: [],
}

