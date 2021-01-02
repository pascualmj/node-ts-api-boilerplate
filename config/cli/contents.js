exports.contentController = ({ resourceName }) => `import { AppController } from '../types'

export const hello: AppController = (req, res) => {
  res.status(200).json({
    message: 'Hello from ${resourceName} resource!',
  })
}
`

exports.contentRoute = ({ resourceName }) => `import { AppRoute } from '../types'
import { PATHS_${resourceName.toUpperCase()} } from '../constants'

import * as ${resourceName}Controller from '../controllers/${resourceName}.controller'

const ${resourceName}Routes: AppRoute[] = [
  {
    path: PATHS_${resourceName.toUpperCase()}.hello,
    handlers: [${resourceName}Controller.hello],
    method: 'get',
  },
]

export default ${resourceName}Routes
`

exports.contentPath = ({ resourceName }) => `
export const PATHS_${resourceName.toUpperCase()} = {
  hello: '/${resourceName}',
}
`
