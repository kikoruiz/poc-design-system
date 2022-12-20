const path = require("path");
module.exports = {
  async viteFinal(config, { configType }) {
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@stories",
            replacement: path.resolve(__dirname, "../src/stories"),
          },
          {
            find: "@components",
            replacement: path.resolve(__dirname, "../src/components"),
          },
        ],
      },
    };
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    docsPage: true,
  },
};
