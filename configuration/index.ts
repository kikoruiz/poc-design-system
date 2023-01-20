import merge from './merge'
import componentConfiguration from './vite.component'

interface Pkg {
  name: string
  version: string
}
/**
 * Returns Vite build configuration for components packages,
 * optionally amended with the specified options
 * @param options Custom build options
 * @returns Vite build configuration
 */
export function getComponentConfiguration(pkg: Pkg, options = {}) {
  console.log(`Building component package ${pkg.name} v.${pkg.version} ...`)

  return getConfiguration(componentConfiguration, options, pkg.name)
}

/**
 * Returns Vite build configuration amended with the specified options
 * @param configuration Default build options
 * @param options Custom build options
 * @param name Optional name of a library, used when building a library instead of browser-executable package
 * @returns Vite build configuration
 */
function getConfiguration(configuration: Record<string, unknown>, options = {}, name?: string) {
  const result = merge(
    // Default configuration
    configuration,
    // If name specified, we're building a library, so pass that to build/lib configuration
    name ? { build: { lib: { name } } } : {},
    // Custom options to override the default configuration
    options
  )

  // Handy when you need to peek into that final build configuration
  // when things go berserk ;-)
  // console.warn(JSON.stringify(result, null, 2))

  return result
}
