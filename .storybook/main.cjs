const path = require('path')
module.exports = {
  async viteFinal(config, { configType }) {
    return {
      ...config,
    }
  },
  stories: ['../docs/**/*.mdx', '../src/**/*.stories.@(mdx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      propFilter: prop => {
        const prohibitedPropsRegexes = [/node_modules\/\@types\/react\/index.d.ts/]

        if (prop.declarations?.length > 0) {
          const isProhibitedProps = prop.declarations.some(declaration =>
            prohibitedPropsRegexes.some(regex => regex.test(declaration.fileName))
          )

          return !isProhibitedProps
        }

        return true
      },
    },
  },
}
