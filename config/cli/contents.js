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

exports.contentTest = ({ resourceName }) => `import { MockController } from '../../types'
import { hello } from '../${resourceName}.controller'

const helloMock = hello as MockController
const statusMock = jest.fn()
const jsonMock = jest.fn()

const getMockResponse = () => ({
  status: statusMock.mockImplementation(() => ({
    json: jsonMock,
  })),
})

test('Hello: Should return status 200 and json response.', () => {
  const data = {
    message: 'Hello from ${resourceName} resource!',
  }
  const responseMock = getMockResponse()

  helloMock(null, responseMock, () => null)

  expect(statusMock).toHaveBeenCalledWith(200)
  expect(jsonMock).toHaveBeenCalledWith(data)
})
`

exports.contentRouteRoot = ({ resourceName, fs }) => {
  const routesDirFiles = fs.readdirSync('./src/routes')
  const resourcesFiles = routesDirFiles.filter(f => f.endsWith('.routes.ts'))
  const resourcesList = resourcesFiles.map(f => f.replace('.routes.ts', ''))

  return `import { AppRoute } from '../types'
  
  ${resourcesList
    .map(resource => `import ${resource}Routes from './${resource}.routes'`)
    .join('\n')}
  import ${resourceName}Routes from './${resourceName}.routes'
  
  export default (): AppRoute[] => [
    ${resourcesList.map(resource => `...${resource}Routes,`).join('\n')}
    ...${resourceName}Routes
  ]
  `
}
