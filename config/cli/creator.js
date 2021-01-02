const fs = require('fs')
const { contentController, contentRoute, contentPath } = require('./contents')

module.exports = ({ resourceName }) => {
  const filePathController = `./src/controllers/${resourceName}.controller.ts`
  const filePathRoute = `./src/routes/${resourceName}.routes.ts`
  const filePathConstants = './src/constants/paths.ts'
  const props = { resourceName }

  fs.writeFileSync(filePathController, contentController(props))
  fs.writeFileSync(filePathRoute, contentRoute(props))
  fs.appendFileSync(filePathConstants, contentPath(props))
}
