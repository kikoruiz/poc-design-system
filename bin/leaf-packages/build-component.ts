/* eslint-disable no-console */
import { exec } from 'child_process'

exec(
  'tsc && swc ./src  -C module.type=commonjs -d dist/cjs --config-file ../../../.swcrc && swc ./src  -C module.type=es6 -d dist/esm --config-file ../../../.swcrc',
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)

      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)

      return
    }
    console.log(`stdout: ${stdout}`)
  }
)
