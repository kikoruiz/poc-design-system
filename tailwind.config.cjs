const themeConf = require('./tailwind.theme.conf.cjs')

/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    ...themeConf,
  },
  content: [
    './packages/**/*.{js,ts,jsx,tsx}',
    /* 👇 in order for the theme switching to work in dev mode */
    './src/tailwind.css',
  ],
  plugins: [require('tailwindcss-radix')()],
}
