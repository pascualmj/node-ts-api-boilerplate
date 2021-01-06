const fs = require('fs')
const { promisify } = require('util')
const { contentController, contentRoute, contentPath } = require('./contents')

const accessPromise = promisify(fs.access)

module.exports = async ({ resourceName }) => {
  const filePathController = `./src/controllers/${resourceName}.controller.ts`
  const filePathRoute = `./src/routes/${resourceName}.routes.ts`
  const filePathConstants = './src/constants/paths.ts'
  const props = { resourceName }

  try {
    await accessPromise(filePathController)
    return false // File already exists
  } catch (err) {
    fs.writeFileSync(filePathController, contentController(props))
    fs.writeFileSync(filePathRoute, contentRoute(props))
    fs.appendFileSync(filePathConstants, contentPath(props))
    return true
  }
}
