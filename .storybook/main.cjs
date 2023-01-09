const path = require("path");
module.exports = {
  async viteFinal(config, { configType }) {
    return {
      ...config,
    };
  },
  stories: ["../src/stories/**/*.mdx", "../src/**/*.stories.@(mdx|ts|tsx)"],
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
    autodocs: "tag",
  },
  typescript: {
    // enable type checking
    check: true,
  },
};
