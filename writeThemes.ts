import { appendFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import hexRgb from "hex-rgb";

import { themes, Theme } from "./src/themes/index.js";

const __filename = fileURLToPath(import.meta.url);

function objectKeys<T extends Record<string | number, unknown>>(
  obj: T
): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

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

/* eslint-disable-next-line @typescript-eslint/ban-types */
type FlattenedTheme = Record<"className" | (string & {}), string>;

function flattenTheme(theme: Theme, className: string): FlattenedTheme {
  const flattenedTheme = {} as FlattenedTheme;

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

      if (typeof value === "string") {
        const getFormattedValue = () => {
          if (isHex(value)) {
            const { red, green, blue } = hexRgb(value);
            return `${red} ${green} ${blue}`;
          }
          return value;
        };
        /* eslint-disable-next-line fp/no-mutation */
        flattenedTheme[`${path}-${toKebabCase(key)}`] = getFormattedValue();
      }
    });
  }

  flatten(theme);

  return {
    ...flattenedTheme,
    className,
  };
}

function appendWriteFile(filename: string, data: string) {
  appendFileSync(join(dirname(__filename), filename), data, {
    flag: "w",
  });
}

const stringifiedTheme = (theme: Record<string, string>) =>
  Object.entries(theme)
    .map(([k, v]) => `${k}:${v}`)
    .join(";");

const stringifiedThemes = objectKeys(themes).map((key) => {
  const { className, ...rest } = flattenTheme(themes[key], key);

  return key === "default"
    ? `:root{${stringifiedTheme(rest)}}`
    : `.${className}{${stringifiedTheme(rest)}}`;
});

appendWriteFile(
  "./src/tailwind.css",
  `
  /* purgecss start ignore */
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  /* purgecss end ignore */
  @import 'tailwindcss/utilities';
  @layer base {${stringifiedThemes.join("")}}
`
);
