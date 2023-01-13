const themeConf = require('./tailwind.theme.conf.cjs')

/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    ...themeConf,
  },
  content: ['./src/tailwind.css', './packages/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('tailwindcss-radix')()],
}
