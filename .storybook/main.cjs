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
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        if (!prop.parent) return true;

        const canDisplayProp = !/node_modules(?!@radix-ui)/.test(
          prop.parent.fileName
        );

        return prop.parent ? canDisplayProp : true;
      },
    },
  },
};

// // ? /node_modules(?!@radix-ui)/.test(prop.parent.fileName)
