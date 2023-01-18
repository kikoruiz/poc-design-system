import path from 'path'

import { getComponentConfiguration } from '../../../configuration'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require(path.resolve(__dirname, 'package.json'))

export default getComponentConfiguration(pkg)
