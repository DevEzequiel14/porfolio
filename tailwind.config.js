/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#112526',
      },
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

