import { themes } from '../src/themes'
import Theme from '@s-ui/react-ecosystem-theme'

const themeEntries = Object.entries(themes)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
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
      color: themeConfig.colors.bg.primary,
    })),
  },
}

export const decorators = [
  Story => (
    <div style={{ paddingTop: '1rem' }}>
      <Story />
    </div>
  ),
  Story => (
    <Theme
    //tokens={{ colors: { color: 'darkgreen' } }}
    >
      <Story />
    </Theme>
  ),
]
