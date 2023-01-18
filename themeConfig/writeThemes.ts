import { appendFileSync } from 'fs'
import hexRgb from 'hex-rgb'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { Theme, themes } from '../src/themes/index.js'
import { isHex, objectEntries, objectKeys, toKebabCase } from './utils.js'

const __filename = fileURLToPath(import.meta.url)

/* eslint-disable-next-line @typescript-eslint/ban-types */
type FlattenedTheme = Record<'className' | (string & {}), string>

function flattenTheme(theme: Theme, className: string): FlattenedTheme {
  const flattenedTheme = {} as FlattenedTheme

  function flatten(obj: Theme, path?: string) {
    objectEntries(obj as unknown as Record<string | number, number>).forEach(([key, value]) => {
      if (value !== null && typeof value === 'object') {
        const formattedPath = path ? `--${path}-${key}` : `--${key}`
        flatten(value as unknown as Theme, toKebabCase(formattedPath.replace(/-{3,}/, '--')))

        return
      }

      if (typeof value === 'string') {
        const getFormattedValue = () => {
          if (isHex(value)) {
            const { red, green, blue } = hexRgb(value)

            return `${red} ${green} ${blue}`
          }

          return value
        }

        flattenedTheme[`${path}-${toKebabCase(key as string)}`] = getFormattedValue()
      }
    })
  }

  flatten(theme)

  return {
    ...flattenedTheme,
    className,
  }
}

function appendWriteFile(filename: string, data: string) {
  appendFileSync(join(dirname(__filename), filename), data, {
    flag: 'w',
  })
}

const stringifiedTheme = (theme: Record<string, string>) =>
  Object.entries(theme)
    .map(([k, v]) => `${k}:${v}`)
    .join(';')

const stringifiedThemes = objectKeys(themes).map(key => {
  const { className, ...rest } = flattenTheme(themes[key], key)

  return key === 'default'
    ? `:root{${stringifiedTheme(rest)}}`
    : `.${className}{${stringifiedTheme(rest)}}`
})

appendWriteFile(
  '../src/tailwind.css',
  `
  /* purgecss start ignore */
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  /* purgecss end ignore */
  @import 'tailwindcss/utilities';
  @layer base {${stringifiedThemes.join('')}}
`
)
