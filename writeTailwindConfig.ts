import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { themes } from "./src/themes/index.js";
import type { Theme } from "./src/themes/types";

const __filename = fileURLToPath(import.meta.url);

function objectEntries<T extends Record<string | number, unknown>>(
  obj: T
): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
}

function toKebabCase(v: string) {
  return v.replace(/[A-Z]/g, (e) => `-${e.toLocaleLowerCase()}`);
}

function isHex(str: string) {
  const regexp = /^#[0-9a-fA-F]+$/;

  return regexp.test(str);
}

function toKebabCaseKeys<T extends Object>(
  obj: T,
  level = 1
): Record<string, T[keyof T]> {
  const result: any = {};
  for (const key in obj) {
    const value =
      typeof obj[key] === "object"
        ? toKebabCaseKeys(obj[key] as T, level + 1)
        : obj[key];
    result[
      level > 1 ? key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : key
    ] = value;
  }
  return result;
}

function toTailwindConfig(theme: Theme): Record<string, Theme[keyof Theme]> {
  const themeCpy: Theme = JSON.parse(JSON.stringify(theme));

  function flatten(obj: Theme, path?: string) {
    objectEntries(obj).forEach(([key, value]) => {
      if (value !== null && typeof value === "object") {
        const formattedPath = path ? `--${path}-${key}` : `--${key}`;
        flatten(
          value as unknown as Theme,
          toKebabCase(formattedPath.replace(/-{3,}/, "--"))
        );
        return;
      }

      /* eslint-disable */
      if (typeof value === "string") {
        const formattedPath =
          /--colors/.test(path || "") && isHex(value)
            ? `rgb(var(${path}-${toKebabCase(key)}) / <alpha-value>)`
            : `var(${path}-${toKebabCase(key)})`;

        /* @ts-ignore */
        obj[key as any] = formattedPath;
        /* eslint-enable */
      }
    });
  }

  flatten(themeCpy);

  return toKebabCaseKeys(themeCpy);
}

function syncWriteFile(filename: string, data: string) {
  writeFileSync(join(dirname(__filename), filename), data, {
    flag: "w",
  });
}

syncWriteFile(
  "./tailwind.theme.conf.cjs",
  `module.exports = ${JSON.stringify(toTailwindConfig(themes.default))} `
);
