import type { Theme } from './types'

import { defaultTheme } from './default.js'
import { defaultDarkTheme } from './defaultDark.js'

const themes = {
  default: defaultTheme,
  defaultDark: defaultDarkTheme,
}

type ThemeNames = keyof typeof themes

export { themes }
export type { Theme, ThemeNames }
