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
        typography: {
          fontSize: { base: 'calc(var(--sz-base) * 2)' },
        },
        size: {
          padding: { base: 'calc(var(--sz-base) * 4)' },
          borderRadius: { base: 'calc(var(--sz-base) * 2)' }
        },
      }}
    >
      <Story />
    </Theme>
  ),
]
