import { alternativeTheme } from './alternative.js'
import { defaultTheme } from './default.js'
import { defaultDarkTheme } from './defaultDark.js'
import type { Theme } from './types'

const themes = {
  default: defaultTheme,
  defaultDark: defaultDarkTheme,
  alternative: alternativeTheme,
}

type ThemeNames = keyof typeof themes

export { themes }
export type { Theme, ThemeNames }
