import Theme from '@s-ui/react-ecosystem-theme'

export const decorators = [
  Story => (
    <div style={{ paddingTop: '1rem' }}>
      <Story />
    </div>
  ),
  Story => (
    <Theme
      tokens={{

      }}
    >
      <Story />
    </Theme>
  ),
]
