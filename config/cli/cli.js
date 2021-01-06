const prompt = require('prompt')
const schema = require('./schema')
const createResource = require('./creator')
const fs = require('fs')

// Prompt configuration
prompt.message = ''
prompt.delimiter = ''
prompt.colors = false

async function exec() {
  prompt.start()
  try {
    const { resourceName } = await prompt.get(schema)
    const result = await createResource({ resourceName })
    if (!result) throw new Error(2)
    console.log('Resource created successfully!')
  } catch (err) {
    switch (err.message) {
      case 2:
        console.log('Resource already exists! Try again with a new identifier.')
        break
      default:
        console.log('Resource creation cancelled!')
    }
  }
}

exec()
