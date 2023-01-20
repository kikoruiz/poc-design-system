export default function merge<T extends Record<string, any>>(...objects: T[]): T {
  return objects.reduce((acc: T, obj: T) => {
    for (const key in obj) {
      if (Array.isArray(acc[key]) && Array.isArray(obj[key])) {
        ;(acc[key] as T[Extract<keyof T, string>][number][]) = [...acc[key], ...obj[key]]
      } else if (typeof acc[key] === 'object' && typeof obj[key] === 'object') {
        acc[key] = merge(acc[key], obj[key])
      } else {
        acc[key] = obj[key]
      }
    }

    return acc
  }, {} as T)
}
