import '../src/tailwind.css';

import { themes } from "../src/themes";

const themeEntries = Object.entries(themes);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: themeEntries[0][0],
    list: Object.entries(themes).map(([name, themeConfig]) => ({
      name,
      class: name,
      color: themeConfig.colors.bg.body,
    })),
  },
};

export const decorators = [
  (Story) => (
    <div style={{ paddingTop: "1rem" }}>
      <Story />
    </div>
  ),
];
