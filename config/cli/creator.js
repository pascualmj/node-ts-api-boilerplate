const fs = require('fs')
const { promisify } = require('util')
const {
  contentController,
  contentRoute,
  contentPath,
  contentTest,
  contentRouteRoot,
} = require('./contents')

const accessPromise = promisify(fs.access)

module.exports = async ({ resourceName }) => {
  const filePathController = `./src/controllers/${resourceName}.controller.ts`
  const filePathRoute = `./src/routes/${resourceName}.routes.ts`
  const filePathRouteRoot = './src/routes/index.ts'
  const filePathTest = `./src/controllers/__tests__/${resourceName}.controller.test.ts`
  const filePathConstants = './src/constants/paths.ts'
  const props = { resourceName }

  try {
    await accessPromise(filePathController)
    return false // File already exists
  } catch (err) {
    fs.writeFileSync(filePathRouteRoot, contentRouteRoot({ ...props, fs }))
    fs.writeFileSync(filePathController, contentController(props))
    fs.writeFileSync(filePathRoute, contentRoute(props))
    fs.writeFileSync(filePathTest, contentTest(props))
    fs.appendFileSync(filePathConstants, contentPath(props))
    return true
  }
}
