const themeConf = require("./tailwind.theme.conf.cjs");

/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    ...themeConf,
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
};
