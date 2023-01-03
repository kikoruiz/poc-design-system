import { themes } from "../src/themes";

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
    list: Object.entries(themes).map(([name, themeConfig]) => ({
      name,
      class: name,
      color: themeConfig.colors.primaries.first,
    })),
  },
};
