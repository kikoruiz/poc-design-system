export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: "twitter",
    list: [
      { name: "leboncoin", class: "theme-lbc", color: "#00aced" },
      { name: "ebay-kleinanzeigen", class: "theme-ebay-k", color: "#3b5998" },
    ],
  },
};
