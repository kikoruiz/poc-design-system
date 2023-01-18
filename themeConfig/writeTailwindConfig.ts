import { writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { themes } from '../src/themes/index.js'
import type { Theme } from '../src/themes/types'
import { isHex, objectEntries, toKebabCase, toKebabCaseKeys } from './utils.js'

const __filename = fileURLToPath(import.meta.url)

function toTailwindConfig(theme: Theme): Record<string, Theme[keyof Theme]> {
  const themeCpy: Theme = JSON.parse(JSON.stringify(theme))

  function flatten(obj: Theme, path?: string) {
    objectEntries(obj as unknown as Record<string | number, number>).forEach(([key, value]) => {
      if (value !== null && typeof value === 'object') {
        const formattedPath = path ? `--${path}-${key}` : `--${key}`
        flatten(value as unknown as Theme, toKebabCase(formattedPath.replace(/-{3,}/, '--')))

        return
      }

      /* eslint-disable */
      if (typeof value === 'string') {
        const formattedPath =
          /--colors/.test(path || '') && isHex(value)
            ? `rgb(var(${path}-${toKebabCase(key as string)}) / <alpha-value>)`
            : `var(${path}-${toKebabCase(key as string)})`

        /* @ts-ignore */
        obj[key as any] = formattedPath
        /* eslint-enable */
      }
    })
  }

  flatten(themeCpy)

  return toKebabCaseKeys(themeCpy)
}

function syncWriteFile(filename: string, data: string) {
  writeFileSync(join(dirname(__filename), filename), data, {
    flag: 'w',
  })
}

syncWriteFile(
  '../tailwind.theme.conf.cjs',
  `module.exports = ${JSON.stringify(toTailwindConfig(themes.default))} `
)
